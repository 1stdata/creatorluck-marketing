"use client";

import { useState } from "react";
import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

const features = [
  {
    number: "01",
    suit: "♠",
    suitColor: "#fafafa",
    title: "Hook Analysis",
    description: "Discover what makes the first 3 seconds of top-performing videos so compelling.",
    details: [
      "Frame-by-frame breakdown",
      "Opening line effectiveness",
      "Pattern recognition across niches",
    ],
  },
  {
    number: "02",
    suit: "♥",
    suitColor: "#E63946",
    title: "Retention Tracking",
    description: "See exactly where viewers drop off and learn why they stay engaged.",
    details: [
      "Watch time analysis",
      "Drop-off point identification",
      "Engagement pattern insights",
    ],
  },
  {
    number: "03",
    suit: "♣",
    suitColor: "#fafafa",
    title: "CTR Optimization",
    description: "Decode the psychology behind thumbnails and titles that get clicked.",
    details: [
      "Thumbnail scoring",
      "Title effectiveness analysis",
      "A/B testing insights",
    ],
  },
  {
    number: "04",
    suit: "♦",
    suitColor: "#E63946",
    title: "Viral Pattern Detection",
    description: "Uncover the hidden DNA that makes videos go viral in your niche.",
    details: [
      "Cross-video pattern matching",
      "Trend identification",
      "Viral signal scoring",
    ],
  },
  {
    number: "05",
    suit: "♥",
    suitColor: "#E63946",
    title: "Channel Intelligence",
    description: "Analyze any channel to understand their winning content strategy.",
    details: [
      "Upload frequency analysis",
      "Best performing content types",
      "Growth trajectory insights",
    ],
  },
  {
    number: "06",
    suit: "♠",
    suitColor: "#fafafa",
    title: "Niche Explorer",
    description: "Discover trending topics and underserved content opportunities.",
    details: [
      "Topic popularity tracking",
      "Competition analysis",
      "Content gap identification",
    ],
  },
];

export default function FeaturesPage() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />
        <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
          {/* Hero section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span 
              className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Powerful Tools
            </span>
            <h1 
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight mb-6 text-balance"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              Your Winning{" "}
              <span 
                className="italic"
                style={{ 
                  color: '#E63946',
                  textShadow: '0 2px 30px rgba(230, 57, 70, 0.4)',
                }}
              >
                Deck
              </span>
            </h1>
            <p 
              className="text-lg max-w-xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Every tool you need to decode viral content and create videos that perform.
            </p>
          </div>

          {/* Features grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredFeature(feature.number)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{
                  transform: hoveredFeature === feature.number ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'transform 300ms ease-out',
                }}
              >
                {/* Card glow on hover */}
                <div 
                  className="absolute -inset-3 rounded-3xl pointer-events-none transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.15) 0%, transparent 70%)',
                    opacity: hoveredFeature === feature.number ? 1 : 0,
                    filter: 'blur(15px)',
                  }}
                />
                
                <div
                  className="relative rounded-2xl p-7 flex flex-col h-full min-h-[280px] overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
                    border: hoveredFeature === feature.number 
                      ? '1px solid rgba(230, 57, 70, 0.4)' 
                      : '1px solid rgba(255,255,255,0.06)',
                    boxShadow: hoveredFeature === feature.number
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
                  <div className="flex justify-between items-start mb-6">
                    <span 
                      className="font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: 'rgba(255,255,255,0.35)' }}
                    >
                      {feature.number}
                    </span>
                    <span
                      className="text-3xl leading-none transition-all duration-300"
                      style={{ 
                        color: feature.suitColor,
                        transform: hoveredFeature === feature.number ? 'scale(1.15) rotate(8deg)' : 'scale(1)',
                        filter: feature.suitColor === '#E63946' && hoveredFeature === feature.number 
                          ? 'drop-shadow(0 0 8px rgba(230, 57, 70, 0.5))' 
                          : 'none',
                      }}
                    >
                      {feature.suit}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    className="font-serif text-2xl font-normal leading-none mb-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {feature.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-2 mt-auto">
                    {feature.details.map((detail, i) => (
                      <li 
                        key={i}
                        className="flex items-center gap-2 text-xs"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        <span style={{ color: '#E63946', fontSize: 8 }}>♦</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center">
            <div 
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.15) 0%, transparent 70%)',
                }}
              />
              
              <h3 
                className="font-serif text-3xl font-normal mb-4 relative"
                style={{ color: 'rgba(255,255,255,0.95)' }}
              >
                Ready to Stack the Deck?
              </h3>
              <p 
                className="text-sm mb-8 relative"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Start analyzing videos with 3 free searches today.
              </p>
              <a
                href={`${APP_URL}/sign-up`}
                className="relative inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #E63946, #B91C2C)',
                  color: '#ffffff',
                  boxShadow: '0 4px 20px rgba(230, 57, 70, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <span style={{ fontSize: 14 }}>♠</span>
                <span>Get Started Free</span>
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
