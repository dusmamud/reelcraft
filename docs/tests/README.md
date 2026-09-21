# Reelcraft Test & Benchmark Suite

This directory contains 5 distinct, production-grade video test projects covering diverse aspect ratios, content genres, pacing styles, audio pipelines, and visual themes.

Every test project is **100% self-contained** and includes:
1. **The rendered MP4 video** (`video.mp4`) — fully rendered, synchronized audio, 60fps/30fps 1080p.
2. **High-contrast poster thumbnail** (`poster.jpg`) — frame-accurate cover image.
3. **Full source composition** (`composition/index.html`) — complete HTML5/CSS/JS HyperFrames animation.
4. **All asset dependencies** (`composition/assets/` or `composition/sfx/`) — audio, music, images, SVG logos.
5. **Planning & scene breakdown** (`README.md`, `SCENE_PLAN.md`, etc.).
6. **Social distribution copy** (`captions.txt`) — ready-to-publish hooks, descriptions, and hashtags.

---

## 📊 Test Suite Matrix

| # | Folder Name | Aspect Ratio | Resolution | Duration | Genre & Content Type | Sound & Voice Pipeline | Visual Theme & Style | Source Project |
|---|---|---|---|---|---|---|---|---|
| **01** | `01-vertical-tech-explainer` | 9:16 Vertical | 1080×1920 | 30.0s | **Tech News / Viral AI Breakdown** | Kokoro-82M AI Voiceover + Tech Groove BGM + Multi-layer SFX | Luminous Light Slate, Frosted Glass HUD pills, Cyber-Grid, Humanoid Robot visual | `StepGaana/dusynblog-reel` |
| **02** | `02-vertical-saas-studio-launch` | 9:16 Vertical | 1080×1920 | 30.0s | **SaaS 7-Scene Narrative Walkthrough** | Studio Track (*Call It Even*) + Tactile needle drop + UI SFX | Paper & Ink & Bronze Note, Vinyl Record Turntable, Live Waveforms, Stem Mixer | `StepGaana/video` |
| **03** | `03-vertical-kinetic-saas-teaser` | 9:16 Vertical | 1080×1920 | 20.0s | **Fast-Paced Kinetic Product Teaser** | Uptempo Electronic Groove + Synchronized UI SFX suite | Dark Vinyl Studio, Rapid Card Swaps, Stat Slams, Floating Glass Player | `StepGaana/reelcraft-output` |
| **04** | `04-landscape-saas-widescreen` | 16:9 Landscape | 1920×1080 | 20.0s | **Widescreen Desktop / YouTube Showcase** | Flagship Track (*Call It Even*) + Mechanical typing + Impact Bell | Gallery Widescreen, Dual-Column Feature Layout, Full Turntable & Waveform view | `StepGaana/renders/stepgaana-launch.mp4` |
| **05** | `05-vertical-autonomous-cli-agent` | 9:16 Vertical | 1080×1920 | 12.0s | **Developer Tools Terminal Demo** | Kokoro-82M AI Narration + Lo-Fi Coding Beat + Mechanical Keystrokes | Sleek Dark IDE Terminal, Animated CLI Prompt (`npx reelcraft`), Glowing Badges | `reelcraft/examples` |

---

## 🗂️ Detailed Directory Breakdown

### 1. `01-vertical-tech-explainer`
- **Topic:** *Physical AI & Humanoid Robotics: The Death of Simple Chatbots (2026)*
- **Primary Video:** `video.mp4` (10.7 MB, 1080×1920, 30fps)
- **Source Composition:** `composition/index.html` (29.7 KB)
- **Audio:** `composition/assets/voiceover.wav` (Kokoro-82M TTS) + `composition/assets/music/tech-groove-30s.mp3` + SFX suite (`impact-bell.ogg`, `whoosh.ogg`, `click.ogg`, `key1.wav`, `key2.wav`).
- **Visual Assets:** `composition/assets/images/humanoid-tech.jpg`, `composition/assets/logos/dusynblog-logo.svg`.
- **Docs:** `README.md`, `captions.txt`.

### 2. `02-vertical-saas-studio-launch`
- **Topic:** *StepGaana AI Music Studio: From Natural Language Prompt to Mastered Stems*
- **Primary Video:** `video.mp4` (6.6 MB, 1080×1920, 30fps)
- **Source Composition:** `composition/index.html` (37.8 KB, 7 distinct scenes)
- **Audio:** `composition/assets/music/t-01-call-it-even.mp3` + tactile vinyl needle drop + mechanical typing.
- **Visual Assets:** Album covers (`cover-dawn-01.jpg`, `cover-s02-sculpture-01.webp`, `cover-warm-02.jpg`), official SVG brand marks.
- **Docs:** `README.md`, `SCENE_PLAN.md`, `INSPECTION.md`, `COPY_REVIEW.md`, `captions.txt`.

### 3. `03-vertical-kinetic-saas-teaser`
- **Topic:** *StepGaana 20s Fast-Paced Kinetic Product Teaser*
- **Primary Video:** `video.mp4` (5.9 MB, 1080×1920, 30fps)
- **Source Composition:** `composition/index.html` (34.2 KB, 4 high-speed scenes)
- **Audio:** 4 soundtrack options (`happy-beats-business-moves-vol-10...`, etc.) + full interface sound library.
- **Visual Assets:** Complete album cover gallery + brand vector marks.
- **Docs:** `README.md`, `reelcraft-plan.md`, `composition-brief.md`, `share-copy.txt`, `captions.txt`.

### 4. `04-landscape-saas-widescreen`
- **Topic:** *StepGaana 16:9 Widescreen Desktop / YouTube Showcase*
- **Primary Video:** `video.mp4` (2.8 MB, 1920×1080, 30fps)
- **Source Composition:** `composition/index.html` (1920×1080 landscape layout)
- **Audio:** Flagship audio track + UI clicks & heavy impact bell.
- **Docs:** `README.md`, `captions.txt`.

### 5. `05-vertical-autonomous-cli-agent`
- **Topic:** *Reelcraft Autonomous Agent CLI Reel ("You built the code. Now make it go viral.")*
- **Primary Video:** `video.mp4` (1.8 MB, 1080×1920, 30fps)
- **Source Composition:** `composition/index.html` (Dark terminal UI)
- **Audio:** `composition/voiceover.wav` (Kokoro-82M) + `composition/music.mp3` + mechanical typing SFX.
- **Docs:** `README.md`, `reel-plan.md`, `caption.txt`.

---

## 🚀 How to Preview & Render Any Test Case

You can inspect or live-preview any of these test cases instantly in your browser:

```powershell
# 1. Preview 01-vertical-tech-explainer
npx hyperframes preview tests/01-vertical-tech-explainer/composition

# 2. Preview 02-vertical-saas-studio-launch
npx hyperframes preview tests/02-vertical-saas-studio-launch/composition

# 3. Preview 03-vertical-kinetic-saas-teaser
npx hyperframes preview tests/03-vertical-kinetic-saas-teaser/composition

# 4. Preview 04-landscape-saas-widescreen
npx hyperframes preview tests/04-landscape-saas-widescreen/composition

# 5. Preview 05-vertical-autonomous-cli-agent
npx hyperframes preview tests/05-vertical-autonomous-cli-agent/composition
```

To re-render any composition to MP4:

```powershell
npx hyperframes render --quality standard --resolution 1080p --fps 30 --format mp4 --output tests/<folder-name>/rendered_test.mp4 tests/<folder-name>/composition
```
