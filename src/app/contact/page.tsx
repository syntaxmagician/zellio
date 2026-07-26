"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
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
