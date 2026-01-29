"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchSearchPreview, type SearchPreviewResult } from "@/lib/api";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

function formatViewCount(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M views`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(0)}K views`;
  return `${count} views`;
}

interface SearchTeaserProps {
  query: string;
  type: string;
}

export function SearchTeaser({ query, type }: SearchTeaserProps) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SearchPreviewResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const redirectParams = encodeURIComponent(`/dashboard?q=${encodeURIComponent(query)}&type=${type}`);
  const signUpUrl = `${APP_URL}/sign-up?redirect_url=${redirectParams}`;
  const signInUrl = `${APP_URL}/sign-in?redirect_url=${redirectParams}`;

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchSearchPreview(query, type)
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [query, type]);

  if (error) {
    return (
      <div className="mt-8 p-6 border-2 border-black bg-brand-gray-light text-center">
        <p className="text-brand-gray">Something went wrong. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 w-full">
      {/* Loading state */}
      {loading && (
        <div className="p-8 border-2 border-black bg-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 border-2 border-black border-t-brand-red animate-spin" />
            <span className="text-[15px] text-brand-gray">
              Searching YouTube for &apos;{query}&apos;...
            </span>
          </div>
          <div className="h-2 bg-brand-gray-light overflow-hidden">
            <div className="h-full bg-brand-red animate-pulse w-2/3" />
          </div>
        </div>
      )}

      {/* Results teaser */}
      {!loading && data && (
        <div className="border-2 border-black bg-white">
          {/* Result count */}
          <div className="px-6 py-4 border-b-2 border-black bg-brand-gray-light">
            <span className="font-semibold text-[15px]">
              {data.count.toLocaleString()} {type === "video" ? "videos" : "results"} found
            </span>
            <span className="text-brand-gray"> for &apos;{query}&apos;</span>
          </div>

          {/* Blurred preview grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
            {data.preview.map((item, i) => (
              <div
                key={i}
                className={`relative p-4 ${
                  i < data.preview.length - 1 ? "border-r-2 border-black" : ""
                }`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video mb-3 bg-brand-gray-light overflow-hidden">
                  {item.thumbnailUrl && (
                    <Image
                      src={item.thumbnailUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  )}
                </div>

                {/* Blurred title placeholder */}
                <div className="space-y-1.5 select-none" style={{ filter: "blur(4px)" }}>
                  <div className="h-3 bg-gray-300 rounded w-full" />
                  <div className="h-3 bg-gray-300 rounded w-3/4" />
                </div>

                {/* View count (visible) */}
                <div className="mt-2 font-mono text-[11px] text-brand-gray">
                  {formatViewCount(item.viewCount)}
                </div>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className="px-6 py-6 border-t-2 border-black bg-brand-gray-light text-center">
            <p className="text-[15px] text-brand-gray mb-4">
              Sign up to see full titles, channels, and detailed analytics
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={signUpUrl} className="btn-brutal-red inline-block">
                Sign up free to see all results
              </a>
              <a
                href={signInUrl}
                className="text-sm text-brand-gray hover:text-black transition-colors"
              >
                Already have an account? Sign in
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
