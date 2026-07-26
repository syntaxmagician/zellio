"use client";

import { motion } from "framer-motion";

export default function PortfolioTemplate({ children }: { children: React.ReactNode }) {
  return (
    // Curtain-sweep intro removed — content now fades straight in.
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
