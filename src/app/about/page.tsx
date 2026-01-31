"use client";

import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

const stats = [
  { value: "2.3M+", label: "Videos Analyzed" },
  { value: "12K+", label: "Active Creators" },
  { value: "500K+", label: "Insights Generated" },
  { value: "98%", label: "Customer Satisfaction" },
];

const values = [
  {
    suit: "♠",
    suitColor: "#fafafa",
    title: "Data-Driven",
    description: "We believe in decisions backed by real data, not guesswork. Every feature we build helps creators make smarter choices.",
  },
  {
    suit: "♥",
    suitColor: "#E63946",
    title: "Creator-First",
    description: "We're creators ourselves. We understand the struggles and build tools we'd want to use for our own channels.",
  },
  {
    suit: "♦",
    suitColor: "#E63946",
    title: "Transparency",
    description: "No black boxes. We show you exactly how we analyze content and why certain patterns lead to success.",
  },
  {
    suit: "♣",
    suitColor: "#fafafa",
    title: "Continuous Innovation",
    description: "The platform evolves with YouTube. We're constantly updating our algorithms to stay ahead of trends.",
  },
];

export default function AboutPage() {
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
              Our Story
            </span>
            <h1 
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight mb-6 text-balance"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              Know the{" "}
              <span 
                className="italic"
                style={{ 
                  color: '#E63946',
                  textShadow: '0 2px 30px rgba(230, 57, 70, 0.4)',
                }}
              >
                Dealer
              </span>
            </h1>
            <p 
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              We started CreatorLuck because we were tired of guessing what makes content go viral. Now we help thousands of creators make data-driven decisions.
            </p>
          </div>

          {/* Stats section */}
          <div 
            className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 rounded-2xl p-8"
            style={{
              background: 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div 
                  className="font-serif text-4xl sm:text-5xl font-normal mb-2"
                  style={{ color: '#E63946' }}
                >
                  {stat.value}
                </div>
                <div 
                  className="font-mono text-[10px] uppercase tracking-wider"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mission section */}
          <div className="max-w-3xl mx-auto mb-24">
            <div 
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.1) 0%, transparent 70%)',
                }}
              />

              {/* Noise texture */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              <span 
                className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block relative"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Our Mission
              </span>
              <h2 
                className="font-serif text-3xl sm:text-4xl font-normal mb-6 relative"
                style={{ color: 'rgba(255,255,255,0.95)' }}
              >
                Democratize viral content creation
              </h2>
              <p 
                className="text-base leading-relaxed relative"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                The biggest channels don't succeed by accident. They have teams analyzing data, studying trends, and optimizing every aspect of their content. We built CreatorLuck to give every creator access to these same insights, leveling the playing field so that great content can rise to the top, regardless of who creates it.
              </p>
            </div>
          </div>

          {/* Values section */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span 
                className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                What We Stand For
              </span>
              <h2 
                className="font-serif text-3xl sm:text-4xl font-normal"
                style={{ color: 'rgba(255,255,255,0.95)' }}
              >
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-7 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Noise texture */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                  />

                  <div className="flex items-start gap-4 relative">
                    <span
                      className="text-3xl"
                      style={{ color: value.suitColor }}
                    >
                      {value.suit}
                    </span>
                    <div>
                      <h3 
                        className="font-serif text-xl font-normal mb-2"
                        style={{ color: 'rgba(255,255,255,0.95)' }}
                      >
                        {value.title}
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                Join the Table
              </h3>
              <p 
                className="text-sm mb-8 relative"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Become one of 12,000+ creators using CreatorLuck to grow their channels.
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
