# Step 4: Render, Poster & Social Distribution Bundle

Once composition passes all checks, render the final video artifact and package it with promotional assets.

---

## 1. Video Rendering Commands

### Option A: Interactive Browser Preview (Realtime, No GPU Load)
```powershell
npx hyperframes preview <output-dir>/composition
```
Opens an instant web preview player to inspect timing, audio playback, and typography without waiting for encoding.

### Option B: Local MP4 Render (Standard Quality, 1080p 30/60fps)
```powershell
npx hyperframes render --quality standard --resolution 1080p --fps 30 --format mp4 --output <output-dir>/reel.mp4 <output-dir>/composition
```

### Option C: Cloud Render (Fastest Export, Zero Laptop Strain)
```powershell
npx hyperframes cloud render --quality standard --resolution 1080p --fps 30 --format mp4 --output <output-dir>/reel.mp4 <output-dir>/composition
```

---

## 2. High-Contrast Poster Frame Extraction

Always extract a crisp thumbnail image for the Instagram/TikTok cover:

```powershell
ffmpeg -y -ss 00:00:01 -i <output-dir>/reel.mp4 -vframes 1 -q:v 2 -update 1 <output-dir>/poster.jpg
```

*Note: Selecting Frame 1.0s or Frame 1.5s usually captures the peak of the hook animation with fully-settled typography.*

---

## 3. Viral Social Caption Bundle (`captions.txt`)

Generate ready-to-post promotional copy formatted for Instagram Reels, YouTube Shorts, and TikTok:

### Formula for `captions.txt`:
1. **Hook Line (With Emoji):** Repeats or enhances the video's pattern-interrupt hook.
2. **The Context / 3 Value Bullets:** Concise technical summary of the breakthrough.
3. **The Call-to-Action:** Clear engagement prompt ("Comment 'REEL'", "Link in bio", "Drop your thoughts below").
4. **15 Targeted Hashtags:** A curated mix of broad AI, niche developer, and trending hashtags.

### Example Template:
```text
[Emoji] [Hook Statement from Beat 1]! 🚀

[2-sentence context explaining the problem and why this breakthrough matters].

Here is what you need to know:
⚡ [Feature / Metric 1]
⚡ [Feature / Metric 2]
⚡ [Feature / Metric 3]

[Direct Call-to-Action: e.g. "What do you think about this? Drop your thoughts below! 👇" / "Try it today · link in bio"].

Follow @[brand] for daily bleeding-edge tech & AI breakdowns.

#TechReel #ArtificialIntelligence #Coding #SoftwareEngineering #DeepTech #FutureTech #DevCommunity #IndieHacker #WebDev #OpenSource #TechNews #Innovation #ProductHunt #ViralVideo #Developers
```
