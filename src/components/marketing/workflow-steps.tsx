"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    suit: "♠",
    suitColor: "#fafafa",
    phase: "Research",
    title: "Search & Discover",
    description: "Search any topic, channel, or video URL to find what's already working in your niche.",
  },
  {
    number: "02",
    suit: "♥",
    suitColor: "#E63946",
    phase: "Analyze",
    title: "Decode the Patterns",
    description: "AI decodes what makes videos go viral — hooks, pacing, formats, and engagement drivers.",
  },
  {
    number: "03",
    suit: "♦",
    suitColor: "#E63946",
    phase: "Ideate",
    title: "Generate Concepts",
    description: "Get data-backed video ideas ranked by viral potential, built from real performance patterns.",
  },
  {
    number: "04",
    suit: "♣",
    suitColor: "#fafafa",
    phase: "Produce",
    title: "Script & Film",
    description: "Get viral-optimized scripts with hooks, talking points, and CTAs — ready to film.",
  },
];

export function WorkflowSteps() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <section className="px-6 lg:px-12 py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(230, 57, 70, 0.03) 50%, transparent 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            The Process
          </span>
          <h2
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 text-balance"
            style={{ color: "rgba(255,255,255,0.95)" }}
          >
            Four{" "}
            <span className="italic" style={{ color: "#E63946" }}>
              Phases
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            From raw research to a camera-ready script in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute top-1/2 left-full -translate-y-1/2 items-center"
                  style={{ width: 20, zIndex: 5 }}
                >
                  <div
                    className="w-full h-px"
                    style={{ background: "linear-gradient(90deg, rgba(230,57,70,0.4), rgba(230,57,70,0.1))" }}
                  />
                  <div
                    className="absolute right-0 w-0 h-0"
                    style={{
                      borderTop: "3px solid transparent",
                      borderBottom: "3px solid transparent",
                      borderLeft: "4px solid rgba(230,57,70,0.3)",
                    }}
                  />
                </div>
              )}

              <div
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredStep(step.number)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{
                  transform: hoveredStep === step.number ? "translateY(-6px)" : "translateY(0)",
                  transition: "transform 300ms ease-out",
                }}
              >
                {/* Card glow on hover */}
                <div
                  className="absolute -inset-3 rounded-3xl pointer-events-none transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(230, 57, 70, 0.12) 0%, transparent 70%)",
                    opacity: hoveredStep === step.number ? 1 : 0,
                    filter: "blur(15px)",
                  }}
                />

                <div
                  className="relative rounded-2xl p-7 h-full overflow-hidden"
                  style={{
                    background: "linear-gradient(180deg, #1A1517 0%, #141414 100%)",
                    border:
                      hoveredStep === step.number
                        ? "1px solid rgba(230, 57, 70, 0.4)"
                        : "1px solid rgba(255,255,255,0.06)",
                    boxShadow:
                      hoveredStep === step.number
                        ? "0 20px 40px rgba(0,0,0,0.5), 0 0 60px rgba(230, 57, 70, 0.1)"
                        : "0 10px 30px rgba(0,0,0,0.3)",
                    transition: "all 300ms ease-out",
                  }}
                >
                  {/* Noise texture */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {step.number}
                    </span>
                    <span
                      className="text-3xl leading-none transition-all duration-300"
                      style={{
                        color: step.suitColor,
                        transform: hoveredStep === step.number ? "scale(1.15) rotate(8deg)" : "scale(1)",
                        filter:
                          step.suitColor === "#E63946" && hoveredStep === step.number
                            ? "drop-shadow(0 0 8px rgba(230, 57, 70, 0.5))"
                            : "none",
                      }}
                    >
                      {step.suit}
                    </span>
                  </div>

                  {/* Phase label */}
                  <span
                    className="font-mono text-[9px] uppercase tracking-[0.2em] block mb-2"
                    style={{ color: "#E63946" }}
                  >
                    {step.phase}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-serif text-xl font-normal mb-3"
                    style={{ color: "rgba(255,255,255,0.95)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
