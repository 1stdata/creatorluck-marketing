"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

function CardSuitsLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" className="flex-shrink-0">
      <text x="24" y="12" textAnchor="middle" fontSize="16" fill="#000" fontFamily="Arial" transform="rotate(180 24 12)">&#9824;</text>
      <text x="36" y="24" textAnchor="middle" fontSize="16" fill="#ff0000" fontFamily="Arial" transform="rotate(-90 36 24)">&#9829;</text>
      <text x="24" y="36" textAnchor="middle" fontSize="16" fill="#000" fontFamily="Arial">&#9827;</text>
      <text x="12" y="24" textAnchor="middle" fontSize="16" fill="#ff0000" fontFamily="Arial" transform="rotate(90 12 24)">&#9830;</text>
    </svg>
  );
}

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 px-8 lg:px-16 border-b-2 border-black bg-white">
      <Link href="/" className="flex items-center gap-3">
        <CardSuitsLogo />
        <span className="text-lg font-bold tracking-tight">
          Creator<span className="text-brand-red">Luck</span>
        </span>
      </Link>

      <div className="flex items-center gap-10">
        <div className="hidden sm:flex gap-8 text-sm font-medium">
          <Link href="/how-it-works" className="text-brand-gray hover:text-black transition-colors">
            How it works
          </Link>
          <Link href="/pricing" className="text-brand-gray hover:text-black transition-colors">
            Pricing
          </Link>
        </div>

        <SignedOut>
          <a href={`${APP_URL}/sign-in`} className="btn-brutal">
            Sign In
          </a>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-4">
            <a
              href={`${APP_URL}/dashboard`}
              className="text-sm font-medium text-brand-gray hover:text-black transition-colors"
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
