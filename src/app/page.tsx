"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashLoader from "@/components/layout/SplashLoader";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroV2 from "@/components/sections/HeroV2";

import TrustedBy from "@/components/sections/TrustedBy";
import Manifesto from "@/components/sections/Manifesto";
import ServicesRail from "@/components/sections/ServicesRail";
import TechStack from "@/components/sections/TechStack";
import WhyChoose from "@/components/sections/WhyChoose";
import SelectedWork from "@/components/sections/SelectedWork";

import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

const SPLASH_SEEN_KEY = "zellio-splash-seen";

export default function Home() {
  // "pending" -> first client frame; "splash" -> intro plays (once per session); "done" -> content
  const [phase, setPhase] = useState<"pending" | "splash" | "done">("pending");

  useEffect(() => {
    // sessionStorage is only readable after hydration, so the phase decision
    // has to happen in an effect rather than during render.
    if (sessionStorage.getItem(SPLASH_SEEN_KEY)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("done");
      return;
    }
    sessionStorage.setItem(SPLASH_SEEN_KEY, "1");
    setPhase("splash");
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "auto";
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Let GSAP-driven sections (HeroV2) know the page is visible.
  useEffect(() => {
    if (phase === "done") {
      window.dispatchEvent(new Event("zellio:ready"));
    }
  }, [phase]);

  return (
    <>
      <AnimatePresence>
        {phase === "splash" && <SplashLoader key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={phase === "done" ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full will-change-opacity"
      >
        <Navbar />
        <main>
          <HeroV2 />

          <TrustedBy />
          <Manifesto />
          <ServicesRail />
          <TechStack />
          <SelectedWork />
          <WhyChoose />

          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
