# Reelcraft Architecture & Technical Specification

Reelcraft is an open-source, automated **9:16 vertical video production engine** designed specifically for developer tools, AI agents, CLI applications, and software launches.

It combines an algorithmic **4-beat viral retention storyboard**, **Hyperframes 60fps DOM rendering**, **local voiceover synthesis**, and **sub-frame audio beat-matching**.

---

## 1. System Overview & Runtime Topology

```
┌────────────────────────────────────────────────────────────────────────┐
│                        USER INVOCATION LAYER                          │
│                                                                        │
│   AI Agent Skill (/reelcraft)          Standalone CLI (npx reelcraft)   │
│   - Antigravity                        - npm install -g reelcraft      │
│   - Claude Code / OpenCode             - node bin/reelcraft.js         │
│   - Cursor / Codex                     - headless CI/CD automation     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 PHASE 1: REPOSITORY INSPECTION ENGINE                  │
│                                                                        │
│   - Brand Theme Detector (Dark-first vs Light-first)                   │
│   - Palette Extractor (Hex codes from CSS, Tailwind, SVGs)             │
│   - Asset Locator (Vector logos, demo screenshots, audio files)        │
│   - Autonomous Topic Synthesizer (for zero-codebase topic prompts)     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                PHASE 2: SCRIPT & AUDIO SYNTHESIS                      │
│                                                                        │
│   - 4-Beat Storyboard Generator (0-3.5s, 3.5-8s, 8-18s, 18-25s)        │
│   - Kokoro-82M TTS Engine (English default, local ONNX/PyTorch)        │
│   - Edge-TTS Engine (Hindi/Hinglish MadhurNeural)                      │
│   - Audio Transient & Beat Downbeat Detector (Scipy spectral flux)     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│             PHASE 3: COMPOSITION & HYPERFRAMES PIPELINE                │
│                                                                        │
│   - 1080x1920 60fps DOM Canvas Template                                │
│   - Sub-frame Beat Alignment (Cards snap precisely to downbeats)       │
│   - UI Sound Design Integration (Keystrokes, pops, whooshes)           │
│   - Mathematical Safe-Zone Protection (Top 140px, Bot 280px, R 160px)  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│             PHASE 4: PRE-FLIGHT AUDIT & EXPORT ENGINE                  │
│                                                                        │
│   - StaticGuard AST Audit (Validates durations, contrast, syntax)      │
│   - Headless Chromium Frame Capture (Puppeteer 60fps pipeline)         │
│   - FFmpeg AAC/H.264 Audio-Video Multiplexing                          │
│   - Deliverable Packager (reel.mp4, poster.jpg, captions.txt)          │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. The 4-Beat Viral Retention Pipeline

Social media recommendation engines (TikTok, Instagram Reels, YouTube Shorts) evaluate audience retention in milliseconds. Reelcraft enforces an algorithmic structure:

### Beat 1: The Pattern Interrupt (0.0s – 3.5s)
* **Objective:** Stop swipe behavior within 400ms.
* **Audio:** Heavy impact bass drop + instant voiceover hook.
* **Visual:** Massive typographic headline (80px+ bold font) with high-contrast accent.
* **Safe-Zone:** Strictly centered in the safe viewing viewport.

### Beat 2: Problem Agitation (3.5s – 8.0s)
* **Objective:** Agitate developer frustration and establish necessity.
* **Audio:** Riser sweep or tension sound effect.
* **Visual:** Strikethrough of legacy commands or slow manual configurations. Red error banners transitioning to solution teaser.

### Beat 3: Live Code & Proof Window (8.0s – 18.0s)
* **Objective:** Deliver the visual dopamine of working software.
* **Audio:** Synchronized mechanical keyboard typing clicks (`keypress-001` through `032`) matching displayed characters.
* **Visual:** High-contrast terminal window, syntax highlighting, metric badges (e.g. `10x Faster`, `0 Config`).

### Beat 4: Branded Outro & Viral CTA (18.0s – 25.0s)
* **Objective:** Drive comments, stars, and seamless looping.
* **Audio:** Final chord resolution with subtle music fade.
* **Visual:** Circular brand logo, GitHub star badge, and clear invitation prompt. Last frame visually matches Beat 1 for seamless infinite looping.

---

## 3. Audio Engineering & Ducking Subsystem

```
Narration Track ───────────┐
(Kokoro / Edge-TTS)        ▼
                   [RMS Level Detector]
                           │
                           ▼
Music Soundtrack ───► [Dynamic Ducking] ───► [Master Summing] ───► FFmpeg AAC
(-14dB under voice)
                           ▲
SFX Track ─────────────────┘
(Keystrokes, impacts, whooshes)
```

1. **Voiceover Synthesis:**
   * **English:** Local Kokoro-82M model (`am_adam` voice), producing natural conversational cadence without cloud API keys.
   * **Hindi / Hinglish:** Microsoft Edge-TTS (`hi-IN-MadhurNeural`) with accurate phonetic inflections for Indian developer audiences.
2. **Spectral Flux Beat Detection:**
   * `scripts/analyze_music_cues.py` uses Scipy to calculate onset envelopes, extracting exact millisecond timestamps for downbeats and bass drops.
   * Cues are saved as JSON and consumed by the Hyperframes composition to trigger animations on downbeats.
3. **Dynamic Ducking:**
   * When speech is detected, background music is automatically ducked by `-14dB` to preserve speech intelligibility.
   * During non-speech beats, music swells back to full volume.

---

## 4. Mobile Safe-Zone Architecture

Social platforms overlay buttons, handles, sound tickers, and captions that obstruct up to 40% of the screen. Reelcraft guarantees mathematically protected regions:

| Region | Margin | Platform UI Avoided |
|---|---|---|
| **Top Safe-Zone** | `140px` | Account handle, notch, story progress bar |
| **Bottom Safe-Zone**| `280px` | Post description, music title marquee, comment box |
| **Right Safe-Zone** | `160px` | Like button, comment bubble, share arrow, remix icon |
| **Left Safe-Zone**  | `48px`  | Edge margin padding |

All primary text, code windows, and metric counters are anchored strictly inside the **Inner Safe Core** (`w: 872px`, `h: 1500px` within 1080×1920).

---

## 5. Pre-Flight Linting & Quality Assurance

Before rendering expensive MP4 video files, Reelcraft runs **3-Tier Pre-Flight Checks**:

1. **StaticGuard AST Linting:**
   * Verifies that total frame count matches target duration (`60fps * duration`).
   * Validates that all referenced media files (music, sfx, images) exist on disk.
   * Audits CSS color contrast against WCAG AA requirements (`>= 4.5:1`).
2. **Headless Chromium Evaluation:**
   * Launches headless browser, monitors console errors, and tracks frame rendering latency.
   * Confirms speech rate does not exceed `145 Words Per Minute` (WPM).
3. **Audio-Video Sync Audit:**
   * Ensures voiceover track ends at least `0.5s` before the video ends to prevent harsh audio truncation.
