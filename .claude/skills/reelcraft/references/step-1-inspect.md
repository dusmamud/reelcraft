# Step 1: Project Theme & Brand Asset Inspection

Before scripting or generating a single line of video code, thoroughly inspect the target project or topic to extract its visual identity, technical claims, and brand assets.

---

## Part A: Project-Aware Mode (When in a Codebase)

When running inside a project repository, inspect files in this priority order:

### 1. Theme Detection: Light Mode vs. Dark Mode
Analyze the app's native visual atmosphere:
1. **HTML Root Tags:** Check `<html class="dark">`, `<html data-theme="light">`, or `<body class="...">`.
2. **CSS Custom Properties (`:root`):**
   - Search for background definitions in `tokens.css`, `globals.css`, `app.css`, `styles.css`, or `tailwind.config.js`:
     - **Dark Mode Indicators:** `--bg: #070A13`, `--background: #0d1117`, `--bg: #14151A`, `--field: #0F172A`, or dark canvas defaults (`#050506`, `#121212`).
     - **Light Mode Indicators:** `--bg: #FFFFFF`, `--field: #F2F2F0`, `--bg: #F8FAFC`, `--paper: #FFFFFF`, or warm gallery neutrals.
3. **Contrast & Theme Decision:**
   - If the project is **Light Mode** (e.g. StepGaana "Paper & Ink"): The video MUST use a luminous light gallery background (`#F2F2F0` to `#F8FAFC`), crisp dark ink typography (`#14161A`), warm bronze/gold or royal blue accents, and subtle frosted glass panels.
   - If the project is **Dark Mode**: The video MUST use an obsidian deep space background (`#070A13`), luminous neon or cyan glows (`#38BDF8`, `#3B82F6`, `#8B5CF6`), and specular glass borders (`rgba(255,255,255,0.1)`).

### 2. Colorgrading & Palette Extraction
Extract the exact brand palette and assign them to video tokens:
- **`--canvas-bg`**: Main background color (e.g. `#070A13` or `#F2F2F0`).
- **`--surface-card`**: Elevated card surfaces (e.g. `rgba(15,23,42,0.75)` or `#FFFFFF`).
- **`--brand-primary`**: Dominant brand accent (e.g. `#2563EB`, `#3B82F6`, `#8A6428`).
- **`--brand-glow`**: Specular radial gradient wash (e.g. `rgba(37,99,235,0.18)` or `rgba(138,100,40,0.12)`).
- **`--text-primary`**: High-contrast headline color (`#FAFAF9` or `#14161A`).
- **`--text-muted`**: Subtitle & telemetry color (`#94A3B8` or `#5B6068`).
- **`--border-rule`**: Subtle card boundaries (`rgba(255,255,255,0.1)` or `#E3E3E0`).

### 3. Logo & Graphic Asset Discovery
Scan the project directories (`public/`, `static/`, `assets/`, `images/`, `src/assets/`):
1. **Vector Brand Marks (`.svg`):**
   - High priority! SVG logos scale infinitely without pixelation on high-density mobile displays.
   - Search for `*logo*.svg`, `*mark*.svg`, `*icon*.svg`.
2. **High-Res Raster Logos (`.png`, `.webp`):**
   - Ensure minimum 512×512 resolution for clean scaling.
3. **Product Media & Mockups:**
   - Search for album covers, UI screenshots, diagram assets, or visual hero banners.
   - Example: In StepGaana, real album covers (`cover-dawn-01.jpg`, `cover-warm-02.jpg`) and official SVG wordmark were discovered and integrated directly.

### 4. Authentic Copy & User Flow Extraction
Never invent generic marketing buzzwords. Extract genuine product claims:
- **The Core Tagline:** From `index.html` `<title>`, hero `<h1>`, or `README.md`.
- **The 3-Beat User Flow in Action:**
  - `Beat 1 (Entry):` What does the user provide? (e.g. "Type prompt: 'Moody midnight lo-fi jazz with bansuri...'").
  - `Beat 2 (Action):` What is the core engine transformation? (e.g. "StepAudio 3 neural separation in 4.2s").
  - `Beat 3 (Result):` What is the satisfying output? (e.g. "Tonearm needle drop, live dancing waveforms, stem export").

---

## Part B: Autonomous Topic Mode (When Project is Optional / Custom Prompt)

If the user runs Reelcraft on a standalone topic without an existing codebase (e.g. `/reelcraft "Physical AI Breakthrough"` or `/reelcraft "Top 5 Rust CLI Tools"`):
1. **Analyze the Topic Domain:**
   - AI / Robotics / Deep Tech ➔ Use **`luminous`** (Light Slate with Royal Blue Glow) or **`cyberpunk`** (Dark Obsidian with Electric Cyan).
   - Audio / Music / Artisanal SaaS ➔ Use **`paper-and-ink`** (Warm Gallery Grey `#F2F2F0` with Bronze Accent `#8A6428`).
   - Developer Tools / CLI / Terminal ➔ Use **`terminal-hacker`** (Dark IDE `#0D1117` with Emerald `#10B981` & Cyan highlights).
2. **Synthesize Brand Assets:**
   - Generate crisp inline SVG brand badges and technology logos.
   - Use high-impact typography (`Plus Jakarta Sans`, `Instrument Sans`, `JetBrains Mono`).
3. **Formulate High-Impact Narrative:**
   - Identify the industry paradigm shift (e.g. "2024 Chatbots vs 2026 Autonomous Agent Teams").

---

## The 9-Point Reel Inspection Rubric

Answer these 9 questions in `<output-dir>/INSPECTION.md` before storyboarding:

```text
1. What is the product / topic?
   (One concise sentence defining the core breakthrough).

2. Is the visual theme Light Mode or Dark Mode?
   (Theme decision, canvas hex code, and specular glow colors).

3. What are the confirmed brand colors?
   (Primary accent, surface card, text primary, border rules).

4. What local assets were discovered?
   (Paths to SVG logos, PNG branding, cover artworks, or UI mockups).

5. What is the scroll-stopping 0–3s hook?
   (The exact headline and pattern-interrupt visual to open the video).

6. What is the villain / problem being agitated?
   (The legacy bottleneck, high cost, manual effort, or obsolete workflow).

7. What is the tangible proof shown in Scene 3?
   (Real code terminal, live audio visualizer, metric slam, or UI cards).

8. What is the audio & voiceover direction?
   (Voice language: en [Kokoro] vs hi [Edge-TTS], BGM track, and SFX cues).

9. What is the exact call-to-action (CTA)?
   (Follow prompt, GitHub star, or website link pill).
```

**Gate:** You must have confirmed the theme, extracted all colors, and formulated the 3-second hook before proceeding to Step 2.
