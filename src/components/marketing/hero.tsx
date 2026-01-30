"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { SearchTeaser } from "./search-teaser";
import { PreviewCard } from "./preview-card";

type SearchTab = "topic" | "channel" | "video";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

const placeholderTexts = [
  "What niche? (e.g. 'Minecraft')",
  "Try 'Personal Finance'",
  "Search 'Tech Reviews'",
  "Explore 'Cooking tutorials'",
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<SearchTab>("topic");
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
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

  // Animated placeholder cycling
  useEffect(() => {
    if (activeTab !== "topic") return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const placeholders: Record<SearchTab, string> = {
    topic: placeholderTexts[placeholderIndex],
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
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-24 pb-16 relative overflow-hidden">
      {/* Red glow accents */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(230, 57, 70, 0.12)' }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(230, 57, 70, 0.08)' }}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left side - Content */}
        <div className="flex-1 max-w-[640px]">
          {/* Minimized platform label */}
          <div 
            className="font-mono text-[10px] uppercase tracking-[0.25em] mb-6 text-center lg:text-left"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            Video Intelligence Platform
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-center lg:text-left mb-6 text-balance">
            Read The{" "}
            <span 
              className="italic relative inline-block"
              style={{ 
                color: '#E63946',
                textShadow: '0 2px 20px rgba(230, 57, 70, 0.3)',
              }}
            >
              Cards
              <span 
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: 'rgba(230, 57, 70, 0.5)' }}
              />
            </span>
          </h1>

          <p 
            className="text-lg text-center lg:text-left mb-4 max-w-md mx-auto lg:mx-0 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Stop guessing. Discover what makes videos go viral with AI-powered analytics.
          </p>

          {/* Proof element */}
          <div 
            className="font-mono text-xs uppercase tracking-[0.15em] mb-10 text-center lg:text-left"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            2.3M+ videos analyzed
          </div>

          {/* Search Wrapper */}
          <div className="w-full">
            {/* Tabs with sliding indicator */}
            <div className="flex gap-2 mb-4 justify-center lg:justify-start">
              {[
                { id: "topic" as const, icon: "♠", label: "By Topic" },
                { id: "channel" as const, icon: "♥", label: "By Channel" },
                { id: "video" as const, icon: "♦", label: "By Video" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-5 py-2.5 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300"
                  style={
                    activeTab === tab.id
                      ? { 
                          backgroundColor: '#E63946', 
                          color: '#ffffff',
                          boxShadow: '0 4px 20px rgba(230, 57, 70, 0.3)',
                        }
                      : { 
                          backgroundColor: 'rgba(26, 26, 26, 0.8)', 
                          color: 'rgba(255,255,255,0.6)', 
                          border: '1px solid #262626' 
                        }
                  }
                >
                  <span className="text-sm">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input with inner glow on focus */}
            <div 
              className="flex rounded-2xl overflow-hidden mb-4 transition-all duration-300 group"
              style={{ 
                backgroundColor: 'rgba(26, 21, 23, 0.9)', 
                border: '1px solid rgba(230, 57, 70, 0.2)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder={placeholders[activeTab]}
                className="flex-1 px-6 py-4 text-base bg-transparent outline-none placeholder:transition-opacity placeholder:duration-500"
                style={{ 
                  color: '#fafafa',
                }}
              />
              <button
                onClick={handleSearch}
                className="px-8 py-4 text-sm font-semibold transition-all duration-200 whitespace-nowrap hover:scale-[0.98] active:scale-[0.96]"
                style={{ 
                  background: 'linear-gradient(135deg, #E63946 0%, #c1121f 100%)',
                  color: '#ffffff',
                }}
              >
                Deal Me In
              </button>
            </div>

            {/* Filters Toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center justify-center lg:justify-start gap-2 px-4 py-2.5 text-sm font-medium transition-colors mx-auto lg:mx-0 mb-4"
              style={{ color: 'rgba(255,255,255,0.5)' }}
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
                ▼
              </span>
            </button>

            {/* Filters Panel with felt texture */}
            {filtersOpen && (
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl p-6 mb-4"
                style={{
                  backgroundColor: 'rgba(26, 21, 23, 0.95)',
                  border: '1px solid #262626',
                  boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.3)',
                }}
              >
                <div className="flex flex-col gap-2">
                  <span 
                    className="text-[10px] font-medium uppercase tracking-[0.15em]"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
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
                  <span 
                    className="text-[10px] font-medium uppercase tracking-[0.15em]"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
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
                  <span 
                    className="text-[10px] font-medium uppercase tracking-[0.15em]"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
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
                  <span 
                    className="text-[10px] font-medium uppercase tracking-[0.15em]"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    Min Subscribers
                  </span>
                  <div 
                    className="flex items-center gap-4 rounded-lg px-4 py-3"
                    style={{ backgroundColor: 'rgba(26,26,26,0.8)', border: '1px solid #262626' }}
                  >
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={filters.minSubscribers}
                      onChange={(e) =>
                        setFilters({ ...filters, minSubscribers: parseInt(e.target.value) })
                      }
                      className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #E63946 0%, #E63946 ${filters.minSubscribers}%, #262626 ${filters.minSubscribers}%, #262626 100%)`,
                      }}
                    />
                    <span className="text-sm font-semibold min-w-12 text-right" style={{ color: '#fafafa' }}>
                      {filters.minSubscribers}k+
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span 
                    className="text-[10px] font-medium uppercase tracking-[0.15em]"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    Min Avg Views
                  </span>
                  <div 
                    className="flex items-center gap-4 rounded-lg px-4 py-3"
                    style={{ backgroundColor: 'rgba(26,26,26,0.8)', border: '1px solid #262626' }}
                  >
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={filters.minAvgViews}
                      onChange={(e) =>
                        setFilters({ ...filters, minAvgViews: parseInt(e.target.value) })
                      }
                      className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #E63946 0%, #E63946 ${filters.minAvgViews}%, #262626 ${filters.minAvgViews}%, #262626 100%)`,
                      }}
                    />
                    <span className="text-sm font-semibold min-w-12 text-right" style={{ color: '#fafafa' }}>
                      {filters.minAvgViews}k+
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Note */}
            <p className="text-sm text-center lg:text-left" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <span className="font-semibold" style={{ color: '#E63946' }}>3 free searches</span>{" "}
              <span style={{ opacity: 0.4 }}>·</span> No credit card required
            </p>

            {/* Search Teaser */}
            {showTeaser && (
              <SearchTeaser query={teaserQuery} type={teaserType} />
            )}
          </div>
        </div>

        {/* Right side - Preview Card (hidden on mobile) */}
        <div className="hidden lg:block">
          <PreviewCard />
        </div>
      </div>
    </section>
  );
}
