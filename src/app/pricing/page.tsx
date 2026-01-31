"use client";

import { useState } from "react";
import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io";

const plans = [
  {
    id: "free",
    suit: "♣",
    suitColor: "#fafafa",
    name: "Free",
    price: "$0",
    period: "/forever",
    description: "Perfect for trying out CreatorLuck",
    features: [
      "3 searches per day",
      "Basic video analysis",
      "Hook score insights",
      "7-day search history",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "pro",
    suit: "♥",
    suitColor: "#E63946",
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious content creators",
    features: [
      "Unlimited searches",
      "Deep video analysis",
      "Retention patterns",
      "CTR optimization tips",
      "30-day search history",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    id: "agency",
    suit: "♦",
    suitColor: "#E63946",
    name: "Agency",
    price: "$99",
    period: "/month",
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "5 team members",
      "API access",
      "Bulk analysis",
      "Custom reports",
      "Dedicated support",
      "White-label options",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function PricingPage() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />
        <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
          {/* Hero section */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span 
              className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Simple Pricing
            </span>
            <h1 
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight mb-6 text-balance"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              Pick Your{" "}
              <span 
                className="italic"
                style={{ 
                  color: '#E63946',
                  textShadow: '0 2px 30px rgba(230, 57, 70, 0.4)',
                }}
              >
                Hand
              </span>
            </h1>
            <p 
              className="text-lg max-w-xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              No hidden fees. No surprises. Cancel anytime.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  transform: hoveredPlan === plan.id ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'transform 300ms ease-out',
                }}
              >
                {/* Card glow on hover / highlighted */}
                <div 
                  className="absolute -inset-3 rounded-3xl pointer-events-none transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.15) 0%, transparent 70%)',
                    opacity: hoveredPlan === plan.id || plan.highlighted ? 1 : 0,
                    filter: 'blur(15px)',
                  }}
                />
                
                <div
                  className="relative rounded-2xl p-8 flex flex-col h-full overflow-hidden"
                  style={{
                    background: plan.highlighted 
                      ? 'linear-gradient(180deg, #1A1517 0%, #0D0D0D 100%)'
                      : 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
                    border: plan.highlighted 
                      ? '1px solid rgba(230, 57, 70, 0.5)'
                      : hoveredPlan === plan.id 
                        ? '1px solid rgba(230, 57, 70, 0.4)' 
                        : '1px solid rgba(255,255,255,0.06)',
                    boxShadow: plan.highlighted
                      ? '0 20px 40px rgba(0,0,0,0.5), 0 0 60px rgba(230, 57, 70, 0.15)'
                      : hoveredPlan === plan.id
                        ? '0 20px 40px rgba(0,0,0,0.5), 0 0 60px rgba(230, 57, 70, 0.1)'
                        : '0 10px 30px rgba(0,0,0,0.3)',
                    transition: 'all 300ms ease-out',
                  }}
                >
                  {/* Popular badge */}
                  {plan.highlighted && (
                    <div 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        background: 'linear-gradient(135deg, #E63946, #B91C2C)',
                        color: '#ffffff',
                      }}
                    >
                      Popular
                    </div>
                  )}

                  {/* Noise texture */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Card header */}
                  <div className="flex justify-between items-start mb-4">
                    <span 
                      className="font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: 'rgba(255,255,255,0.35)' }}
                    >
                      {plan.name}
                    </span>
                    <span
                      className="text-2xl leading-none transition-all duration-300"
                      style={{ 
                        color: plan.suitColor,
                        transform: hoveredPlan === plan.id ? 'scale(1.15) rotate(8deg)' : 'scale(1)',
                        filter: plan.suitColor === '#E63946' && hoveredPlan === plan.id 
                          ? 'drop-shadow(0 0 8px rgba(230, 57, 70, 0.5))' 
                          : 'none',
                      }}
                    >
                      {plan.suit}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <span 
                      className="font-serif text-5xl font-normal"
                      style={{ color: 'rgba(255,255,255,0.95)' }}
                    >
                      {plan.price}
                    </span>
                    <span 
                      className="text-sm ml-1"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p 
                    className="text-sm mb-6"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li 
                        key={i}
                        className="flex items-center gap-3 text-sm"
                        style={{ color: 'rgba(255,255,255,0.7)' }}
                      >
                        <span style={{ color: '#E63946', fontSize: 10 }}>♦</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`${APP_URL}/sign-up`}
                    className="w-full text-center py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={plan.highlighted ? { 
                      background: 'linear-gradient(135deg, #E63946, #B91C2C)',
                      color: '#ffffff',
                      boxShadow: '0 4px 20px rgba(230, 57, 70, 0.4)',
                    } : {
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.9)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ teaser */}
          <div className="max-w-2xl mx-auto text-center">
            <p 
              className="text-sm"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Have questions? Contact us at{" "}
              <a 
                href="mailto:support@creatorluck.io" 
                className="transition-colors"
                style={{ color: '#E63946' }}
              >
                support@creatorluck.io
              </a>
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
