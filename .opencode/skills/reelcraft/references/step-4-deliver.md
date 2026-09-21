# Step 4: Validate, Render, and Deliver

Step 4 packages the composition into high-converting video and distribution assets.

## The 3 Deliverables

When the render completes, `<output-dir>/` must contain:

1. **`reel.mp4`**: High quality 1080x1920 60fps MP4 video under 25MB (optimized for Instagram & TikTok algorithms).
2. **`poster.jpg`**: The thumbnail image extracted from the most impactful moment (baked as frame 0).
3. **`caption.txt`**: Ready-to-copy social post with an engaging first line, curiosity hook, and 15 targeted hashtags.

---

## Render Execution

Run inside `<output-dir>/composition`:

```bash
npx hyperframes render --output "../reel.mp4"
```

Hyperframes compiles the HTML/CSS/JS scenes frame-by-frame using Chromium and muxes the audio tracks via FFmpeg.

---

## Thumbnail Poster Extraction

Instagram and TikTok feed algorithms rely heavily on the visual contrast of Frame 0.

- Choose a frame where the main headline is fully visible and illuminated.
- Avoid frames where transitions are mid-fade or blank.
- Export as `<output-dir>/poster.jpg`.

---

## Caption Generator Formula

Write `<output-dir>/caption.txt` adhering to this viral structure:

```text
[Hook line repeating the video's primary claim]
[2-line explanation of the problem]

Here is how it works:
1. [Key benefit 1]
2. [Key benefit 2]
3. [Key benefit 3]

👇 [Call To Action: Comment a keyword for code / repo link]
Save this reel so you don't forget it when you build your next project!

#developer #softwareengineer #aitools #techtok #coding #programming #webdevelopment #indiehackers #buildinpublic #techreels #reelsviral #frontend #backend #javascript #python
```
