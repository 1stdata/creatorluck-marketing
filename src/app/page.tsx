import { Nav } from "@/components/marketing/nav";
import { Hero } from "@/components/marketing/hero";
import { CardsSection } from "@/components/marketing/cards-section";
import { StatsBar } from "@/components/marketing/stats-bar";
import { CtaSection } from "@/components/marketing/cta-section";
import { Footer } from "@/components/marketing/footer";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CardsSection />
        <StatsBar />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
