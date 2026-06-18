"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function EdgeTagTracker() {
  const pathname = usePathname();

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
