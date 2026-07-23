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

export default function TeamPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during splash loader sequence
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <TeamSplashLoader key="team-loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={!loading ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
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
