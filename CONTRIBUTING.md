# Contributing to Reelcraft 🎬

First off, thank you for considering contributing to **Reelcraft**! It's people like you who make Reelcraft such a powerful, cinematic tool for developers and creators worldwide.

Whether you're fixing a typo in the documentation, adding a new viral hook formula, optimizing the Hyperframes render pipeline, or creating audio sound packs, your help is warmly welcomed.

---

## 📜 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please report unacceptable behavior to [dusmamud0@gmail.com](mailto:dusmamud0@gmail.com).

---

## 🌟 Ways to Contribute

1. **Bug Reports**: Report reproducible bugs or platform glitches (Windows, macOS, Linux).
2. **Feature Requests & Ideas**: Suggest new sound designs, motion graphics, audio sync formulas, or agent integrations.
3. **Motion Graphics & Templates**: Contribute new Remotion/Hyperframes canvas animations or 9:16 layout templates.
4. **Documentation**: Improve guides, CLI manuals, or showcase tutorials.
5. **Code & Bug Fixes**: Submit Pull Requests to improve the CLI, validation engine, or Astro landing showcase.

---

## 🛠️ Local Development Setup

### 1. Prerequisites
Ensure you have the following installed on your system:
- **Node.js**: `v18.0.0` or higher ([nodejs.org](https://nodejs.org/))
- **npm** or **pnpm**
- **Python**: `3.10` or higher (optional, required for local Kokoro/Edge-TTS narration generation)
- **FFmpeg**: (optional, required for local audio concatenation and headless video rendering)

### 2. Fork & Clone
```bash
# Fork the repository on GitHub, then clone your fork:
git clone https://github.com/dusmamud/reelcraft.git
cd reelcraft
```

### 3. Install Root Dependencies
```bash
npm install
```

### 4. Test the CLI Locally
```bash
# Run CLI directly
node ./bin/reelcraft.js --help

# Run system doctor diagnostics
node ./bin/reelcraft.js doctor
```

### 5. Running the Showcase Landing Page
The interactive showcase website is built with **Astro 7.3.3 + React + Tailwind CSS v4**:
```bash
cd site
npm install
npm run dev
```
Open `http://localhost:4321` in your browser to preview the live landing page and interactive 3D hero components.

---

## 🧪 Testing & Validation

Before submitting any changes, verify that the project builds cleanly without errors:

```bash
# 1. Test CLI execution
node ./bin/reelcraft.js doctor

# 2. Test Astro showcase build
cd site
npm run build
cd ..
```

---

## 🔀 Pull Request Process

1. **Create a Feature Branch**:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Commit Conventions**:
   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` for new capabilities or templates
   - `fix:` for bug fixes
   - `docs:` for documentation updates
   - `refactor:` for code improvements that don't alter functionality
   - `perf:` for performance optimizations
   - `test:` for adding or updating test suites

3. **Push to Your Fork**:
   ```bash
   git push -u origin feat/your-feature-name
   ```

4. **Open a Pull Request**:
   - Go to [github.com/dusmamud/reelcraft/pulls](https://github.com/dusmamud/reelcraft/pulls).
   - Provide a clear summary of what your PR changes.
   - Reference any related issues (e.g., `Closes #12`).
   - If UI changes were made, attach a screenshot or recording.

---

## 💬 Community Discussions & Q&A

Have questions about video templates, custom audio, or CI/CD pipelines?
- Join the conversations on [GitHub Discussions](https://github.com/dusmamud/reelcraft/discussions).
- Check answered Q&As for common recipes (like audio flags, mobile safe-zones, and headless rendering).

---

## 📄 Licensing

By contributing to Reelcraft, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
