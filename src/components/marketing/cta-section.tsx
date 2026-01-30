"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

function CardSuitsLogo() {
  return (
    <div className="w-16 h-16 rounded-2xl bg-muted border border-border flex items-center justify-center">
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
        <text x="24" y="14" textAnchor="middle" fontSize="14" fill="#fafafa" fontFamily="Arial" transform="rotate(180 24 14)">&#9824;</text>
        <text x="34" y="24" textAnchor="middle" fontSize="14" fill="#ef4444" fontFamily="Arial" transform="rotate(-90 34 24)">&#9829;</text>
        <text x="24" y="34" textAnchor="middle" fontSize="14" fill="#fafafa" fontFamily="Arial">&#9827;</text>
        <text x="14" y="24" textAnchor="middle" fontSize="14" fill="#ef4444" fontFamily="Arial" transform="rotate(90 14 24)">&#9830;</text>
      </svg>
    </div>
  );
}

export function CtaSection() {
  return (
    <section className="px-6 lg:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 rounded-3xl overflow-hidden">
          {/* Left panel */}
          <div className="bg-card border border-border lg:border-r-0 rounded-3xl lg:rounded-r-none p-10 lg:p-16 flex flex-col justify-center">
            <div className="mb-8">
              <CardSuitsLogo />
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl font-normal leading-[0.95] text-foreground">
              Stop
              <br />
              <span className="italic" style={{ color: '#ef4444' }}>Gambling</span>
            </h2>
          </div>

          {/* Right panel */}
          <div className="rounded-3xl lg:rounded-l-none p-10 lg:p-16 flex flex-col justify-center items-start" style={{ backgroundColor: '#ef4444' }}>
            <p className="text-lg leading-relaxed mb-10 max-w-sm text-accent-foreground/90">
              The algorithm isn&apos;t random. Learn to read it with data-driven insights that actually work.
            </p>

            <SignedOut>
              <a 
                href={`${APP_URL}/sign-up`} 
                className="px-8 py-4 bg-background text-foreground font-semibold rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.02] inline-block"
              >
                Start Free Search
              </a>
            </SignedOut>

            <SignedIn>
              <a 
                href={`${APP_URL}/dashboard`} 
                className="px-8 py-4 bg-background text-foreground font-semibold rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.02] inline-block"
              >
                Go to Dashboard
              </a>
            </SignedIn>
          </div>
        </div>
      </div>
    </section>
  );
}
