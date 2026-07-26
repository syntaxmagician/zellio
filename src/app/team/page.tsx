"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamHero from "@/components/team/TeamHero";
import Leadership from "@/components/team/Leadership";
import EngineeringTeam from "@/components/team/EngineeringTeam";
import EngineeringCulture from "@/components/team/EngineeringCulture";
import TechEcosystem from "@/components/team/TechEcosystem";
import TeamCTA from "@/components/team/TeamCTA";
import TeamSplashLoader from "@/components/layout/TeamSplashLoader";

const SPLASH_SEEN_KEY = "zellio-team-splash-seen";

export default function TeamPage() {
  // "pending" -> first client frame; "splash" -> terminal intro (once per session); "done" -> content
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

  // Let GSAP-driven sections (TeamHero) know the page is visible.
  useEffect(() => {
    if (phase === "done") {
      window.dispatchEvent(new Event("zellio:ready"));
    }
  }, [phase]);

  return (
    <>
      <AnimatePresence>
        {phase === "splash" && <TeamSplashLoader key="team-loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={phase === "done" ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between selection:bg-blue-500/30 w-full will-change-opacity"
      >
        <Navbar />

        <main className="flex-grow pt-32 pb-0 relative z-10">
          <TeamHero />
          <Leadership />
          <EngineeringTeam />
          <EngineeringCulture />
          <TechEcosystem />
          <TeamCTA />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}
