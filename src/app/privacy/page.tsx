import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Nav />
        <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
          {/* Hero section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span 
              className="font-mono text-[10px] uppercase tracking-[0.25em] mb-4 block"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              Legal
            </span>
            <h1 
              className="font-serif text-5xl sm:text-6xl font-normal leading-[1.05] tracking-tight mb-6 text-balance"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              Privacy{" "}
              <span 
                className="italic"
                style={{ 
                  color: '#E63946',
                  textShadow: '0 2px 30px rgba(230, 57, 70, 0.4)',
                }}
              >
                Policy
              </span>
            </h1>
            <p 
              className="text-sm"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Last updated: January 2026
            </p>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div 
              className="rounded-2xl p-8 sm:p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Noise texture */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="space-y-8 relative">
                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#E63946' }}>♥</span>
                    Information We Collect
                  </h2>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    We collect information you provide directly to us, including:
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Account information (name, email, password)
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Payment information (processed securely by our payment provider)
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Search queries and analysis history
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Communications with our support team
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#fafafa' }}>♠</span>
                    How We Use Your Information
                  </h2>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Provide, maintain, and improve our Service
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Process transactions and send related information
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Send technical notices and support messages
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Respond to your comments and questions
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#E63946' }}>♦</span>
                    Data Security
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, regular security audits, and strict access controls.
                  </p>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#fafafa' }}>♣</span>
                    Data Sharing
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only with service providers who assist us in operating our Service, conducting our business, or serving our users, provided they agree to keep this information confidential.
                  </p>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#E63946' }}>♥</span>
                    Your Rights
                  </h2>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    You have the right to:
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Access and receive a copy of your personal data
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Request correction of inaccurate data
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Request deletion of your data
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Object to processing of your data
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#fafafa' }}>♠</span>
                    Contact
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    If you have any questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@creatorluck.io" style={{ color: '#E63946' }}>privacy@creatorluck.io</a>.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
