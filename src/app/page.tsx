import { Nav } from "@/components/marketing/nav";
import { Hero } from "@/components/marketing/hero";
import { CardsSection } from "@/components/marketing/cards-section";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { WhySection } from "@/components/marketing/why-section";
import { StatsBar } from "@/components/marketing/stats-bar";
import { BetaAccess } from "@/components/marketing/beta-access";
import { CtaSection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />
        <main>
          <Hero />
          <CardsSection />
          <HowItWorks />
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
