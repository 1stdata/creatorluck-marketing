"use client";

import { useEffect, useState } from "react";

// YouTube-style play button and video thumbnail icons
const videoIcons = [
  // Play button
  `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`,
  // Thumbnail frame
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><polygon points="10,8 16,12 10,16" fill="currentColor"/></svg>`,
  // Video camera
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 9l4-2v10l-4-2"/></svg>`,
  // Analytics chart
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 5-6"/></svg>`,
  // Trending up
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>`,
  // Eye/view
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
];

interface FloatingIcon {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  icon: string;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
}

export function AnimatedBackground() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    // Generate random floating icons
    const generateIcons = (): FloatingIcon[] => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 30 + Math.random() * 50,
        opacity: 0.08 + Math.random() * 0.12,
        icon: videoIcons[Math.floor(Math.random() * videoIcons.length)],
        speedX: (Math.random() - 0.5) * 0.03,
        speedY: (Math.random() - 0.5) * 0.03,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
      }));
    };

    setIcons(generateIcons());

    // Animate icons
    const interval = setInterval(() => {
      setIcons(prevIcons =>
        prevIcons.map(icon => ({
          ...icon,
          x: (icon.x + icon.speedX + 100) % 100,
          y: (icon.y + icon.speedY + 100) % 100,
          rotation: icon.rotation + icon.rotationSpeed,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Gradient overlays for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
        }}
      />
      
      {/* Floating icons */}
      {icons.map(icon => (
        <div
          key={icon.id}
          className="absolute transition-all duration-1000 ease-linear"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: icon.size,
            height: icon.size,
            opacity: icon.opacity,
            color: '#ef4444',
            transform: `rotate(${icon.rotation}deg)`,
          }}
          dangerouslySetInnerHTML={{ __html: icon.icon }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
