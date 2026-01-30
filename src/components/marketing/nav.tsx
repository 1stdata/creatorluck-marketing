"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

function CardSuitsLogo() {
  return (
    <div 
      className="w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.2) 0%, rgba(230, 57, 70, 0.05) 100%)', 
        border: '1px solid rgba(230, 57, 70, 0.3)',
        boxShadow: '0 2px 10px rgba(230, 57, 70, 0.1)',
      }}
    >
      <span className="text-lg font-serif" style={{ color: '#E63946' }}>♠</span>
    </div>
  );
}

export function Nav() {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 px-6 lg:px-12"
      style={{ 
        backdropFilter: 'blur(24px)', 
        backgroundColor: 'rgba(10, 10, 10, 0.85)', 
        borderBottom: '1px solid rgba(239, 68, 68, 0.15)' 
      }}
    >
      <Link href="/" className="flex items-center gap-3">
        <CardSuitsLogo />
        <span className="text-lg font-bold tracking-tight" style={{ color: 'rgba(255,255,255,0.9)' }}>
          Creator<span style={{ color: '#E63946' }}>Luck</span>
        </span>
      </Link>

      <div className="flex items-center gap-8">
        <div className="hidden sm:flex gap-6 text-sm font-medium">
          <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
        </div>

        <SignedOut>
          <a 
            href={`${APP_URL}/sign-in`} 
            className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-[0.98]"
            style={{ 
              background: 'linear-gradient(135deg, #E63946 0%, #c1121f 100%)', 
              color: '#ffffff',
              boxShadow: '0 2px 10px rgba(230, 57, 70, 0.3)',
            }}
          >
            Sign In
          </a>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-4">
            <a
              href={`${APP_URL}/dashboard`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Dashboard
            </a>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9",
                },
              }}
            />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
