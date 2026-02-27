"use client";

import { useState } from "react";
import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

const NOISE_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

// ── Shared ──

const tierColors = { viral: "#22c55e", mid: "#3b82f6", bombed: "#ef4444" };
const tierBg = { viral: "rgba(34,197,94,0.1)", mid: "rgba(59,130,246,0.1)", bombed: "rgba(239,68,68,0.1)" };
const tierBorder = { viral: "rgba(34,197,94,0.3)", mid: "rgba(59,130,246,0.3)", bombed: "rgba(239,68,68,0.3)" };
const cardBg = "linear-gradient(180deg, #1A1517 0%, #111 100%)";
const cardBorder = "1px solid rgba(255,255,255,0.08)";

const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
const ytFrame = (id: string, n: number) => `https://i.ytimg.com/vi/${id}/${n}.jpg`;

// ── 1. Channel Stats (Larger) ─────────────────────────────────────

function StatsVisual() {
  const videos = [
    { id: "0e3GPea1Tyg", title: "$456,000 Squid Game In Real Life!", views: "885M", vpd: "1.8M", eng: "5.2%", tier: "viral" as const, status: "Ready" },
    { id: "KrLj6nc516A", title: "$1 vs $1,000,000,000 Car!", views: "505M", vpd: "1.1M", eng: "4.8%", tier: "viral" as const, status: "Ready" },
    { id: "zxYjTTXc-J8", title: "Last To Leave Circle Wins $500,000", views: "539M", vpd: "920K", eng: "4.5%", tier: "viral" as const, status: "Ready" },
    { id: "FM7Z-Xq8Drc", title: "Ages 1 - 100 Fight For $500,000", views: "446M", vpd: "310K", eng: "3.1%", tier: "mid" as const, status: "Ready" },
    { id: "9RhWXPcKBI8", title: "Survive 100 Days Trapped, Win $500,000", views: "427M", vpd: "280K", eng: "2.9%", tier: "mid" as const, status: "Ready" },
    { id: "tnTPaLOaHz8", title: "$10,000 Every Day You Survive In A Grocery Store", views: "472M", vpd: "220K", eng: "2.6%", tier: "mid" as const, status: "Processing" },
    { id: "erLbbextvlY", title: "7 Days Stranded On An Island", views: "437M", vpd: "180K", eng: "2.1%", tier: "bombed" as const, status: "Ready" },
    { id: "48h57PspBec", title: "$1 vs $1,000,000,000 Yacht!", views: "509M", vpd: "150K", eng: "1.8%", tier: "bombed" as const, status: "Ready" },
  ];
  const tierCounts = { viral: 18, mid: 24, bombed: 8 };
  const total = tierCounts.viral + tierCounts.mid + tierCounts.bombed;

  const insights = [
    { icon: "↑", label: "Viral videos average", stat: "2.5x more views", color: "#22c55e" },
    { icon: "?", label: "Question marks in titles", stat: "68% of viral", color: "#3b82f6" },
    { icon: "#", label: "Numbers in titles", stat: "4x higher in viral", color: "#facc15" },
  ];

  const statusColors: Record<string, { color: string; bg: string }> = {
    Ready: { color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
    Processing: { color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
  };

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: cardBorder }}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.3)" }}>MB</div>
            <div>
              <span className="text-xs font-medium block" style={{ color: "rgba(255,255,255,0.9)" }}>MrBeast</span>
              <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>@MrBeast · 345M subscribers · 50 videos</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <span className="font-mono text-[9px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Tier Distribution</span>
          <div className="flex rounded-md overflow-hidden h-6">
            <div className="flex items-center justify-center" style={{ width: `${(tierCounts.viral / total) * 100}%`, background: "rgba(34,197,94,0.25)" }}>
              <span className="text-[9px] font-mono font-bold" style={{ color: "#22c55e" }}>♦ Viral {tierCounts.viral}</span>
            </div>
            <div className="flex items-center justify-center" style={{ width: `${(tierCounts.mid / total) * 100}%`, background: "rgba(59,130,246,0.2)" }}>
              <span className="text-[9px] font-mono font-bold" style={{ color: "#3b82f6" }}>◆ Mid {tierCounts.mid}</span>
            </div>
            <div className="flex items-center justify-center" style={{ width: `${(tierCounts.bombed / total) * 100}%`, background: "rgba(239,68,68,0.2)" }}>
              <span className="text-[9px] font-mono font-bold" style={{ color: "#ef4444" }}>◆ {tierCounts.bombed}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {insights.map((ins) => (
            <div key={ins.label} className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <span className="text-[14px] block mb-1" style={{ color: ins.color }}>{ins.icon}</span>
              <span className="text-[10px] font-mono font-bold block" style={{ color: ins.color }}>{ins.stat}</span>
              <span className="text-[8px]" style={{ color: "rgba(255,255,255,0.35)" }}>{ins.label}</span>
            </div>
          ))}
        </div>

        <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="grid gap-2 px-3 py-2" style={{ gridTemplateColumns: "1fr 48px 48px 40px 48px 56px", background: "rgba(255,255,255,0.03)" }}>
            {["Video", "Views", "VPD", "Eng%", "Tier", "Status"].map((h) => (
              <span key={h} className="text-[8px] font-mono uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>{h}</span>
            ))}
          </div>
          {videos.map((v, i) => (
            <div key={i} className="grid gap-2 px-3 py-1.5 items-center" style={{ gridTemplateColumns: "1fr 48px 48px 40px 48px 56px", borderTop: "1px solid rgba(255,255,255,0.03)" }}>
              <div className="flex items-center gap-2 min-w-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ytThumb(v.id)} alt="" className="w-10 h-6 rounded shrink-0 object-cover" style={{ border: "1px solid rgba(255,255,255,0.06)" }} loading="lazy" />
                <span className="text-[9px] truncate" style={{ color: "rgba(255,255,255,0.7)" }}>{v.title}</span>
              </div>
              <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.6)" }}>{v.views}</span>
              <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>{v.vpd}</span>
              <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>{v.eng}</span>
              <span className="text-[8px] font-mono uppercase px-1 py-0.5 rounded text-center" style={{ color: tierColors[v.tier], background: tierBg[v.tier], border: `1px solid ${tierBorder[v.tier]}` }}>{v.tier}</span>
              <span className="text-[8px] font-mono px-1 py-0.5 rounded text-center" style={{ color: statusColors[v.status].color, background: statusColors[v.status].bg }}>
                {v.status === "Processing" ? "⟳ " : "✓ "}{v.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 2. Frame-by-Frame (Larger) ────────────────────────────────────

function FramesVisual() {
  const videos = [
    { id: "0e3GPea1Tyg", title: "Squid Game In Real Life!", tier: "viral" as const, views: "885M", vpd: "1.8M" },
    { id: "KrLj6nc516A", title: "$1 vs $1,000,000,000 Car!", tier: "viral" as const, views: "505M", vpd: "1.1M" },
    { id: "zxYjTTXc-J8", title: "Last To Leave Circle Wins $500K", tier: "viral" as const, views: "539M", vpd: "920K" },
    { id: "FM7Z-Xq8Drc", title: "Ages 1 - 100 Fight For $500K", tier: "mid" as const, views: "446M", vpd: "310K" },
    { id: "erLbbextvlY", title: "7 Days Stranded On An Island", tier: "bombed" as const, views: "437M", vpd: "180K" },
  ];
  const timestamps = ["0s", "1s", "2s", "3s", "5s", "10s", "15s", "20s", "30s"];
  const frameMap = [0, 1, 2, 3, 1, 2, 3, 1, 2];
  const emptyFrames: Record<number, number[]> = { 3: [7, 8], 4: [2, 5, 8] };

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: cardBorder }}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Frame-by-Frame Comparison</span>
          <div className="flex items-center gap-2">
            <span className="text-[8px] font-mono px-2 py-0.5 rounded" style={{ background: "rgba(250,204,21,0.1)", color: "#facc15", border: "1px solid rgba(250,204,21,0.2)" }}>Hook Zone (0-3s)</span>
            <span className="text-[8px] font-mono px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}>Body / Retention</span>
            <span className="text-[8px] font-mono px-2 py-0.5 rounded" style={{ background: "rgba(239,68,68,0.1)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)" }}>HD</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div style={{ minWidth: 600 }}>
            <div className="grid gap-1 mb-1.5" style={{ gridTemplateColumns: "130px repeat(9, 1fr)" }}>
              <div className="flex items-center"><span className="text-[8px] font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>Video</span></div>
              {timestamps.map((t, i) => (
                <span key={t} className="text-[8px] font-mono text-center" style={{ color: i < 4 ? "#facc15" : "rgba(255,255,255,0.3)" }}>{t}</span>
              ))}
            </div>

            {videos.map((v, vi) => {
              const prev = vi > 0 ? videos[vi - 1].tier : null;
              const sep = prev && prev !== v.tier;
              return (
                <div key={vi}>
                  {sep && <div className="h-px my-1.5" style={{ background: "rgba(255,255,255,0.08)" }} />}
                  <div className="grid gap-1 mb-1" style={{ gridTemplateColumns: "130px repeat(9, 1fr)" }}>
                    <div className="flex items-center gap-2 pr-2 min-w-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ytThumb(v.id)} alt="" className="w-8 h-5 rounded shrink-0 object-cover" style={{ border: "1px solid rgba(255,255,255,0.06)" }} loading="lazy" />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: tierColors[v.tier] }} />
                          <span className="text-[8px] truncate block" style={{ color: "rgba(255,255,255,0.6)" }}>{v.title}</span>
                        </div>
                        <span className="text-[7px] font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>{v.views} · {v.vpd}/d</span>
                      </div>
                    </div>
                    {timestamps.map((t, ti) => {
                      const isHook = ti < 4;
                      const empty = emptyFrames[vi]?.includes(ti);
                      const frameNum = frameMap[ti];
                      const src = frameNum === 0 ? ytThumb(v.id) : ytFrame(v.id, frameNum);
                      return (
                        <div key={t} className="rounded-sm overflow-hidden" style={{ aspectRatio: "16/10", border: empty ? "1px dashed rgba(255,255,255,0.08)" : isHook ? "2px solid rgba(250,204,21,0.5)" : "1px solid rgba(255,255,255,0.08)" }}>
                          {empty ? (
                            <div className="w-full h-full flex items-center justify-center"><span style={{ color: "rgba(255,255,255,0.06)", fontSize: 5 }}>—</span></div>
                          ) : (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 3. Communication Heatmap (Larger) ─────────────────────────────

function HeatmapVisual() {
  const dimensions = ["Feelings", "Facts", "Fun", "Values", "Autocratic", "Leadership"];
  const videos = [
    { title: "$456K Squid Game IRL!", tier: "viral" as const, scores: [4, 3, 5, 2, 4, 5] },
    { title: "$1 vs $1B Car!", tier: "viral" as const, scores: [5, 4, 4, 3, 3, 5] },
    { title: "Last To Leave Circle", tier: "viral" as const, scores: [3, 2, 5, 2, 5, 4] },
    { title: "Ages 1-100 Fight", tier: "mid" as const, scores: [4, 3, 3, 4, 2, 3] },
    { title: "Survive 100 Days", tier: "mid" as const, scores: [3, 2, 4, 2, 3, 3] },
    { title: "$10K/Day Grocery Store", tier: "mid" as const, scores: [3, 4, 3, 3, 2, 2] },
    { title: "7 Days Stranded", tier: "bombed" as const, scores: [2, 3, 2, 3, 1, 2] },
    { title: "$1 vs $1B Yacht!", tier: "bombed" as const, scores: [2, 1, 3, 1, 2, 1] },
  ];

  const scoreColor = (s: number) => {
    if (s >= 5) return { bg: "rgba(34,197,94,0.5)", text: "#86efac" };
    if (s >= 4) return { bg: "rgba(34,197,94,0.25)", text: "#86efac" };
    if (s >= 3) return { bg: "rgba(250,204,21,0.25)", text: "#fde047" };
    if (s >= 2) return { bg: "rgba(249,115,22,0.25)", text: "#fca5a5" };
    return { bg: "rgba(239,68,68,0.25)", text: "#fca5a5" };
  };

  const drivers = [
    { name: "High-Stakes Spectacle", confidence: "high", replicability: "Medium", viralEvidence: "+3 videos", bombedEvidence: "–0 videos" },
    { name: "Emotional Generosity Arc", confidence: "high", replicability: "Easy", viralEvidence: "+2 videos", bombedEvidence: "–1 video" },
    { name: "Escalating Fun Pattern", confidence: "medium", replicability: "Medium", viralEvidence: "+3 videos", bombedEvidence: "–1 video" },
    { name: "Authority + Leadership Combo", confidence: "high", replicability: "Hard", viralEvidence: "+2 videos", bombedEvidence: "–2 videos" },
  ];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: cardBorder }}>
      <div className="p-4">
        <span className="font-mono text-[9px] uppercase tracking-wider block mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Communication Heatmap</span>

        <div className="grid grid-cols-3 gap-1.5 mb-3">
          {dimensions.map((d) => {
            const flagged = d === "Values" || d === "Autocratic";
            return (
              <div key={d} className="rounded px-2 py-1" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <span className="text-[8px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {d}{flagged && <span style={{ color: "#facc15" }}> ⚠</span>}
                </span>
              </div>
            );
          })}
        </div>

        <div className="overflow-x-auto mb-4">
          <div style={{ minWidth: 460 }}>
            <div className="grid gap-1 mb-1" style={{ gridTemplateColumns: "120px repeat(6, 1fr)" }}>
              <div />
              {dimensions.map((d) => (
                <span key={d} className="text-[7px] font-mono text-center uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>{d.slice(0, 4)}</span>
              ))}
            </div>
            {videos.map((v, vi) => {
              const prev = vi > 0 ? videos[vi - 1].tier : null;
              const sep = prev && prev !== v.tier;
              return (
                <div key={vi}>
                  {sep && <div className="h-px my-1" style={{ background: "rgba(255,255,255,0.08)" }} />}
                  <div className="grid gap-1 mb-1" style={{ gridTemplateColumns: "120px repeat(6, 1fr)" }}>
                    <div className="flex items-center gap-1.5 min-w-0 pr-1">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: tierColors[v.tier] }} />
                      <span className="text-[8px] truncate" style={{ color: "rgba(255,255,255,0.55)" }}>{v.title}</span>
                    </div>
                    {v.scores.map((s, si) => {
                      const { bg, text } = scoreColor(s);
                      return (
                        <div key={si} className="rounded-sm flex items-center justify-center py-1" style={{ background: bg }}>
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

        <span className="font-mono text-[9px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Performance Drivers</span>
        <div className="space-y-1.5">
          {drivers.map((d) => (
            <div key={d.name} className="rounded-lg px-3 py-2" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderLeftWidth: 2, borderLeftColor: d.confidence === "high" ? "#22c55e" : "#facc15" }}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: d.confidence === "high" ? "#22c55e" : "#facc15" }} />
                  <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>{d.name}</span>
                </div>
                <span className="text-[8px] font-mono px-1.5 py-0.5 rounded" style={{ color: d.replicability === "Easy" ? "#22c55e" : d.replicability === "Medium" ? "#3b82f6" : "#ef4444", background: d.replicability === "Easy" ? "rgba(34,197,94,0.1)" : d.replicability === "Medium" ? "rgba(59,130,246,0.1)" : "rgba(239,68,68,0.1)" }}>{d.replicability}</span>
              </div>
              <div className="flex items-center gap-3 ml-3.5">
                <span className="text-[8px] font-mono" style={{ color: "#22c55e" }}>{d.viralEvidence}</span>
                <span className="text-[8px] font-mono" style={{ color: "#ef4444" }}>{d.bombedEvidence}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 4. Script Production (Larger) ─────────────────────────────────

function ScriptVisual() {
  const drivers = ["High-Stakes Spectacle", "Emotional Generosity", "Escalating Fun", "Authority + Leadership"];

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: cardBorder }}>
      <div className="p-4">
        <div className="rounded-lg p-3 mb-3" style={{ background: "rgba(230,57,70,0.05)", border: "1px solid rgba(230,57,70,0.2)" }}>
          <span className="text-[8px] font-mono uppercase tracking-wider block mb-1" style={{ color: "#E63946" }}>Selected Concept</span>
          <span className="text-sm font-medium block mb-1" style={{ color: "rgba(255,255,255,0.9)" }}>$1 vs $1,000,000 Survival Challenge</span>
          <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>Two contestants, extreme budget gap, 7-day survival — high stakes with emotional payoff.</span>
        </div>

        <span className="font-mono text-[8px] uppercase tracking-wider block mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>Performance Drivers Used</span>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {drivers.map((d) => (
            <span key={d} className="text-[9px] font-mono px-2.5 py-1 rounded-md" style={{ background: "rgba(34,197,94,0.1)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" }}>{d}</span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Generated Script</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] font-mono px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>1,247 words</span>
            <span className="text-[8px] font-mono px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>📋 Copy</span>
            <span className="text-[8px] font-mono px-2 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }}>⬇ Download</span>
          </div>
        </div>

        <div className="rounded-lg p-3 font-mono text-[10px] leading-relaxed space-y-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", maxHeight: 260, overflow: "hidden", maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)" }}>
          <div>
            <span style={{ color: "#E63946" }}>[HOOK - 0:00-0:08]</span>
            <p style={{ color: "rgba(255,255,255,0.6)" }}>&quot;Right now, this person has to survive on just $1... while this person gets one MILLION dollars. And whatever they don&apos;t spend in the next 7 days, they get to keep.&quot;</p>
            <p className="mt-1" style={{ color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>[Camera: Side-by-side shot. Dramatic zoom on the $1 bill vs. the briefcase of cash.]</p>
          </div>
          <div>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>[SETUP - Day 1, 0:08-1:30]</span>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>Introduce both contestants side by side. Show the $1 contestant&apos;s reaction — genuine shock, comedic disbelief. Cut immediately to the $1M contestant going on a shopping spree. Establish the core tension: &quot;Whatever you don&apos;t spend, you keep.&quot;</p>
          </div>
          <div>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>[ESCALATION - Day 2-3, 1:30-4:00]</span>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>Show the growing contrast in living conditions. The $1 contestant gets creative — foraging, trading, building shelter. The $1M contestant faces the dilemma: comfort vs. keeping money. Pattern interrupt at 2:15: reveal a twist...</p>
          </div>
          <div>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>[CLIMAX - Day 5-7, 4:00-8:00]</span>
            <p style={{ color: "rgba(255,255,255,0.5)" }}>Both contestants face their biggest challenge yet. The $1 contestant discovers they can challenge the $1M contestant for a portion of the budget — but only if they complete an extreme task...</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.35)" }}>Script ready for production</span>
          <span className="text-[9px] font-mono px-3 py-1.5 rounded-lg" style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.3)" }}>✓ Mark as Complete</span>
        </div>
      </div>
    </div>
  );
}

// ── Screenshot wrapper ──

function VisualWrapper({ screenshotSrc, children }: { screenshotSrc?: string; children: React.ReactNode }) {
  if (screenshotSrc) {
    return (
      <div className="rounded-xl overflow-hidden" style={{ border: cardBorder, boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(230,57,70,0.08)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
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
    title: "Channel Stats Dashboard",
    description: "Analyze any channel — like MrBeast — across all their videos. See tier distribution (viral, mid, bombed), view counts, engagement rates, and views-per-day. Quick insights reveal the patterns: viral titles use numbers 4x more, questions 68% more, and average 2.5x the views.",
    details: [
      "Tier distribution bar — viral, mid, bombed at a glance",
      "Video table with real thumbnails, views, VPD, engagement %, and processing status",
      "Quick insights comparing viral vs. bombed patterns",
      "Click any video to expand frames and transcript",
    ],
    mockup: "stats",
  },
  {
    number: "02",
    suit: "♥",
    suitColor: "#E63946",
    title: "Frame-by-Frame Comparison",
    description: "Compare what top creators show at every second — side by side. Yellow-bordered hook zone frames reveal the visual patterns in the critical first 3 seconds. Extract HD frames on demand. See exactly what MrBeast puts on screen at 0s, 1s, 3s vs. his bombed videos.",
    details: [
      "Horizontal timeline from 0s to 30s+ with real video frames",
      "Yellow hook zone borders (0-3s) vs. gray body frames",
      "HD frame extraction for close-up analysis",
      "Tier-separated rows — compare viral vs. bombed side by side",
    ],
    mockup: "frames",
  },
  {
    number: "03",
    suit: "♦",
    suitColor: "#E63946",
    title: "Communication Heatmap",
    description: "Our AI scores every video across 6 communication dimensions — Feelings, Facts, Fun, Values, Autocratic, and Leadership. The heatmap reveals that MrBeast's viral videos score 5/5 on Fun and Leadership, while bombed ones lack both. Performance drivers show exactly what to replicate.",
    details: [
      "6-dimension scoring: Feelings, Facts, Fun, Values, Autocratic, Leadership",
      "Color-coded 1-5 scores per video — green (5) to red (1)",
      "Performance drivers with confidence level and replicability",
      "Viral vs. bombed evidence for each driver pattern",
    ],
    mockup: "heatmap",
  },
  {
    number: "04",
    suit: "♣",
    suitColor: "#fafafa",
    title: "Script Production",
    description: "Select your best concept and our AI generates a camera-ready script using the exact performance drivers it identified. The output includes timestamped sections, camera direction notes, pattern interrupts for retention, and strategic CTAs — all in a monospace format ready to put on a teleprompter.",
    details: [
      "Selected concept card with notes and description",
      "Green performance driver badges feeding the AI",
      "Timestamped script sections: Hook, Setup, Escalation, Climax, CTA",
      "Copy, download, and mark-complete workflow",
    ],
    mockup: "script",
  },
];

const mockupComponents: Record<string, React.ReactNode> = {
  stats: <StatsVisual />,
  frames: <FramesVisual />,
  heatmap: <HeatmapVisual />,
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
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block" style={{ color: "rgba(255,255,255,0.4)" }}>Powerful Tools</span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight mb-6 text-balance" style={{ color: "rgba(255,255,255,0.95)" }}>
              Your Winning{" "}
              <span className="italic" style={{ color: "#E63946", textShadow: "0 2px 30px rgba(230, 57, 70, 0.4)" }}>Deck</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              See how CreatorLuck decodes MrBeast&apos;s viral formula — from raw channel stats to a camera-ready script.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-24 lg:space-y-32 mb-24">
            {features.map((feature, i) => {
              const reversed = i % 2 === 1;
              return (
                <div key={feature.number} className="group relative" onMouseEnter={() => setHoveredFeature(i)} onMouseLeave={() => setHoveredFeature(null)}>
                  <div className="absolute -inset-8 rounded-3xl pointer-events-none transition-opacity duration-500" style={{ background: "radial-gradient(ellipse at center, rgba(230, 57, 70, 0.06) 0%, transparent 70%)", opacity: hoveredFeature === i ? 1 : 0, filter: "blur(30px)" }} />
                  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    <div className={`${reversed ? "lg:order-2" : "lg:order-1"} pt-4`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.35)" }}>{feature.number}</span>
                        <span className="text-2xl leading-none" style={{ color: feature.suitColor, filter: feature.suitColor === "#E63946" ? "drop-shadow(0 0 6px rgba(230,57,70,0.4))" : "none" }}>{feature.suit}</span>
                      </div>
                      <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-4" style={{ color: "rgba(255,255,255,0.95)" }}>{feature.title}</h2>
                      <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>{feature.description}</p>
                      <ul className="space-y-2.5">
                        {feature.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                            <span style={{ color: "#E63946", fontSize: 8, marginTop: 5, flexShrink: 0 }}>♦</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${reversed ? "lg:order-1" : "lg:order-2"}`} style={{ transform: hoveredFeature === i ? "translateY(-4px)" : "translateY(0)", transition: "transform 400ms ease-out" }}>
                      <VisualWrapper>{mockupComponents[feature.mockup]}</VisualWrapper>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="rounded-2xl p-10 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #1A1517 0%, #141414 100%)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(230, 57, 70, 0.15) 0%, transparent 70%)" }} />
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.03]" style={{ backgroundImage: NOISE_TEXTURE }} />
              <h3 className="font-serif text-3xl font-normal mb-4 relative" style={{ color: "rgba(255,255,255,0.95)" }}>Ready to Stack the Deck?</h3>
              <p className="text-sm mb-8 relative" style={{ color: "rgba(255,255,255,0.5)" }}>Start analyzing videos with 3 free searches today.</p>
              <a href={`${APP_URL}/sign-up`} className="relative inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 overflow-hidden" style={{ background: "linear-gradient(135deg, #E63946, #B91C2C)", color: "#ffffff", boxShadow: "0 4px 20px rgba(230, 57, 70, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)" }}>
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
