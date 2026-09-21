import React, { useState } from 'react';

export default function CommandBuilder() {
  const [voice, setVoice] = useState<'off' | 'en' | 'hi'>('en');
  const [tone, setTone] = useState<string>('auto');
  const [format, setFormat] = useState<'vertical' | 'landscape'>('vertical');
  const [duration, setDuration] = useState<'15' | '20' | '30'>('20');
  const [customTopic, setCustomTopic] = useState<string>('');
  const [copied, setCopied] = useState(false);

  let cmd = '/reelcraft';

  if (customTopic.trim()) {
    cmd += ` "${customTopic.trim()}"`;
  }

  if (tone !== 'auto') {
    cmd += ` --tone ${tone}`;
  }

  if (format !== 'vertical') {
    cmd += ` --format ${format}`;
  }

  if (duration !== '20') {
    cmd += ` --duration ${duration}`;
  }

  if (voice === 'en') {
    cmd += ' --voice';
  } else if (voice === 'hi') {
    cmd += ' --voice --lang hi';
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full dev-card overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#080A10] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-xs font-mono font-medium text-slate-300 ml-2">Interactive Command Generator</span>
        </div>
        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-purple-950/60 border border-purple-700/40 text-purple-300">Universal Skill</span>
      </div>

      <div className="p-6 flex flex-col gap-6">
        {/* Topic Input */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>Autonomous Topic Mode</span>
            <span className="text-slate-500 font-normal">(Optional: leave blank to auto-inspect repository)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Physical AI & Humanoid Robotics in 2026..."
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#06080E] border border-white/[0.1] rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Voiceover Engine */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-400">Voiceover Engine</label>
            <div className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => setVoice('en')}
                className={`w-full text-left px-3 py-2 rounded text-xs font-medium border transition-colors ${
                  voice === 'en' ? 'bg-purple-950/50 border-purple-500 text-purple-200' : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200'
                }`}
              >
                🎙️ English (Kokoro-82M)
              </button>
              <button
                type="button"
                onClick={() => setVoice('hi')}
                className={`w-full text-left px-3 py-2 rounded text-xs font-medium border transition-colors ${
                  voice === 'hi' ? 'bg-purple-950/50 border-purple-500 text-purple-200' : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200'
                }`}
              >
                🇮🇳 Hindi (Edge-TTS)
              </button>
              <button
                type="button"
                onClick={() => setVoice('off')}
                className={`w-full text-left px-3 py-2 rounded text-xs font-medium border transition-colors ${
                  voice === 'off' ? 'bg-purple-950/50 border-purple-500 text-purple-200' : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200'
                }`}
              >
                🔇 No Voice (Music Only)
              </button>
            </div>
          </div>

          {/* Visual Tone */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-400">Visual Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-3 py-2 bg-[#06080E] border border-white/[0.1] rounded text-xs text-slate-200 focus:outline-none focus:border-purple-500"
            >
              <option value="auto">Auto-Detect from Project</option>
              <option value="luminous">Luminous (Light + Royal Blue)</option>
              <option value="cyberpunk">Cyberpunk (Obsidian + Cyan)</option>
              <option value="paper-and-ink">Paper & Ink (Editorial Bronze)</option>
              <option value="terminal-hacker">Terminal Hacker (Matrix Green)</option>
              <option value="apple-minimal">Apple Minimal (Monochrome)</option>
            </select>
          </div>

          {/* Format */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-400">Aspect Ratio</label>
            <div className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => setFormat('vertical')}
                className={`w-full text-left px-3 py-2 rounded text-xs font-medium border transition-colors ${
                  format === 'vertical' ? 'bg-purple-950/50 border-purple-500 text-purple-200' : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200'
                }`}
              >
                📱 9:16 Vertical (Shorts/Reels)
              </button>
              <button
                type="button"
                onClick={() => setFormat('landscape')}
                className={`w-full text-left px-3 py-2 rounded text-xs font-medium border transition-colors ${
                  format === 'landscape' ? 'bg-purple-950/50 border-purple-500 text-purple-200' : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200'
                }`}
              >
                🖥️ 16:9 Landscape (YouTube)
              </button>
            </div>
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-slate-400">Duration</label>
            <div className="grid grid-cols-3 gap-1.5">
              {(['15', '20', '30'] as const).map((dur) => (
                <button
                  key={dur}
                  type="button"
                  onClick={() => setDuration(dur)}
                  className={`py-2 rounded text-xs font-mono font-medium border text-center transition-colors ${
                    duration === dur ? 'bg-purple-950/50 border-purple-500 text-purple-200' : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {dur}s
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output Box */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 bg-[#030408] border border-purple-500/30 rounded-lg">
          <div className="flex items-center gap-3 overflow-x-auto py-1">
            <span className="text-emerald-400 font-mono font-bold select-none text-sm">$</span>
            <code className="font-mono text-sm text-slate-100 whitespace-nowrap">{cmd}</code>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-all shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <span>✓</span>
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>Copy Command</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
