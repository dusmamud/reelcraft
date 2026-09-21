# Hyperframes Composition Brief: StepGaana

## Objective
Create an ultra-polished, authentic 20-second product launch video composition for StepGaana (AI Music Studio) strictly matching the web app's official design system, typography, real music, and real UI assets.

## Output
- Composition directory: `reelcraft-output/composition/`
- Rendered video: `reelcraft-output/video.mp4`
- Format: vertical (9:16) — 1080x1920
- Duration: 20 seconds

## Source Material
- Project root: `e:/Tools/StepGaana`
- Primary files analyzed: `static/assets/css/tokens.css`, `static/assets/css/app.css`, `static/assets/css/player.css`, `static/app.html`, `static/assets/js/data.js`
- Product name: StepGaana
- Tagline: "Describe in words, hear a complete song."
- Brand Flourish: "StepGaana *Music*" (Instrument Serif Italic in Bronze)
- Engine: "StepAudio 3"

## Visual Identity (100% Faithful to StepGaana Web App)
- **Theme**: "Paper & Ink & One Bronze Note" (Light Mode Canvas)
- **Canvas / Background**: `#F2F2F0` (warm gallery neutral grey `--field`)
- **Card / Surface**: `#FFFFFF` (`--paper`)
- **Sunken Wells**: `#EAEAE7` (`--field-sunk`)
- **Primary Text & Primary CTA**: `#14161A` (`--ink`)
- **Secondary Text**: `#5B6068` (`--ink-2`)
- **Metadata / Genre Tags**: `#676C74` (`--ink-3`)
- **Accent**: `#8A6428` (`--bronze`), `#C9A468` (`--bronze-lift`), `rgba(138, 100, 40, .10)` (`--bronze-wash`)
- **Borders / Rules**: `#E3E3E0` (`--rule`), `#D2D2CE` (`--rule-strong`)
- **Vinyl Materials**: `#14151A` (`--vinyl-base`), `#1E2027` (`--vinyl-groove`), `#0B0C0F` (`--vinyl-edge`)
- **Glassmorphism**: `rgba(255, 255, 255, .90)` with `blur(28px)` and `inset 0 0 0 1px rgba(20,22,26,.08)`
- **Typography**:
  - Latin Display & UI: `Instrument Sans`
  - Italic Flourish: `Instrument Serif`
  - Monospace: `JetBrains Mono`

## Storyboard (20 Seconds, 9:16 Vertical)
1. **Scene 1: The Hook (0.0s – 3.8s)**
   - Persistent Top Header: Brand Logo avatar + "StepGaana *Music*" + "StepAudio 3" engine pill.
   - Editorial Typography: "What if you could turn words into *music?*"
   - Floating 3D Vinyl Turntable Preview rotating smoothly.
   - SFX: Heavy Impact Bell at 0.2s (`assets/sfx/impact/impactBell_heavy_000.ogg`).

2. **Scene 2: The Studio & Creation Modes (3.8s – 8.8s)**
   - The Studio Panel Card (`--paper`, rounded 36px, shadow `--sh-3`).
   - The Real Promptbox (`--field-sunk`, rounded 24px) with Sparkle Lucide SVG and simulated typing of:
     *"A Chinese pop ballad with a live-room feel, female vocal, G minor, 74 BPM..."*
   - SFX: Mechanical typing keypress sounds (`keypress-001.wav`, `keypress-005.wav`, `keypress-012.wav`).
   - 4 Official Creation Modes:
     - Song Creation (Text to complete song - Sliders SVG) [ACTIVE]
     - Instrumental (Pure musical tracks - Music SVG)
     - Vocal to Music (Harmonize recordings - Headphones SVG)
     - Music Cover (Style remixing - Disc SVG)
   - SFX: UI Switch at 5.5s (`switch1.ogg`).

3. **Scene 3: Turntable & Floating Player Experience (8.8s – 15.5s)**
   - Turntable Deck Enclosure (`--paper`, rounded 40px, shadow `--sh-4`).
   - 532px Vinyl Platter with concentric micro-grooves, sheen highlight sweep at 125deg.
   - Center Label: Authentic StepGaana album cover (`cover-s02-sculpture-01.webp`) with spindle.
   - S-Curved Metallic Tonearm cues in from -16deg to +16deg.
   - SFX: Needle drop click at 8.8s (`mouseclick1.ogg`).
   - Audio: StepGaana's Flagship Song ("Call It Even" - `t-01-call-it-even.mp3`) playing in crystal clear quality.
   - Floating Player Capsule Card (matched to `player.css`):
     - Album art thumbnail + "Call It Even" + "Pop Ballad · Female Vocal · G Minor".
     - Timecode: "02:33".
     - Tagline: "Describe in words, hear a complete *song.*"
     - Animated 21-bar dancing waveform visualizer.

4. **Scene 4: Outro & Call to Action (15.5s – 20.0s)**
   - Elevated Brand Card with StepGaana round logo disc.
   - "StepGaana *Music*"
   - "StepAudio 3 AI Music Studio"
   - Primary Pill CTA: "Start Creating · stepgaana.app" with arrow icon.
   - Author credit: "Built by Dus Mamud"

## Audio Track Contract
- Flagship Music: `assets/music/t-01-call-it-even.mp3` (`data-track-index="10"`, volume 0.85).
- Impact Bell SFX: `assets/sfx/impact/impactBell_heavy_000.ogg` (`data-track-index="11"`, start 0.2s).
- Typing SFX: `keypress-001.wav`, `keypress-005.wav`, `keypress-012.wav` (`data-track-index="12-14"`).
- Mode Switch SFX: `assets/sfx/ui/switch1.ogg` (`data-track-index="15"`, start 5.5s).
- Needle Drop SFX: `assets/sfx/ui/mouseclick1.ogg` (`data-track-index="16"`, start 8.8s).
