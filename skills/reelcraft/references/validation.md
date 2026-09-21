# Validation, Linting & Pre-flight Diagnostics Reference

Video rendering in HyperFrames consumes CPU/GPU and can take 1–3 minutes. **Never run `render` without running the lint and pre-flight check first.**

Running pre-flight checks takes under 100ms and guarantees that your composition will render cleanly without silent audio, missing timelines, or broken layout.

---

## 🚀 The 3 Pre-Flight Commands

Run these from your terminal or project root before executing `reelcraft render`:

### 1. Static HTML & DOM Contract Lint (`reelcraft lint`)
```powershell
npx reelcraft lint <output-dir>/composition
# Or direct hyperframes command:
npx hyperframes lint <output-dir>/composition
```
- **What it checks:** HTML syntax, missing `id` on media elements, missing timeline declarations, unclosed tags, and DOM attribute contracts.
- **Speed:** ~50ms.

### 2. Headless Chromium Engine Check (`reelcraft check`)
```powershell
npx reelcraft check <output-dir>/composition
# Or direct hyperframes command:
npx hyperframes check <output-dir>/composition
```
- **What it checks:** Loads the composition in a real headless Chromium instance, parses CSS stylesheets, checks Google Fonts loading, audits WCAG contrast ratios, and verifies frame-stepping clock synchronization.
- **Speed:** ~2-3 seconds.

### 3. Retention & Safe-Zone Quality Audit (`validate_reel.py`)
```powershell
python scripts/validate_reel.py <output-dir>/composition/index.html
```
- **What it checks:** Mobile UI safe-zone compliance (Instagram/TikTok overlays), hook duration (<= 3.5s), scene count (>= 3 scenes), and speech pacing (130–160 WPM).
- **Speed:** ~100ms.

---

## 🚨 Error Codes & Autonomous Fix Recipes

When `reelcraft lint` or `hyperframes check` returns an error or warning, apply the corresponding fix immediately:

### 1. `media_missing_id`
- **Error:**
  ```text
  ✗ media_missing_id: <audio> has data-start but no id attribute.
  The renderer requires id to discover media elements — this audio will be SILENT in renders.
  ```
- **Root Cause:** HyperFrames headless browser requires each media node to have a unique DOM ID to bind the audio stream.
- **Fix:** Add a descriptive, unique `id` attribute:
  ```html
  <!-- WRONG -->
  <audio data-track="bgm" src="assets/music.mp3" data-start="0" data-duration="20"></audio>

  <!-- CORRECT -->
  <audio id="audio-bgm" data-track="bgm" src="assets/music.mp3" data-start="0" data-duration="20"></audio>
  <audio id="audio-voiceover" data-track="voiceover" src="assets/voiceover.mp3" data-start="0.5" data-duration="14.2"></audio>
  <audio id="sfx-impact" data-track="sfx" src="assets/impact.mp3" data-start="8.0" data-duration="0.5"></audio>
  ```

---

### 2. `missing_timeline_registry`
- **Error:**
  ```text
  ✗ missing_timeline_registry: Missing window.__timelines registration.
  Hyperframes waited 45s polling for GSAP timeline.
  ```
- **Root Cause:** The composition engine looks for a GSAP timeline object. If you are using pure CSS animations (recommended for performance), you must explicitly inform the engine.
- **Fix:** Add `data-no-timeline` to the root container element:
  ```html
  <!-- Pure CSS Animation (Recommended): -->
  <div id="root" class="scene-clip" data-composition-id="root" data-no-timeline data-width="1080" data-height="1920" data-start="0" data-duration="20">

  <!-- If using GSAP JavaScript: -->
  <script>
    const tl = gsap.timeline();
    // ... animation code ...
    window.__timelines = window.__timelines || {};
    window.__timelines["root"] = tl;
  </script>
  ```

---

### 3. Audio Slot Shortened (`Audio is X.Xs but data-duration is Y.Ys`)
- **Warning:**
  ```text
  [WARN] [compile] Audio "sfx-whoosh" (whoosh.ogg) is 0.31s but its data-duration is 1.20s — the slot is shortened to the media length.
  ```
- **Root Cause:** The declared `data-duration` on the `<audio>` tag exceeds the actual audio file length.
- **Fix:** Set `data-duration` equal to or slightly under the actual duration of the audio asset:
  ```html
  <!-- Change data-duration="1.2" to actual length: -->
  <audio id="sfx-whoosh" data-track="sfx" src="assets/whoosh.ogg" data-start="3.5" data-duration="0.32"></audio>
  ```

---

### 4. `contrast_ratio_below_threshold`
- **Warning:**
  ```text
  ⚠ contrast_ratio_below_threshold: Element text contrast ratio (2.8:1) is below WCAG AA minimum (4.5:1).
  ```
- **Root Cause:** Text will be unreadable on mobile screens in high ambient light.
- **Fix:** Increase foreground luminance or add a frosted dark backdrop:
  ```css
  /* Enhance contrast */
  .headline-slam {
    color: #FFFFFF;
    text-shadow: 0 4px 24px rgba(0, 0, 0, 0.8), 0 0 12px rgba(255, 255, 255, 0.2);
  }
  .card-surface {
    background: rgba(15, 23, 42, 0.88);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  ```

---

### 5. Mobile Safe-Zone Clashing
- **Symptom:** Subtitles or buttons hidden behind Instagram caption, audio badge, or like/share button stack.
- **Root Cause:** Elements placed outside the safe area (`1080 × 1920`).
- **Fix:** Strictly enforce CSS safe-zone custom properties:
  ```css
  :root {
    --safe-top: 140px;      /* Header / story progress bar */
    --safe-bottom: 280px;   /* Caption, audio title, comment input */
    --safe-left: 60px;      /* Margin */
    --safe-right: 160px;    /* Floating interaction button stack (Like, Share, Save) */
  }

  .safe-container {
    box-sizing: border-box;
    padding-top: var(--safe-top);
    padding-bottom: var(--safe-bottom);
    padding-left: var(--safe-left);
    padding-right: var(--safe-right);
    width: 1080px;
    height: 1920px;
  }
  ```

---

### 6. Non-Deterministic Flickering (`Math.random()`)
- **Symptom:** Waveforms, particles, or glitch effects flicker erratically between preview and render.
- **Root Cause:** Headless rendering captures frame-by-frame; `Math.random()` generates different random values on every single frame.
- **Fix:** Use deterministic pseudo-random seeds or static arrays:
  ```javascript
  // BAD:
  const barHeight = Math.random() * 80 + 20;

  // GOOD (Pre-calculated sequence):
  const HEIGHT_SEEDS = [34, 68, 92, 54, 76, 42, 88, 60, 95, 38, 72, 84, 50, 90, 62];
  const barHeight = HEIGHT_SEEDS[index % HEIGHT_SEEDS.length];
  ```

---

## ✅ Autonomous Pre-Render Protocol

Before calling `hyperframes render` or `reelcraft render`, the AI agent MUST execute:

1. `npx reelcraft lint <composition-path>`
2. If any errors are returned, fix them in `index.html` or `styles.css`.
3. Re-run lint until `0 errors` are reported.
4. (Optional but recommended) Run `npx reelcraft check <composition-path>` for full headless verification.
5. Only when validation passes, proceed to Step 4 (`render`).
