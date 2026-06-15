import type { Metadata } from "next";
import { Nav } from "@/components/marketing/nav";
import { Hero } from "@/components/marketing/hero";
import { CardsSection } from "@/components/marketing/cards-section";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { WorkflowSteps } from "@/components/marketing/workflow-steps";
import { WhySection } from "@/components/marketing/why-section";
import { StatsBar } from "@/components/marketing/stats-bar";
import { BetaAccess } from "@/components/marketing/beta-access";
import { CtaSection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";
import { DemoVideo } from "@/components/marketing/demo-video";

export const metadata: Metadata = {
  title: "CreatorLuck — Decode What Makes Videos Go Viral",
  description:
    "Stop guessing what makes YouTube videos go viral. CreatorLuck analyzes channels, compares frames, maps communication patterns, and generates data-backed scripts. Used by 12,000+ creators.",
  keywords: [
    "viral video analysis",
    "YouTube analytics tool",
    "video performance analysis",
    "content optimization",
    "YouTube creator tools",
    "viral pattern detection",
    "video hook analysis",
    "AI script generator",
  ],
  openGraph: {
    title: "CreatorLuck — Decode What Makes Videos Go Viral",
    description:
      "Stop guessing. Discover what makes videos go viral with AI-powered channel analysis, frame-by-frame comparison, and script generation.",
    siteName: "CreatorLuck",
    type: "website",
    url: "https://creatorluck.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreatorLuck — Decode What Makes Videos Go Viral",
    description:
      "Stop guessing. Discover what makes videos go viral with AI-powered analysis.",
  },
};

export default function LandingPage() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />
        <main>
          <Hero />
          <DemoVideo />
          <CardsSection />
          <ProductShowcase />
          <WorkflowSteps />
          <WhySection />
          <StatsBar />
          <BetaAccess />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
