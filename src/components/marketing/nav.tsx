"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

function CardSuitsLogo() {
  return (
    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
        <text x="24" y="14" textAnchor="middle" fontSize="14" fill="#fafafa" fontFamily="Arial" transform="rotate(180 24 14)">&#9824;</text>
        <text x="34" y="24" textAnchor="middle" fontSize="14" fill="#ef4444" fontFamily="Arial" transform="rotate(-90 34 24)">&#9829;</text>
        <text x="24" y="34" textAnchor="middle" fontSize="14" fill="#fafafa" fontFamily="Arial">&#9827;</text>
        <text x="14" y="24" textAnchor="middle" fontSize="14" fill="#ef4444" fontFamily="Arial" transform="rotate(90 14 24)">&#9830;</text>
      </svg>
    </div>
  );
}

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 px-6 lg:px-12 glass border-b border-accent/10">
      <Link href="/" className="flex items-center gap-3">
        <CardSuitsLogo />
        <span className="text-lg font-bold tracking-tight text-foreground">
          Creator<span className="text-accent">Luck</span>
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
          <a href={`${APP_URL}/sign-in`} className="btn-primary">
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
