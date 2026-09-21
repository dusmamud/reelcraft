# Step 2: 4-Beat Viral Retention Storyboard & Script

Short-form vertical video has an unforgiving retention drop-off. If a video does not hook viewers within 2.5 seconds and reset attention every 4 seconds, the viewer swipes away.

---

## The 4-Beat Retention Structure (Target: 18s – 25s)

```text
[ 0.0s – 3.5s ]  BEAT 1: The Pattern Interrupt Hook (Stop The Scroll)
[ 3.5s – 8.0s ]  BEAT 2: The Problem Agitation (The Broken Old Way)
[ 8.0s – 18.0s]  BEAT 3: The Technical Breakthrough & Proof (The Real Demo)
[18.0s – 24.0s]  BEAT 4: The Viral Outro & Conversion Catalyst (The CTA)
```

---

### Beat 1: The Pattern Interrupt Hook (0.0s – 3.5s)
- **Goal:** Freeze the viewer's thumb within 500 milliseconds.
- **Rules:**
  - **Visual:** Instant high-contrast entrance. Large 76px–84px kinetic headline slam, glowing status ticker, or stylized 3D vinyl record / terminal prompt.
  - **Copy:** Use polarizing, bold statements or urgent questions (from `references/hooks.md`).
    - *Example 1:* `[ BREAKING INTEL // 2026 ]` + "CHATBOTS ARE DEAD."
    - *Example 2:* "What if you could turn words into music?"
  - **Sound:** Heavy impact bell or low bass drop (`impactBell_heavy_000.ogg` or `impact-bell.ogg`) at 0.2s. Never start with silence.

### Beat 2: The Problem Agitation (3.5s – 8.0s)
- **Goal:** Highlight the painful, obsolete status quo.
- **Rules:**
  - **Visual:** Show a struck-through legacy method, a red-flagged alert card, or a comparison between 2024 and 2026.
  - **Copy:** Clarify the bottleneck (e.g. "Writing prompts manually in 2026 is dead. Autonomous agents build full pipelines while you sleep.").
  - **Sound:** Mechanical keyboard typing clicks or switch clicks on badge reveals.

### Beat 3: The Technical Breakthrough & Proof (8.0s – 18.0s)
- **Goal:** Deliver the tangible "Holy crap, that's awesome" proof.
- **Rules:**
  - **Show real functionality:**
    - Live audio waveform bars dancing to the soundtrack.
    - Terminal commands running in a dark IDE (`$ npx reelcraft --viral`).
    - Photorealistic humanoid robotics visual with telemetry pills.
    - Metric slam cards (e.g. `$5,000/MO`, `4.2s Generation`, `100% Open Source`).
  - **Sound:** Upbeat music groove swelling + crisp HUD click SFX on feature pops.

### Beat 4: The Viral Outro & CTA (18.0s – 24.0s)
- **Goal:** Convert view into a follow, star, or comment.
- **Rules:**
  - **Visual:** Brand mark arrives with glowing halo + domain pill + interactive follow badge.
  - **Copy:** High-converting action trigger:
    - "Comment 'REEL' and I'll DM you the open-source repo."
    - "Try StepGaana today · stepgaana.app"
    - "Follow @dusynblog for daily bleeding-edge AI breakthroughs."
  - **Sound:** Natural music fade out with final clean click.

---

## 🎙️ Voiceover Scripting & WPM Pacing

When `--voice` is enabled:
1. **Pacing:** Keep voiceover between **130 – 150 Words Per Minute (WPM)** (~2.2 words per second).
   - For a 20-second video: Total script should be **35 – 45 words**.
   - For a 30-second video: Total script should be **55 – 70 words**.
2. **Complement, Don't Mimic:** The voiceover should explain the deeper value while on-screen text shows metrics and headlines.
3. **Language Selection:**
   - **English (`--lang en`):** Script with clean, conversational rhythm for Kokoro-82M.
   - **Hindi / Hinglish (`--lang hi`):** Script naturally in Devanagari or Hinglish for Edge-TTS (`hi-IN-MadhurNeural`).

---

## Storyboard Plan Template (`reel-plan.md`)

Save the plan to `<output-dir>/reel-plan.md` using this exact structure:

```markdown
# Reel Storyboard: [Product Name / Topic]

- **Total Duration:** 24.0s
- **Aspect Ratio:** 9:16 Vertical (1080×1920)
- **Theme:** [Luminous Light / Obsidian Dark / Paper & Ink]
- **Narration:** [Kokoro-82M am_adam (en) / Edge-TTS hi-IN-MadhurNeural (hi)]
- **Music:** [Track Name] (e.g. tech-groove-30s.mp3)
- **Target Audience:** [Developers / AI Builders / Tech Creators]

### Scene 1: The Hook [0.0s – 3.5s]
- **Visual:** High-contrast slam text + animated top ticker.
- **Headline:** "[Hook Headline]"
- **Narration:** "[Opening hook sentence]"
- **SFX:** Impact bell at 0.2s.

### Scene 2: The Problem Agitation [3.5s – 8.0s]
- **Visual:** Comparison card with legacy struck-through items.
- **Headline:** "[Problem Statement]"
- **Narration:** "[Explanation of the pain point]"
- **SFX:** Mechanical typing keys.

### Scene 3: The Technical Breakthrough [8.0s – 18.0s]
- **Visual:** Working product UI / code terminal / live visualizer.
- **Feature Chips:** [Feature 1, Feature 2, Feature 3]
- **Narration:** "[Explanation of the breakthrough in action]"
- **SFX:** Atmospheric whoosh at 8.0s + UI clicks.

### Scene 4: The Outro & CTA [18.0s – 24.0s]
- **Visual:** Brand mark with ambient aura glow + CTA badge.
- **Headline:** "[Product Name / Tagline]"
- **Narration:** "[Final closing remark]"
- **CTA:** "Follow @brand · link in bio"
- **SFX:** Final success click.
```
