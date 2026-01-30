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
  driftX: number;
  driftY: number;
  driftSpeed: number;
  driftOffset: number;
  isRed: boolean;
  depth: number; // 0 = far, 1 = close
}

export function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const frameRef = useRef(0);

  useEffect(() => {
    // Generate floating card suits with depth variation
    const generateElements = (): FloatingElement[] => {
      return Array.from({ length: 16 }, (_, i) => {
        const suit = cardSuits[i % 4];
        const isRed = suit === "♥" || suit === "♦";
        const depth = Math.random(); // 0-1, affects size/opacity/parallax
        
        return {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          baseX: Math.random() * 100,
          baseY: Math.random() * 100,
          size: 30 + depth * 50, // 30-80px based on depth
          opacity: 0.02 + depth * 0.06, // 2-8% based on depth
          suit,
          driftX: 15 + Math.random() * 25, // 15-40px drift
          driftY: 15 + Math.random() * 25,
          driftSpeed: 15 + Math.random() * 15, // 15-30 second loops
          driftOffset: Math.random() * Math.PI * 2,
          isRed,
          depth,
        };
      });
    };

    setElements(generateElements());

    // Smooth drift animation
    const animate = () => {
      frameRef.current += 0.016; // ~60fps
      setElements(prev =>
        prev.map(el => {
          const time = frameRef.current;
          const xOffset = Math.sin(time / el.driftSpeed + el.driftOffset) * el.driftX;
          const yOffset = Math.cos(time / el.driftSpeed + el.driftOffset * 0.7) * el.driftY;
          
          return {
            ...el,
            x: el.baseX + xOffset * 0.01,
            y: el.baseY + yOffset * 0.01,
          };
        })
      );
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
      {/* Premium dark background */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#0D0D0D' }}
      />

      {/* Gradient overlays */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(230, 57, 70, 0.1) 0%, transparent 50%)',
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
          background: 'radial-gradient(ellipse at 100% 100%, rgba(230, 57, 70, 0.07) 0%, transparent 40%)',
        }}
      />

      {/* Floating card suits with parallax */}
      {elements.map(el => {
        // Parallax offset based on mouse position and depth
        const parallaxX = (mousePos.x - 0.5) * 20 * el.depth;
        const parallaxY = (mousePos.y - 0.5) * 20 * el.depth;
        
        // Pulse opacity for red suits
        const pulseOpacity = el.isRed 
          ? el.opacity * (0.8 + Math.sin(frameRef.current * 0.5 + el.driftOffset) * 0.2)
          : el.opacity;

        return (
          <div
            key={el.id}
            className="absolute font-serif select-none transition-transform duration-1000 ease-out"
            style={{
              left: `calc(${el.x}% + ${parallaxX}px)`,
              top: `calc(${el.y}% + ${parallaxY}px)`,
              fontSize: el.size,
              opacity: pulseOpacity,
              color: el.isRed ? '#E63946' : 'rgba(255,255,255,0.8)',
              textShadow: el.isRed 
                ? '0 0 60px rgba(230, 57, 70, 0.4)' 
                : '0 0 40px rgba(255, 255, 255, 0.15)',
              filter: `blur(${(1 - el.depth) * 1}px)`,
            }}
          >
            {el.suit}
          </div>
        );
      })}

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cinematic vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0, 0, 0, 0.5) 100%)',
        }}
      />
    </div>
  );
}
