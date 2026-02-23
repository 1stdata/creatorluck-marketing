import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-normal leading-none tracking-tight mb-4">
            Pricing
          </h1>
          <p className="text-lg text-brand-gray mb-12">
            Simple plans. No hidden fees. Cancel anytime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
            {/* Trial */}
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">
              <div className="font-mono text-[10px] uppercase tracking-wider text-brand-gray mb-2">3-Day Trial</div>
              <div className="font-serif text-5xl font-normal mb-2">$0</div>
              <p className="text-sm text-brand-gray mb-6">No credit card required</p>
              <ul className="text-sm text-brand-gray space-y-2 mb-8 text-left">
                <li>2 projects</li>
                <li>30 chat messages</li>
                <li>Unlimited scripts & ideation</li>
                <li>Full AI analysis</li>
              </ul>
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io"}/sign-up`}
                className="btn-brutal inline-block"
              >
                Start Free Trial
              </a>
            </div>

            {/* Pro */}
            <div className="p-8 bg-black text-white border-b-2 md:border-b-0 md:border-r-2 border-black">
              <div className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-2">Pro</div>
              <div className="font-serif text-5xl font-normal mb-2">$49<span className="text-xl text-gray-400">/mo</span></div>
              <p className="text-sm text-gray-400 mb-6">or $39/mo billed annually</p>
              <ul className="text-sm text-gray-400 space-y-2 mb-8 text-left">
                <li>25 projects</li>
                <li>100 chat messages/mo</li>
                <li>Unlimited scripts & ideation</li>
                <li>Full AI analysis</li>
              </ul>
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io"}/sign-up`}
                className="btn-white inline-block text-sm"
              >
                Start Free Trial
              </a>
            </div>

            {/* Team */}
            <div className="p-8">
              <div className="font-mono text-[10px] uppercase tracking-wider text-brand-gray mb-2">Team</div>
              <div className="font-serif text-5xl font-normal mb-2">$149<span className="text-xl text-brand-gray">/mo</span></div>
              <p className="text-sm text-brand-gray mb-6">or $99/mo billed annually</p>
              <ul className="text-sm text-brand-gray space-y-2 mb-8 text-left">
                <li>Unlimited projects</li>
                <li>1,000 chat messages/mo</li>
                <li>MCP access</li>
                <li>5 team seats</li>
              </ul>
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io"}/sign-up`}
                className="btn-brutal inline-block"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
