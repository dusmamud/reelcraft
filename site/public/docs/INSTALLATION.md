# Reelcraft Installation & Setup Guide

Reelcraft can be installed as an **AI Agent Skill** across all major AI development tools, or as a **Standalone CLI tool**.

---

## 1. Universal AI Agent Skill (Recommended)

Reelcraft conforms to the universal Agent Skills specification (`skills/reelcraft/SKILL.md`).

### A. Google Antigravity
Install globally into your Antigravity skills registry:
```bash
# Windows PowerShell:
Copy-Item -Recurse -Force "E:\Tools\reelcraft\skills\reelcraft" "$HOME\.gemini\config\skills\reelcraft"
```
Or use the official `skills` CLI:
```bash
npx skills add -g https://github.com/dusmamud/reelcraft --skill reelcraft
```

### B. Claude Code
Install as a workspace skill or from the plugin marketplace:
```bash
# Add marketplace catalog:
/plugin marketplace add dusmamud/reelcraft

# Install plugin:
/plugin install reelcraft@reelcraft
```

Or symlink into `.claude/skills/reelcraft`:
```bash
# In your repo root:
mkdir -p .claude/skills
cp -r /path/to/reelcraft/skills/reelcraft .claude/skills/reelcraft
```

### C. Cursor & OpenAI Codex
Reelcraft includes universal manifests for Cursor and OpenAI Codex:
* Cursor directory: `.cursor/skills/reelcraft` or `.agents/skills/reelcraft`
* OpenCode directory: `.opencode/skills/reelcraft`

---

## 2. Standalone CLI Installation

If you prefer using Reelcraft strictly via command line:

### Using NPX (Zero Install)
```bash
npx reelcraft --help
```

### Global NPM Installation
```bash
npm install -g reelcraft
reelcraft doctor
```

---

## 3. Python Audio Engine Requirements

Reelcraft bundles Python automation scripts for voiceover and beat detection.

### Prerequisites:
* Python 3.10+
* Virtual environment or global pip:

```bash
pip install -r requirements.txt
# OR
pip install edge-tts scipy soundfile numpy
```

To enable the local **Kokoro-82M** English voiceover engine:
```bash
pip install kokoro-onnx soundfile
```

Run `reelcraft doctor` at any time to verify that all dependencies are installed.
