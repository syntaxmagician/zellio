"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamHero from "@/components/team/TeamHero";
import Leadership from "@/components/team/Leadership";
import EngineeringTeam from "@/components/team/EngineeringTeam";
import EngineeringCulture from "@/components/team/EngineeringCulture";
import TechEcosystem from "@/components/team/TechEcosystem";
import TeamCTA from "@/components/team/TeamCTA";

export default function TeamPageClient() {
  // No splash here anymore, but TeamHero's GSAP timeline still waits on this
  // event before playing. Child effects run before this one, so the listener
  // is already registered by the time it fires.
  useEffect(() => {
    window.dispatchEvent(new Event("zellio:ready"));
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-screen bg-[#FAFAFA] flex flex-col justify-between selection:bg-blue-500/30 w-full will-change-opacity"
      >
        <Navbar />

        <main className="flex-grow pt-32 pb-0 relative z-10">
          <TeamHero />
          <Leadership />
          <EngineeringTeam />
          {/* <EngineeringCulture /> */}
          <TechEcosystem />
          <TeamCTA />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}
