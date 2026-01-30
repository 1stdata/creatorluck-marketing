"use client";

const steps = [
  {
    number: "01",
    title: "Paste a Video URL",
    description: "Drop any YouTube video link into CreatorLuck. We'll handle the rest.",
    icon: "📋",
  },
  {
    number: "02", 
    title: "Get Your Four Card Breakdown",
    description: "Our AI analyzes Hook, Retention, CTR, and Pattern signals instantly.",
    icon: "🎴",
  },
  {
    number: "03",
    title: "See What's Working",
    description: "Understand exactly what's missing or crushing it in seconds.",
    icon: "🎯",
  },
  {
    number: "04",
    title: "Apply & Grow",
    description: "Use the insights to engineer your next viral video.",
    icon: "🚀",
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(230, 57, 70, 0.03) 50%, transparent 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span 
            className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            Your Plan
          </span>
          <h2 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 text-balance"
            style={{ color: 'rgba(255,255,255,0.95)' }}
          >
            How It{" "}
            <span className="italic" style={{ color: '#E63946' }}>Works</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-12 left-full w-full h-px"
                  style={{ 
                    background: 'linear-gradient(90deg, rgba(230, 57, 70, 0.3), transparent)',
                  }}
                />
              )}
              
              <div 
                className="relative p-8 rounded-2xl h-full"
                style={{
                  background: 'linear-gradient(180deg, rgba(26, 21, 23, 0.8) 0%, rgba(20, 20, 20, 0.8) 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Noise texture */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Step number */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.2) 0%, rgba(230, 57, 70, 0.05) 100%)',
                    border: '1px solid rgba(230, 57, 70, 0.3)',
                  }}
                >
                  <span 
                    className="font-mono text-sm font-bold"
                    style={{ color: '#E63946' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="font-serif text-xl font-normal mb-3"
                  style={{ color: 'rgba(255,255,255,0.95)' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
