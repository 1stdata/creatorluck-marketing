"use client";

import { useState, useEffect, useRef } from "react";
import { useAuth } from "@clerk/nextjs";
import { SearchTeaser } from "./search-teaser";
import { PreviewCard } from "./preview-card";

type SearchTab = "topic" | "channel" | "video";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

const placeholderTexts = [
  'Try "MrBeast" — see what makes him viral',
  'Search "tech reviews" — find winning formats',
  'Paste any YouTube URL to analyze',
  'Try "personal finance" — discover hooks that work',
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<SearchTab>("topic");
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const [filters, setFilters] = useState({
    country: "Global (All)",
    searchOrder: "Relevance",
    videoHistory: "Recent (50 videos)",
    videoType: "all" as "all" | "videos" | "shorts",
    minSubscribers: 10,
    minAvgViews: 5,
  });

  // Teaser state
  const [showTeaser, setShowTeaser] = useState(false);
  const [teaserQuery, setTeaserQuery] = useState("");
  const [teaserType, setTeaserType] = useState<string>("topic");

  const { isSignedIn } = useAuth();

  // Animated placeholder cycling with fade
  useEffect(() => {
    if (activeTab !== "topic") return;
    const interval = setInterval(() => {
      setPlaceholderVisible(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
        setPlaceholderVisible(true);
      }, 200);
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
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Spotlight effect behind card area */}
      <div 
        className="absolute pointer-events-none hidden lg:block"
        style={{
          right: '15%',
          top: '50%',
          width: 600,
          height: 600,
          transform: 'translateY(-50%)',
          background: 'radial-gradient(circle, rgba(230, 57, 70, 0.12) 0%, rgba(230, 57, 70, 0) 70%)',
        }}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left side - Content */}
        <div className="flex-1 max-w-[640px]">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-center lg:text-left mb-6 text-balance">
            Read The{" "}
            <span 
              className="italic relative inline-block"
              style={{ 
                color: '#E63946',
                textShadow: '0 2px 30px rgba(230, 57, 70, 0.4)',
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
            className="text-xl text-center lg:text-left mb-3 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            Virality isn't random. Neither is your success.
          </p>
          <p 
            className="text-base text-center lg:text-left mb-4 max-w-md mx-auto lg:mx-0 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Most creators are gambling. You're counting cards.
          </p>

          {/* Proof element with pulsing red dot */}
          <div 
            className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-8 sm:mb-10 text-center lg:text-left flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center lg:justify-start"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span 
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ 
                  backgroundColor: '#E63946',
                  boxShadow: '0 0 8px rgba(230, 57, 70, 0.6)',
                }}
              />
              <span>2.3M+ videos analyzed</span>
            </div>
            <span className="hidden sm:inline" style={{ opacity: 0.3 }}>•</span>
            <span>Used by 12,000+ creators</span>
          </div>

          {/* Search Wrapper */}
          <div className="w-full">
            {/* Tabs with suit icons */}
            <div className="flex gap-2 mb-4 justify-start lg:justify-start relative overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
              {[
                { id: "topic" as const, icon: "♠", label: "Topic", labelFull: "By Topic" },
                { id: "channel" as const, icon: "♥", label: "Channel", labelFull: "By Channel" },
                { id: "video" as const, icon: "♦", label: "Video", labelFull: "By Video" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-4 sm:px-5 py-2.5 text-sm font-medium rounded-full flex items-center gap-1.5 sm:gap-2 transition-all duration-200 whitespace-nowrap flex-shrink-0"
                  style={
                    activeTab === tab.id
                      ? { 
                          background: 'linear-gradient(135deg, #E63946, #C1121F)',
                          color: '#ffffff',
                          boxShadow: '0 4px 15px rgba(230, 57, 70, 0.3)',
                        }
                      : { 
                          backgroundColor: 'transparent',
                          color: 'rgba(255,255,255,0.6)', 
                          border: '1px solid rgba(255,255,255,0.1)',
                        }
                  }
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.borderColor = 'rgba(230, 57, 70, 0.3)';
                      e.currentTarget.style.backgroundColor = 'rgba(230, 57, 70, 0.05)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                    }
                  }}
                >
                  <span 
                    className="text-sm"
                    style={{ 
                      color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.4)'
                    }}
                  >
                    {tab.icon}
                  </span>
                  <span className="hidden sm:inline">{tab.labelFull}</span>
                  <span className="sm:hidden">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div 
              className="flex rounded-2xl overflow-hidden mb-4 transition-all duration-200"
              style={{ 
                backgroundColor: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder={placeholders[activeTab]}
                className="flex-1 px-6 py-4 text-base bg-transparent outline-none transition-opacity duration-200"
                style={{ 
                  color: '#fafafa',
                  opacity: placeholderVisible ? 1 : 0.5,
                }}
              />
              {/* Deal Me In button with shine animation */}
              <button
                onClick={handleSearch}
                className="relative px-5 sm:px-8 py-4 text-sm font-semibold transition-all duration-200 whitespace-nowrap hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #E63946, #B91C2C)',
                  color: '#ffffff',
                  boxShadow: '0 4px 15px rgba(230, 57, 70, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <span className="relative z-10 hidden sm:inline">Deal Me In</span>
                <span className="relative z-10 sm:hidden">Go</span>
                {/* Shine effect */}
                <span 
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    animation: 'shine 5s infinite',
                  }}
                />
              </button>
            </div>

            {/* Filters Toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center justify-center lg:justify-start gap-2 px-3 py-2 text-sm font-medium transition-all duration-200 mx-auto lg:mx-0 mb-4 rounded-lg hover:bg-white/5"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
              </svg>
              <span>Filters</span>
              <span
                className={`text-[10px] transition-transform duration-200 ${
                  filtersOpen ? "rotate-180" : ""
                }`}
              >
                ♦
              </span>
            </button>

            {/* Filters Panel with poker table feel */}
            {filtersOpen && (
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl p-6 mb-4"
                style={{
                  background: 'linear-gradient(180deg, #1A1517 0%, #141214 100%)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)',
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
                    Video Type
                  </span>
                  <div 
                    className="flex rounded-lg overflow-hidden"
                    style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    {[
                      { id: "all" as const, label: "All" },
                      { id: "videos" as const, label: "Videos" },
                      { id: "shorts" as const, label: "Shorts" },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setFilters({ ...filters, videoType: type.id })}
                        className="flex-1 px-3 py-2.5 text-xs font-medium transition-all duration-200"
                        style={
                          filters.videoType === type.id
                            ? { 
                                background: 'linear-gradient(135deg, #E63946, #C1121F)',
                                color: '#ffffff',
                              }
                            : { 
                                backgroundColor: 'transparent',
                                color: 'rgba(255,255,255,0.5)',
                              }
                        }
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
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
                    style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}
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
                        background: `linear-gradient(to right, #E63946 0%, #E63946 ${filters.minSubscribers}%, rgba(255,255,255,0.1) ${filters.minSubscribers}%, rgba(255,255,255,0.1) 100%)`,
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
                    style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}
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
                        background: `linear-gradient(to right, #E63946 0%, #E63946 ${filters.minAvgViews}%, rgba(255,255,255,0.1) ${filters.minAvgViews}%, rgba(255,255,255,0.1) 100%)`,
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

      {/* CSS for shine animation */}
      <style jsx>{`
        @keyframes shine {
          0%, 90%, 100% { transform: translateX(-100%); }
          95% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
