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
    const handleVisibilityChange = () => {
      if (document.hidden) {
        originalTitle.current = document.title;
        document.title = AWAY_MESSAGES[msgIndex.current % AWAY_MESSAGES.length];
        msgIndex.current += 1;
      } else if (originalTitle.current) {
        document.title = originalTitle.current;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
}
