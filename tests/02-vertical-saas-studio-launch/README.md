# StepGaana 30-Second Product Video Setup

This directory contains the complete, production-ready 30-second vertical video composition (1080x1920, 30fps) for **StepGaana: AI Music Studio**, built using HyperFrames.

---

## Directory Structure

```text
video/
├── INSPECTION.md          # Comprehensive project inspection & token analysis
├── SCENE_PLAN.md          # 7-scene 30-second timeline & motion design contract
├── COPY_REVIEW.md         # Text & claim authenticity audit
├── README.md              # Documentation & usage guide
├── composition/           # Standalone HyperFrames composition
│   ├── index.html         # 1080x1920 30-second animated composition
│   └── assets/            # Self-contained fonts, images, audio, and SFX
├── assets/                # Source graphic assets
├── audio/                 # Source music and sound effects
├── scripts/               # Validation scripts
└── renders/               # Output directory for rendered MP4s
```

---

## Technical Specifications
- **Duration:** Exactly 30.0 seconds (`data-duration="30"`).
- **Aspect Ratio:** 9:16 vertical (1080x1920).
- **Frame Rate:** 30 fps.
- **Theme:** "Paper & Ink & One Bronze Note" (Light Mode Canvas, `--field: #F2F2F0`).
- **Music:** Flagship song *"Call It Even"* (`t-01-call-it-even.mp3`).
- **SFX:** Impact bell, mechanical keyboard typing, UI mode switch, and tactile needle drop.

---

## Safe Validation Commands (No Cloud Quota Consumed)

To inspect and validate the composition locally without rendering:

```powershell
# Check composition structure and timing rules
npx hyperframes lint video/composition

# Run full browser, runtime, layout, and contrast checks
npx hyperframes check video/composition

# Open interactive live preview in browser
npx hyperframes preview video/composition
```

---

## Final Rendering Commands (When Ready)

### 1. Cloud Render (Recommended — Fast, No Laptop Load)
```powershell
npx hyperframes cloud render --quality standard --resolution 1080p --fps 30 --format mp4 --output renders/stepgaana-30s-launch.mp4 video/composition
```

### 2. Local Render (Renders directly on your laptop)
```powershell
npx hyperframes render --quality standard --resolution 1080p --fps 30 --format mp4 --output renders/stepgaana-30s-launch.mp4 video/composition
```
