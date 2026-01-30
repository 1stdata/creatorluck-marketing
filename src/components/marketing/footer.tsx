import Link from "next/link";

export function Footer() {
  return (
    <footer 
      className="relative py-12 px-6 lg:px-12"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center lg:items-start gap-3">
            <div className="flex items-center gap-2">
              <span style={{ color: '#E63946', fontSize: 18 }}>♠</span>
              <span 
                className="text-lg font-bold tracking-tight"
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                Creator<span style={{ color: '#E63946' }}>Luck</span>
              </span>
            </div>
            <span 
              className="text-xs"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              &copy; 2026 CreatorLuck. All rights reserved.
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-8">
            <Link 
              href="/how-it-works" 
              className="text-sm transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E63946'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              How it works
            </Link>
            <Link 
              href="/pricing" 
              className="text-sm transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E63946'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              Pricing
            </Link>
            <Link 
              href="/terms" 
              className="text-sm transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E63946'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              Terms
            </Link>
            <Link 
              href="/privacy" 
              className="text-sm transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E63946'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              Privacy
            </Link>
            <a
              href="https://twitter.com/creatorluck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#E63946'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              Twitter
            </a>
          </div>

          {/* Card suits decoration */}
          <div className="flex gap-3">
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 14 }}>♠</span>
            <span style={{ color: 'rgba(230, 57, 70, 0.3)', fontSize: 14 }}>♥</span>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 14 }}>♣</span>
            <span style={{ color: 'rgba(230, 57, 70, 0.3)', fontSize: 14 }}>♦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
