"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

declare global {
  interface Window {
    posthog?: {
      identify: (id: string, properties?: Record<string, unknown>) => void;
    };
  }
}

export function EdgeTagTracker() {
  const pathname = usePathname();
  const { user, isSignedIn } = useUser();

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

  // Enrich PostHog person profile with Clerk user data
  useEffect(() => {
    if (isSignedIn && user && window.posthog) {
      const email = user.primaryEmailAddress?.emailAddress;
      window.posthog.identify(user.id, {
        email: email || undefined,
        name: user.fullName || undefined,
      });
    }
  }, [isSignedIn, user]);

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
