# Security Policy 🛡️

The Reelcraft team and community take the security and integrity of our codebase, agent skills, and generated video artifacts seriously.

This document outlines our policy for reporting vulnerabilities, supported versions, and best security practices.

---

## 📦 Supported Versions

Security updates and critical bug fixes are actively provided for the following releases:

| Version | Supported | Status |
| :--- | :--- | :--- |
| `0.1.x` | ✅ Yes | Active Development & Latest Security Patches |
| `< 0.1.0` | ❌ No | Deprecated / Beta Previews |

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability in Reelcraft, **please DO NOT open a public GitHub issue**. Publicly disclosing vulnerabilities can expose users to unnecessary risk before a fix is available.

Instead, please report vulnerabilities privately:

1. **Email Directly**: Send an encrypted or confidential report to **[dusmamud0@gmail.com](mailto:dusmamud0@gmail.com)**.
2. **Subject Line**: `[SECURITY VULNERABILITY] Reelcraft — Brief Summary`.
3. **Include the Following Details**:
   - Description of the vulnerability and its potential impact.
   - Exact steps or script to reproduce the behavior.
   - Operating system and environment details (Node.js version, OS, shell).
   - Any proposed fixes or mitigation strategies (if available).

### Response Timeline
- **Initial Acknowledgement**: Within **48 hours** of report receipt.
- **Triage & Verification**: Within **5 business days**.
- **Fix & Disclosure**: We will collaborate with you to release a patch promptly and coordinate public disclosure credit.

---

## 🔒 Security Best Practices for Users & Agents

When using Reelcraft or integrating it into automated AI agent pipelines:

1. **API Keys & Credentials**:
   - Never commit `.env` files or hardcode API keys (e.g., ElevenLabs, OpenAI, HeyGen) in compositions or codebases.
   - Always load credentials via system environment variables.

2. **Automated Codebase Scans**:
   - Reelcraft scans project files to extract brand logos and colors. Always run `reelcraft` in trusted workspaces.
   - Review scripts before executing `preview` or `render` commands on unverified third-party repositories.

3. **Dependency Integrity**:
   - Keep Node.js dependencies up-to-date using `npm audit`.
   - All official releases are published via npm and tagged on GitHub.

---

## 🎖️ Attribution & Hall of Fame

We believe in recognizing researchers and community members who responsibly disclose security vulnerabilities. Valid reports will be acknowledged in our release notes (unless anonymity is requested).
