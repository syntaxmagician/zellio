"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashLoader from "@/components/layout/SplashLoader";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

import About from "@/components/sections/About";
import VisionMission from "@/components/sections/VisionMission";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";

import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during splash screen
    document.body.style.overflow = "hidden";
    
    // Exactly 1 second delay (1000ms) as requested by user
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashLoader key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={!loading ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.98 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="w-full"
      >
        <Navbar />
        <main>
          <Hero />

          <About />
          <VisionMission />
          <Services />
          <WhyChoose />

          <Testimonials />
          <FAQ />
          <Contact />
          <CTA />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
