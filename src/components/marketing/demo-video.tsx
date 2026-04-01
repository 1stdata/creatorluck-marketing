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
          className="relative rounded-2xl overflow-hidden"
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

          {/* Sound toggle — always visible */}
          <button
            onClick={toggleMute}
            className="absolute bottom-5 right-5 flex items-center gap-2.5 px-5 py-3 rounded-full text-white font-medium text-sm tracking-wide transition-all"
            style={{
              background: isMuted
                ? "rgba(230,57,70,0.9)"
                : "rgba(0,0,0,0.7)",
              backdropFilter: "blur(12px)",
              border: isMuted
                ? "1px solid rgba(230,57,70,1)"
                : "1px solid rgba(255,255,255,0.15)",
              boxShadow: isMuted
                ? "0 0 20px rgba(230,57,70,0.4)"
                : "0 0 12px rgba(0,0,0,0.3)",
            }}
            aria-label={isMuted ? "Turn sound on" : "Mute"}
          >
            {isMuted ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
                Sound On
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
                Sound Off
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
