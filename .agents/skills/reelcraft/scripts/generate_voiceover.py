#!/usr/bin/env python3
"""Reelcraft Voiceover Engine.

Default TTS: Kokoro-82M (am_adam / am_michael) via Hyperframes native engine.
Hindi TTS: Edge-TTS (hi-IN-MadhurNeural) automatically when Hindi/Devanagari is used.
Extracts word-level timestamps for kinetic caption sync.
"""

from __future__ import annotations

import argparse
import asyncio
import json
import re
import subprocess
import sys
from pathlib import Path
from typing import Any

# Kokoro voice presets (Default for English)
KOKORO_VOICES = {
    "male": "am_adam",         # Deep, confident, tech-anchor
    "male_alt": "am_michael",  # Energetic, modern
    "female": "af_heart",      # Natural, crisp
}

# Edge-TTS voice presets (Strictly for Hindi/Hinglish)
EDGE_HINDI_VOICES = {
    "male": "hi-IN-MadhurNeural",   # Energetic Indian tech voice
    "female": "hi-IN-SwaraNeural",   # Professional Hindi voice
}


def detect_language(text: str) -> str:
    """Detect if text contains Devanagari (Hindi) characters."""
    if re.search(r'[\u0900-\u097F]', text):
        return "hi"
    return "en"


def generate_kokoro_voiceover(
    text: str,
    voice: str,
    output_audio: Path,
    speed: float = 1.05
) -> dict[str, Any]:
    """Generate English speech using Kokoro-82M via Hyperframes."""
    output_audio.parent.mkdir(parents=True, exist_ok=True)
    temp_txt = output_audio.with_suffix(".temp.txt")
    temp_txt.write_text(text, encoding="utf-8")

    cmd = [
        "npx", "hyperframes", "tts",
        f"--voice={voice}",
        f"--speed={speed}",
        f"--output={str(output_audio.resolve())}",
        str(temp_txt.resolve())
    ]

    print(f"  Engine:   \x1b[32mKokoro-82M (Default)\x1b[0m")
    print(f"  Voice:    \x1b[1m{voice}\x1b[0m")
    print(f"  Output:   \x1b[1m{output_audio}\x1b[0m")

    result = subprocess.run(cmd, capture_output=True, text=True, shell=True)
    if temp_txt.exists():
        temp_txt.unlink()

    if result.returncode != 0:
        print(f"\x1b[31mKokoro TTS error: {result.stderr}\x1b[0m", file=sys.stderr)
        sys.exit(1)

    words = text.split()
    return {
        "engine": "kokoro-82m",
        "voice": voice,
        "language": "en",
        "total_words": len(words),
        "text": text
    }


async def generate_edge_hindi_voiceover(
    text: str,
    voice: str,
    output_audio: Path,
    output_cues: Path | None = None,
    rate: str = "+6%"
) -> dict[str, Any]:
    """Generate Hindi speech using Edge-TTS (native Indic phonetics)."""
    try:
        import edge_tts
    except ImportError:
        print("\x1b[31mError: edge-tts is required for Hindi narration. Run: pip install edge-tts\x1b[0m", file=sys.stderr)
        sys.exit(1)

    output_audio.parent.mkdir(parents=True, exist_ok=True)
    communicate = edge_tts.Communicate(text=text, voice=voice, rate=rate)

    word_cues = []
    audio_data = bytearray()

    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            audio_data.extend(chunk["data"])
        elif chunk["type"] == "WordBoundary":
            offset_ms = chunk["offset"] / 10000.0
            duration_ms = chunk["duration"] / 10000.0
            word_cues.append({
                "word": chunk["text"],
                "start": round(offset_ms / 1000.0, 3),
                "end": round((offset_ms + duration_ms) / 1000.0, 3)
            })

    with open(output_audio, "wb") as f:
        f.write(audio_data)

    total_duration = word_cues[-1]["end"] if word_cues else 0.0

    metadata = {
        "engine": "edge-tts",
        "voice": voice,
        "language": "hi",
        "total_words": len(word_cues),
        "total_duration_sec": total_duration,
        "words": word_cues
    }

    if output_cues:
        with open(output_cues, "w", encoding="utf-8") as f:
            json.dump(metadata, f, indent=2, ensure_ascii=False)

    return metadata


def main() -> None:
    parser = argparse.ArgumentParser(description="Reelcraft Voiceover Generator (Kokoro by default, Edge-TTS for Hindi)")
    parser.add_argument("--text", type=str, help="Script text to synthesize")
    parser.add_argument("--file", type=Path, help="File containing script text")
    parser.add_argument("--lang", choices=["en", "hi"], default=None, help="Language (en or hi)")
    parser.add_argument("--gender", choices=["male", "female"], default="male", help="Voice gender")
    parser.add_argument("--voice", type=str, default=None, help="Exact voice name override")
    parser.add_argument("--speed", type=float, default=1.05, help="Speed multiplier for Kokoro")
    parser.add_argument("--output", type=Path, default=Path("voiceover.wav"), help="Output audio file")
    parser.add_argument("--cues", type=Path, default=None, help="Output word cues JSON file")

    args = parser.parse_args()

    script_text = ""
    if args.file and args.file.exists():
        script_text = args.file.read_text(encoding="utf-8").strip()
    elif args.text:
        script_text = args.text.strip()
    else:
        script_text = "Chatbots are dead. In 2026, autonomous AI agents build, verify, and ship without waiting for prompts. Follow for daily breakdowns."

    lang = args.lang or detect_language(script_text)

    print(f"\x1b[36m🎤 Reelcraft Voiceover Engine\x1b[0m")

    if lang == "hi":
        voice = args.voice or EDGE_HINDI_VOICES.get(args.gender, "hi-IN-MadhurNeural")
        print(f"  Engine:   \x1b[33mEdge-TTS (Hindi Native)\x1b[0m")
        print(f"  Voice:    \x1b[1m{voice}\x1b[0m")
        print(f"  Output:   \x1b[1m{args.output}\x1b[0m")
        cues_file = args.cues or args.output.with_suffix(".cues.json")
        meta = asyncio.run(generate_edge_hindi_voiceover(
            text=script_text,
            voice=voice,
            output_audio=args.output,
            output_cues=cues_file
        ))
        print(f"\x1b[32m✔ Hindi voiceover generated!\x1b[0m")
    else:
        voice = args.voice or KOKORO_VOICES.get(args.gender, "am_adam")
        meta = generate_kokoro_voiceover(
            text=script_text,
            voice=voice,
            output_audio=args.output,
            speed=args.speed
        )
        print(f"\x1b[32m✔ Kokoro voiceover generated!\x1b[0m")


if __name__ == "__main__":
    main()
