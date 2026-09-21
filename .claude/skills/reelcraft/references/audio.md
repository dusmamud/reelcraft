# Reelcraft Audio Architecture & Sound Design

A high-retention reel lives or dies by its sound design. Reelcraft enforces a 3-layer balanced audio architecture:

```text
+-------------------------------------------------------------+
| LAYER 1: Studio Voiceover (Foreground, 1.0 Vol, Center)     |
+-------------------------------------------------------------+
| LAYER 2: Synchronized SFX (Impacts, Keys, Clicks, 0.7 Vol)  |
+-------------------------------------------------------------+
| LAYER 3: Ducked BGM Groove (Background Bed, 0.18–0.45 Vol)  |
+-------------------------------------------------------------+
```

---

## 1. Studio Voiceover Layer

When `--voice` is specified, Reelcraft generates studio-quality narration:

### English Narration (Default)
- **Engine:** **Kokoro-82M** (local autoregressive model, 82M parameters, zero cloud latency).
- **Default Voice:** `am_adam` (deep, energetic tech anchor) or `af_heart` (clean, articulate educator).
- **Format:** 24kHz / 48kHz WAV audio (`voiceover.wav`).

### Hindi / Hinglish Narration (`--lang hi`)
- **Engine:** **Edge-TTS** (Microsoft Neural Speech API, zero-cost, high-fidelity Indian accents).
- **Default Voice:** `hi-IN-MadhurNeural` (male energetic tech lead) or `hi-IN-SwaraNeural` (female articulate narrator).
- **Format:** 48kHz MP3/WAV audio (`voiceover.wav`).

### Script Pacing Rules:
- Keep narration between **130 – 150 Words Per Minute (WPM)**.
- Add small natural pauses (0.4s – 0.6s) between scene transitions to let visual animations breathe.

---

## 2. Background Music & Dynamic Ducking

1. **Volume Ducking Contract:**
   - While narration is speaking: Set BGM volume to **`0.16 – 0.20`** so speech is razor sharp.
   - During hook entrance or outro: Let music swell to **`0.45 – 0.55`**.
2. **Music Selection:**
   - Bundled soundtracks in `assets/music/`:
     - `tech-groove-30s.mp3`: Uptempo tech groove (124 BPM) for AI news & product demos.
     - `happy-beats-business-moves-vol-10-by-ende-dot-app.mp3`: Modern energetic groove for fast SaaS teasers.
     - `t-01-call-it-even.mp3`: Pop ballad / vinyl studio groove for artisanal apps.

---

## 3. Layered Sound Effects (SFX) Taxonomy

Bundled sound effects in `assets/sfx/` are divided into 4 categories:

| Category | Typical Asset | Best Timestamp | Psychological Effect |
|---|---|---|---|
| **Impact** | `impactBell_heavy_000.ogg`, `impact-bell.ogg` | 0.2s (Beat 1 Hook) | Commands immediate focus; resets scroll reflex. |
| **Keyboard** | `keypress-001.wav` to `keypress-032.wav` | Scene 2 / Typing prompt | Establishes developer craft; human tactile feedback. |
| **Interface** | `switch1.ogg`, `mouseclick1.ogg`, `click_001.ogg` | Mode chips & metric reveals | Confirms visual feature arrival with crisp haptic snap. |
| **Atmosphere** | `whoosh.ogg`, `rollover1.ogg` | Major scene wipe / zoom | Propels kinetic velocity into the next scene. |

---

## 4. HyperFrames HTML Audio Integration

Every sound layer is declared declaratively in `index.html`:

```html
<!-- Ducked Background Music -->
<audio data-track="bgm" src="assets/music/tech-groove-30s.mp3" data-start="0" data-duration="24" volume="0.18"></audio>

<!-- Narration Track -->
<audio data-track="voiceover" src="assets/voiceover.wav" data-start="0.3" data-duration="22.5" volume="1.0"></audio>

<!-- Sound Effects -->
<audio data-track="sfx" src="assets/sfx/impact/impactBell_heavy_000.ogg" data-start="0.2" data-duration="2.0" volume="0.85"></audio>
<audio data-track="sfx" src="assets/sfx/keyboard/keypress-001.wav" data-start="4.2" data-duration="0.3" volume="0.50"></audio>
<audio data-track="sfx" src="assets/sfx/ui/switch1.ogg" data-start="8.0" data-duration="0.5" volume="0.65"></audio>
```
