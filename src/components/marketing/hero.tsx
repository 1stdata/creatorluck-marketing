"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { SearchTeaser } from "./search-teaser";

type SearchTab = "topic" | "channel" | "video";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

export function Hero() {
  const [activeTab, setActiveTab] = useState<SearchTab>("topic");
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    country: "Global (All)",
    searchOrder: "Relevance",
    videoHistory: "Recent (50 videos)",
    minSubscribers: 10,
    minAvgViews: 5,
  });

  // Teaser state
  const [showTeaser, setShowTeaser] = useState(false);
  const [teaserQuery, setTeaserQuery] = useState("");
  const [teaserType, setTeaserType] = useState<string>("topic");

  const { isSignedIn } = useAuth();

  const placeholders: Record<SearchTab, string> = {
    topic: "What niche? (e.g. 'Minecraft', 'Personal Finance')",
    channel: "Enter channel name or @handle",
    video: "Paste YouTube video URL",
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    const queryParams = `q=${encodeURIComponent(searchQuery)}&type=${activeTab}`;

    if (isSignedIn) {
      window.location.href = `${APP_URL}/dashboard?${queryParams}`;
    } else {
      setShowTeaser(true);
      setTeaserQuery(searchQuery);
      setTeaserType(activeTab);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-32 pb-16 relative overflow-hidden">
      {/* Colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-[720px]">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 text-center">
          Video Intelligence Platform
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-center mb-6 text-balance">
          Read The <span className="text-accent italic relative">Cards<span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/50 rounded-full"></span></span>
        </h1>

        <p className="text-lg text-muted-foreground text-center mb-12 max-w-md mx-auto leading-relaxed">
          Stop guessing. Discover what makes videos go viral with AI-powered analytics.
        </p>

        {/* Search Wrapper */}
        <div className="w-full">
          {/* Tabs */}
          <div className="flex gap-2 mb-4 justify-center">
            {[
              { id: "topic" as const, icon: "&#9678;", label: "By Topic" },
              { id: "channel" as const, icon: "&#9673;", label: "By Channel" },
              { id: "video" as const, icon: "&#9654;", label: "By Video" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-foreground text-background"
                    : "bg-card text-muted-foreground border border-border hover:border-muted-foreground/50 hover:text-foreground"
                }`}
              >
                <span
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: tab.icon }}
                />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex rounded-2xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden mb-4 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 transition-all duration-200 shadow-lg shadow-accent/5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder={placeholders[activeTab]}
              className="flex-1 px-6 py-4 text-base bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={handleSearch}
              className="px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-all duration-200 whitespace-nowrap"
            >
              Search
            </button>
          </div>

          {/* Filters Toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mx-auto mb-4"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
            </svg>
            <span>Filters</span>
            <span
              className={`text-[10px] transition-transform duration-200 ${
                filtersOpen ? "rotate-180" : ""
              }`}
            >
              &#9660;
            </span>
          </button>

          {/* Filters Panel */}
          {filtersOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-card border border-border rounded-2xl p-6 mb-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Target Country
                </span>
                <select
                  value={filters.country}
                  onChange={(e) => setFilters({ ...filters, country: e.target.value })}
                  className="select-modern"
                >
                  <option>Global (All)</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Search Order
                </span>
                <select
                  value={filters.searchOrder}
                  onChange={(e) => setFilters({ ...filters, searchOrder: e.target.value })}
                  className="select-modern"
                >
                  <option>Relevance</option>
                  <option>View Count</option>
                  <option>Upload Date</option>
                  <option>Rating</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Video History
                </span>
                <select
                  value={filters.videoHistory}
                  onChange={(e) => setFilters({ ...filters, videoHistory: e.target.value })}
                  className="select-modern"
                >
                  <option>Recent (50 videos)</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>All time</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Min Subscribers
                </span>
                <div className="flex items-center gap-4 border border-border rounded-lg px-4 py-3 bg-muted">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.minSubscribers}
                    onChange={(e) =>
                      setFilters({ ...filters, minSubscribers: parseInt(e.target.value) })
                    }
                    className="flex-1 h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <span className="text-sm font-semibold text-foreground min-w-12 text-right">
                    {filters.minSubscribers}k+
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Min Avg Views
                </span>
                <div className="flex items-center gap-4 border border-border rounded-lg px-4 py-3 bg-muted">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.minAvgViews}
                    onChange={(e) =>
                      setFilters({ ...filters, minAvgViews: parseInt(e.target.value) })
                    }
                    className="flex-1 h-1.5 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <span className="text-sm font-semibold text-foreground min-w-12 text-right">
                    {filters.minAvgViews}k+
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Note */}
          <p className="text-sm text-muted-foreground text-center">
            <span className="text-accent font-semibold">3 free searches</span>{" "}
            <span className="text-muted-foreground/60">&middot;</span> No credit card required
          </p>

          {/* Search Teaser (shown for non-authenticated users after searching) */}
          {showTeaser && (
            <SearchTeaser query={teaserQuery} type={teaserType} />
          )}
        </div>
      </div>
    </section>
  );
}
