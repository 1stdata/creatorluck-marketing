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
      // Signed in: go straight to app dashboard with query
      window.location.href = `${APP_URL}/dashboard?${queryParams}`;
    } else {
      // Not signed in: show search teaser below
      setShowTeaser(true);
      setTeaserQuery(searchQuery);
      setTeaserType(activeTab);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 lg:px-16 pt-32 pb-16">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-gray mb-5">
        Video Intelligence
      </div>

      <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-normal leading-none tracking-tight text-center mb-4">
        Read The <span className="text-brand-red italic">Cards</span>
      </h1>

      <p className="text-lg text-brand-gray text-center mb-12 max-w-md leading-relaxed">
        Stop guessing. Discover what makes videos go viral.
      </p>

      {/* Search Wrapper */}
      <div className="w-full max-w-[680px]">
        {/* Tabs */}
        <div className="flex gap-2 mb-5 justify-center">
          {[
            { id: "topic" as const, icon: "\u25CE", label: "By Topic" },
            { id: "channel" as const, icon: "\u25C9", label: "By Channel" },
            { id: "video" as const, icon: "\u25B6", label: "By Video" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-[15px] font-medium border-2 border-black flex items-center gap-2.5 transition-all duration-100 ${
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-brand-gray-light"
              }`}
            >
              <span className={`text-base ${activeTab === tab.id ? "opacity-100" : "opacity-70"}`}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex border-2 border-black mb-5 bg-white">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder={placeholders[activeTab]}
            className="flex-1 px-6 py-5 text-[17px] border-none outline-none bg-transparent placeholder:text-gray-400"
          />
          <button
            onClick={handleSearch}
            className="px-8 py-5 bg-brand-red text-white border-l-2 border-black text-base font-semibold hover:bg-black transition-all duration-100 whitespace-nowrap"
          >
            Search &rarr;
          </button>
        </div>

        {/* Filters Toggle */}
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-brand-gray hover:text-black transition-colors mx-auto mb-4"
        >
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-brand-gray-light p-7 mb-5">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                Target Country
              </span>
              <select
                value={filters.country}
                onChange={(e) => setFilters({ ...filters, country: e.target.value })}
                className="select-brutal"
              >
                <option>Global (All)</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                Search Order
              </span>
              <select
                value={filters.searchOrder}
                onChange={(e) => setFilters({ ...filters, searchOrder: e.target.value })}
                className="select-brutal"
              >
                <option>Relevance</option>
                <option>View Count</option>
                <option>Upload Date</option>
                <option>Rating</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                Video History
              </span>
              <select
                value={filters.videoHistory}
                onChange={(e) => setFilters({ ...filters, videoHistory: e.target.value })}
                className="select-brutal"
              >
                <option>Recent (50 videos)</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>All time</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                Min Subscribers
              </span>
              <div className="flex items-center gap-4 border-2 border-black px-4 py-3 bg-white hover:border-brand-red">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.minSubscribers}
                  onChange={(e) =>
                    setFilters({ ...filters, minSubscribers: parseInt(e.target.value) })
                  }
                  className="flex-1 h-1.5 bg-brand-gray-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <span className="text-[15px] font-semibold min-w-12 text-right">
                  {filters.minSubscribers}k+
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-gray">
                Min Avg Views
              </span>
              <div className="flex items-center gap-4 border-2 border-black px-4 py-3 bg-white hover:border-brand-red">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={filters.minAvgViews}
                  onChange={(e) =>
                    setFilters({ ...filters, minAvgViews: parseInt(e.target.value) })
                  }
                  className="flex-1 h-1.5 bg-brand-gray-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <span className="text-[15px] font-semibold min-w-12 text-right">
                  {filters.minAvgViews}k+
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Note */}
        <p className="text-sm text-brand-gray text-center">
          <span className="text-brand-red font-semibold">3 free searches</span> &middot; No credit card
          required
        </p>

        {/* Search Teaser (shown for non-authenticated users after searching) */}
        {showTeaser && (
          <SearchTeaser query={teaserQuery} type={teaserType} />
        )}
      </div>
    </section>
  );
}
