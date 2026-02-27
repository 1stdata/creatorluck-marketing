"use client";

import { useState } from "react";
import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

const NOISE_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

// ── Mockup sub-components (larger, more detailed for features page) ──

function SearchVisual() {
  const videos = [
    { title: "How I Got 10M Views in 30 Days", views: "10.2M", tier: "gold", engagement: "8.4%", duration: "14:22" },
    { title: "The Secret YouTube Algorithm Hack", views: "3.8M", tier: "silver", engagement: "6.1%", duration: "11:05" },
    { title: "Why Most Creators Fail (Data Proof)", views: "1.1M", tier: "bronze", engagement: "5.2%", duration: "9:47" },
    { title: "I Tested Every Viral Hook", views: "7.5M", tier: "gold", engagement: "9.1%", duration: "16:33" },
    { title: "Thumbnail Psychology 101", views: "2.4M", tier: "silver", engagement: "5.8%", duration: "12:18" },
    { title: "Content Strategy Breakdown", views: "890K", tier: "bronze", engagement: "4.3%", duration: "8:52" },
    { title: "My $100K YouTube Formula", views: "5.1M", tier: "gold", engagement: "7.6%", duration: "18:41" },
    { title: "Stop Making These Mistakes", views: "1.9M", tier: "silver", engagement: "5.5%", duration: "10:30" },
  ];
  const tabs = ["By Topic", "By Channel", "By Video"];
  const tierColors: Record<string, string> = { gold: "#D4AF37", silver: "#A0A0A0", bronze: "#CD7F32" };

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "linear-gradient(180deg, #1A1517 0%, #111 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="p-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2 rounded-lg px-3 py-2.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>🔍</span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Search videos, channels, or topics...</span>
        </div>
        <div className="flex gap-1 mt-3">
          {tabs.map((t, i) => (
            <span key={t} className="font-mono text-[9px] uppercase tracking-wider px-3 py-1 rounded-md" style={{ background: i === 0 ? "rgba(230,57,70,0.15)" : "transparent", color: i === 0 ? "#E63946" : "rgba(255,255,255,0.35)", border: i === 0 ? "1px solid rgba(230,57,70,0.3)" : "1px solid transparent" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3">
        {videos.map((v, i) => (
          <div key={i} className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="rounded-md mb-2 flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))", aspectRatio: "16/9" }}>
              <span style={{ color: "rgba(255,255,255,0.08)", fontSize: 16 }}>▶</span>
              <span className="absolute bottom-1 right-1 text-[8px] font-mono px-1 rounded" style={{ background: "rgba(0,0,0,0.7)", color: "rgba(255,255,255,0.6)" }}>{v.duration}</span>
            </div>
            <p className="text-[10px] leading-tight mb-1.5 line-clamp-2" style={{ color: "rgba(255,255,255,0.7)" }}>{v.title}</p>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>{v.views}</span>
              <span className="text-[8px] font-mono uppercase px-1.5 py-0.5 rounded" style={{ color: tierColors[v.tier], background: `${tierColors[v.tier]}15`, border: `1px solid ${tierColors[v.tier]}30` }}>{v.tier}</span>
            </div>
            <span className="text-[9px] font-mono block mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>{v.engagement} eng.</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalysisVisual() {
  const rows = 6;
  const cols = 8;
  const heatLevels = [0.15, 0.25, 0.4, 0.55, 0.7, 0.85];
  const drivers = [
    { label: "Hook Strength", value: "92%", confidence: "High", bar: 92 },
    { label: "Pacing & Retention", value: "78%", confidence: "Med", bar: 78 },
    { label: "CTA Placement", value: "85%", confidence: "High", bar: 85 },
    { label: "Emotional Triggers", value: "71%", confidence: "Med", bar: 71 },
  ];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "linear-gradient(180deg, #1A1517 0%, #111 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="p-4">
        <span className="font-mono text-[9px] uppercase tracking-wider block mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Communication Heatmap</span>
        <div className="grid gap-1 mb-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {Array.from({ length: rows * cols }).map((_, i) => {
            const level = heatLevels[(i * 7 + i * i) % heatLevels.length];
            return (
              <div key={i} className="rounded-sm" style={{ aspectRatio: "1", background: level > 0.5 ? `rgba(230,57,70,${level})` : `rgba(255,255,255,${level * 0.3})` }} />
            );
          })}
        </div>

        {/* Tier breakdown */}
        <div className="mb-4">
          <span className="font-mono text-[9px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Tier Breakdown</span>
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

        {/* Drivers */}
        <span className="font-mono text-[9px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Performance Drivers</span>
        <div className="space-y-2">
          {drivers.map((d) => (
            <div key={d.label} className="rounded-lg px-3 py-2.5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.6)" }}>{d.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold" style={{ color: "rgba(255,255,255,0.9)" }}>{d.value}</span>
                  <span className="text-[8px] font-mono uppercase px-1.5 py-0.5 rounded" style={{ color: d.confidence === "High" ? "#4ade80" : "#facc15", background: d.confidence === "High" ? "rgba(74,222,128,0.1)" : "rgba(250,204,21,0.1)", border: `1px solid ${d.confidence === "High" ? "rgba(74,222,128,0.2)" : "rgba(250,204,21,0.2)"}` }}>
                    {d.confidence}
                  </span>
                </div>
              </div>
              <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: `${d.bar}%`, background: "linear-gradient(90deg, #E63946, #c1121f)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IdeationVisual() {
  const concepts = [
    { rank: 1, title: "The 30-Day Algorithm Experiment", desc: "Test every viral strategy and document the results with real analytics.", risk: "Low", score: "94", topPick: true },
    { rank: 2, title: "Why Nobody Watches Your Videos", desc: "Data-driven teardown of the 5 most common mistakes killing your channel.", risk: "Medium", score: "87", topPick: false },
    { rank: 3, title: "I Studied 1,000 Viral Thumbnails", desc: "Pattern analysis reveals the exact elements that drive clicks.", risk: "Low", score: "82", topPick: false },
  ];
  const riskColors: Record<string, string> = { Low: "#4ade80", Medium: "#facc15" };

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "linear-gradient(180deg, #1A1517 0%, #111 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Generated Concepts</span>
          <span className="text-[8px] font-mono px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>3 results</span>
        </div>
        <div className="space-y-3">
          {concepts.map((c) => (
            <div key={c.rank} className="rounded-lg p-3.5 relative" style={{ background: c.topPick ? "rgba(230,57,70,0.06)" : "rgba(255,255,255,0.02)", border: c.topPick ? "1px solid rgba(230,57,70,0.25)" : "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-mono font-bold" style={{ background: c.topPick ? "rgba(230,57,70,0.2)" : "rgba(255,255,255,0.06)", color: c.topPick ? "#E63946" : "rgba(255,255,255,0.5)" }}>
                    {c.rank}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{c.title}</span>
                </div>
                {c.topPick && (
                  <span className="text-[8px] font-mono uppercase px-2 py-0.5 rounded-full shrink-0" style={{ background: "rgba(230,57,70,0.15)", color: "#E63946", border: "1px solid rgba(230,57,70,0.3)" }}>Top Pick</span>
                )}
              </div>
              <p className="text-[10px] leading-relaxed mb-2 ml-8" style={{ color: "rgba(255,255,255,0.45)" }}>{c.desc}</p>
              <div className="flex items-center gap-4 ml-8">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>Risk:</span>
                  <span className="text-[9px] font-mono" style={{ color: riskColors[c.risk] }}>{c.risk}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>Score:</span>
                  <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.7)" }}>{c.score}/100</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScriptVisual() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "linear-gradient(180deg, #1A1517 0%, #111 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Script Output</span>
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-mono px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>1,247 words</span>
            <span className="text-[9px] font-mono px-2.5 py-1 rounded-md" style={{ background: "rgba(230,57,70,0.12)", color: "#E63946", border: "1px solid rgba(230,57,70,0.25)" }}>Copy</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-lg p-3.5" style={{ background: "rgba(230,57,70,0.04)", border: "1px solid rgba(230,57,70,0.15)" }}>
            <span className="text-[9px] font-mono uppercase tracking-wider block mb-1.5" style={{ color: "#E63946" }}>Hook</span>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              &quot;I spent 30 days testing every single viral strategy on YouTube — and what I found completely changed how I make videos. By the end of this video, you&apos;ll know exactly which strategies actually work...&quot;
            </p>
          </div>
          <div className="rounded-lg p-3.5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-[9px] font-mono uppercase tracking-wider block mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Body — Section 1</span>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Start with the most surprising result. Walk through each strategy tested, showing the before-and-after metrics. Use pattern interrupts every 45 seconds to maintain viewer attention...
            </p>
          </div>
          <div className="rounded-lg p-3.5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-[9px] font-mono uppercase tracking-wider block mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>Body — Section 2</span>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Transition into the data analysis. Compare each strategy side-by-side using screen recordings of analytics. Call out the one strategy that outperformed everything by 3x...
            </p>
          </div>
          <div className="rounded-lg p-3.5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-[9px] font-mono uppercase tracking-wider block mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>CTA</span>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              &quot;If you want to see the full breakdown of every strategy with the raw numbers, drop a comment below. And hit subscribe — because next week, I&apos;m revealing the thumbnail formula that 10x&apos;d my CTR...&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Screenshot wrapper ──

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

// ── Features data ──

const features = [
  {
    number: "01",
    suit: "♠",
    suitColor: "#fafafa",
    title: "Smart Video Search",
    description: "Search any topic, channel name, or paste a video URL. CreatorLuck instantly finds and tier-ranks relevant videos by engagement rate, giving you a curated library of content worth studying — before you waste time clicking through YouTube.",
    details: [
      "Multi-intent search — topics, channels, or direct URLs",
      "Automatic tier classification (gold, silver, bronze)",
      "Engagement scoring and view count ranking",
      "Video duration and format filtering",
    ],
    mockup: "search",
  },
  {
    number: "02",
    suit: "♥",
    suitColor: "#E63946",
    title: "AI Format Analysis",
    description: "Our proprietary communication algorithm breaks down every video into a heatmap of what's working. See performance drivers with confidence scores, tier breakdowns showing viral vs. mid vs. bombed percentages, and cross-format comparisons.",
    details: [
      "Communication heatmap visualization",
      "Performance driver breakdown with confidence badges",
      "Viral / mid / bombed tier classification",
      "Cross-format pattern comparison",
    ],
    mockup: "analysis",
  },
  {
    number: "03",
    suit: "♦",
    suitColor: "#E63946",
    title: "Ideation Engine",
    description: "Generate data-backed video concepts ranked by viral potential. Each idea is built from patterns found across top-performing content, complete with risk ratings and viral scores — so you never run out of winning video ideas.",
    details: [
      "AI-generated concepts from real performance patterns",
      "Viral potential scoring (0-100)",
      "Risk rating for each concept",
      "Top Pick badge on highest-potential ideas",
    ],
    mockup: "ideation",
  },
  {
    number: "04",
    suit: "♣",
    suitColor: "#fafafa",
    title: "Script Production",
    description: "Get camera-ready scripts built from the viral patterns our AI has identified. Every script comes with an optimized hook, structured talking points with pattern interrupts, and a strategic CTA — all formatted and ready to film.",
    details: [
      "Optimized hooks based on viral opening patterns",
      "Structured body with talking points and transitions",
      "Strategic CTA placement for maximum conversion",
      "One-click copy with word count tracking",
    ],
    mockup: "script",
  },
];

const mockupComponents: Record<string, React.ReactNode> = {
  search: <SearchVisual />,
  analysis: <AnalysisVisual />,
  ideation: <IdeationVisual />,
  script: <ScriptVisual />,
};

export default function FeaturesPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />
        <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
          {/* Hero section */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Powerful Tools
            </span>
            <h1
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight mb-6 text-balance"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              Your Winning{" "}
              <span
                className="italic"
                style={{ color: "#E63946", textShadow: "0 2px 30px rgba(230, 57, 70, 0.4)" }}
              >
                Deck
              </span>
            </h1>
            <p
              className="text-lg max-w-xl mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Four powerful phases that take you from raw research to a camera-ready script.
            </p>
          </div>

          {/* Feature sections */}
          <div className="max-w-6xl mx-auto space-y-24 lg:space-y-32 mb-24">
            {features.map((feature, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={feature.number}
                  className="group relative"
                  onMouseEnter={() => setHoveredFeature(i)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute -inset-8 rounded-3xl pointer-events-none transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(230, 57, 70, 0.06) 0%, transparent 70%)",
                      opacity: hoveredFeature === i ? 1 : 0,
                      filter: "blur(30px)",
                    }}
                  />

                  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Text side */}
                    <div className={`${reversed ? "lg:order-2" : "lg:order-1"} pt-4`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.2em]"
                          style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                          {feature.number}
                        </span>
                        <span
                          className="text-2xl leading-none"
                          style={{
                            color: feature.suitColor,
                            filter: feature.suitColor === "#E63946" ? "drop-shadow(0 0 6px rgba(230,57,70,0.4))" : "none",
                          }}
                        >
                          {feature.suit}
                        </span>
                      </div>

                      <h2
                        className="font-serif text-3xl sm:text-4xl font-normal mb-4"
                        style={{ color: "rgba(255,255,255,0.95)" }}
                      >
                        {feature.title}
                      </h2>

                      <p
                        className="text-base leading-relaxed mb-6"
                        style={{ color: "rgba(255,255,255,0.55)" }}
                      >
                        {feature.description}
                      </p>

                      <ul className="space-y-2.5">
                        {feature.details.map((detail, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm"
                            style={{ color: "rgba(255,255,255,0.5)" }}
                          >
                            <span style={{ color: "#E63946", fontSize: 8, marginTop: 5, flexShrink: 0 }}>♦</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual side */}
                    <div
                      className={`${reversed ? "lg:order-1" : "lg:order-2"}`}
                      style={{
                        transform: hoveredFeature === i ? "translateY(-4px)" : "translateY(0)",
                        transition: "transform 400ms ease-out",
                      }}
                    >
                      <VisualWrapper>{mockupComponents[feature.mockup]}</VisualWrapper>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #1A1517 0%, #141414 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(230, 57, 70, 0.15) 0%, transparent 70%)" }}
              />

              {/* Noise texture */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: NOISE_TEXTURE }}
              />

              <h3
                className="font-serif text-3xl font-normal mb-4 relative"
                style={{ color: "rgba(255,255,255,0.95)" }}
              >
                Ready to Stack the Deck?
              </h3>
              <p
                className="text-sm mb-8 relative"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Start analyzing videos with 3 free searches today.
              </p>
              <a
                href={`${APP_URL}/sign-up`}
                className="relative inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #E63946, #B91C2C)",
                  color: "#ffffff",
                  boxShadow: "0 4px 20px rgba(230, 57, 70, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ fontSize: 14 }}>♠</span>
                <span>Get Started Free</span>
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
