# Reelcraft CLI Command Reference

The Reelcraft Command-Line Interface (`bin/reelcraft.js`) provides complete control over video scaffolding, local browser previewing, AST validation, and production rendering.

---

## Command Syntax

```bash
npx reelcraft <command> [options] [target_dir]
```

Or install globally:

```bash
npm install -g reelcraft
reelcraft <command> [options]
```

---

## Commands Matrix

### 1. `reelcraft init [project-name]`
Scaffolds a new, standalone 1080×1920 60fps reel project directory.
* **Arguments:** `[project-name]` (optional, defaults to `reel-project`).
* **Flags:**
  * `--tone <preset>`: Set the initial visual tone (`luminous`, `cyberpunk`, `paper-and-ink`, `terminal-hacker`, `apple-minimal`).
  * `--format <aspect>`: Set aspect ratio (`vertical` or `landscape`).

### 2. `reelcraft preview [target_dir]`
Starts a local live development server with hot-reloading.
* **Arguments:** `[target_dir]` (defaults to current directory `.`).
* **Port:** Automatically binds to available port (default: `3000`).
* **Features:** Audio toggle, scrub bar, downbeat markers, safe-zone guidelines overlay.

### 3. `reelcraft render [options] [target_dir]`
Renders high-definition MP4 video files using headless Chromium and FFmpeg.
* **Arguments:** `[target_dir]` (defaults to `.`).
* **Flags:**
  * `--duration <15|20|30>`: Total output duration in seconds.
  * `--format <vertical|landscape>`: Aspect ratio (`1080x1920` or `1920x1080`).
  * `--voice`: Synthesizes AI voiceover narration using Kokoro or Edge-TTS.
  * `--lang <en|hi>`: Voiceover language (`en` for Kokoro-82M, `hi` for Edge-TTS).
  * `--output <dir>`: Custom destination folder (defaults to `./reel-output`).
  * `--fps <30|60>`: Video framerate (defaults to `60`).

### 4. `reelcraft lint [target_dir]`
Performs a fast static AST audit (<50ms) on HTML/CSS composition files.
* Checks unquoted CSS variables.
* Verifies audio asset paths and durations.
* Checks WCAG AA color contrast ratios.
* Returns exit code `0` on pass, `1` on failure.

### 5. `reelcraft check [target_dir]`
Runs Chromium headless validation to ensure zero dropped frames during animation.

### 6. `reelcraft doctor`
Diagnoses machine environment and external dependencies:
* `Node.js` version (>= 18 required)
* `Hyperframes` binary availability
* `Python` environment & packages (`edge-tts`, `scipy`, `soundfile`)
* `Kokoro-82M` weights status
* `FFmpeg` binary availability

### 7. `reelcraft version`
Outputs installed package version and build commit.

---

## Global Flags

* `-h, --help`: Displays help information for any command.
* `-v, --version`: Prints the version number.
* `--verbose`: Enables detailed debugging logs during compilation and render.
