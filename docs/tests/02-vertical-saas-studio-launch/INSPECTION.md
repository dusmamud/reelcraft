# Video Setup Inspection Report: StepGaana

## 1. Product Summary
- **Product Name:** StepGaana
- **One-Sentence Description:** StepGaana is an AI music creation studio powered by StepAudio 3 that transforms natural language descriptions into complete, studio-grade songs, instrumental compositions, vocal harmonies, and music covers.

## 2. Recommended Product Story
The journey of creative expression made instant and tangible: transitioning from an evocative prompt (*"A Chinese pop ballad with a live-room feel, female vocal, G minor, 74 BPM..."*) directly into a tactile studio listening experience featuring a physical vinyl turntable, dancing waveform peaks, and a floating player capsule.

## 3. Strongest Product Moments
1. **Brand & Promise Reveal (0.0–2.5s & 2.5–6.0s):** The architectural light canvas introducing the StepGaana brand identity and the core hook: *"What if you could turn words into music?"*
2. **Main Studio Interface & Prompt Input (6.0–12.0s):** The elevated white promptbox featuring live mechanical typing of a complex prompt and inspiration genre chips (`Pop Ballad`, `Female Vocal`, `G Minor`, `74 BPM`).
3. **The Four Creation Modes (12.0–18.0s):** Clean Lucide SVG iconography displaying the four primary workflows: *Song Creation*, *Instrumental*, *Vocal to Music*, and *Music Cover*.
4. **The Vinyl Turntable & Tonearm Cue (18.0–24.0s):** A 532px vinyl record with concentric micro-grooves, 125° sheen sweep, authentic album art (`cover-s02-sculpture-01.webp`), and an S-curved metallic tonearm dropping the needle onto the record.
5. **The Floating Player Capsule & Audio Payoff (24.0–27.0s):** Frosted glass player capsule (`backdrop-filter: blur(28px)`), track metadata (*"Call It Even"*), timecode (*"02:33"*), and 21 deterministic dancing waveform bars synced to StepGaana's flagship song.
6. **Final Branded CTA End Card (27.0–30.0s):** High-contrast black pill button (*"Start Creating · stepgaana.app"*), brand mark, and credit (*"Built by Dus Mamud"*).

## 4. Confirmed Brand Colors (Source: `tokens.css` & `app.css`)
- **Canvas Background:** `--field: #F2F2F0` (warm gallery neutral light grey)
- **Cards & Elevated Surfaces:** `--paper: #FFFFFF` (pure white)
- **Sunken Wells & Insets:** `--field-sunk: #EAEAE7`
- **Surface Hover:** `--field-hover: #ECECE9`
- **Primary Text & Primary CTA:** `--ink: #14161A`
- **Secondary Text:** `--ink-2: #5B6068`
- **Metadata, Tags, Timecodes:** `--ink-3: #676C74`
- **Subtle Borders & Watermarks:** `--ink-soft: #8E939B`
- **Placeholders / Muted:** `--ink-4: #9AA0A7`
- **Text on Dark Surfaces:** `--ink-on-dark: #FAFAF9`
- **Inherent Accent (Bronze):** `--bronze: #8A6428`
- **Decorative Accent Highlight:** `--bronze-lift: #C9A468`
- **Bronze Washes & Lines:** `rgba(138, 100, 40, .10)` / `rgba(138, 100, 40, .28)`
- **Dividers & Rules:** `--rule: #E3E3E0` (1px default), `--rule-strong: #D2D2CE`
- **Vinyl Materials:** `--vinyl-base: #14151A`, `--vinyl-groove: #1E2027`, `--vinyl-edge: #0B0C0F`
- **Player Glass:** `rgba(255, 255, 255, .90)`, `blur(28px)`, border `rgba(20, 22, 26, .08)`

## 5. Confirmed Typography
- **Primary Latin & UI:** `Instrument Sans`, sans-serif (Weights: 400, 500, 600, 700)
- **Italic Flourish:** `Instrument Serif`, serif (Weight: 400 Italic)
- **Monospace & Timecodes:** `JetBrains Mono`, monospace (Weights: 500, 600)
- **Devanagari Fallback:** `Nirmala UI`, `Kohinoor Devanagari`

## 6. Confirmed Asset Paths
- **Brand Logo:** `static/assets/logos/stepgaana.png` (24 KB PNG)
- **Brand Mark SVG:** `static/assets/logos/stepgaana-mark.svg`
- **Brand Wordmark SVG:** `static/assets/logos/stepgaana-wordmark.svg`
- **Cover Artwork:** `static/assets/covers/cover-s02-sculpture-01.webp`, `cover-warm-02.jpg`, `cover-dawn-01.jpg`
- **Music Audio:** `static/assets/audio/tracks/t-01.mp3` ("Call It Even" - Pop ballad, 74 BPM)
- **SFX Assets:**
  - Impact: `.agents/skills/reelcraft/assets/sfx/impact/impactBell_heavy_000.ogg`
  - Keyboard: `.agents/skills/reelcraft/assets/sfx/keyboard/keypress-001.wav`, `keypress-005.wav`, `keypress-012.wav`
  - UI Clicks: `.agents/skills/reelcraft/assets/sfx/ui/switch1.ogg`, `mouseclick1.ogg`

## 7. Existing Project Risks & Mitigations
1. **Non-deterministic Animations:** Using `Math.random()` in audio visualizers causes frame mismatches during cloud rendering.
   - *Mitigation:* Explicit, pre-calculated deterministic height arrays for all waveform bars.
2. **External Font/Asset Dependencies:** Network latency during headless rendering can cause flashes of unstyled text or missing images.
   - *Mitigation:* Self-contain all fonts, SVGs, audio, and images within the local `video/composition/` package.
3. **Audio Duration Slot Mismatch:** HyperFrames requires audio `data-duration` to align with the actual media clip length.
   - *Mitigation:* Exact measured durations applied to all `<audio>` tags.
4. **Heavy Local Render on 8 GB Laptop:** Local rendering of 30-second 1080x1920 video at 30fps consumes significant CPU/memory.
   - *Mitigation:* Perform all validation via `npx hyperframes lint` and `npx hyperframes check` without triggering heavy video encoding.

## 8. Missing Requirements
- None. All logos, audio tracks, album covers, fonts, and design tokens exist locally in the project repository.

## 9. Recommended 30-Second Scene Breakdown
- **Scene 1 (0.0s – 2.5s):** Brand Reveal — Logo mark, "StepGaana Music", "StepAudio 3" engine badge.
- **Scene 2 (2.5s – 6.0s):** Product Promise — "What if you could turn words into music?" + rotating turntable silhouette.
- **Scene 3 (6.0s – 12.0s):** Main Interface Reveal — Studio Promptbox with mechanical typing and inspiration tags.
- **Scene 4 (12.0s – 18.0s):** Feature Sequence — 4 Creation Modes (Song Creation, Instrumental, Vocal to Music, Music Cover).
- **Scene 5 (18.0s – 24.0s):** Result / Value Moment — Turntable platter spin, metallic tonearm needle cue, and real song playback.
- **Scene 6 (24.0s – 27.0s):** Brand Reinforcement — Floating player capsule with live waveform bars and "Describe in words, hear a complete song."
- **Scene 7 (27.0s – 30.0s):** Final CTA / End Card — Brand icon, "StepGaana Music", "Start Creating · stepgaana.app", author credit.

## 10. Files Planned for Creation
- `video/INSPECTION.md` (This file)
- `video/SCENE_PLAN.md`
- `video/COPY_REVIEW.md`
- `video/README.md`
- `video/composition/index.html`
- `video/composition/assets/` (self-contained bundled assets)
- `video/SETUP_REPORT.md`
