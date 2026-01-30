"use client";

import { useEffect, useState } from "react";

// Elegant card suits for the luck/cards theme
const cardSuits = ["♠", "♥", "♦", "♣"];

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  suit: string;
  speedX: number;
  speedY: number;
  isRed: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedY: number;
}

export function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate elegant floating card suits
    const generateElements = (): FloatingElement[] => {
      return Array.from({ length: 12 }, (_, i) => {
        const suit = cardSuits[i % 4];
        const isRed = suit === "♥" || suit === "♦";
        return {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 40 + Math.random() * 60,
          opacity: 0.04 + Math.random() * 0.04,
          suit,
          speedX: (Math.random() - 0.5) * 0.008,
          speedY: (Math.random() - 0.5) * 0.008,
          isRed,
        };
      });
    };

    // Generate subtle bokeh particles
    const generateParticles = (): Particle[] => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        opacity: 0.1 + Math.random() * 0.2,
        speedY: -0.01 - Math.random() * 0.02,
      }));
    };

    setElements(generateElements());
    setParticles(generateParticles());

    // Slow, elegant animation
    const interval = setInterval(() => {
      setElements(prev =>
        prev.map(el => ({
          ...el,
          x: (el.x + el.speedX + 100) % 100,
          y: (el.y + el.speedY + 100) % 100,
        }))
      );
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          y: p.y + p.speedY < 0 ? 100 : p.y + p.speedY,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Premium gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(239, 68, 68, 0.08) 0%, transparent 60%)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 0% 50%, rgba(239, 68, 68, 0.04) 0%, transparent 40%)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 100% 80%, rgba(239, 68, 68, 0.06) 0%, transparent 40%)',
        }}
      />

      {/* Floating bokeh particles */}
      {particles.map(p => (
        <div
          key={`particle-${p.id}`}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            backgroundColor: '#ef4444',
            boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
          }}
        />
      ))}

      {/* Elegant floating card suits */}
      {elements.map(el => (
        <div
          key={el.id}
          className="absolute font-serif select-none"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: el.size,
            opacity: el.opacity,
            color: el.isRed ? '#ef4444' : '#ffffff',
            textShadow: el.isRed 
              ? '0 0 40px rgba(239, 68, 68, 0.3)' 
              : '0 0 40px rgba(255, 255, 255, 0.1)',
            transition: 'all 2s ease-out',
          }}
        >
          {el.suit}
        </div>
      ))}

      {/* Subtle vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />
    </div>
  );
}
