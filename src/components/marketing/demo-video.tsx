"use client";

export function DemoVideo() {
  return (
    <section className="px-6 lg:px-12 py-20 relative">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 80px rgba(230,57,70,0.08), 0 4px 32px rgba(0,0,0,0.5)",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
            style={{ borderRadius: "1rem" }}
          >
            <source src="/demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
