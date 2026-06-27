"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    posthog?: { identify: (id: string) => void };
  }
}

export function EdgeTagTracker() {
  const pathname = usePathname();

  // Merge PostHog anonymous ID with EdgeTag user ID for session recording attribution
  useEffect(() => {
    function handleEdgeTagInit(event: Event) {
      try {
        const detail = (event as CustomEvent).detail;
        if (detail?.userId && window.posthog) {
          window.posthog.identify(detail.userId);
        }
      } catch { /* posthog not ready */ }
    }

    window.addEventListener("edgetag-initialized", handleEdgeTagInit);
    return () => window.removeEventListener("edgetag-initialized", handleEdgeTagInit);
  }, []);

  useEffect(() => {
    try {
      const et = (window as unknown as Record<string, unknown>).edgetag;
      if (typeof et === "function") {
        et("tag", "PageView", {
          page_path: pathname,
        });
        et("tag", "ViewContent", {
          content_name: pathname,
        });
      }
    } catch { /* edgetag not ready */ }
  }, [pathname]);

  return null;
}
