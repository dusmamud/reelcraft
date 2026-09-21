# Reelcraft Validation & Linting Specification

To eliminate expensive render failures and prevent social media content rejection, Reelcraft enforces strict **3-Tier Pre-Flight Validation**.

---

## 1. Validation Architecture

```
                 [Composition Source (HTML/CSS/JS)]
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 TIER 1: STATICGUARD LINT (<50ms)            │
│   - Unquoted CSS variables detection                        │
│   - Audio duration & missing asset checks                   │
│   - Frame count vs timing mismatch verification             │
└──────────────────────────────┬──────────────────────────────┘
                               │ (Passes with 0 errors)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│              TIER 2: CHROMIUM RUNTIME EVALUATION            │
│   - Headless DOM initialization & canvas readiness          │
│   - WCAG AA Contrast ratio audit (>= 4.5:1 for body)        │
│   - Speech pace validation (<= 145 Words Per Minute)        │
└──────────────────────────────┬──────────────────────────────┘
                               │ (Passes with 0 errors)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│              TIER 3: SAFE-ZONE GEOMETRIC AUDIT              │
│   - Top boundary check (>= 140px protected)                 │
│   - Bottom boundary check (>= 280px protected)              │
│   - Right boundary check (>= 160px protected)               │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
               [APPROVED FOR FINAL MP4 RENDER]
```

---

## 2. Rule Error Codes & Catalog

| Code | Severity | Name | Description & Resolution |
|---|---|---|---|
| `E001` | Error | `INVALID_ASPECT_RATIO` | Canvas resolution must be exactly `1080x1920` (vertical) or `1920x1080` (landscape). |
| `E002` | Error | `FRAME_RATE_MISMATCH` | Animation loop must be keyed to exactly `60fps`. |
| `E003` | Error | `MISSING_AUDIO_STEM` | Soundtrack or SFX file specified in `cues.json` is missing on disk. |
| `E004` | Error | `AUDIO_OVERRUN` | Narration track duration exceeds total video duration. Fix: Shorten script or increase duration. |
| `E005` | Warning| `EXCESSIVE_WPM` | Voiceover narration exceeds 145 WPM, degrading viewer comprehension. |
| `E006` | Error | `TOP_SAFEZONE_COLLISION` | Text or code element rendered within top 140px. Fix: Move element below `top: 140px`. |
| `E007` | Error | `BOTTOM_SAFEZONE_COLLISION`| Text or CTA rendered within bottom 280px. Fix: Move element above `bottom: 280px`. |
| `E008` | Error | `RIGHT_SAFEZONE_COLLISION` | Text element rendered within right 160px where platform buttons overlay. |
| `E009` | Warning| `POOR_CONTRAST_RATIO` | Foreground text vs background contrast is below WCAG AA `4.5:1`. |
| `E010` | Error | `UNQUOTED_CSS_VAR` | CSS var contains unquoted font names or malformed custom property syntax. |

---

## 3. Running Pre-Flight Audits

### Fast Static Lint
```bash
npx reelcraft lint .
```

### Full Headless Browser Check
```bash
npx reelcraft check .
```

If any `Error` is triggered, the build process exits with code `1` and outputs human-readable remediation suggestions.
