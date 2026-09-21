# AutoAgent CLI (Example Benchmark Project)

> An autonomous agent that reads Git issues, writes unit-tested code, and submits pull requests in under 60 seconds.

## Features
- **Deterministic Workflows:** Zero hallucinated loops.
- **Local LLM Support:** Runs on Ollama or remote APIs.
- **Self-Healing Tests:** Automatically repairs failing test assertions.

## Quickstart
```bash
npm install -g autoagent-cli
autoagent run --issue 42
```
