import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";

export default function CookiesPage() {
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
              Cookie{" "}
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
                    <span style={{ color: '#E63946' }}>♦</span>
                    What Are Cookies
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#fafafa' }}>♠</span>
                    How We Use Cookies
                  </h2>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    We use cookies for the following purposes:
                  </p>
                  <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      <span><strong style={{ color: 'rgba(255,255,255,0.8)' }}>Essential cookies:</strong> Required for the website to function properly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      <span><strong style={{ color: 'rgba(255,255,255,0.8)' }}>Authentication cookies:</strong> Keep you logged in during your session</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      <span><strong style={{ color: 'rgba(255,255,255,0.8)' }}>Preference cookies:</strong> Remember your settings and preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: '#E63946', fontSize: 10, marginTop: 4 }}>♦</span>
                      <span><strong style={{ color: 'rgba(255,255,255,0.8)' }}>Analytics cookies:</strong> Help us understand how visitors use our site</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#E63946' }}>♥</span>
                    Types of Cookies We Use
                  </h2>
                  <div className="space-y-4">
                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <h4 className="text-sm font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Session Cookies
                      </h4>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        Temporary cookies that expire when you close your browser. Used for session management.
                      </p>
                    </div>
                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <h4 className="text-sm font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Persistent Cookies
                      </h4>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        Cookies that remain on your device for a set period. Used for remembering preferences.
                      </p>
                    </div>
                    <div 
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <h4 className="text-sm font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Third-Party Cookies
                      </h4>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        Cookies set by external services we use, such as analytics and payment providers.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#fafafa' }}>♣</span>
                    Managing Cookies
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, blocking cookies may impact your experience on our website and limit the functionality available to you.
                  </p>
                </section>

                <section>
                  <h2 
                    className="font-serif text-2xl font-normal mb-4 flex items-center gap-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    <span style={{ color: '#E63946' }}>♦</span>
                    Updates to This Policy
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                  </p>
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
                    If you have any questions about our use of cookies, please contact us at{" "}
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
