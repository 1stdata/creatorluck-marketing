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
        width: 280,
        height: 360,
        transform: `translateY(${floatY}px) rotate(6deg)`,
        transition: "transform 0.1s ease-out",
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
        {/* Front of card */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            background: "linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(239, 68, 68, 0.1)",
          }}
        >
          {/* Thumbnail area */}
          <div 
            className="relative h-40 overflow-hidden"
            style={{ 
              background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
            }}
          >
            {/* Blurred video thumbnail effect */}
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(45deg, #E63946 0%, #1a1a1a 50%, #E63946 100%)",
                opacity: 0.3,
                filter: "blur(20px)",
              }}
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: "rgba(230, 57, 70, 0.9)",
                  boxShadow: "0 4px 20px rgba(230, 57, 70, 0.4)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Duration badge */}
            <div 
              className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs font-medium"
              style={{ backgroundColor: "rgba(0,0,0,0.8)", color: "#fff" }}
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
