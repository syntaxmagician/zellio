"use client";

import { useEffect, useRef } from "react";

const AWAY_MESSAGES = [
  "ZELLIO 💔 Left so soon?",
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
