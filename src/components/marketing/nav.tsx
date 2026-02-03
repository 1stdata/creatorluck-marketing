"use client";

import { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 h-14 sm:h-16"
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

      <div className="flex justify-between items-center h-full w-full max-w-7xl mx-auto px-6 lg:px-12 relative">
        <Link href="/" className="flex items-center group shrink-0">
          <img 
            src="/creatorluck-logo.svg" 
            alt="CreatorLuck" 
            style={{ height: '32px', width: 'auto' }}
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

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

          {/* CTA Buttons - Always visible */}
          <div className="flex items-center gap-3">
            <a 
              href={`${APP_URL}/sign-in`} 
              className="hidden sm:block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
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
              Sign In
            </a>
            <a 
              href={`${APP_URL}/sign-up`} 
              className="relative px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-[0.98] overflow-hidden"
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
              <span className="relative flex items-center gap-1.5 sm:gap-2">
                <span style={{ fontSize: 12 }}>♠</span>
                <span className="hidden sm:inline">Get Started Free</span>
                <span className="sm:hidden">Start</span>
              </span>
            </a>
          </div>

          <SignedIn>
            <div className="flex items-center gap-4">
              <a
                href={`${APP_URL}/dashboard`}
                className="hidden sm:block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
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

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div 
          className="sm:hidden absolute top-full left-0 right-0 border-b"
          style={{ 
            backgroundColor: 'rgba(13, 13, 13, 0.98)',
            backdropFilter: 'blur(24px)',
            borderColor: 'rgba(255,255,255,0.05)',
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            <Link 
              href="/how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              How it works
            </Link>
            <Link 
              href="/pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Pricing
            </Link>
            <Link 
              href="/features" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Features
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              About
            </Link>
            
            {/* Divider */}
            <div 
              className="my-2 h-[1px]"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            />
            
            <a 
              href={`${APP_URL}/sign-in`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Sign In
            </a>
            <a 
              href={`${APP_URL}/sign-up`}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 text-base font-semibold rounded-lg text-center transition-all duration-200"
              style={{ 
                background: 'linear-gradient(135deg, #E63946 0%, #c1121f 100%)', 
                color: '#ffffff',
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <span style={{ fontSize: 14 }}>♠</span>
                Get Started Free
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
