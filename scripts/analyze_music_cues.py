#!/usr/bin/env python3
"""Reelcraft Music Cue & Beat Grid Analyzer.

Extracts tempo (BPM), beat grids, downbeats, and energy drops from audio files.
Uses soundfile and scipy.signal (0 numba dependency, compatible with all NumPy versions).
Outputs frame-accurate JSON cues so Hyperframes scene cuts snap to the music beat.
"""

from __future__ import annotations

import argparse
import json
import math
import subprocess
import sys
from pathlib import Path
from typing import Any

import numpy as np
import scipy.signal
import soundfile as sf


def finite_round(val: float, digits: int = 4) -> float:
    if not math.isfinite(val):
        return 0.0
    return round(float(val), digits)


def analyze_with_scipy(audio_path: Path, max_duration: float = 60.0) -> dict[str, Any]:
    """Analyze music track using soundfile and scipy."""
    data, sr = sf.read(str(audio_path.resolve()))
    if data.ndim > 1:
        data = np.mean(data, axis=1)  # Convert to mono

    max_samples = int(max_duration * sr)
    if len(data) > max_samples:
        data = data[:max_samples]

    total_duration = len(data) / sr

    # Envelope detection using Hilbert transform or rectified low-pass filter
    rectified = np.abs(data)
    # Low-pass filter at 10Hz to get beat envelope
    b, a = scipy.signal.butter(2, 10.0 / (sr / 2.0), btype='low')
    envelope = scipy.signal.filtfilt(b, a, rectified)

    # Downsample envelope to ~200Hz for fast beat autocorrelation
    hop = int(sr / 200)
    env_sub = envelope[::hop]
    sub_sr = sr / hop

    # Autocorrelation to find BPM (between 70 and 160 BPM)
    corr = np.correlate(env_sub - np.mean(env_sub), env_sub - np.mean(env_sub), mode='full')
    corr = corr[len(corr) // 2:]

    min_lag = int(sub_sr * 60.0 / 160.0)
    max_lag = int(sub_sr * 60.0 / 70.0)

    if max_lag < len(corr):
        lag_window = corr[min_lag:max_lag]
        best_lag = min_lag + np.argmax(lag_window)
        bpm = 60.0 * sub_sr / best_lag
    else:
        bpm = 120.0

    beat_interval = 60.0 / bpm if bpm > 0 else 0.5

    # Find prominent peaks in envelope as strong onsets
    peaks, _ = scipy.signal.find_peaks(env_sub, distance=int(min_lag * 0.75), prominence=np.std(env_sub) * 0.5)
    peak_times = [finite_round(p / sub_sr) for p in peaks]

    # Calculate aligned downbeats (every 4 beats)
    downbeats = [finite_round(i * (beat_interval * 4)) for i in range(int(total_duration / (beat_interval * 4)) + 1)]

    # Suggested 4-beat scene transition times for 18-24s viral reel
    target_times = [0.0, 3.5, 9.0, 16.5, min(22.0, total_duration)]
    suggested_cuts = []
    for target in target_times:
        if not downbeats:
            suggested_cuts.append(target)
            continue
        closest = min(downbeats, key=lambda d: abs(d - target))
        if abs(closest - target) <= 0.8:
            suggested_cuts.append(closest)
        else:
            suggested_cuts.append(target)

    return {
        "file": audio_path.name,
        "duration_sec": finite_round(total_duration, 2),
        "bpm": round(bpm, 1),
        "time_signature": "4/4",
        "beat_interval_sec": finite_round(beat_interval),
        "downbeats_sec": downbeats,
        "strong_onsets_sec": peak_times[:20],
        "suggested_scene_cuts": suggested_cuts
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Reelcraft Music Cue & Beat Grid Analyzer")
    parser.add_argument("audio", type=Path, help="Audio file to analyze (.mp3, .wav)")
    parser.add_argument("--output", type=Path, default=None, help="Output JSON cue file path")

    args = parser.parse_args()

    if not args.audio.exists():
        print(f"Error: Audio file not found: {args.audio}", file=sys.stderr)
        sys.exit(1)

    print(f"\x1b[36m🎵 Analyzing music track:\x1b[0m {args.audio.name}")
    cues = analyze_with_scipy(args.audio)
    out_path = args.output or args.audio.with_suffix(".music-cues.json")
    out_path.parent.mkdir(parents=True, exist_ok=True)

    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(cues, f, indent=2)

    print(f"\x1b[32m✔ Cue analysis complete!\x1b[0m")
    print(f"  BPM:            \x1b[1m{cues['bpm']}\x1b[0m")
    print(f"  Duration:       \x1b[1m{cues['duration_sec']}s\x1b[0m")
    print(f"  Suggested Cuts: \x1b[1m{cues['suggested_scene_cuts']}\x1b[0m")
    print(f"  Saved to:       \x1b[1m{out_path}\x1b[0m")


if __name__ == "__main__":
    main()
