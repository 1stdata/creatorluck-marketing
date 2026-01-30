"use client";

const stats = [
  { value: "1.2M", label: "Videos Analyzed", icon: "♠" },
  { value: "94%", label: "Prediction Accuracy", icon: "♥", highlight: true },
  { value: "12,000+", label: "Active Creators", icon: "♣" },
  { value: "312M", label: "Views Influenced", icon: "♦", highlight: true },
];

export function StatsBar() {
  return (
    <section className="px-6 lg:px-12 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(230, 57, 70, 0.03) 50%, transparent 100%)',
        }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section label */}
        <div className="text-center mb-12">
          <span 
            className="font-mono text-[10px] uppercase tracking-[0.25em]"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            The Numbers
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative text-center p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: stat.highlight 
                  ? 'linear-gradient(180deg, rgba(230, 57, 70, 0.12) 0%, rgba(230, 57, 70, 0.05) 100%)'
                  : 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
                border: stat.highlight 
                  ? '1px solid rgba(230, 57, 70, 0.3)' 
                  : '1px solid rgba(255,255,255,0.06)',
                boxShadow: stat.highlight
                  ? '0 10px 30px rgba(0,0,0,0.3), 0 0 40px rgba(230, 57, 70, 0.08)'
                  : '0 10px 30px rgba(0,0,0,0.2)',
              }}
            >
              {/* Suit icon */}
              <span 
                className="text-lg mb-3 block transition-transform duration-300 group-hover:scale-110"
                style={{ 
                  color: stat.highlight ? '#E63946' : 'rgba(255,255,255,0.25)',
                }}
              >
                {stat.icon}
              </span>
              
              {/* Value */}
              <div 
                className="font-serif text-3xl lg:text-4xl font-normal leading-none mb-2"
                style={{ color: stat.highlight ? '#E63946' : 'rgba(255,255,255,0.95)' }}
              >
                {stat.value}
              </div>
              
              {/* Label */}
              <div 
                className="font-mono text-[9px] uppercase tracking-[0.15em]"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
