"use client";

import { useState } from "react";
import { Nav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";
import { AnimatedBackground } from "@/components/marketing/animated-background";

const contactOptions = [
  {
    suit: "♠",
    suitColor: "#fafafa",
    title: "General Inquiries",
    email: "hello@creatorluck.io",
    description: "Questions about CreatorLuck? We'd love to hear from you.",
  },
  {
    suit: "♥",
    suitColor: "#E63946",
    title: "Support",
    email: "support@creatorluck.io",
    description: "Need help with your account or have technical issues?",
  },
  {
    suit: "♦",
    suitColor: "#E63946",
    title: "Partnerships",
    email: "partners@creatorluck.io",
    description: "Interested in collaborating or integrating with us?",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

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
              Get In Touch
            </span>
            <h1 
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight mb-6 text-balance"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              Let's{" "}
              <span 
                className="italic"
                style={{ 
                  color: '#E63946',
                  textShadow: '0 2px 30px rgba(230, 57, 70, 0.4)',
                }}
              >
                Talk
              </span>
            </h1>
            <p 
              className="text-lg max-w-xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Have questions or feedback? We're here to help.
            </p>
          </div>

          {/* Contact options */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactOptions.map((option, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 relative overflow-hidden text-center"
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

                <span
                  className="text-3xl mb-4 block"
                  style={{ color: option.suitColor }}
                >
                  {option.suit}
                </span>
                <h3 
                  className="font-serif text-xl font-normal mb-2 relative"
                  style={{ color: 'rgba(255,255,255,0.95)' }}
                >
                  {option.title}
                </h3>
                <p 
                  className="text-sm mb-4 relative"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {option.description}
                </p>
                <a
                  href={`mailto:${option.email}`}
                  className="text-sm font-medium transition-colors relative"
                  style={{ color: '#E63946' }}
                >
                  {option.email}
                </a>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="max-w-2xl mx-auto">
            <div 
              className="rounded-2xl p-8 sm:p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #1A1517 0%, #141414 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Glow effect */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(230, 57, 70, 0.1) 0%, transparent 70%)',
                }}
              />

              {/* Noise texture */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {submitted ? (
                <div className="text-center py-8 relative">
                  <span className="text-5xl mb-4 block" style={{ color: '#E63946' }}>♥</span>
                  <h3 
                    className="font-serif text-2xl font-normal mb-3"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    Message Sent!
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <h3 
                    className="font-serif text-2xl font-normal mb-6 text-center relative"
                    style={{ color: 'rgba(255,255,255,0.95)' }}
                  >
                    Send us a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5 relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label 
                          className="font-mono text-[10px] uppercase tracking-wider mb-2 block"
                          style={{ color: 'rgba(255,255,255,0.5)' }}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'rgba(255,255,255,0.9)',
                          }}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label 
                          className="font-mono text-[10px] uppercase tracking-wider mb-2 block"
                          style={{ color: 'rgba(255,255,255,0.5)' }}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: 'rgba(255,255,255,0.9)',
                          }}
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label 
                        className="font-mono text-[10px] uppercase tracking-wider mb-2 block"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.3)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.9)',
                        }}
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label 
                        className="font-mono text-[10px] uppercase tracking-wider mb-2 block"
                        style={{ color: 'rgba(255,255,255,0.5)' }}
                      >
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.3)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.9)',
                        }}
                        placeholder="Tell us more..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
                      style={{ 
                        background: 'linear-gradient(135deg, #E63946, #B91C2C)',
                        color: '#ffffff',
                        boxShadow: '0 4px 20px rgba(230, 57, 70, 0.4)',
                      }}
                    >
                      <span style={{ fontSize: 14 }}>♠</span>
                      <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
