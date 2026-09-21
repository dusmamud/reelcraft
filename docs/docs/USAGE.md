# Reelcraft Usage Guide & Workflows

Learn how to use Reelcraft to transform any code repository, CLI tool, or technical topic into high-converting 9:16 vertical videos.

---

## 1. Quick Start

### Mode A: Inside Your AI Coding Assistant
If you use **Google Antigravity**, **Claude Code**, **Cursor**, or **OpenCode**, invoke Reelcraft directly via slash command:

```bash
# In the root of your project:
/reelcraft
```

Reelcraft will:
1. Automatically inspect your project name, logo, colors, and key features.
2. Draft a 4-beat retention storyboard in `reel-plan.md`.
3. Synthesize voiceover, sync beat downbeats, and build the 60fps composition.
4. Render the final MP4 video into `reel-output/reel.mp4`.

---

## 2. Autonomous Topic Mode (Zero-Codebase Mode)

You do not need an existing codebase to generate a video. You can provide any topic, prompt, or article title:

```bash
# Tech explainer on robotics:
/reelcraft "Physical AI & Humanoid Robotics in 2026" --voice

# Deep-dive on database architecture:
/reelcraft "Why Vector Databases Are Taking Over LLM Memory" --tone cyberpunk

# Multilingual Hindi video:
/reelcraft "Understanding Git Internals in 20 Seconds" --lang hi --voice
```

---

## 3. Standalone CLI Usage

Reelcraft can be used from any terminal without an AI assistant:

### Scaffolding a New Reel Project
```bash
npx reelcraft init my-reel
cd my-reel
```

### Previewing in Browser (Instant 60fps)
```bash
npx reelcraft preview .
```
Opens a local browser preview running in real-time with hot-reloading and audio toggling.

### Rendering Production MP4
```bash
npx reelcraft render .
```

Options:
* `--duration 15|20|30`: Target duration in seconds (default: `20`).
* `--format vertical|landscape`: `vertical` (1080×1920) or `landscape` (1920×1080).
* `--tone luminous|cyberpunk|paper-and-ink|terminal-hacker|apple-minimal`: Aesthetic preset.
* `--voice`: Generate AI voiceover narration.
* `--lang en|hi`: Select English (Kokoro-82M) or Hindi (Edge-TTS).

### System Health Audit
```bash
npx reelcraft doctor
```
Verifies that Node.js, Python, Hyperframes, Kokoro TTS, and Edge-TTS dependencies are properly installed.

---

## 4. Visual Tones & Presets

| Tone Preset | Background | Accent Color | Typography | Best For |
|---|---|---|---|---|
| `luminous` | `#06080E` (Obsidian) | `#8B5CF6` (Royal Violet) | Inter / Outfit | Modern SaaS, DevTools, Web3 |
| `cyberpunk` | `#020408` (Dark Void) | `#06B6D4` (Neon Cyan) | JetBrains Mono | Systems, AI Models, Cyber Security |
| `paper-and-ink` | `#FAF8F5` (Warm Cream) | `#C2410C` (Rust / Bronze) | Playfair / Serif | Audio Studios, Writing, Editorial |
| `terminal-hacker` | `#0C0C0C` (CRT Black) | `#22C55E` (Matrix Green) | Fira Code | CLIs, Linux utilities, DevOps |
| `apple-minimal` | `#F5F5F7` (Pure Off-white) | `#1D1D1F` (Charcoal) | SF Pro Display | Hardware, Clean Apps, Design Tools |

---

## 5. Output Deliverables Structure

Every Reelcraft run exports a complete, self-contained `reel-output/` bundle:

```
reel-output/
├── reel.mp4           # 1080×1920 60fps H.264+AAC video (ready to post)
├── poster.jpg         # High-contrast Frame-1 cover thumbnail
├── captions.txt       # Post copy formatted with hook + 15 targeted hashtags
├── reel-plan.md       # Complete 4-beat storyboard with timing cue breakdown
└── composition/       # Editable HTML5/CSS3/JS source code + audio stems
```

You can upload `reel.mp4` directly to Instagram Reels, TikTok, YouTube Shorts, LinkedIn, or Twitter/X.
