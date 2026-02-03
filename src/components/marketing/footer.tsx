"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 lg:px-12 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(180deg, transparent 0%, rgba(230, 57, 70, 0.03) 100%)',
        }}
      />
      
      {/* Top border gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, rgba(230, 57, 70, 0.2) 30%, rgba(230, 57, 70, 0.2) 70%, transparent 100%)',
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating card suits - decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span 
          className="absolute text-6xl"
          style={{ 
            color: 'rgba(230, 57, 70, 0.04)', 
            left: '5%', 
            top: '20%',
            transform: 'rotate(-15deg)',
          }}
        >
          ♥
        </span>
        <span 
          className="absolute text-5xl"
          style={{ 
            color: 'rgba(255, 255, 255, 0.02)', 
            right: '10%', 
            top: '30%',
            transform: 'rotate(20deg)',
          }}
        >
          ♠
        </span>
        <span 
          className="absolute text-4xl"
          style={{ 
            color: 'rgba(230, 57, 70, 0.03)', 
            left: '15%', 
            bottom: '20%',
            transform: 'rotate(10deg)',
          }}
        >
          ♦
        </span>
        <span 
          className="absolute text-5xl"
          style={{ 
            color: 'rgba(255, 255, 255, 0.02)', 
            right: '20%', 
            bottom: '15%',
            transform: 'rotate(-10deg)',
          }}
        >
          ♣
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/creatorluck-logo.svg" 
                alt="CreatorLuck" 
                className="h-8 w-auto"
                style={{ minWidth: '120px' }}
              />
            </Link>
            <p 
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Stop guessing. Read the cards and discover what makes videos go viral with AI-powered analytics.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://twitter.com/creatorluck"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(230, 57, 70, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(230, 57, 70, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@creatorluck"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(230, 57, 70, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(230, 57, 70, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h4 
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                Product
              </h4>
              <ul className="space-y-3">
                {['How it works', 'Pricing', 'Features'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#E63946'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                Company
              </h4>
              <ul className="space-y-3">
                {['About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#E63946'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                {['Terms', 'Privacy', 'Cookies'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#E63946'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <span 
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            &copy; 2026 CreatorLuck. All rights reserved.
          </span>
          
          {/* Card suits row */}
          <div className="flex items-center gap-4">
            <span 
              className="text-[10px] font-mono uppercase tracking-wider"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              Read the cards
            </span>
            <div className="flex gap-2">
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>♠</span>
              <span style={{ color: 'rgba(230, 57, 70, 0.4)', fontSize: 12 }}>♥</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>♣</span>
              <span style={{ color: 'rgba(230, 57, 70, 0.4)', fontSize: 12 }}>♦</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
