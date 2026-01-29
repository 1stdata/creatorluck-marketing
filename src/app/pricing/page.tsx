import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-16 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-normal leading-none tracking-tight mb-4">
            Pricing
          </h1>
          <p className="text-lg text-brand-gray mb-12">
            Simple plans. No hidden fees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
            {/* Free */}
            <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">
              <div className="font-mono text-[10px] uppercase tracking-wider text-brand-gray mb-2">Free</div>
              <div className="font-serif text-5xl font-normal mb-4">$0</div>
              <p className="text-sm text-brand-gray mb-6">3 searches/day</p>
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io"}/sign-up`}
                className="btn-brutal inline-block"
              >
                Get Started
              </a>
            </div>

            {/* Pro */}
            <div className="p-8 bg-black text-white border-b-2 md:border-b-0 md:border-r-2 border-black">
              <div className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mb-2">Pro</div>
              <div className="font-serif text-5xl font-normal mb-4">$29</div>
              <p className="text-sm text-gray-400 mb-6">Unlimited searches</p>
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io"}/sign-up`}
                className="btn-white inline-block text-sm"
              >
                Start Free Trial
              </a>
            </div>

            {/* Agency */}
            <div className="p-8">
              <div className="font-mono text-[10px] uppercase tracking-wider text-brand-gray mb-2">Agency</div>
              <div className="font-serif text-5xl font-normal mb-4">$99</div>
              <p className="text-sm text-brand-gray mb-6">Team + API access</p>
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL || "https://app.creatorluck.io"}/sign-up`}
                className="btn-brutal inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
