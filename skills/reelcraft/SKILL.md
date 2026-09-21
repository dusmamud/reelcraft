---
name: reelcraft
description: Turn any codebase, product, or blog post into a high-retention 9:16 vertical viral reel using Hyperframes. Automatically analyzes project theme (light/dark), brand colorgrading, and logo assets, or synthesizes a visual identity autonomously if no project is provided. Trigger with "/reelcraft", "make a reel for this", "create a short video", or "generate a viral tiktok".
---

# /reelcraft

You built the code. Now make it go viral.

`reelcraft` is an intelligent AI Agent Skill & engine that turns any codebase, product, blog post, or standalone tech topic into a high-retention **9:16 vertical viral video** (Instagram Reels, TikTok, YouTube Shorts) — complete with kinetic motion graphics, studio narration, beat-synced soundtrack, and viral social captions.

---

## ⚡ Core Capabilities

1. **Intelligent Project Theme & Colorgrading Analysis:**
   - Detects whether the app is **Light Mode**, **Dark Mode**, or dual-theme.
   - Extracts `:root` CSS custom properties, brand colors, surfaces, borders, and ambient specular glows.
   - Discovers official vector brand marks (`.svg`), PNG logos, UI screenshots, and album artwork.
   - Audits actual UI copy and claims — zero generic marketing jargon.
2. **Optional Project Mode (Autonomous Topic Synthesis):**
   - If invoked without an existing project (e.g. `/reelcraft "Physical AI 2026 Breakthrough"`), Reelcraft autonomously generates an aesthetic theme, design tokens, typography, and visual assets from scratch.
3. **The 4-Beat Algorithmic Retention Curve:**
   - Designed specifically to defeat the 3-second social media swipe penalty:
     - `0.0s – 3.5s`: Pattern Interrupt Hook (instant scroll-stopper)
     - `3.5s – 8.0s`: Problem Agitation (legacy pain point vs new paradigm)
     - `8.0s – 18.0s`: The Tech Breakthrough & Proof (live waveforms, terminal typing, metric slams)
     - `18.0s – 25.0s`: Viral Outro & Follow/Comment CTA
4. **Studio Voiceover & Bilingual Support:**
   - **English (Default):** Local **Kokoro-82M** (`am_adam`) tech-anchor narration with natural prosody.
   - **Hindi / Hinglish:** Native **Edge-TTS** (`hi-IN-MadhurNeural`) for authentic Indian developer community reach.
5. **Mobile UI Safe Zones:**
   - Enforces 9:16 safe-margins (top 140px, right 160px, bottom 280px) so platform UI icons never block typography.

---

## 🎯 Invocation Dispatch

Parse the command before inspecting the project:

```text
/reelcraft
/reelcraft --voice
/reelcraft --tone cyberpunk --voice
/reelcraft --voice --lang hindi
/reelcraft "Physical AI and Humanoid Robotics in 2026"
/reelcraft --tone paper-and-ink --format vertical --duration 30
```

### Supported Flags:

| Option | Values | Default | Description |
|---|---|---|---|
| `--tone` | `luminous`, `paper-and-ink`, `cyberpunk`, `terminal-hacker`, `apple-minimal`, `unhinged` | Inferred from project theme (`luminous` or `paper-and-ink`) | Visual aesthetic & motion tone |
| `--format` | `vertical` (9:16, 1080×1920), `landscape` (16:9, 1920×1080) | `vertical` | Aspect ratio |
| `--duration` | Seconds (15s – 30s) | 20s – 25s | Target duration |
| `--voice` | Flag | On if narration requested | Enable AI studio narration |
| `--lang` | `en` (English), `hi` (Hindi / Hinglish) | `en` | Voiceover language |
| `--no-music`| Flag | Music on | Disable background music |
| `--no-sfx`  | Flag | SFX on | Disable UI sound effects |

---

## 📁 Output Directory Contract

Every run generates a self-contained, clean output package:

```text
reel-output/
├── reel.mp4              # 1080x1920 30/60fps finished MP4 video
├── poster.jpg            # Frame 0 / Frame 1s high-contrast thumbnail
├── captions.txt          # Ready-to-publish social copy + 15 targeted hashtags
├── reel-plan.md          # 4-beat storyboard, scene timings & script
└── composition/          # Standalone HyperFrames HTML/CSS/JS source
    ├── index.html        # Animated composition
    └── assets/           # Self-contained fonts, images, logos, audio & SFX
```

*Note: If `reel-output/` already exists, use timestamped naming: `reel-output-YYYY-MM-DD-HHmmss/`.*

---

## 🎬 4-Step Production Pipeline

### Step 1: Inspect Project Theme & Brand Assets (Or Synthesize Topic)
**Read:** [references/step-1-inspect.md](references/step-1-inspect.md)
- Scan workspace for `index.html`, `styles.css`, `tokens.css`, `README.md`, `package.json`.
- **Detect Theme:** Analyze whether app is Light Mode or Dark Mode.
- **Extract Colors:** Get primary accent, surface, border, and glow colors.
- **Discover Assets:** Find SVG marks, logos, and UI images in `public/` or `assets/`.
- *If no project exists:* Autonomously pick an optimal design system from [references/tones.md](references/tones.md).

### Step 2: 4-Beat Retention Storyboard & Script
**Read:** [references/step-2-script.md](references/step-2-script.md) & [references/hooks.md](references/hooks.md)
- Write the scroll-stopping hook (0.0s – 3.5s).
- Script the problem agitation and working technical proof.
- If voice is enabled, synthesize audio using `scripts/generate_voiceover.py`.
- Select BGM and analyze downbeat cues using `scripts/analyze_music_cues.py`.
- Write complete plan to `<output-dir>/reel-plan.md`.

### Step 3: HyperFrames 9:16 Kinetic Composition
**Read:** [references/step-3-compose.md](references/step-3-compose.md) & [references/audio.md](references/audio.md)
- Build `<output-dir>/composition/index.html` at 1080×1920.
- Apply mobile platform safe-zones (`--safe-top: 140px; --safe-bottom: 280px; --safe-right: 160px;`).
- Style frosted glass panels, ambient glow orbs, and kinetic typography spring curves.
- Wire audio tags (`data-track="bgm"`, `data-track="voiceover"`, `data-track="sfx"`) with exact millisecond timestamps.
- **Gate:** Validate before render using Step 3.5.

### Step 3.5: Validation, Linting & Pre-Flight Diagnostics
**Read:** [references/validation.md](references/validation.md)
- Run static HTML lint: `npx reelcraft lint <output-dir>/composition` (or `npx hyperframes lint <output-dir>/composition`).
- Run runtime check: `npx reelcraft check <output-dir>/composition` (or `npx hyperframes check <output-dir>/composition`).
- Audit safe-zones and pacing: `python scripts/validate_reel.py <output-dir>/composition/index.html`.
- Auto-diagnose and resolve any errors (`media_missing_id`, `missing_timeline_registry`, duration warnings) before proceeding to Step 4.

### Step 4: Render, Poster & Social Distribution
**Read:** [references/step-4-deliver.md](references/step-4-deliver.md)
- Render the 1080p MP4:
  `npx hyperframes render --quality standard --resolution 1080p --fps 30 --format mp4 --output <output-dir>/reel.mp4 <output-dir>/composition`
- Extract poster frame thumbnail:
  `ffmpeg -y -ss 00:00:01 -i <output-dir>/reel.mp4 -vframes 1 -q:v 2 -update 1 <output-dir>/poster.jpg`
- Write high-converting Instagram Reel / TikTok caption and 15 developer hashtags to `<output-dir>/captions.txt`.

---

## 🏆 Creative Quality Benchmarks

1. **Immediate Visual Impact:** Frame 0 must look like a high-budget tech film, not a plain screenshot.
2. **Safe Zone Protection:** Never let text drift into the bottom 280px (Instagram caption area) or right 160px (action buttons).
3. **Rhythmic Sound Design:** Pair every card entrance, mode switch, and metric pop with an authentic UI click or impact bell.
4. **Authenticity First:** Highlight real code, genuine metrics, and working UI elements.

---

**Built & Maintained by Dus Mamud ([@dusmamud](https://github.com/dusmamud))** • [GitHub Repository](https://github.com/dusmamud/reelcraft)

