# StepGaana 16:9 Landscape Product Showcase (Widescreen)

This folder contains the complete, production-ready 20-second widescreen (16:9, 1920x1080, 30fps) product showcase video for **StepGaana**, formatted specifically for YouTube desktop viewers, Twitter/X widescreen cards, Product Hunt media galleries, and laptop displays.

---

## 1. Specifications & Assets
- **Format:** 16:9 Landscape Widescreen (1920x1080)
- **Duration:** 20.0 seconds
- **Frame Rate:** 30 fps
- **Video Output:** `video.mp4` (2.8 MB, rendered via HyperFrames)
- **Poster Thumbnail:** `poster.jpg` (1920x1080 high-contrast thumbnail)
- **Soundtrack:** Flagship track *"Call It Even"* (`assets/music/t-01-call-it-even.mp3`)
- **SFX:** Synchronized mechanical switches, interface clicks, and heavy impact bell

---

## 2. Narrative Structure
- **0.0s – 3.5s (Hook):** Headline reveal *"What if you could turn words into music?"* with rotating vinyl turntable.
- **3.5s – 8.0s (Modes):** Four core creation modes displayed across widescreen layout.
- **8.0s – 14.5s (Playback):** Tonearm needle drop, real-time waveform glow, and dynamic audio playback.
- **14.5s – 20.0s (Outro):** StepGaana brand mark, creator credit, and clear CTA to start creating.

---

## 3. Preview & Render Commands
```powershell
# Live preview in browser
npx hyperframes preview composition

# Local MP4 render
npx hyperframes render --quality standard --resolution 1080p --fps 30 --format mp4 --output video.mp4 composition
```
