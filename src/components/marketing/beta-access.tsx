"use client";

// TODO: Re-enable after Design Mode changes
// import { SignedIn, SignedOut } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

export function BetaAccess() {
  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div 
          className="rounded-3xl p-10 lg:p-16 relative overflow-hidden text-center"
          style={{
            background: 'linear-gradient(135deg, #E63946 0%, #c1121f 100%)',
            boxShadow: '0 30px 60px rgba(230, 57, 70, 0.3), 0 0 100px rgba(230, 57, 70, 0.15)',
          }}
        >
          {/* Pattern overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Floating suits */}
          <span 
            className="absolute top-8 left-8 text-4xl"
            style={{ color: 'rgba(0,0,0,0.15)' }}
          >
            ♠
          </span>
          <span 
            className="absolute bottom-8 right-8 text-4xl"
            style={{ color: 'rgba(0,0,0,0.15)' }}
          >
            ♦
          </span>

          {/* Content */}
          <div className="relative z-10">
            <span 
              className="font-mono text-xs uppercase tracking-[0.25em] mb-4 block"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Limited Access
            </span>

            <h2 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6"
              style={{ color: '#ffffff' }}
            >
              Only <span className="italic">100</span> Spots
            </h2>

            <p 
              className="text-lg lg:text-xl leading-relaxed mb-4 max-w-lg mx-auto"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              We're only accepting 100 creators into the current beta.
            </p>

            <p 
              className="text-base leading-relaxed mb-10 max-w-md mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              3 free video analyses. No credit card required.
              <br />
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>
                Bonus: "Top 5 Viral Hook Formulas for 2026" PDF included.
              </span>
            </p>

            {/* TODO: Re-enable after Design Mode changes */}
              <a 
                href={`${APP_URL}/sign-up`} 
                className="inline-flex items-center gap-3 px-10 py-5 font-semibold text-lg rounded-xl transition-all duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: '#0D0D0D',
                  color: '#ffffff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                }}
              >
                <span style={{ color: '#E63946' }}>♠</span>
                Start Winning the Algorithm
              </a>

            <p 
              className="mt-6 text-sm"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Try CreatorLuck risk-free. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
