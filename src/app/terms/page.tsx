import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";

export default function TermsPage() {
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
              Terms of{" "}
              <span 
                className="italic"
                style={{ 
                  color: '#E63946',
                  textShadow: '0 2px 30px rgba(230, 57, 70, 0.4)',
                }}
              >
                Service
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
                    <span style={{ color: '#E63946' }}>♠</span>
                    Acceptance of Terms
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    By accessing and using CreatorLuck ("the Service"), you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use our Service.
                  </p>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#fafafa' }}>♣</span>
                    Description of Service
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    CreatorLuck provides video analytics and content optimization tools for content creators. The Service analyzes publicly available YouTube data to provide insights and recommendations for improving video performance.
                  </p>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#E63946' }}>♥</span>
                    User Accounts
                  </h2>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    To use certain features of the Service, you must register for an account. You agree to:
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Provide accurate and complete registration information
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Maintain the security of your account credentials
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Notify us immediately of any unauthorized use
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Accept responsibility for all activities under your account
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#E63946' }}>♦</span>
                    Payment Terms
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Paid subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable except as expressly set forth in these Terms. We reserve the right to change our prices with 30 days notice.
                  </p>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#fafafa' }}>♠</span>
                    Acceptable Use
                  </h2>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    You agree not to use the Service to:
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Violate any applicable laws or regulations
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Infringe on the rights of others
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Attempt to gain unauthorized access to our systems
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      Interfere with the proper functioning of the Service
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#E63946' }}>♥</span>
                    Limitation of Liability
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    To the maximum extent permitted by law, CreatorLuck shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
                  </p>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#fafafa' }}>♣</span>
                    Contact
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    If you have any questions about these Terms, please contact us at{" "}
                    <a href="mailto:legal@creatorluck.io" style={{ color: '#E63946' }}>legal@creatorluck.io</a>.
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
