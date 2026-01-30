"use client";

import { useEffect, useState, useRef } from "react";

export function PreviewCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDealt, setIsDealt] = useState(false);
  const frameRef = useRef(0);
  const [floatY, setFloatY] = useState(0);

  // Deal-in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsDealt(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Subtle floating animation
  useEffect(() => {
    const animate = () => {
      frameRef.current += 0.012;
      setFloatY(Math.sin(frameRef.current) * 6);
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div 
      className="relative"
      style={{ width: 320, height: 480 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight glow behind entire card stack */}
      <div 
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(230, 57, 70, 0.15) 0%, rgba(230, 57, 70, 0) 60%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Third card (back) */}
      <div
        className="absolute rounded-2xl"
        style={{
          width: 320,
          height: 420,
          left: 30,
          top: 30 + floatY * 0.3,
          transform: `rotate(-1deg)`,
          opacity: isDealt ? 0.3 : 0,
          filter: 'brightness(0.5)',
          background: 'linear-gradient(145deg, #1A1A1A 0%, #141414 100%)',
          border: '1px solid rgba(255,255,255,0.04)',
          transition: 'all 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms',
          transformOrigin: 'center center',
        }}
      />

      {/* Second card (middle) */}
      <div
        className="absolute rounded-2xl"
        style={{
          width: 320,
          height: 420,
          left: 15,
          top: 15 + floatY * 0.6,
          transform: `rotate(3deg)`,
          opacity: isDealt ? 0.6 : 0,
          filter: 'brightness(0.7)',
          background: 'linear-gradient(145deg, #1A1A1A 0%, #141414 100%)',
          border: '1px solid rgba(255,255,255,0.05)',
          transition: 'all 500ms cubic-bezier(0.34, 1.56, 0.64, 1) 100ms',
          transformOrigin: 'center center',
        }}
      />

      {/* Main card */}
      <div
        className="absolute rounded-2xl overflow-hidden cursor-pointer"
        style={{
          width: 320,
          height: 420,
          left: 0,
          top: floatY,
          transform: isDealt 
            ? `rotate(${isHovered ? 4 : 6}deg) translateY(${isHovered ? -8 : 0}px) translateX(${isDealt ? 0 : 200}px)`
            : 'rotate(25deg) translateX(200px)',
          opacity: isDealt ? 1 : 0,
          background: 'linear-gradient(145deg, #1A1A1A 0%, #141414 100%)',
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: isHovered
            ? '6px 6px 0px #0D0D0D, 0px 35px 60px rgba(0,0,0,0.6), 0px 0px 120px rgba(230,57,70,0.25)'
            : '4px 4px 0px #0D0D0D, 0px 25px 50px rgba(0,0,0,0.5), 0px 0px 100px rgba(230,57,70,0.15)',
          transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
          transformOrigin: 'center center',
        }}
      >
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'multiply',
          }}
        />

        {/* Thumbnail area with blurred MrBeast-style composition */}
        <div 
          className="relative overflow-hidden"
          style={{ 
            height: 180,
            background: 'linear-gradient(145deg, #2a2020 0%, #1a1517 100%)',
          }}
        >
          {/* Blurred thumbnail simulation - MrBeast style composition */}
          {/* Background color blocks suggesting thumbnail */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #1a1517 0%, #252020 50%, #1a1517 100%)',
            }}
          />
          
          {/* Yellow/gold accent (signature MrBeast color) */}
          <div 
            className="absolute top-2 left-3 w-24 h-8 rounded"
            style={{ 
              backgroundColor: 'rgba(212, 175, 55, 0.35)',
              filter: 'blur(8px)',
            }}
          />
          
          {/* Red accent block */}
          <div 
            className="absolute top-8 left-8 w-20 h-6 rounded"
            style={{ 
              backgroundColor: 'rgba(230, 57, 70, 0.4)',
              filter: 'blur(6px)',
            }}
          />

          {/* Person silhouette - centered, recognizable pose */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-36"
            style={{ filter: 'blur(3px)' }}
          >
            <svg viewBox="0 0 100 140" fill="none" className="w-full h-full opacity-25">
              {/* Head */}
              <circle cx="50" cy="22" r="18" fill="white"/>
              {/* Body/torso */}
              <path d="M32 45 L50 40 L68 45 L72 95 L58 95 L55 65 L45 65 L42 95 L28 95 Z" fill="white"/>
              {/* Arms - excited pose */}
              <path d="M32 50 L10 30 L15 25 L38 48 Z" fill="white"/>
              <path d="M68 50 L90 30 L85 25 L62 48 Z" fill="white"/>
            </svg>
          </div>

          {/* Text overlay blocks */}
          <div className="absolute top-4 right-4 space-y-1.5">
            <div 
              className="w-16 h-4 rounded"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', filter: 'blur(2px)' }}
            />
            <div 
              className="w-12 h-3 rounded"
              style={{ backgroundColor: 'rgba(230, 57, 70, 0.3)', filter: 'blur(2px)' }}
            />
          </div>

          {/* Color wash */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 70%, rgba(230, 57, 70, 0.2) 0%, transparent 60%)',
            }}
          />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200"
              style={{ 
                backgroundColor: '#E63946',
                boxShadow: '0 4px 25px rgba(230, 57, 70, 0.5)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Duration badge */}
          <div 
            className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-semibold"
            style={{ backgroundColor: 'rgba(0,0,0,0.9)', color: 'white' }}
          >
            12:34
          </div>
        </div>

        {/* Card content */}
        <div className="p-5">
          {/* Hook Score */}
          <div className="mb-4">
            <span 
              className="text-[10px] font-medium uppercase tracking-[0.15em] block mb-2"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Hook Score
            </span>
            <div className="flex items-baseline gap-1">
              <span 
                className="text-5xl font-bold leading-none"
                style={{ color: '#E63946' }}
              >
                97
              </span>
              <span 
                className="text-xl"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                /100
              </span>
            </div>
            {/* Progress bar */}
            <div 
              className="h-1 rounded-full mt-2 overflow-hidden"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <div 
                className="h-full rounded-full"
                style={{ 
                  width: '97%',
                  background: 'linear-gradient(90deg, #E63946, #c1121f)',
                }}
              />
            </div>
          </div>

          {/* Viral Pattern */}
          <div className="mb-4">
            <span 
              className="text-[10px] font-medium uppercase tracking-[0.15em] block mb-1"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Viral Pattern
            </span>
            <p 
              className="text-base font-medium"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              Challenge + Stakes + Reveal
            </p>
          </div>

          {/* Estimated Views */}
          <div 
            className="pt-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span 
              className="text-[10px] font-medium uppercase tracking-[0.15em] block mb-1"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Est. Views
            </span>
            <span 
              className="text-3xl font-bold"
              style={{ color: '#22C55E' }}
            >
              142M
            </span>
          </div>

          {/* Card branding */}
          <div 
            className="flex items-center gap-1.5 mt-4 pt-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <span style={{ color: '#E63946', fontSize: 14 }}>♠</span>
            <span 
              className="text-xs font-semibold tracking-wide"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              CreatorLuck
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
