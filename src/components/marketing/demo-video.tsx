"use client";

import { useRef, useState } from "react";

export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="px-6 lg:px-12 py-20 relative">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden group"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 80px rgba(230,57,70,0.08), 0 4px 32px rgba(0,0,0,0.5)",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
            style={{ borderRadius: "1rem" }}
          >
            <source src="/demo.mp4" type="video/mp4" />
            <track
              kind="captions"
              src="/demo-captions.vtt"
              srcLang="en"
              label="English"
              default
            />
          </video>

          {/* Mute/Unmute toggle */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
