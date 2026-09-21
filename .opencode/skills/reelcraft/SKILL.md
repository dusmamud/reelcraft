---
name: reelcraft
description: Turn any codebase, product, or blog post into a high-retention 9:16 vertical viral reel using Hyperframes. Trigger with "/reel", "/reelcraft", "make a reel for this", "create a short video", or "generate a viral tiktok".
---

# /reelcraft (or /reel)

Turn your code, product, or blog into a high-retention 9:16 vertical viral video for Instagram Reels, YouTube Shorts, and TikTok — motion, sound design, and viral captions included.

---

## Invocation Dispatch

Parse the command before inspecting the project:

```text
/reel
/reel --tone cyberpunk
/reel --voice --lang hindi
/reel "make this look like an unhinged Silicon Valley leak"
```

### Supported Flags:

| Option | Values | Default |
|---|---|---|
| `--tone` | `luminous`, `cyberpunk`, `kinetic`, `apple-minimal`, `unhinged` | `luminous` |
| `--format` | `vertical` (9:16, 1080x1920) | `vertical` |
| `--duration` | seconds (15–30s) | 20-25s |
| `--voice` | flag (TTS narration on) | off |
| `--lang` | `en`, `hi` (Hindi/Hinglish) | `en` |
| `--no-sfx` | flag (UI sound effects off) | sfx on |

### Narration Engine Rule:
- **English (`en` - Default):** Uses local **Kokoro-82M** (`am_adam` / `am_michael`) via Hyperframes native engine.
- **Hindi / Hinglish (`hi`):** Uses **Edge-TTS** (`hi-IN-MadhurNeural`) for authentic Indian accent & phonetics.

---

## Bundled Automation Scripts (`scripts/`)

- `python scripts/generate_voiceover.py --text "..." --lang en|hi` — Synthesizes narration (Kokoro by default, Edge-TTS for Hindi) & outputs word cues JSON.
- `python scripts/analyze_music_cues.py <track.mp3>` — Computes BPM, downbeat grid, and suggested scene cut timings.
- `python scripts/validate_reel.py <composition/index.html>` — Audits 9:16 safe-zones, scene durations, and words-per-minute.

---

## 4-Step Viral Pipeline

### Step 1: Inspect The Codebase & Find The Hook
**Read:** [references/step-1-inspect.md](references/step-1-inspect.md)
Scan the repository, read `README.md`, package configs, and core features. Find the single most impressive capability or problem solved.
**Gate:** Formulate the 0-3 second pattern-interrupt hook before touching any code.

### Step 2: 4-Beat Retention Storyboard
**Read:** [references/step-2-script.md](references/step-2-script.md) & [references/hooks.md](references/hooks.md)
Plan the 4 beats that prevent scrolling:
1. **The Hook (0–3s):** Stop the scroll with a polarizing statement, contrast, or question.
2. **The Pain / Problem (3–7s):** Show why the old way of doing things is broken.
3. **The Solution / Tech Proof (7–17s):** Fast kinetic cards, real UI components, metrics, or code.
4. **The Viral Outro & CTA (17–22s):** Strong branded call-to-action (Follow / GitHub Star / Comment prompt).

Write the complete storyboard to `<output-dir>/reel-plan.md`.

### Step 3: Compose in Hyperframes (9:16 Safe-Zone Engine)
**Read:** [references/step-3-compose.md](references/step-3-compose.md) & [references/tones.md](references/tones.md)
Build the 1080x1920 vertical composition inside `<output-dir>/composition/index.html`.
- Respect social media UI safe zones (keep bottom 280px and right 140px clear of critical text).
- Use kinetic typography with fast-in, hold, and smooth exit easing.
- Sync sound effects (whoosh on scene transitions, pops on badges, bass impacts on hook).
**Gate:** `npx hyperframes check` passes with 0 errors inside `<output-dir>/composition/`.

### Step 4: Render, Poster & Distribution Copy
**Read:** [references/step-4-deliver.md](references/step-4-deliver.md)
1. Render to `<output-dir>/reel.mp4` at 60fps H.264.
2. Extract the highest-contrast frame as `<output-dir>/poster.jpg` for the video thumbnail.
3. Write `<output-dir>/caption.txt` containing high-converting Instagram Reel / TikTok copy and 15 targeted developer hashtags.

---

## Output Directory

By default, output is generated in:
```text
reel-output/
├── composition/          # Hyperframes HTML/CSS/JS source
│   └── index.html
├── reel-plan.md          # 4-beat storyboard & hook breakdown
├── reel.mp4              # 1080x1920 60fps finished video
├── poster.jpg            # Frame 0 thumbnail image
└── caption.txt           # Postable social copy + hashtags
```
If `reel-output/` already exists, append a timestamp: `reel-output-YYYY-MM-DD-HHmmss/`.

---

## Creative Golden Rules

1. **The 3-Second Rule:** If the hook doesn't land by second 2.5, the video is dead. Never start with "Hello guys" or a slow logo intro.
2. **Safe Zones Matter:** Vertical video platforms overlay captions, hearts, and sound tickers. Keep all text inside the 800x1500 center safe canvas.
3. **Show, Don't Preach:** Show real code, real benchmark numbers, real animations. No abstract corporate fluff.
4. **Pacing:** Keep text readable (min 0.8s on screen), but keep visual motion fast and continuous.
