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
      <div className="mt-8 p-6 rounded-2xl bg-card border border-border text-center">
        <p className="text-muted-foreground">Something went wrong. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 w-full">
      {/* Loading state */}
      {loading && (
        <div className="p-8 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-4 h-4 border-2 border-border border-t-accent rounded-full animate-spin" />
            <span className="text-sm text-muted-foreground">
              Searching YouTube for &apos;{query}&apos;...
            </span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full animate-pulse w-2/3" />
          </div>
        </div>
      )}

      {/* Results teaser */}
      {!loading && data && (
        <div className="rounded-2xl bg-card border border-border overflow-hidden">
          {/* Result count */}
          <div className="px-6 py-4 border-b border-border bg-muted">
            <span className="font-semibold text-sm text-foreground">
              {data.count.toLocaleString()} {type === "video" ? "videos" : "results"} found
            </span>
            <span className="text-muted-foreground text-sm"> for &apos;{query}&apos;</span>
          </div>

          {/* Blurred preview grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {data.preview.map((item, i) => (
              <div
                key={i}
                className={`relative p-4 ${
                  i < data.preview.length - 1 ? "border-r border-border" : ""
                }`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video mb-3 bg-muted rounded-lg overflow-hidden">
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
                  <div className="h-3 bg-muted-foreground/30 rounded w-full" />
                  <div className="h-3 bg-muted-foreground/30 rounded w-3/4" />
                </div>

                {/* View count (visible) */}
                <div className="mt-2 font-mono text-[11px] text-muted-foreground">
                  {formatViewCount(item.viewCount)}
                </div>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className="px-6 py-6 border-t border-border bg-muted text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Sign up to see full titles, channels, and detailed analytics
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={signUpUrl} className="btn-primary inline-block">
                Sign up free to see all results
              </a>
              <a
                href={signInUrl}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
