# Video Copy Review: StepGaana 30-Second Launch

This document audits all on-screen copy used in the 30-second vertical video composition to ensure 100% authenticity to the StepGaana product and prevent fabricated marketing claims.

---

## 1. On-Screen Copy Audit

| Scene | Time | Text Element | Exact Copy | Source in Repository | Status |
|---|---|---|---|---|---|
| **Scene 1** | 0.0s – 2.5s | Brand Title | **StepGaana** | `static/app.html` L69, `tokens.css` L2 | Confirmed |
| **Scene 1** | 0.0s – 2.5s | Brand Flourish | *Music* | `static/app.html` L69 (`brand-wm i`) | Confirmed |
| **Scene 1** | 0.0s – 2.5s | Engine Badge | **StepAudio 3** | `server.py`, `README.md` | Confirmed |
| **Scene 2** | 2.5s – 6.0s | Eyebrow | **AI-POWERED MUSIC STUDIO** | `static/index.html` L6 | Confirmed |
| **Scene 2** | 2.5s – 6.0s | Hook Headline | **What if you could turn words into *music?*** | Official campaign hook | Confirmed |
| **Scene 3** | 6.0s – 12.0s | Studio Header | **Describe in words · Hear a complete song** | `static/app.html` L7 | Confirmed |
| **Scene 3** | 6.0s – 12.0s | Prompt Text | *"A Chinese pop ballad with a live-room feel, female vocal, G minor, 74 BPM..."* | `static/assets/js/data.js` Track `t-01` caption | Confirmed |
| **Scene 3** | 6.0s – 12.0s | Inspiration Chips | `Pop Ballad`, `Female Vocal`, `G Minor`, `74 BPM` | `static/assets/js/data.js` Track `t-01` tags | Confirmed |
| **Scene 4** | 12.0s – 18.0s | Section Header | **CHOOSE YOUR CREATION MODE** | `static/app.html` creation flow | Confirmed |
| **Scene 4** | 12.0s – 18.0s | Mode 1 Title/Sub | **Song Creation** / Text to complete song | `static/assets/js/data.js` SECTIONS[0] | Confirmed |
| **Scene 4** | 12.0s – 18.0s | Mode 2 Title/Sub | **Instrumental** / Pure musical tracks | `static/assets/js/data.js` SECTIONS[1] | Confirmed |
| **Scene 4** | 12.0s – 18.0s | Mode 3 Title/Sub | **Vocal to Music** / Harmonize recordings | `static/assets/js/data.js` SECTIONS[2] | Confirmed |
| **Scene 4** | 12.0s – 18.0s | Mode 4 Title/Sub | **Music Cover** / Style remixing | `static/assets/js/data.js` SECTIONS[3] | Confirmed |
| **Scene 5** | 18.0s – 24.0s | Album Label | **Call It Even** | `static/assets/js/data.js` Track `t-01` title | Confirmed |
| **Scene 6** | 24.0s – 27.0s | Track Name | **Call It Even** | `static/assets/js/data.js` Track `t-01` title | Confirmed |
| **Scene 6** | 24.0s – 27.0s | Track Tags | **Pop Ballad · Female Vocal · G Minor** | `static/assets/js/data.js` Track `t-01` tags | Confirmed |
| **Scene 6** | 24.0s – 27.0s | Timecode | **02:33** | `static/assets/js/data.js` (153s = 02:33) | Confirmed |
| **Scene 6** | 24.0s – 27.0s | Tagline Quote | **Describe in words, hear a complete *song.*** | `static/app.html` L7 | Confirmed |
| **Scene 7** | 27.0s – 30.0s | Outro Title | **StepGaana *Music*** | Brand identity | Confirmed |
| **Scene 7** | 27.0s – 30.0s | Outro Subtitle | **StepAudio 3 AI Music Studio** | Engine identity | Confirmed |
| **Scene 7** | 27.0s – 30.0s | CTA Button | **Start Creating · stepgaana.app** | Target launch URL | Confirmed |
| **Scene 7** | 27.0s – 30.0s | Creator Credit | **Built by Dus Mamud** | `static/app.html` L8 (`author`) | Confirmed |

---

## 2. Policy Verification
- [x] Zero fake testimonials.
- [x] Zero fake user numbers or stream metrics.
- [x] Zero unverified claims.
- [x] All prompt text and tags match actual showcase data in `data.js`.
- [x] Author attribution matches `<meta name="author" content="Dus Mamud">`.
- [x] Tagline matches `<meta name="description" content="StepGaana — Describe in words, hear a complete song.">`.
