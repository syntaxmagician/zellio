"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import ContactSplashLoader from "@/components/layout/ContactSplashLoader";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during splash loader sequence
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <ContactSplashLoader key="contact-loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={!loading ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between selection:bg-blue-500/30 w-full will-change-opacity"
      >
        <Navbar />

        {/* Adjust top padding so it sits properly below Navbar since it's a standalone page now */}
        <main className="flex-grow pt-24 pb-0 relative z-10 bg-[#FAFAFA]">
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}
