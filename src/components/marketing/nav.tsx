"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

function CardSuitsLogo() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow behind the suit */}
      <div 
        className="absolute w-8 h-8 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(230, 57, 70, 0.3) 0%, transparent 70%)',
          filter: 'blur(4px)',
        }}
      />
      {/* Main suit icon */}
      <span 
        className="text-2xl font-serif relative z-10" 
        style={{ 
          color: '#E63946', 
          textShadow: '0 2px 12px rgba(230, 57, 70, 0.5)',
        }}
      >
        ♠
      </span>
    </div>
  );
}

export function Nav() {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 h-18"
      style={{ 
        backdropFilter: 'blur(24px)', 
        backgroundColor: 'rgba(13, 13, 13, 0.9)', 
      }}
    >
      {/* Top border gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ 
          background: 'linear-gradient(90deg, transparent 0%, rgba(230, 57, 70, 0.3) 50%, transparent 100%)',
        }}
      />
      
      {/* Bottom border */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="flex justify-between items-center h-full px-6 lg:px-12 max-w-7xl mx-auto w-full relative">
        <Link href="/" className="flex items-center gap-3 group">
          <CardSuitsLogo />
          <div className="flex flex-col">
            <span 
              className="text-lg font-bold tracking-tight leading-tight"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              Creator<span style={{ color: '#E63946' }}>Luck</span>
            </span>
            <span 
              className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Video Intelligence
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          {/* Navigation links */}
          <div className="hidden sm:flex gap-1">
            <Link 
              href="/how-it-works" 
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              How it works
            </Link>
            <Link 
              href="/pricing" 
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Pricing
            </Link>
          </div>

          {/* Divider */}
          <div 
            className="hidden sm:block w-[1px] h-6"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          />

          <SignedOut>
            <a 
              href={`${APP_URL}/sign-in`} 
              className="relative px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-[0.98] overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #E63946 0%, #c1121f 100%)', 
                color: '#ffffff',
                boxShadow: '0 4px 16px rgba(230, 57, 70, 0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
            >
              {/* Shine effect */}
              <span 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
                }}
              />
              <span className="relative flex items-center gap-2">
                <span style={{ fontSize: 12 }}>♠</span>
                Sign In
              </span>
            </a>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-4">
              <a
                href={`${APP_URL}/dashboard`}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: 'rgba(255,255,255,0.6)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#E63946';
                  e.currentTarget.style.backgroundColor = 'rgba(230, 57, 70, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Dashboard
              </a>
              <div 
                className="p-0.5 rounded-full"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.5) 0%, rgba(230, 57, 70, 0.2) 100%)',
                }}
              >
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9",
                    },
                  }}
                />
              </div>
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
