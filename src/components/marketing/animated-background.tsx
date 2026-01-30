"use client";

import { useEffect, useState, useRef } from "react";

const cardSuits = ["♠", "♥", "♦", "♣"];

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  suit: string;
  baseX: number;
  baseY: number;
  rotation: number;
  rotationSpeed: number;
  isRed: boolean;
  depth: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  drift: number;
}

export function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const frameRef = useRef(0);

  useEffect(() => {
    // Generate floating card suits with varied sizes and opacities
    const generateElements = (): FloatingElement[] => {
      return Array.from({ length: 20 }, (_, i) => {
        const suit = cardSuits[i % 4];
        const isRed = suit === "♥" || suit === "♦";
        const depth = Math.random();
        
        return {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          baseX: Math.random() * 100,
          baseY: Math.random() * 100,
          size: 20 + depth * 60, // 20-80px varied sizes
          opacity: 0.08 + depth * 0.22, // 8-30% opacity
          suit,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.1, // slow rotation
          isRed,
          depth,
        };
      });
    };

    // Generate ambient particles (dust in casino lighting)
    const generateParticles = (): Particle[] => {
      return Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 2, // 2-4px
        speed: 20 + Math.random() * 20, // 20-40 seconds to rise
        opacity: 0.05 + Math.random() * 0.05, // 5-10%
        drift: (Math.random() - 0.5) * 20, // horizontal drift
      }));
    };

    setElements(generateElements());
    setParticles(generateParticles());

    // Animation loop
    const animate = () => {
      frameRef.current += 0.016;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base dark background */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#0D0D0D' }}
      />

      {/* Gradient overlays for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(230, 57, 70, 0.08) 0%, transparent 50%)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 0% 50%, rgba(230, 57, 70, 0.05) 0%, transparent 40%)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 100% 100%, rgba(230, 57, 70, 0.06) 0%, transparent 40%)',
        }}
      />

      {/* Floating card suits with parallax and rotation */}
      {elements.map(el => {
        // Parallax offset based on mouse position and depth
        const parallaxX = (mousePos.x - 0.5) * 20 * el.depth;
        const parallaxY = (mousePos.y - 0.5) * 20 * el.depth;
        const rotation = el.rotation + frameRef.current * el.rotationSpeed * 100;

        return (
          <div
            key={el.id}
            className="absolute font-serif select-none"
            style={{
              left: `calc(${el.baseX}% + ${parallaxX}px)`,
              top: `calc(${el.baseY}% + ${parallaxY}px)`,
              fontSize: el.size,
              opacity: el.opacity,
              color: el.isRed ? '#E63946' : 'rgba(255,255,255,0.7)',
              textShadow: el.isRed 
                ? '0 0 40px rgba(230, 57, 70, 0.5)' 
                : '0 0 30px rgba(255, 255, 255, 0.2)',
              transform: `rotate(${rotation}deg)`,
              filter: `blur(${(1 - el.depth) * 1.5}px)`,
              transition: 'left 0.3s ease-out, top 0.3s ease-out',
            }}
          >
            {el.suit}
          </div>
        );
      })}

      {/* Ambient particles - dust in casino lighting */}
      {particles.map(p => (
        <div
          key={`particle-${p.id}`}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            backgroundColor: 'rgba(255,255,255,0.8)',
            opacity: p.opacity,
            filter: 'blur(1px)',
            animation: `floatUp ${p.speed}s linear infinite`,
            animationDelay: `${-p.speed * Math.random()}s`,
          }}
        />
      ))}

      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />

      {/* CSS animations */}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-20px) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
