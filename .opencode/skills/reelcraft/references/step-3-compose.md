# Step 3: Compose in Hyperframes (9:16 Safe-Zone Rules)

Vertical video requires strict adherence to mobile platform UI overlays. If your headline is behind the Instagram reel account name or TikTok sound disc, the video will underperform.

## 9:16 Dimension Specs (1080x1920)

```
+---------------------------------------------------+
|               Top Bar Safe Area (140px)            |  <-- Avoid: System status bar / Notch
+---------------------------------------------------+
|                                                   |
|   Left    |                               | Right |
|   Safe    |        CORE CONTENT CANVAS     | Safe  |  <-- Right 140px: Like, Comment, Share
|   80px    |           (860px wide)        | 140px |
|           |                               |       |
+---------------------------------------------------+
|             Bottom Safe Area (280px)              |  <-- Avoid: Account name, caption, audio disc
+---------------------------------------------------+
```

### Safe Zone CSS Variables
Always enforce these in `:root`:
```css
:root {
  --safe-top: 140px;
  --safe-bottom: 280px;
  --safe-left: 80px;
  --safe-right: 140px;
}
```

---

## Kinetic Typography Rules

1. **Hierarchy:**
   - Hook headline: 72px – 84px (`font-weight: 800`, `line-height: 1.05`)
   - Accent badges: 24px – 28px (`font-weight: 800`, uppercase, pill container)
   - Secondary copy: 28px – 34px (`color: #94a3b8`)
   - Code font: 24px – 28px (`JetBrains Mono` or `Fira Code`)

2. **Easing & Transitions:**
   - Never use linear transitions for cards.
   - Use snappy spring / cubic-bezier curves:
     ```css
     transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
     ```

3. **Motion Contrast:**
   - Animate elements with purposeful direction:
     - Headlines slide up subtly (`translateY(24px) -> translateY(0)`).
     - Cards scale in (`scale(0.96) -> scale(1)`).
     - Ambient background spheres pulse gently in reverse.

---

## Validation Gate: `npx hyperframes check`

Before attempting to render:
```bash
npx hyperframes check
```
Every composition must pass with:
- `0 contrast errors` (WCAG AA compliance for legibility)
- `0 layout overflow errors`
- `0 missing media assets`
