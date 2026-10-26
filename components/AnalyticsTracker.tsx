"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    // Avoid double counting same path in rapid succession
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;

    // Skip admin panel visits from distorting public visitor analytics
    if (pathname.startsWith("/admin")) return;

    try {
      const visitorKey = "dk_portfolio_visitor";
      const hasVisitedBefore = localStorage.getItem(visitorKey);
      const isNewVisitor = !hasVisitedBefore;

      if (isNewVisitor) {
        localStorage.setItem(visitorKey, `v-${Date.now()}`);
      }

      const isMobile = window.innerWidth < 768;
      const device = isMobile ? "Mobile" : "Desktop";
      const referrer = document.referrer || "";

      fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: pathname,
          referrer,
          device,
          isNewVisitor,
        }),
      }).catch(() => {
        // Silent fail so user experience is never affected
      });
    } catch {
      // Ignore client storage errors in incognito or blocked environments
    }
  }, [pathname]);

  return null;
}
