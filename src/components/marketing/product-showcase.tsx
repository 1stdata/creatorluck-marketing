"use client";

import { useState } from "react";

// ── Shared constants ───────────────────────────────────────────────

const tierColors = {
  viral: "#22c55e",
  mid: "#3b82f6",
  bombed: "#ef4444",
};

const tierBg = {
  viral: "rgba(34,197,94,0.1)",
  mid: "rgba(59,130,246,0.1)",
  bombed: "rgba(239,68,68,0.1)",
};

const tierBorder = {
  viral: "rgba(34,197,94,0.3)",
  mid: "rgba(59,130,246,0.3)",
  bombed: "rgba(239,68,68,0.3)",
};

const cardBg = "linear-gradient(180deg, #1A1517 0%, #111 100%)";
const cardBorder = "1px solid rgba(255,255,255,0.08)";

// ── 1. Channel Stats Dashboard (MrBeast reference) ────────────────

function ChannelStatsMockup() {
  const videos = [
    { title: "$1 vs $100,000,000 Car!", views: "278M", vpd: "1.2M", eng: "4.8%", tier: "viral" as const, date: "Jan 15, 2025" },
    { title: "I Survived 7 Days In An Abandoned City", views: "189M", vpd: "890K", eng: "5.1%", tier: "viral" as const, date: "Jan 8, 2025" },
    { title: "World's Most Dangerous Trap!", views: "142M", vpd: "720K", eng: "4.2%", tier: "viral" as const, date: "Dec 28, 2024" },
    { title: "I Built 100 Houses And Gave Them Away", views: "95M", vpd: "310K", eng: "3.1%", tier: "mid" as const, date: "Dec 18, 2024" },
    { title: "Survive 100 Days, Win $500,000", views: "67M", vpd: "180K", eng: "2.8%", tier: "mid" as const, date: "Dec 5, 2024" },
    { title: "I Opened A Free Restaurant", views: "23M", vpd: "45K", eng: "1.9%", tier: "bombed" as const, date: "Nov 22, 2024" },
  ];

  const tierCounts = { viral: 18, mid: 24, bombed: 8 };
  const total = tierCounts.viral + tierCounts.mid + tierCounts.bombed;

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: cardBorder }}>
      <div className="p-4">
        {/* Channel header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.3)" }}>
            MB
          </div>
          <div>
            <span className="text-xs font-medium block" style={{ color: "rgba(255,255,255,0.9)" }}>MrBeast</span>
            <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>@MrBeast · 50 videos analyzed</span>
          </div>
        </div>

        {/* Tier distribution bar */}
        <div className="mb-4">
          <span className="font-mono text-[9px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
            Tier Distribution
          </span>
          <div className="flex rounded-md overflow-hidden h-5">
            <div className="flex items-center justify-center" style={{ width: `${(tierCounts.viral / total) * 100}%`, background: "rgba(34,197,94,0.25)" }}>
              <span className="text-[8px] font-mono font-bold" style={{ color: "#22c55e" }}>♦ {tierCounts.viral}</span>
            </div>
            <div className="flex items-center justify-center" style={{ width: `${(tierCounts.mid / total) * 100}%`, background: "rgba(59,130,246,0.2)" }}>
              <span className="text-[8px] font-mono font-bold" style={{ color: "#3b82f6" }}>◆ {tierCounts.mid}</span>
            </div>
            <div className="flex items-center justify-center" style={{ width: `${(tierCounts.bombed / total) * 100}%`, background: "rgba(239,68,68,0.2)" }}>
              <span className="text-[8px] font-mono font-bold" style={{ color: "#ef4444" }}>◆ {tierCounts.bombed}</span>
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[8px] font-mono" style={{ color: "#22c55e" }}>Viral 36%</span>
            <span className="text-[8px] font-mono" style={{ color: "#3b82f6" }}>Mid 48%</span>
            <span className="text-[8px] font-mono" style={{ color: "#ef4444" }}>Bombed 16%</span>
          </div>
        </div>

        {/* Video table */}
        <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
          {/* Table header */}
          <div className="grid gap-2 px-3 py-2" style={{ gridTemplateColumns: "1fr 50px 50px 44px 50px", background: "rgba(255,255,255,0.03)" }}>
            {["Video", "Views", "VPD", "Eng%", "Tier"].map((h) => (
              <span key={h} className="text-[8px] font-mono uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>{h}</span>
            ))}
          </div>
          {/* Table rows */}
          {videos.map((v, i) => (
            <div
              key={i}
              className="grid gap-2 px-3 py-2 items-center"
              style={{ gridTemplateColumns: "1fr 50px 50px 44px 50px", borderTop: "1px solid rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-10 h-6 rounded shrink-0 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <span style={{ color: "rgba(255,255,255,0.1)", fontSize: 8 }}>▶</span>
                </div>
                <span className="text-[10px] truncate" style={{ color: "rgba(255,255,255,0.7)" }}>{v.title}</span>
              </div>
              <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.6)" }}>{v.views}</span>
              <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>{v.vpd}</span>
              <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>{v.eng}</span>
              <span
                className="text-[8px] font-mono uppercase px-1.5 py-0.5 rounded text-center"
                style={{ color: tierColors[v.tier], background: tierBg[v.tier], border: `1px solid ${tierBorder[v.tier]}` }}
              >
                {v.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 2. Frame-by-Frame Comparison ──────────────────────────────────

function FrameByFrameMockup() {
  const videos = [
    { title: "$1 vs $100,000,000 Car!", tier: "viral" as const, views: "278M" },
    { title: "I Survived 7 Days In An Abandoned City", tier: "viral" as const, views: "189M" },
    { title: "World's Most Dangerous Trap!", tier: "viral" as const, views: "142M" },
    { title: "I Opened A Free Restaurant", tier: "bombed" as const, views: "23M" },
  ];
  const timestamps = ["0s", "1s", "2s", "3s", "5s", "10s", "15s", "30s"];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: cardBorder }}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
            Frame-by-Frame Comparison
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-mono px-2 py-0.5 rounded" style={{ background: "rgba(250,204,21,0.1)", color: "#facc15", border: "1px solid rgba(250,204,21,0.2)" }}>
              Hook Zone
            </span>
            <span className="text-[8px] font-mono px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}>
              Body
            </span>
          </div>
        </div>

        {/* Horizontal scroll table */}
        <div className="overflow-x-auto">
          <div style={{ minWidth: 480 }}>
            {/* Timestamp header */}
            <div className="grid gap-1 mb-1" style={{ gridTemplateColumns: "100px repeat(8, 1fr)" }}>
              <div />
              {timestamps.map((t, i) => (
                <span key={t} className="text-[8px] font-mono text-center" style={{ color: i < 4 ? "#facc15" : "rgba(255,255,255,0.3)" }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Video rows */}
            {videos.map((v, vi) => (
              <div key={vi} className="grid gap-1 mb-1" style={{ gridTemplateColumns: "100px repeat(8, 1fr)" }}>
                {/* Video info (sticky feel) */}
                <div className="flex items-center gap-1.5 pr-2 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: tierColors[v.tier] }} />
                  <span className="text-[8px] truncate" style={{ color: "rgba(255,255,255,0.6)" }}>{v.title}</span>
                </div>
                {/* Frame cells */}
                {timestamps.map((t, ti) => {
                  const isHookZone = ti < 4;
                  const hasFrame = !(vi === 3 && ti === 2) && !(vi === 1 && ti === 5);
                  return (
                    <div
                      key={t}
                      className="rounded-sm flex items-center justify-center"
                      style={{
                        aspectRatio: "16/10",
                        background: hasFrame
                          ? `linear-gradient(${135 + vi * 30 + ti * 15}deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))`
                          : "transparent",
                        border: hasFrame
                          ? isHookZone
                            ? "1.5px solid rgba(250,204,21,0.5)"
                            : "1px solid rgba(255,255,255,0.06)"
                          : "1px dashed rgba(255,255,255,0.06)",
                      }}
                    >
                      {hasFrame ? (
                        <span style={{ color: "rgba(255,255,255,0.08)", fontSize: 6 }}>■</span>
                      ) : (
                        <span style={{ color: "rgba(255,255,255,0.06)", fontSize: 6 }}>—</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 3. Communication Heatmap + Drivers ────────────────────────────

function HeatmapMockup() {
  const dimensions = ["Feelings", "Facts", "Fun", "Values", "Autocratic", "Leadership"];
  const videos = [
    { title: "$1 vs $100M Car!", tier: "viral" as const, scores: [4, 3, 5, 2, 4, 5] },
    { title: "Survived 7 Days...", tier: "viral" as const, scores: [5, 4, 4, 3, 3, 5] },
    { title: "Most Dangerous Trap!", tier: "viral" as const, scores: [3, 2, 5, 2, 5, 4] },
    { title: "Built 100 Houses", tier: "mid" as const, scores: [4, 3, 3, 4, 2, 3] },
    { title: "Survive 100 Days", tier: "mid" as const, scores: [3, 2, 4, 2, 3, 3] },
    { title: "Free Restaurant", tier: "bombed" as const, scores: [2, 3, 2, 3, 1, 2] },
  ];

  const scoreColor = (s: number) => {
    if (s >= 5) return { bg: "rgba(34,197,94,0.5)", text: "#86efac" };
    if (s >= 4) return { bg: "rgba(34,197,94,0.25)", text: "#86efac" };
    if (s >= 3) return { bg: "rgba(250,204,21,0.25)", text: "#fde047" };
    if (s >= 2) return { bg: "rgba(249,115,22,0.25)", text: "#fca5a5" };
    return { bg: "rgba(239,68,68,0.25)", text: "#fca5a5" };
  };

  const drivers = [
    { name: "High-Stakes Spectacle", confidence: "high", replicability: "Medium" },
    { name: "Emotional Generosity Arc", confidence: "high", replicability: "Easy" },
    { name: "Escalating Fun Pattern", confidence: "medium", replicability: "Medium" },
  ];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: cardBorder }}>
      <div className="p-4">
        <span className="font-mono text-[9px] uppercase tracking-wider block mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
          Communication Heatmap
        </span>

        {/* Heatmap table */}
        <div className="overflow-x-auto mb-4">
          <div style={{ minWidth: 420 }}>
            {/* Header row */}
            <div className="grid gap-1 mb-1" style={{ gridTemplateColumns: "100px repeat(6, 1fr)" }}>
              <div />
              {dimensions.map((d) => (
                <span key={d} className="text-[7px] font-mono text-center uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {d}
                </span>
              ))}
            </div>

            {/* Data rows */}
            {videos.map((v, vi) => {
              const prevTier = vi > 0 ? videos[vi - 1].tier : null;
              const showSeparator = prevTier && prevTier !== v.tier;
              return (
                <div key={vi}>
                  {showSeparator && <div className="h-px my-1" style={{ background: "rgba(255,255,255,0.08)" }} />}
                  <div className="grid gap-1 mb-1" style={{ gridTemplateColumns: "100px repeat(6, 1fr)" }}>
                    <div className="flex items-center gap-1.5 min-w-0 pr-1">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: tierColors[v.tier] }} />
                      <span className="text-[8px] truncate" style={{ color: "rgba(255,255,255,0.6)" }}>{v.title}</span>
                    </div>
                    {v.scores.map((s, si) => {
                      const { bg, text } = scoreColor(s);
                      return (
                        <div
                          key={si}
                          className="rounded-sm flex items-center justify-center py-1"
                          style={{ background: bg }}
                        >
                          <span className="text-[10px] font-mono font-bold" style={{ color: text }}>{s}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance Drivers */}
        <span className="font-mono text-[9px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
          Performance Drivers
        </span>
        <div className="space-y-1.5">
          {drivers.map((d) => (
            <div
              key={d.name}
              className="flex items-center justify-between rounded-lg px-3 py-2"
              style={{ background: "rgba(255,255,255,0.03)", borderLeft: `2px solid ${d.confidence === "high" ? "#22c55e" : "#facc15"}`, border: "1px solid rgba(255,255,255,0.05)", borderLeftWidth: 2, borderLeftColor: d.confidence === "high" ? "#22c55e" : "#facc15" }}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: d.confidence === "high" ? "#22c55e" : "#facc15" }} />
                <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>{d.name}</span>
              </div>
              <span
                className="text-[8px] font-mono px-1.5 py-0.5 rounded"
                style={{
                  color: d.replicability === "Easy" ? "#22c55e" : "#3b82f6",
                  background: d.replicability === "Easy" ? "rgba(34,197,94,0.1)" : "rgba(59,130,246,0.1)",
                  border: `1px solid ${d.replicability === "Easy" ? "rgba(34,197,94,0.2)" : "rgba(59,130,246,0.2)"}`,
                }}
              >
                {d.replicability}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 4. Script Production ──────────────────────────────────────────

function ScriptMockup() {
  const performanceDrivers = ["High-Stakes Spectacle", "Emotional Generosity", "Escalating Fun"];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: cardBorder }}>
      <div className="p-4">
        {/* Selected concept card */}
        <div className="rounded-lg p-3 mb-3" style={{ background: "rgba(230,57,70,0.05)", border: "1px solid rgba(230,57,70,0.2)" }}>
          <span className="text-[8px] font-mono uppercase tracking-wider block mb-1" style={{ color: "#E63946" }}>
            Selected Concept
          </span>
          <span className="text-sm font-medium block" style={{ color: "rgba(255,255,255,0.9)" }}>
            $1 vs $1,000,000 Survival Challenge
          </span>
        </div>

        {/* Performance drivers */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {performanceDrivers.map((d) => (
            <span
              key={d}
              className="text-[9px] font-mono px-2.5 py-1 rounded-md"
              style={{ background: "rgba(34,197,94,0.1)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" }}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Script output */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
            Generated Script
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-mono px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
              1,247 words
            </span>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
              📋 Copy
            </span>
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>
              ⬇ Download
            </span>
          </div>
        </div>

        {/* Script text (monospace, mimicking the real product) */}
        <div
          className="rounded-lg p-3 font-mono text-[10px] leading-relaxed space-y-3"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", maxHeight: 200, overflow: "hidden", maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" }}
        >
          <div>
            <span style={{ color: "#E63946" }}>[HOOK]</span>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>
              &quot;Right now, this person has to survive on just $1... while this person gets one MILLION dollars. And whatever they don&apos;t spend in the next 7 days, they get to keep.&quot;
            </p>
          </div>
          <div>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>[SETUP - Day 1]</span>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>
              Introduce both contestants side by side. Show the $1 contestant&apos;s reaction to their budget. Cut to the $1M contestant&apos;s reaction. Establish the stakes: &quot;Whatever you don&apos;t spend, you keep.&quot;
            </p>
          </div>
          <div>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>[ESCALATION - Day 2-3]</span>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>
              Show the contrast in living conditions. Pattern interrupt at 45s: reveal a twist — the $1 contestant can steal from the $1M budget, but only once...
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
    title: "Channel Stats Dashboard",
    description:
      "Analyze any channel like MrBeast. See tier distribution across all their videos, view counts, engagement rates, and views-per-day — so you know exactly which content strategies are working.",
    mockup: "stats",
  },
  {
    label: "Analysis",
    suit: "♥",
    suitColor: "#E63946",
    title: "Frame-by-Frame Comparison",
    description:
      "Compare video frames across timestamps side-by-side. See exactly what top creators show at 0s, 1s, 3s — revealing the visual hooks that capture attention in the critical first seconds.",
    mockup: "frames",
  },
  {
    label: "Analysis",
    suit: "♦",
    suitColor: "#E63946",
    title: "Communication Heatmap",
    description:
      "Our AI scores every video across 6 communication dimensions — Feelings, Facts, Fun, Values, Autocratic, and Leadership — revealing the exact patterns that separate viral from bombed.",
    mockup: "heatmap",
  },
  {
    label: "Production",
    suit: "♣",
    suitColor: "#fafafa",
    title: "Script Generation",
    description:
      "Select your best concept, and our AI generates a camera-ready script using the performance drivers it identified — complete with hooks, pattern interrupts, and strategic CTAs.",
    mockup: "script",
  },
];

const mockups: Record<string, React.ReactNode> = {
  stats: <ChannelStatsMockup />,
  frames: <FrameByFrameMockup />,
  heatmap: <HeatmapMockup />,
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
            See how CreatorLuck decodes MrBeast&apos;s viral formula — from raw stats to a ready-to-film script.
          </p>
        </div>

        {/* Panels */}
        <div className="space-y-20 lg:space-y-28">
          {panels.map((panel, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={i}
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

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Text side */}
                  <div className={`${reversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-2xl leading-none"
                        style={{
                          color: panel.suitColor,
                          filter: panel.suitColor === "#E63946" ? "drop-shadow(0 0 6px rgba(230,57,70,0.4))" : "none",
                        }}
                      >
                        {panel.suit}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {panel.label}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl font-normal mb-4" style={{ color: "rgba(255,255,255,0.95)" }}>
                      {panel.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
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
