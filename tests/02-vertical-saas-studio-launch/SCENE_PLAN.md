# 30-Second Video Scene Plan: StepGaana

## Overview
- **Target Dimensions:** 1080x1920 (9:16 Vertical)
- **Duration:** Exactly 30.0 Seconds
- **Frame Rate:** 30 fps
- **Style:** Light Theme, Warm Gallery Studio (*"Paper & Ink & One Bronze Note"*)

---

## Scene 1: Brand Reveal (0.0s – 2.5s)
- **Time Range:** 0.0s – 2.5s (2.5s hold)
- **Purpose:** Establish the official StepGaana brand identity with clean, modern confidence.
- **On-Screen Content:**
  - Centered circular brand avatar with real `stepgaana.png` logo.
  - Brand name: **StepGaana** (*Instrument Sans* Bold).
  - Brand flourish: *Music* (*Instrument Serif* Italic in `--bronze: #8A6428`).
  - Engine badge pill: *StepAudio 3* with subtle bronze indicator light.
- **Exact Text:**
  - "StepGaana Music"
  - "StepAudio 3 · Generative AI"
- **Assets Used:**
  - `assets/logos/stepgaana.png`
- **Motion / Transition:**
  - Card scales up smoothly from 0.92 to 1.0 with subtle opacity fade-in (0.0s – 0.6s).
  - Smooth subtle camera drift outward.
  - Smooth exit fade-out at 2.1s – 2.5s.
- **Audio / SFX Cues:**
  - Flagship music starts softly at 0.0s (`assets/music/t-01-call-it-even.mp3`).
  - Subtle opening impact bell at 0.2s (`assets/sfx/impact/impactBell_heavy_000.ogg`).
- **Accessibility / Readability:**
  - High contrast (16.2:1) deep ink text on warm paper background. Large legible font (88px).
- **Implementation Risk:** Low.

---

## Scene 2: Product Promise (2.5s – 6.0s)
- **Time Range:** 2.5s – 6.0s (3.5s hold)
- **Purpose:** Present the core emotional promise: turning words into physical music.
- **On-Screen Content:**
  - Eyebrow: "AI-POWERED MUSIC STUDIO" in bronze uppercase with flanking geometric rules.
  - Headline: "What if you could turn words into *music?*"
  - Elevated preview turntable disc spinning smoothly beneath the headline.
- **Exact Text:**
  - "AI-POWERED MUSIC STUDIO"
  - "What if you could turn words into *music?*"
- **Assets Used:**
  - `assets/logos/stepgaana.png` (center label)
- **Motion / Transition:**
  - Text enters with smooth vertical translation and stagger (`power2.out`, 2.5s – 3.2s).
  - Turntable rotates 180° smoothly.
  - Exit transition at 5.5s – 6.0s with scale up to 1.04 and opacity fade.
- **Audio / SFX Cues:**
  - Music rhythm continues building smoothly.
- **Accessibility / Readability:**
  - Large display typography (92px), generous line-height, centered safe area placement.
- **Implementation Risk:** Low.

---

## Scene 3: Main Product Interface Reveal (6.0s – 12.0s)
- **Time Range:** 6.0s – 12.0s (6.0s hold)
- **Purpose:** Showcase the core user workflow: typing a rich musical prompt in the StepGaana studio promptbox.
- **On-Screen Content:**
  - Floating Studio Card with top header meta ("Describe in words · Hear a complete song").
  - The authentic `.promptbox` (sunken well, border radius 24px, Lucide Sparkle icon).
  - Live typewriter typing of prompt: *"A Chinese pop ballad with a live-room feel, female vocal, G minor, 74 BPM..."*
  - Interactive inspiration genre chips below: `Pop Ballad`, `Female Vocal`, `G Minor`, `74 BPM`.
- **Exact Text:**
  - "Describe in words · Hear a complete song"
  - "A Chinese pop ballad with a live-room feel, female vocal, G minor, 74 BPM..."
  - "Pop Ballad", "Female Vocal", "G Minor", "74 BPM"
- **Assets Used:**
  - Lucide Sparkle SVG.
- **Motion / Transition:**
  - Promptbox enters with smooth spring easing at 6.0s.
  - Typewriter effect with blinking bronze cursor typing smoothly from 6.8s to 9.5s.
  - Inspiration chips pop in sequentially with slight overshoot (9.2s – 10.2s).
  - Exit transition at 11.5s – 12.0s.
- **Audio / SFX Cues:**
  - Synchronized mechanical keypress SFX: `keypress-001.wav`, `keypress-005.wav`, `keypress-012.wav` between 6.8s and 8.5s.
- **Accessibility / Readability:**
  - 26px medium weight text with 1.4 line-height, ample padding, no text overlap.
- **Implementation Risk:** Low.

---

## Scene 4: Feature Sequence (12.0s – 18.0s)
- **Time Range:** 12.0s – 18.0s (6.0s hold)
- **Purpose:** Demonstrate the versatility of the 4 official creation modes from `data.js`.
- **On-Screen Content:**
  - Section header: "CHOOSE YOUR CREATION MODE".
  - 2x2 grid of creation modes with crisp Lucide vector SVGs:
    1. **Song Creation** (Sliders icon) — Text to complete song [ACTIVE with bronze highlight].
    2. **Instrumental** (Music icon) — Pure musical tracks.
    3. **Vocal to Music** (Headphones icon) — Harmonize recordings.
    4. **Music Cover** (Disc icon) — Style remixing.
- **Exact Text:**
  - "CHOOSE YOUR CREATION MODE"
  - "Song Creation · Text to complete song"
  - "Instrumental · Pure musical tracks"
  - "Vocal to Music · Harmonize recordings"
  - "Music Cover · Style remixing"
- **Assets Used:**
  - Lucide vector SVGs (Sliders, Music, Headphones, Disc).
- **Motion / Transition:**
  - Cards cascade in diagonally from 12.0s to 13.6s with `back.out(1.5)` easing.
  - Song Creation mode highlights at 14.5s with an active bronze border pulse.
  - Smooth exit transition at 17.5s – 18.0s.
- **Audio / SFX Cues:**
  - UI switch sound effect at 14.5s (`assets/sfx/ui/switch1.ogg`) as Song Creation activates.
- **Accessibility / Readability:**
  - 22px bold mode titles with 15px secondary descriptions, WCAG AA compliant contrast.
- **Implementation Risk:** Low.

---

## Scene 5: Result / Value Moment (18.0s – 24.0s)
- **Time Range:** 18.0s – 24.0s (6.0s hold)
- **Purpose:** The emotional core of StepGaana: the physical vinyl turntable spinning, metallic tonearm cueing, and music playing.
- **On-Screen Content:**
  - White pedestal turntable deck enclosure (`--paper`, 40px radius, shadow `--sh-4`).
  - 532px vinyl platter with concentric micro-grooves and 125° light reflection sweep.
  - Center label with authentic StepGaana album cover: `cover-s02-sculpture-01.webp`.
  - Authentic S-curved metallic tonearm with brass stylus.
- **Exact Text:**
  - Album label: "Call It Even"
- **Assets Used:**
  - `assets/covers/cover-s02-sculpture-01.webp`
  - SVG tonearm with metallic linear gradient `#armMetal`.
- **Motion / Transition:**
  - Turntable deck enters with subtle upward drift at 18.0s.
  - Tonearm rotates smoothly from rest (-16°) to cue-in (+16°) from 18.2s to 19.5s.
  - Vinyl disc rotates continuously (720° over 6 seconds).
  - Smooth camera push-in during playback.
- **Audio / SFX Cues:**
  - Tactile needle drop click at 18.8s (`assets/sfx/ui/mouseclick1.ogg`).
  - Flagship track volume swells to 100% full fidelity.
- **Accessibility / Readability:**
  - Crisp vector graphics, clear turntable geometry, centered focal point.
- **Implementation Risk:** Low.

---

## Scene 6: Brand Reinforcement & Audio Payoff (24.0s – 27.0s)
- **Time Range:** 24.0s – 27.0s (3.0s hold)
- **Purpose:** Connect the playback to the product's signature floating player capsule and core tagline.
- **On-Screen Content:**
  - Floating Player Capsule card (`--glass-bg`, blur 28px, border radius 32px).
  - Track metadata: Album artwork thumbnail + "Call It Even" + "Pop Ballad · Female Vocal · G Minor".
  - Timecode: "02:33" in *JetBrains Mono*.
  - Tagline: "Describe in words, hear a complete *song.*"
  - 21-bar deterministic dancing waveform visualizer.
- **Exact Text:**
  - "Call It Even"
  - "Pop Ballad · Female Vocal · G Minor"
  - "02:33"
  - "Describe in words, hear a complete *song.*"
- **Assets Used:**
  - `assets/covers/cover-s02-sculpture-01.webp`
- **Motion / Transition:**
  - Capsule enters with smooth slide-up at 24.0s.
  - Waveform bars animate dynamically with deterministic height oscillation.
  - Exit fade at 26.6s – 27.0s.
- **Audio / SFX Cues:**
  - Song continues playing with crisp acoustic clarity.
- **Accessibility / Readability:**
  - 34px bold quote headline, high contrast metadata.
- **Implementation Risk:** Low.

---

## Scene 7: Final CTA / End Card (27.0s – 30.0s)
- **Time Range:** 27.0s – 30.0s (3.0s hold)
- **Purpose:** Strong branded resolution, clear action direction, and clean hold for mobile viewers.
- **On-Screen Content:**
  - Centered elevated brand card (`--paper`, rounded 44px, shadow `--sh-4`).
  - Circular brand disc with `stepgaana.png` and bronze rim.
  - Headline: **StepGaana** *Music*.
  - Subtitle: "StepAudio 3 AI Music Studio".
  - Primary CTA pill button: **Start Creating · stepgaana.app** with arrow icon.
  - Author credit: "Built by Dus Mamud".
- **Exact Text:**
  - "StepGaana Music"
  - "StepAudio 3 AI Music Studio"
  - "Start Creating · stepgaana.app"
  - "Built by Dus Mamud"
- **Assets Used:**
  - `assets/logos/stepgaana.png`
  - Lucide Arrow SVG.
- **Motion / Transition:**
  - Card enters with smooth gentle bounce `back.out(1.3)` at 27.0s.
  - Arrow icon nudges forward subtly.
  - Clean hold until 30.0s with no jarring cut.
- **Audio / SFX Cues:**
  - Audio fades out smoothly from 28.5s to 30.0s.
- **Accessibility / Readability:**
  - High contrast, 28px CTA text on solid black button, safe margins for mobile UI overlays.
- **Implementation Risk:** Low.
