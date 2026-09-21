# Step 3: HyperFrames 9:16 Kinetic Composition Guide

Vertical video composition requires strict adherence to mobile platform UI overlays, kinetic typography timing, and deterministic frame rendering.

---

## 1. Document Structure & Meta

The entry `index.html` file inside `<output-dir>/composition/` must adhere to the HyperFrames standard:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1080, height=1920, initial-scale=1.0">
  <title>Reelcraft Composition</title>
  <!-- Google Fonts: Plus Jakarta Sans / Instrument Sans / JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    /* CSS Tokens & Animations */
  </style>
</head>
<body>
  <!-- Root Composition Element with Explicit Dimensions & Duration -->
  <div id="root" class="scene-clip" data-composition-id="root" data-width="1080" data-height="1920" data-start="0" data-duration="24">
    <!-- Ambient Background -->
    <!-- Content Canvas -->
    <!-- Audio Elements -->
  </div>
</body>
</html>
```

---

## 2. Mobile UI Safe Zones (1080×1920 Canvas)

Instagram Reels, TikTok, and YouTube Shorts overlay platform controls on the edges. All headlines, cards, and interactive elements must remain inside the **800px × 1500px Center Safe Canvas**.

```text
+-----------------------------------------------------------+  y = 0
|                   Top Safe Margin: 140px                  |  (Notch, Status Bar, App Search)
+-----------------------------------------------------------+  y = 140px
|                                               |           |
|                                               |           |
|            CENTER SAFE CONTENT CANVAS         |   Right   |
|                 (800px Wide)                  |   Safe    |  (Likes, Comments,
|                                               |   Margin  |   Share, Bookmark)
|         - Headlines (72px–84px)               |   160px   |
|         - Telemetry Cards                     |           |
|         - Visual Centerpiece                  |           |
|                                               |           |
+-----------------------------------------------------------+  y = 1640px
|                 Bottom Safe Margin: 280px                 |  (Username, Caption, Sound Disc)
+-----------------------------------------------------------+  y = 1920px
```

### Required Safe-Zone CSS Tokens:
```css
:root {
  --safe-top: 140px;
  --safe-bottom: 280px;
  --safe-left: 80px;
  --safe-right: 160px;
}

.content-container {
  position: absolute;
  top: var(--safe-top);
  left: var(--safe-left);
  right: var(--safe-right);
  bottom: var(--safe-bottom);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

---

## 3. Kinetic Styling & Motion Design

1. **Snappy Spring Easing:**
   Never use linear transitions for cards or text reveals. Use smooth cubic-bezier spring curves:
   ```css
   --spring-in: cubic-bezier(0.16, 1, 0.3, 1);
   transition: transform 0.45s var(--spring-in), opacity 0.35s ease;
   ```

2. **Specular Glassmorphism & Ambient Glows:**
   Layer radial gradient glow orbs behind elevated glass cards:
   ```css
   .ambient-orb {
     position: absolute;
     width: 600px;
     height: 600px;
     border-radius: 50%;
     filter: blur(140px);
     opacity: 0.25;
     pointer-events: none;
   }
   
   .glass-card {
     background: rgba(255, 255, 255, 0.90); /* Light mode */
     /* Or background: rgba(15, 23, 42, 0.75); for Dark mode */
     backdrop-filter: blur(28px) saturate(1.8);
     border: 1px solid rgba(255, 255, 255, 0.12);
     border-radius: 24px;
     box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
   }
   ```

3. **Deterministic Animation Rule:**
   - **Never** use `Math.random()` in audio visualizer waveforms or particle effects! Random numbers cause frame flickering and cloud rendering mismatches.
   - Use explicit, pre-computed height arrays (e.g. `[18, 42, 85, 34, 67, 92, 45, ...]` for waveform bars).

---

## 4. Multi-Layer Audio Tag Architecture

HyperFrames discovers audio directly from HTML `<audio>` elements. Every audio element must declare its track type, start time, and duration:

```html
<!-- 1. Background Music (Volume ducked to 0.18 under narration) -->
<audio 
  data-track="bgm"
  src="assets/music/tech-groove-30s.mp3" 
  data-start="0" 
  data-duration="24"
  volume="0.18">
</audio>

<!-- 2. Studio AI Voiceover Track -->
<audio 
  data-track="voiceover"
  src="assets/voiceover.wav" 
  data-start="0.3" 
  data-duration="22.5"
  volume="1.0">
</audio>

<!-- 3. Beat-Synced SFX Tracks -->
<audio data-track="sfx" src="assets/sfx/impact-bell.ogg" data-start="0.2" data-duration="2.0" volume="0.85"></audio>
<audio data-track="sfx" src="assets/sfx/whoosh.ogg" data-start="8.0" data-duration="1.2" volume="0.60"></audio>
<audio data-track="sfx" src="assets/sfx/click.ogg" data-start="18.2" data-duration="0.5" volume="0.75"></audio>
```

---

## 5. Validation Gate

Before rendering, run the two validation checks:

```powershell
# 1. HyperFrames static & runtime verification
npx hyperframes check <output-dir>/composition

# 2. Reelcraft safe-zone & audio duration validator
python scripts/validate_reel.py <output-dir>/composition/index.html
```

Ensure output reports `0 errors`. Fix any contrast or duration mismatches before starting video rendering.
