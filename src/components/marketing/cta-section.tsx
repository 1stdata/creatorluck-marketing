"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

function CardSuitsLogo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <text x="24" y="12" textAnchor="middle" fontSize="16" fill="#fff" fontFamily="Arial" transform="rotate(180 24 12)">&#9824;</text>
      <text x="36" y="24" textAnchor="middle" fontSize="16" fill="#ff0000" fontFamily="Arial" transform="rotate(-90 36 24)">&#9829;</text>
      <text x="24" y="36" textAnchor="middle" fontSize="16" fill="#fff" fontFamily="Arial">&#9827;</text>
      <text x="12" y="24" textAnchor="middle" fontSize="16" fill="#ff0000" fontFamily="Arial" transform="rotate(90 12 24)">&#9830;</text>
    </svg>
  );
}

export function CtaSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh]">
      <div className="bg-black text-white p-8 lg:p-16 flex flex-col justify-center">
        <div className="mb-6">
          <CardSuitsLogo />
        </div>
        <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[0.9]">
          Stop
          <br />
          <span className="text-brand-red italic">Gambling</span>
        </h2>
      </div>

      <div className="bg-brand-red text-white p-8 lg:p-16 flex flex-col justify-center items-start">
        <p className="text-lg leading-relaxed mb-10 max-w-xs">
          The algorithm isn&apos;t random. Learn to read it.
        </p>

        <SignedOut>
          <a href={`${APP_URL}/sign-up`} className="btn-white inline-block">
            Start Free Search &rarr;
          </a>
        </SignedOut>

        <SignedIn>
          <a href={`${APP_URL}/dashboard`} className="btn-white inline-block">
            Go to Dashboard &rarr;
          </a>
        </SignedIn>
      </div>
    </section>
  );
}
