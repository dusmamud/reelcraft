# Audio & Sound Design Reference

Great short-form video is 50% visuals and 50% sound design. A visual cut without an SFX cue feels lifeless.

---

## Bundled SFX Library

Reelcraft comes with royalty-free, high-impact UI sound effects located in:
`<skill-dir>/assets/sfx/`

### Primary SFX Categories & Triggers:

| SFX Type | When To Trigger | Recommended File |
|---|---|---|
| **Impact / Drop** | Beat 1 Hook reveal, major claim | `impact/drop_bass_heavy.wav` |
| **Whoosh / Swish** | Scene transitions, card entry | `interface/whoosh_fast.wav` |
| **Interface Pop** | Metric cards, badges appearing | `ui/pop_click_clean.wav` |
| **Keyboard Tap** | Code blocks typing or highlighting | `keyboard/click_mechanical.wav` |
| **Riser / Accent** | Transitioning into the final CTA | `interface/riser_tension.wav` |

---

## Music Beat Syncing

When pairing with background tracks:
1. **Ducking:** Keep background music volume at **-16dB to -20dB** when voiceover is speaking.
2. **Beat Snapping:** Align scene transitions exactly to 0.5s or 1.0s musical downbeats (e.g. 120 BPM = 0.5s per beat).
3. **SFX Panning:** Keep UI sound cues centered and punchy at **-6dB**.

---

## Narration & Voiceover (TTS)

When `--voice` is enabled, Reelcraft supports:

### 1. English (Default)
- Engine: Kokoro-82M or Edge-TTS (`en-US-ChristopherNeural` / `en-US-GuyNeural`)
- Pacing: 140–160 words per minute. Confident, crisp tech-anchor delivery.

### 2. Hindi & Hinglish (`--lang hi`)
- Engine: Edge-TTS (`hi-IN-MadhurNeural`) or Indic Parler-TTS (`ai4bharat/indic-parler-tts`)
- Voice Persona: Indian tech founder / developer explaining an architecture. Natural Hinglish vocabulary (e.g. "autonomous agents", "codebase", "debugging", "production ready").

### Script-to-Speech Alignment Rule:
Never let narration read raw code characters verbatim (e.g. do not say "bracket quote await dot execute open paren"). 
Instead, narration describes the semantic action:
- Code: `await agent.executeWorkflow()`
- Voice says: *"With just one call, the agent executes the full workflow."*
