#!/usr/bin/env node

import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Read version dynamically from package.json
const pkgPath = path.resolve(ROOT_DIR, 'package.json');
let pkg = { version: '0.1.0' };
try {
  pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
} catch (e) {}

const args = process.argv.slice(2);
const command = args[0] || '--help';

const BANNER = `
  \x1b[38;2;99;102;241m╔══════════════════════════════════════════════════════╗
  ║  \x1b[1m\x1b[38;2;255;255;255m🎬 REELCRAFT\x1b[0m \x1b[38;2;148;163;184mv${pkg.version} — 9:16 Viral Video Engine\x1b[38;2;99;102;241m      ║
  ╚══════════════════════════════════════════════════════╝\x1b[0m
`;

function printHelp() {
  console.log(BANNER);
  console.log(`  \x1b[1mUSAGE:\x1b[0m
    $ npx reelcraft <command> [options]
    $ reelcraft <command> [options]

  \x1b[1mCOMMANDS:\x1b[0m
    \x1b[36minit\x1b[0m [dir]              Scaffold a new 9:16 vertical reel project
    \x1b[36mlint\x1b[0m [dir]              Lint composition HTML (media IDs, durations, missing tags)
    \x1b[36mcheck\x1b[0m [dir]             Full runtime & browser audit (contrast, safe-zones, overflow)
    \x1b[36mpreview\x1b[0m [dir]           Launch interactive browser preview (zero render lag)
    \x1b[36mrender\x1b[0m [dir]            Render composition to MP4 + poster.jpg + captions.txt
    \x1b[36mhooks\x1b[0m                   Display 12 battle-tested viral tech hook formulas
    \x1b[36mupdate\x1b[0m                  Check for available package updates on npm
    \x1b[36mdoctor\x1b[0m                  Inspect Node.js, FFmpeg, and Hyperframes environment

  \x1b[1mOPTIONS:\x1b[0m
    --tone <preset>        Aesthetic tone: luminous, paper-and-ink, cyberpunk, terminal-hacker
    --format <ratio>       Aspect ratio: vertical (default, 1080x1920), landscape (1920x1080)
    --quality <level>      Render quality: draft, standard (default), high
    --fps <rate>           Target frame rate: 30 (default) or 60
    --voice                Enable AI narration (Kokoro-82M by default, Edge-TTS for Hindi)
    --lang <en|hi>         Voiceover language: en (default) or hi (Hindi/Hinglish)
    --version, -v          Display installed Reelcraft version
    --help, -h             Show this comprehensive help menu

  \x1b[1mAGENT SKILL INTEGRATION:\x1b[0m
    In Google Antigravity, Claude Code, Cursor, or Codex:
    Type \x1b[33m/reelcraft\x1b[0m inside any project directory!

  \x1b[1mAUTHOR & REPOSITORY:\x1b[0m
    Author: \x1b[32mDus Mamud\x1b[0m (@dusmamud)
    GitHub: \x1b[34mhttps://github.com/dusmamud/reelcraft\x1b[0m
  `);
}

function initProject(targetDir = 'reel-output') {
  const resolvedTarget = path.resolve(process.cwd(), targetDir);
  const templateDir = path.resolve(ROOT_DIR, 'skills/reelcraft/assets/templates/base-reel');

  if (fs.existsSync(resolvedTarget)) {
    console.log(`\x1b[33m⚠️  Target directory ${targetDir} already exists. Using timestamped directory...\x1b[0m`);
    const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    return initProject(`${targetDir}-${ts}`);
  }

  fs.mkdirSync(resolvedTarget, { recursive: true });
  const compDir = path.join(resolvedTarget, 'composition');
  fs.mkdirSync(compDir, { recursive: true });

  if (fs.existsSync(templateDir)) {
    fs.cpSync(templateDir, compDir, { recursive: true });
  } else {
    fs.writeFileSync(path.join(compDir, 'index.html'), `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=1080, height=1920, initial-scale=1.0">
  <title>Reelcraft Composition</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; height: 1920px; background: #070a13; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; }
    h1 { font-size: 72px; text-align: center; }
  </style>
</head>
<body>
  <div id="root" class="scene-clip" data-composition-id="root" data-no-timeline data-width="1080" data-height="1920" data-start="0" data-duration="20">
    <h1>🎬 Reelcraft Initialized</h1>
  </div>
</body>
</html>`);
  }

  // Create plan template
  fs.writeFileSync(path.join(resolvedTarget, 'reel-plan.md'), `# Reel Storyboard: ${path.basename(process.cwd())}

- **Format:** 9:16 Vertical (1080x1920)
- **Duration:** 20.0s
- **Theme:** Luminous Tech / Cyberpunk
- **Hook (0-3s):** Stop making boring demos in 2026.
`);

  console.log(`\x1b[32m✔ Scaffolded new 9:16 vertical reel in:\x1b[0m \x1b[1m${targetDir}/\x1b[0m`);
  console.log(`\nNext steps:
  1. cd ${targetDir}
  2. npx reelcraft preview
  3. npx reelcraft render
`);
}

function lintProject(targetDir = 'reel-output/composition') {
  const resolved = path.resolve(process.cwd(), targetDir);
  console.log(`\x1b[36m🔍 Linting composition in:\x1b[0m ${resolved}`);
  try {
    execSync(`npx hyperframes lint "${resolved}"`, { stdio: 'inherit' });
    console.log(`\x1b[32m✔ Hyperframes lint completed successfully!\x1b[0m`);
  } catch (err) {
    console.error(`\x1b[31m✖ Lint found issues. Review fixes above.\x1b[0m`);
    process.exit(1);
  }
}

function checkProject(targetDir = 'reel-output/composition') {
  const resolved = path.resolve(process.cwd(), targetDir);
  console.log(`\x1b[36m🔍 Running full runtime & contrast check in:\x1b[0m ${resolved}`);
  try {
    execSync(`npx hyperframes check "${resolved}"`, { stdio: 'inherit' });
    console.log(`\x1b[32m✔ All browser checks, contrast, and layout audits passed!\x1b[0m`);
  } catch (err) {
    console.error(`\x1b[31m✖ Check failed. Review logs above.\x1b[0m`);
    process.exit(1);
  }
}

function previewProject(targetDir = 'reel-output/composition') {
  const resolved = path.resolve(process.cwd(), targetDir);
  console.log(`\x1b[36m🌐 Starting interactive preview for:\x1b[0m ${resolved}`);
  try {
    execSync(`npx hyperframes preview "${resolved}"`, { stdio: 'inherit' });
  } catch (err) {
    console.log(`\x1b[33mPreview server closed.\x1b[0m`);
  }
}

function renderProject(targetDir = 'reel-output') {
  const resolved = path.resolve(process.cwd(), targetDir);
  let compDir = path.join(resolved, 'composition');
  if (!fs.existsSync(compDir) && fs.existsSync(path.join(resolved, 'index.html'))) {
    compDir = resolved;
  }
  const outFile = path.join(resolved, 'reel.mp4');
  const posterFile = path.join(resolved, 'poster.jpg');

  if (!fs.existsSync(compDir)) {
    console.error(`\x1b[31m✖ Composition directory not found: ${compDir}\x1b[0m`);
    process.exit(1);
  }

  console.log(`\x1b[36m🚀 Rendering 9:16 vertical video to:\x1b[0m ${outFile}`);
  try {
    execSync(`npx hyperframes render --quality standard --resolution 1080p --fps 30 --format mp4 --output "${outFile}" "${compDir}"`, { stdio: 'inherit' });
    console.log(`\x1b[32m✔ Render complete: ${outFile}\x1b[0m`);

    // Extract frame 1 thumbnail
    try {
      execSync(`ffmpeg -y -ss 00:00:01 -i "${outFile}" -vframes 1 -q:v 2 -update 1 "${posterFile}"`, { stdio: 'ignore' });
      console.log(`\x1b[32m✔ High-contrast poster thumbnail extracted: ${posterFile}\x1b[0m`);
    } catch (e) {}

    // Write captions
    const captionPath = path.join(resolved, 'captions.txt');
    if (!fs.existsSync(captionPath)) {
      const caption = `Stop making boring screen recordings in 2026. 🚀

Meet Reelcraft — code-driven 9:16 vertical reels with kinetic motion graphics, studio narration, and beat-synced sound design.

⚡ One-line CLI: $ npx reelcraft init
⚡ 9:16 Mobile Native Safe Zones (No blocked text)
⚡ 4-Beat Retention Curve (Instant hook, zero swipe-away)

Try it on your project today:
$ npx reelcraft init

#Reelcraft #DeveloperTools #TechReels #Coding #SoftwareEngineering #WebDev #OpenSource #IndieHacker #TechNews #ViralVideo #Programming #DevCommunity`;
      fs.writeFileSync(captionPath, caption);
      console.log(`\x1b[32m✔ Viral share caption written: ${captionPath}\x1b[0m`);
    }
  } catch (err) {
    console.error(`\x1b[31m✖ Render failed.\x1b[0m`);
    process.exit(1);
  }
}

function showHooks() {
  console.log(BANNER);
  console.log(`\x1b[1m🔥 12 PROVEN VIRAL TECH HOOK FORMULAS (0–3 SECONDS):\x1b[0m\n`);
  const hooks = [
    ["1. Paradigm Shift", "Stop doing [Normal Way]. In 2026, we do this instead."],
    ["2. Extreme Contrast", "This 200-line script replaces an entire $5,000 SaaS platform."],
    ["3. Silicon Valley Secret", "Why is nobody in Silicon Valley talking about [Topic]?"],
    ["4. Urgent Warning", "Stop writing [X] by hand in 2026. Do this instead."],
    ["5. Provocative Question", "What if you could turn words into full studio-mastered music?"],
    ["6. Speed Demon", "A 60fps kinetic motion video generated from code in 4.2 seconds."],
    ["7. Free vs Expensive", "This free open-source model just outperformed a $20/month subscription."],
    ["8. Future Shock", "Physical AI and humanoid robotics just reached sub-millimeter precision."],
    ["9. Developer Cheat Code", "I built the ultimate developer cheat code for [Task]."],
    ["10. Reverse Psychology", "Whatever you do, don't use this tool unless you want [Benefit]."],
    ["11. Metric Flex", "From zero to 10,000 requests per second in 30 lines of code."],
    ["12. Direct Challenge", "Are you still recording screens manually? Why haven't you switched?"]
  ];

  hooks.forEach(([title, formula]) => {
    console.log(`  \x1b[35m● ${title}:\x1b[0m\n    \x1b[37m"${formula}"\x1b[0m\n`);
  });
}

function checkUpdate() {
  console.log(BANNER);
  console.log(`  Current Version: \x1b[36mv${pkg.version}\x1b[0m`);
  console.log(`  Checking npm registry for updates...\n`);
  try {
    const latest = execSync(`npm view ${pkg.name} version`, { stdio: 'pipe' }).toString().trim();
    if (latest && latest !== pkg.version) {
      console.log(`  \x1b[33m⚡ Update available:\x1b[0m \x1b[31mv${pkg.version}\x1b[0m ➔ \x1b[32mv${latest}\x1b[0m`);
      console.log(`  Run to upgrade:`);
      console.log(`    \x1b[1m$ npm install -g ${pkg.name}@latest\x1b[0m\n`);
    } else {
      console.log(`  \x1b[32m✔ You are running the latest version of Reelcraft (v${pkg.version})!\x1b[0m\n`);
    }
  } catch (e) {
    console.log(`  \x1b[33mNote: Package is in local development mode (v${pkg.version}).\x1b[0m\n`);
  }
}

function runDoctor() {
  console.log(BANNER);
  console.log(`\x1b[1m🩺 REELCRAFT SYSTEM HEALTH CHECK\x1b[0m\n`);

  // Node check
  console.log(`  Node.js:      \x1b[32m✔ ${process.version}\x1b[0m`);

  // Python check
  try {
    const pyVer = execSync('python --version', { stdio: 'pipe' }).toString().trim();
    console.log(`  Python:       \x1b[32m✔ ${pyVer}\x1b[0m`);
  } catch (e) {
    console.log(`  Python:       \x1b[33m⚠️  Not found on PATH (Required for Edge-TTS Hindi narration)\x1b[0m`);
  }

  // FFmpeg check
  try {
    const ffmpegVer = execSync('ffmpeg -version', { stdio: 'pipe' }).toString().split('\n')[0];
    console.log(`  FFmpeg:       \x1b[32m✔ ${ffmpegVer}\x1b[0m`);
  } catch (e) {
    console.log(`  FFmpeg:       \x1b[31m✖ Missing (Required for poster extraction & video stitching)\x1b[0m`);
  }

  // Hyperframes check
  try {
    execSync('npx hyperframes --version', { stdio: 'pipe' });
    console.log(`  Hyperframes:  \x1b[32m✔ Installed & accessible via npx\x1b[0m`);
  } catch (e) {
    console.log(`  Hyperframes:  \x1b[33m⚠️  Run 'npx hyperframes' to ensure Chromium dependencies are downloaded\x1b[0m`);
  }
  console.log();
}

// Route commands
switch (command) {
  case 'init':
    initProject(args[1]);
    break;
  case 'lint':
    lintProject(args[1]);
    break;
  case 'check':
    checkProject(args[1]);
    break;
  case 'render':
    renderProject(args[1]);
    break;
  case 'preview':
    previewProject(args[1]);
    break;
  case 'hooks':
    showHooks();
    break;
  case 'update':
    checkUpdate();
    break;
  case 'doctor':
    runDoctor();
    break;
  case '--version':
  case '-v':
    console.log(`v${pkg.version}`);
    break;
  case '--help':
  case '-h':
  default:
    printHelp();
    break;
}
