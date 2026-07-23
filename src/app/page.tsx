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

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during splash
    document.body.style.overflow = "hidden";
    
    // Allow the premium loader to complete its cinematic sequence
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
        {loading && <SplashLoader key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={!loading ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full will-change-opacity"
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
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
