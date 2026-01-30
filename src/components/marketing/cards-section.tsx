"use client";

import { useState } from "react";

const cards = [
  {
    number: "01",
    suit: "♠",
    suitColor: "#fafafa",
    title: "Hook",
    description: "First 3 seconds determine everything. We analyze what makes viewers stay.",
    score: 85,
    metric: "Attention Capture",
  },
  {
    number: "02",
    suit: "♥",
    suitColor: "#E63946",
    title: "Retention",
    description: "The patterns that lock attention. Where viewers drop and why.",
    score: 72,
    metric: "Watch Time",
  },
  {
    number: "03",
    suit: "♣",
    suitColor: "#fafafa",
    title: "CTR",
    description: "Thumbnail psychology decoded. What makes them click.",
    score: 91,
    metric: "Click Rate",
  },
  {
    number: "04",
    suit: "♦",
    suitColor: "#E63946",
    title: "Pattern",
    description: "Your edge. Insights from 1.2M video database.",
    score: 78,
    metric: "Viral Potential",
  },
];

export function CardsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Background elements */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.08) 0%, transparent 60%)',
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span 
            className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            The Analytics Deck
          </span>
          <h2 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 text-balance"
            style={{ color: 'rgba(255,255,255,0.95)' }}
          >
            Four Cards That Predict{" "}
            <span className="italic" style={{ color: '#E63946' }}>Success</span>
          </h2>
          <p 
            className="text-lg max-w-lg mx-auto"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Every viral video shares the same winning hand. Learn to read it.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <div
              key={card.number}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard(card.number)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === card.number ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'transform 300ms ease-out',
              }}
            >
              {/* Card glow on hover */}
              <div 
                className="absolute -inset-3 rounded-3xl pointer-events-none transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.15) 0%, transparent 70%)',
                  opacity: hoveredCard === card.number ? 1 : 0,
                  filter: 'blur(15px)',
                }}
              />
              
              <div
                className="relative rounded-2xl p-7 flex flex-col h-full overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
                  border: hoveredCard === card.number 
                    ? '1px solid rgba(230, 57, 70, 0.4)' 
                    : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: hoveredCard === card.number
                    ? '0 20px 40px rgba(0,0,0,0.5), 0 0 60px rgba(230, 57, 70, 0.1)'
                    : '0 10px 30px rgba(0,0,0,0.3)',
                  transition: 'all 300ms ease-out',
                }}
              >
                {/* Noise texture */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Card header */}
                <div className="flex justify-between items-start mb-8">
                  <span 
                    className="font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {card.number}
                  </span>
                  <span
                    className="text-3xl leading-none transition-all duration-300"
                    style={{ 
                      color: card.suitColor,
                      transform: hoveredCard === card.number ? 'scale(1.15) rotate(8deg)' : 'scale(1)',
                      filter: card.suitColor === '#E63946' && hoveredCard === card.number 
                        ? 'drop-shadow(0 0 8px rgba(230, 57, 70, 0.5))' 
                        : 'none',
                    }}
                  >
                    {card.suit}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="font-serif text-3xl font-normal leading-none mb-3"
                  style={{ color: 'rgba(255,255,255,0.95)' }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {card.description}
                </p>

                {/* Score section */}
                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-2">
                    <div className="flex items-baseline gap-1">
                      <span 
                        className="font-serif text-4xl font-normal leading-none"
                        style={{ color: 'rgba(255,255,255,0.95)' }}
                      >
                        {card.score}
                      </span>
                      <span 
                        className="text-sm"
                        style={{ color: 'rgba(255,255,255,0.3)' }}
                      >
                        /100
                      </span>
                    </div>
                    <span 
                      className="font-mono text-[9px] uppercase tracking-wider"
                      style={{ color: 'rgba(255,255,255,0.35)' }}
                    >
                      {card.metric}
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div 
                    className="h-1 rounded-full overflow-hidden"
                    style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <div 
                      className="h-full rounded-full transition-all duration-700"
                      style={{ 
                        width: `${card.score}%`, 
                        background: 'linear-gradient(90deg, #E63946, #c1121f)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
