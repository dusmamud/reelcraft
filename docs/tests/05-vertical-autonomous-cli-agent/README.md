# Reelcraft Autonomous Agent CLI Reel (Terminal Motion)

This folder contains a 12-second vertical (9:16, 1080x1920, 30fps) developer tools showcase video for **Reelcraft CLI**, featuring a high-contrast dark IDE terminal, dynamic keystroke simulation, glowing execution badges, and Kokoro-82M AI narration.

---

## 1. Specifications & Assets
- **Format:** 9:16 Vertical (1080x1920)
- **Duration:** 12.0 seconds
- **Frame Rate:** 30 fps
- **Video Output:** `video.mp4` (1.8 MB, rendered via HyperFrames)
- **Poster Thumbnail:** `poster.jpg` (High-contrast terminal thumbnail)
- **Voiceover:** `composition/voiceover.wav` (Kokoro-82M `am_adam` tech anchor narration)
- **Soundtrack:** `composition/music.mp3` (Ambient coding beat)
- **SFX:** Mechanical typing keys, return chime, and build completion ping

---

## 2. Kinetic Sequence Timeline
- **0.0s – 3.0s (Hook):** Terminal prompt pops `$ npx reelcraft --viral` with rapid keystroke clicks.
- **3.0s – 7.0s (Code Ingestion):** AST parsing animation, safe-zone bounding box calculation, and beat alignment.
- **7.0s – 12.0s (Render & CTA):** `[ SUCCESS: 60fps MP4 READY ]` glowing banner and call-to-action.

---

## 3. Preview & Render Commands
```powershell
# Live preview in browser
npx hyperframes preview composition

# Local MP4 render
npx hyperframes render --quality standard --resolution 1080p --fps 30 --format mp4 --output video.mp4 composition
```
