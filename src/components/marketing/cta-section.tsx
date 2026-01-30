"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

export function CtaSection() {
  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.1) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden"
          style={{
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 100px rgba(230, 57, 70, 0.1)',
          }}
        >
          {/* Left panel - Dark */}
          <div 
            className="p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
              borderRight: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            {/* Noise texture */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Card suits decoration */}
            <div className="flex gap-2 mb-8">
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 24 }}>♠</span>
              <span style={{ color: 'rgba(230, 57, 70, 0.4)', fontSize: 24 }}>♥</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 24 }}>♣</span>
              <span style={{ color: 'rgba(230, 57, 70, 0.4)', fontSize: 24 }}>♦</span>
            </div>

            <h2 
              className="font-serif text-5xl sm:text-6xl font-normal leading-[0.95] mb-6"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              Stop
              <br />
              <span className="italic" style={{ color: '#E63946' }}>Gambling</span>
            </h2>

            <p 
              className="text-base leading-relaxed max-w-sm"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Most creators guess. The successful ones use data. 
              Read the cards before you play them.
            </p>
          </div>

          {/* Right panel - Red */}
          <div 
            className="p-10 lg:p-16 flex flex-col justify-center items-start relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #E63946 0%, #c1121f 100%)',
            }}
          >
            {/* Subtle pattern overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <p 
              className="text-lg leading-relaxed mb-10 max-w-sm relative z-10"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              The algorithm isn&apos;t random. Learn to read it with data-driven insights that actually work.
            </p>

            <SignedOut>
              <a 
                href={`${APP_URL}/sign-up`} 
                className="relative px-8 py-4 font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] inline-block overflow-hidden group"
                style={{
                  backgroundColor: '#0D0D0D',
                  color: '#ffffff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
              >
                {/* Shine effect */}
                <span 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <span style={{ color: '#E63946' }}>♠</span>
                  Deal Me In
                </span>
              </a>
            </SignedOut>

            <SignedIn>
              <a 
                href={`${APP_URL}/dashboard`} 
                className="px-8 py-4 font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] inline-block"
                style={{
                  backgroundColor: '#0D0D0D',
                  color: '#ffffff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
              >
                Go to Dashboard
              </a>
            </SignedIn>

            {/* Floating suit */}
            <span 
              className="absolute bottom-6 right-6 text-6xl"
              style={{ color: 'rgba(0,0,0,0.15)' }}
            >
              ♠
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
