"use client";

import { useState } from "react";

const NOISE_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

// ── Mockup sub-components ──────────────────────────────────────────

function SearchMockup() {
  const tabs = ["By Topic", "By Channel", "By Video"];
  const videos = [
    { title: "How I Got 10M Views in 30 Days", views: "10.2M", tier: "gold", engagement: "8.4%" },
    { title: "The Secret YouTube Algorithm...", views: "3.8M", tier: "silver", engagement: "6.1%" },
    { title: "Why Most Creators Fail", views: "1.1M", tier: "bronze", engagement: "5.2%" },
    { title: "I Tested Every Viral Hook", views: "7.5M", tier: "gold", engagement: "9.1%" },
    { title: "Thumbnail Psychology 101", views: "2.4M", tier: "silver", engagement: "5.8%" },
    { title: "Content Strategy Breakdown", views: "890K", tier: "bronze", engagement: "4.3%" },
  ];
  const tierColors: Record<string, string> = {
    gold: "#D4AF37",
    silver: "#A0A0A0",
    bronze: "#CD7F32",
  };

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1517 0%, #111 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Search bar */}
      <div className="p-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          className="flex items-center gap-2 rounded-lg px-3 py-2"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>🔍</span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Search videos, channels, or topics...
          </span>
        </div>
        <div className="flex gap-1 mt-3">
          {tabs.map((t, i) => (
            <span
              key={t}
              className="font-mono text-[9px] uppercase tracking-wider px-3 py-1 rounded-md"
              style={{
                background: i === 0 ? "rgba(230, 57, 70, 0.15)" : "transparent",
                color: i === 0 ? "#E63946" : "rgba(255,255,255,0.35)",
                border: i === 0 ? "1px solid rgba(230, 57, 70, 0.3)" : "1px solid transparent",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3">
        {videos.map((v, i) => (
          <div
            key={i}
            className="rounded-lg p-2.5"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
          >
            {/* Thumbnail placeholder */}
            <div
              className="rounded-md mb-2 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                aspectRatio: "16/9",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.08)", fontSize: 18 }}>▶</span>
            </div>
            <p className="text-[10px] leading-tight mb-1.5 line-clamp-2" style={{ color: "rgba(255,255,255,0.7)" }}>
              {v.title}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                {v.views}
              </span>
              <span
                className="text-[8px] font-mono uppercase px-1.5 py-0.5 rounded"
                style={{ color: tierColors[v.tier], background: `${tierColors[v.tier]}15`, border: `1px solid ${tierColors[v.tier]}30` }}
              >
                {v.tier}
              </span>
            </div>
            <span className="text-[9px] font-mono block mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
              {v.engagement} eng.
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeatmapMockup() {
  const rows = 5;
  const cols = 6;
  const heatColors = [
    "rgba(230,57,70,0.8)", "rgba(230,57,70,0.5)", "rgba(255,255,255,0.12)",
    "rgba(230,57,70,0.65)", "rgba(255,255,255,0.08)", "rgba(230,57,70,0.35)",
  ];
  const drivers = [
    { label: "Hook Strength", value: "92%", confidence: "High" },
    { label: "Pacing", value: "78%", confidence: "Med" },
    { label: "CTA Placement", value: "85%", confidence: "High" },
  ];

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1517 0%, #111 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="p-4">
        <span className="font-mono text-[9px] uppercase tracking-wider block mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
          Communication Heatmap
        </span>
        {/* Heatmap grid */}
        <div className="grid gap-1 mb-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {Array.from({ length: rows * cols }).map((_, i) => (
            <div
              key={i}
              className="rounded-sm"
              style={{
                aspectRatio: "1",
                background: heatColors[i % heatColors.length],
                opacity: 0.6 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>

        {/* Tier breakdown bar */}
        <div className="mb-4">
          <span className="font-mono text-[9px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
            Tier Breakdown
          </span>
          <div className="flex rounded-md overflow-hidden h-3">
            <div style={{ width: "35%", background: "#D4AF37" }} />
            <div style={{ width: "40%", background: "rgba(255,255,255,0.15)" }} />
            <div style={{ width: "25%", background: "rgba(230,57,70,0.6)" }} />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[8px] font-mono" style={{ color: "#D4AF37" }}>Viral 35%</span>
            <span className="text-[8px] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>Mid 40%</span>
            <span className="text-[8px] font-mono" style={{ color: "#E63946" }}>Bombed 25%</span>
          </div>
        </div>

        {/* Performance drivers */}
        <div className="space-y-2">
          {drivers.map((d) => (
            <div
              key={d.label}
              className="flex items-center justify-between rounded-lg px-3 py-2"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.6)" }}>{d.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {d.value}
                </span>
                <span
                  className="text-[8px] font-mono uppercase px-1.5 py-0.5 rounded"
                  style={{
                    color: d.confidence === "High" ? "#4ade80" : "#facc15",
                    background: d.confidence === "High" ? "rgba(74,222,128,0.1)" : "rgba(250,204,21,0.1)",
                    border: `1px solid ${d.confidence === "High" ? "rgba(74,222,128,0.2)" : "rgba(250,204,21,0.2)"}`,
                  }}
                >
                  {d.confidence}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IdeationMockup() {
  const concepts = [
    { rank: 1, title: "The 30-Day Algorithm Experiment", risk: "Low", topPick: true },
    { rank: 2, title: "Why Nobody Watches Your Videos", risk: "Medium", topPick: false },
    { rank: 3, title: "I Studied 1,000 Viral Thumbnails", risk: "Low", topPick: false },
  ];
  const riskColors: Record<string, string> = {
    Low: "#4ade80",
    Medium: "#facc15",
  };

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1517 0%, #111 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="p-4">
        <span className="font-mono text-[9px] uppercase tracking-wider block mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
          Generated Concepts
        </span>
        <div className="space-y-2.5">
          {concepts.map((c) => (
            <div
              key={c.rank}
              className="rounded-lg p-3 relative"
              style={{
                background: c.topPick ? "rgba(230,57,70,0.06)" : "rgba(255,255,255,0.02)",
                border: c.topPick ? "1px solid rgba(230,57,70,0.25)" : "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold"
                    style={{
                      background: c.topPick ? "rgba(230,57,70,0.2)" : "rgba(255,255,255,0.06)",
                      color: c.topPick ? "#E63946" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {c.rank}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {c.title}
                  </span>
                </div>
                {c.topPick && (
                  <span
                    className="text-[8px] font-mono uppercase px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(230,57,70,0.15)", color: "#E63946", border: "1px solid rgba(230,57,70,0.3)" }}
                  >
                    Top Pick
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 ml-7">
                <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>Risk:</span>
                <span
                  className="text-[9px] font-mono"
                  style={{ color: riskColors[c.risk] }}
                >
                  {c.risk}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScriptMockup() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A1517 0%, #111 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
            Script Output
          </span>
          <div className="flex items-center gap-2">
            <span
              className="text-[8px] font-mono px-2 py-0.5 rounded-md"
              style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              847 words
            </span>
            <span
              className="text-[9px] font-mono px-2.5 py-1 rounded-md cursor-pointer"
              style={{ background: "rgba(230,57,70,0.12)", color: "#E63946", border: "1px solid rgba(230,57,70,0.25)" }}
            >
              Copy
            </span>
          </div>
        </div>

        {/* Script sections */}
        <div className="space-y-3">
          <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-[9px] font-mono uppercase tracking-wider block mb-1.5" style={{ color: "#E63946" }}>
              Hook
            </span>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              &quot;I spent 30 days testing every single viral strategy on YouTube — and what I found completely changed how I make videos...&quot;
            </p>
          </div>
          <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-[9px] font-mono uppercase tracking-wider block mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
              Body
            </span>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Start with the most surprising result. Walk through each strategy tested, showing the before-and-after metrics. Use pattern interrupts every 45 seconds...
            </p>
          </div>
          <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-[9px] font-mono uppercase tracking-wider block mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
              CTA
            </span>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              &quot;If you want to see the full breakdown of every strategy, drop a comment below. And hit subscribe — because next week, I&apos;m revealing...&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Screenshot wrapper ─────────────────────────────────────────────

function VisualWrapper({ screenshotSrc, children }: { screenshotSrc?: string; children: React.ReactNode }) {
  if (screenshotSrc) {
    return (
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(230,57,70,0.08)" }}>
        <img src={screenshotSrc} alt="" className="w-full h-auto rounded-xl" />
      </div>
    );
  }
  return <>{children}</>;
}

// ── Main component ─────────────────────────────────────────────────

const panels = [
  {
    label: "Research",
    suit: "♠",
    suitColor: "#fafafa",
    title: "Video Search & Discovery",
    description:
      "Search any topic, channel, or video URL. Instantly see tier-ranked results with engagement scores, so you know which videos are worth studying before you click.",
    mockup: "search",
  },
  {
    label: "Analysis",
    suit: "♥",
    suitColor: "#E63946",
    title: "AI Format Analysis",
    description:
      "Our AI decodes the communication patterns that make videos go viral. See heatmaps of what's working, performance driver breakdowns, and tier classifications across every format.",
    mockup: "heatmap",
  },
  {
    label: "Ideation",
    suit: "♦",
    suitColor: "#E63946",
    title: "Ideation Engine",
    description:
      "Generate data-backed video concepts ranked by viral potential. Each idea comes with a risk rating and is built from patterns found in top-performing content.",
    mockup: "ideation",
  },
  {
    label: "Production",
    suit: "♣",
    suitColor: "#fafafa",
    title: "Script Generation",
    description:
      "Get camera-ready scripts with optimized hooks, structured talking points, and strategic CTAs — all built from the viral patterns our AI has identified.",
    mockup: "script",
  },
];

const mockups: Record<string, React.ReactNode> = {
  search: <SearchMockup />,
  heatmap: <HeatmapMockup />,
  ideation: <IdeationMockup />,
  script: <ScriptMockup />,
};

export function ProductShowcase({ screenshots = {} }: { screenshots?: Record<string, string> }) {
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(230, 57, 70, 0.05) 0%, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            See It In Action
          </span>
          <h2
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 text-balance"
            style={{ color: "rgba(255,255,255,0.95)" }}
          >
            Built for{" "}
            <span className="italic" style={{ color: "#E63946", textShadow: "0 2px 30px rgba(230, 57, 70, 0.3)" }}>
              Results
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Four powerful phases that take you from research to a ready-to-film script.
          </p>
        </div>

        {/* Panels */}
        <div className="space-y-20 lg:space-y-28">
          {panels.map((panel, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={panel.mockup}
                className="group relative"
                onMouseEnter={() => setHoveredPanel(i)}
                onMouseLeave={() => setHoveredPanel(null)}
              >
                {/* Hover glow */}
                <div
                  className="absolute -inset-8 rounded-3xl pointer-events-none transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(230, 57, 70, 0.08) 0%, transparent 70%)",
                    opacity: hoveredPanel === i ? 1 : 0,
                    filter: "blur(30px)",
                  }}
                />

                <div
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    reversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Text side */}
                  <div className={`${reversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-2xl leading-none"
                        style={{
                          color: panel.suitColor,
                          filter:
                            panel.suitColor === "#E63946"
                              ? "drop-shadow(0 0 6px rgba(230,57,70,0.4))"
                              : "none",
                        }}
                      >
                        {panel.suit}
                      </span>
                      <span
                        className="font-mono text-[10px] uppercase tracking-[0.25em]"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {panel.label}
                      </span>
                    </div>
                    <h3
                      className="font-serif text-3xl sm:text-4xl font-normal mb-4"
                      style={{ color: "rgba(255,255,255,0.95)" }}
                    >
                      {panel.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {panel.description}
                    </p>
                  </div>

                  {/* Visual side */}
                  <div
                    className={`${reversed ? "lg:order-1" : "lg:order-2"}`}
                    style={{
                      transform: hoveredPanel === i ? "translateY(-4px)" : "translateY(0)",
                      transition: "transform 400ms ease-out",
                    }}
                  >
                    <VisualWrapper screenshotSrc={screenshots[panel.mockup]}>
                      {mockups[panel.mockup]}
                    </VisualWrapper>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
