import React, { useState, useRef } from 'react';

interface VideoTrack {
  id: string;
  name: string;
  tag: string;
  duration: string;
  src: string;
  poster: string;
}

const REELS: VideoTrack[] = [
  {
    id: '01',
    name: 'Tech Explainer',
    tag: 'Physical AI · 2026',
    duration: '30.0s',
    src: '/reelcraft/tests/01-vertical-tech-explainer/video.mp4',
    poster: '/reelcraft/tests/01-vertical-tech-explainer/poster.jpg'
  },
  {
    id: '02',
    name: 'SaaS Launch',
    tag: 'StepGaana AI',
    duration: '30.0s',
    src: '/reelcraft/tests/02-vertical-saas-studio-launch/video.mp4',
    poster: '/reelcraft/tests/02-vertical-saas-studio-launch/poster.jpg'
  },
  {
    id: '03',
    name: 'Kinetic Teaser',
    tag: 'Fast Sprint',
    duration: '20.0s',
    src: '/reelcraft/tests/03-vertical-kinetic-saas-teaser/video.mp4',
    poster: '/reelcraft/tests/03-vertical-kinetic-saas-teaser/poster.jpg'
  }
];

export default function ThreeHeroPhone() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const activeReel = REELS[activeIdx];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setTilt({ x: ny * 8, y: nx * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.src = REELS[idx].src;
      videoRef.current.poster = REELS[idx].poster;
      videoRef.current.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div
      className="relative w-full max-w-[340px] sm:max-w-[360px] mx-auto py-4 flex flex-col items-center select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Smartphone Frame with Perspective Tilt */}
      <div
        className="relative w-[280px] sm:w-[310px] aspect-[9/19] rounded-[44px] p-3 bg-gradient-to-b from-[#2a2d3d] via-[#151722] to-[#0c0d14] border-2 border-slate-600/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_1px_1px_rgba(255,255,255,0.1)] transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Inner Titanium Bezel */}
        <div className="relative w-full h-full rounded-[36px] bg-black overflow-hidden border border-slate-700/50 flex flex-col">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 inset-x-0 mx-auto w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2 gap-1 border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
          </div>

          {/* Video Screen */}
          <video
            ref={videoRef}
            src={activeReel.src}
            poster={activeReel.poster}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover z-10"
          />
        </div>
      </div>

      {/* Floating Controls Bar */}
      <div className="w-full max-w-[320px] mt-4 flex flex-col gap-2">
        {/* Switcher Tabs */}
        <div className="flex bg-[#0B0E17]/95 border border-white/10 rounded-full p-1 gap-1 shadow-md">
          {REELS.map((reel, index) => (
            <button
              key={reel.id}
              onClick={() => handleSelect(index)}
              className={`flex-1 py-1 px-2.5 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                index === activeIdx
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="font-mono text-[10px] opacity-75">#{reel.id}</span>
              <span className="text-[11px]">{reel.name}</span>
            </button>
          ))}
        </div>

        {/* Status & Control */}
        <div className="flex items-center justify-between bg-[#0B0E17] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200 text-xs">{activeReel.tag}</span>
            <span className="font-mono text-[10px] text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">{activeReel.duration}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                  <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              )}
            </button>
            <button
              onClick={toggleMute}
              className="p-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
