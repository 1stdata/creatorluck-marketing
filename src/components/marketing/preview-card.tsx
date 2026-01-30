"use client";

import { useEffect, useState } from "react";

export function PreviewCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [floatY, setFloatY] = useState(0);

  // Floating animation
  useEffect(() => {
    let frame = 0;
    const animate = () => {
      frame += 0.015;
      setFloatY(Math.sin(frame) * 8);
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className="relative cursor-pointer perspective-1000"
      style={{
        width: 300,
        height: 390,
        transform: `translateY(${floatY}px) rotate(9deg)`,
        transition: "transform 0.1s ease-out",
        filter: 'drop-shadow(0 35px 70px rgba(0, 0, 0, 0.6))',
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Glow behind card - stronger */}
        <div 
          className="absolute -inset-12 rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.18) 0%, transparent 65%)',
            filter: 'blur(30px)',
          }}
        />
        
        {/* Front of card */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            background: "linear-gradient(145deg, #1a1517 0%, #0d0d0d 100%)",
            border: "1px solid rgba(230, 57, 70, 0.25)",
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.7), 0 0 50px rgba(230, 57, 70, 0.12)",
          }}
        >
          {/* Thumbnail area - YouTube thumbnail composition */}
          <div 
            className="relative h-44 overflow-hidden"
            style={{ 
              background: "linear-gradient(145deg, #252020 0%, #1a1517 100%)",
            }}
          >
            {/* Background texture - subtle noise/grain */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
            
            {/* Person silhouette - classic YouTube thumbnail pose */}
            <div className="absolute bottom-0 right-4 w-24 h-32">
              <svg viewBox="0 0 100 140" fill="none" className="w-full h-full opacity-20">
                {/* Head */}
                <circle cx="50" cy="25" r="20" fill="white"/>
                {/* Body */}
                <path d="M30 50 L50 45 L70 50 L75 100 L60 100 L55 70 L45 70 L40 100 L25 100 Z" fill="white"/>
                {/* Pointing arm */}
                <path d="M70 55 L95 35 L98 40 L75 62 Z" fill="white"/>
              </svg>
            </div>
            
            {/* Text block suggestion - top left */}
            <div className="absolute top-4 left-4 space-y-1">
              <div className="w-20 h-3 rounded" style={{ backgroundColor: 'rgba(230, 57, 70, 0.3)' }} />
              <div className="w-28 h-2.5 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
              <div className="w-16 h-2.5 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
            </div>
            
            {/* Accent element - arrow or highlight */}
            <div 
              className="absolute top-8 right-16 w-8 h-8 rounded-full"
              style={{ backgroundColor: 'rgba(230, 57, 70, 0.25)' }}
            />
            
            {/* Subtle color wash */}
            <div 
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at 70% 60%, rgba(230, 57, 70, 0.15) 0%, transparent 50%)",
              }}
            />
            
            {/* Play button - red filled */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
                style={{ 
                  backgroundColor: "#E63946",
                  boxShadow: "0 4px 20px rgba(230, 57, 70, 0.5)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            
            {/* Duration badge */}
            <div 
              className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-medium"
              style={{ backgroundColor: "rgba(0,0,0,0.9)", color: "rgba(255,255,255,0.95)" }}
            >
              12:34
            </div>
          </div>

          {/* Card content */}
          <div className="p-5">
            {/* Hook Score */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#a1a1a1" }}>
                Hook Score
              </span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold" style={{ color: "#22c55e" }}>94</span>
                <span className="text-sm" style={{ color: "#a1a1a1" }}>/100</span>
              </div>
            </div>

            {/* Viral Pattern */}
            <div className="mb-4">
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#a1a1a1" }}>
                Viral Pattern
              </span>
              <p className="text-sm font-medium mt-1" style={{ color: "#fafafa" }}>
                Curiosity Gap + Reveal
              </p>
            </div>

            {/* Estimated Views */}
            <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #262626" }}>
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#a1a1a1" }}>
                Est. Views
              </span>
              <span className="text-lg font-bold" style={{ color: "#E63946" }}>2.4M</span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(145deg, #E63946 0%, #c1121f 100%)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(239, 68, 68, 0.2)",
          }}
        >
          {/* Card back pattern */}
          <div className="absolute inset-4 rounded-xl" style={{ border: "2px solid rgba(255,255,255,0.2)" }}>
            <div className="absolute inset-2 rounded-lg" style={{ border: "1px solid rgba(255,255,255,0.1)" }} />
          </div>
          
          {/* Logo pattern */}
          <div className="relative text-center">
            <div className="text-6xl mb-2 font-serif" style={{ color: "rgba(255,255,255,0.9)" }}>
              ♠ ♥
            </div>
            <div className="text-xl font-bold tracking-tight" style={{ color: "#fff" }}>
              Creator<span style={{ opacity: 0.8 }}>Luck</span>
            </div>
            <div className="text-6xl mt-2 font-serif" style={{ color: "rgba(255,255,255,0.9)" }}>
              ♦ ♣
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
