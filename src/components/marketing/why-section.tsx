"use client";

export function WhySection() {
  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section header */}
        <span 
          className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          The Difference
        </span>
        
        <h2 
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-8 text-balance"
          style={{ color: 'rgba(255,255,255,0.95)' }}
        >
          Why{" "}
          <span className="italic" style={{ color: '#E63946' }}>CreatorLuck</span>?
        </h2>

        {/* Key differentiator */}
        <div 
          className="rounded-3xl p-10 lg:p-14 mb-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          }}
        >
          {/* Noise texture */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Card suits */}
          <div className="flex justify-center gap-4 mb-8">
            <span className="text-3xl" style={{ color: 'rgba(255,255,255,0.15)' }}>♠</span>
            <span className="text-3xl" style={{ color: 'rgba(230, 57, 70, 0.3)' }}>♥</span>
            <span className="text-3xl" style={{ color: 'rgba(255,255,255,0.15)' }}>♣</span>
            <span className="text-3xl" style={{ color: 'rgba(230, 57, 70, 0.3)' }}>♦</span>
          </div>

          <p 
            className="text-xl lg:text-2xl leading-relaxed mb-6"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Other tools show you <span style={{ color: 'rgba(255,255,255,0.4)' }}>what</span> went viral.
          </p>
          
          <p 
            className="text-2xl lg:text-3xl font-serif leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.95)' }}
          >
            We show you{" "}
            <span className="italic" style={{ color: '#E63946' }}>why</span>.
          </p>
        </div>

        {/* Tagline */}
        <p 
          className="text-xl lg:text-2xl font-medium"
          style={{ color: 'rgba(255,255,255,0.8)' }}
        >
          Stop guessing. Start{" "}
          <span style={{ color: '#E63946' }}>engineering</span>.
        </p>
      </div>
    </section>
  );
}
