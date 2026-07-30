"use client";

import { useEffect, useRef } from "react";

const AWAY_MESSAGES = [
  "Don't leave. We were just getting started. ✦",
  "Your next big project misses you.",
  "Come back — greatness is waiting.",
  "Still here. Build. Are you? ✦",
  "We noticed. Come back when you're ready.",
];

/**
 * Changes the browser tab title when the user navigates away,
 * restoring the original title when they return.
 */
export default function TabTitle() {
  const originalTitle = useRef<string>("");
  const msgIndex = useRef(0);

  useEffect(() => {
    // Small delay so Next.js has time to hydrate the full page title
    const captureTimer = setTimeout(() => {
      originalTitle.current = document.title;
    }, 800);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = AWAY_MESSAGES[msgIndex.current % AWAY_MESSAGES.length];
        msgIndex.current += 1;
      } else {
        document.title = originalTitle.current;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearTimeout(captureTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
