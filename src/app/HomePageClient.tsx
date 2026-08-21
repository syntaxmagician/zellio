"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { markReady } from "@/lib/ready";
// UNCOMMENT THIS TO RE-ENABLE SPLASH LOADER AFTER GOOGLE SEARCH CONSOLE APPROVAL:
// import { shouldSkipSplash } from "@/lib/splash";
// import SplashLoader from "@/components/layout/SplashLoader";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroV2 from "@/components/sections/HeroV2";
import TrustedBy from "@/components/sections/TrustedBy";

const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const ServicesRail = dynamic(() => import("@/components/sections/ServicesRail"), { ssr: true });
const TechStack = dynamic(() => import("@/components/sections/TechStack"), { ssr: true });
const WhyChoose = dynamic(() => import("@/components/sections/WhyChoose"), { ssr: true });
const Insights = dynamic(() => import("@/components/sections/Insights"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: true });
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

export default function Home() {
  // UNCOMMENT THESE STATES & EFFECTS TO RE-ENABLE SPLASH LOADER AFTER GOOGLE SEARCH CONSOLE APPROVAL:
  /*
  const [splashDone, setSplashDone] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (shouldSkipSplash()) {
      setSplashDone(true);
      setShowSplash(false);
      markReady();
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSplashDone = useCallback(() => {
    setSplashDone(true);
    setShowSplash(false);
    document.body.style.overflow = "";
    markReady();
  }, []);
  */

  // COMMENT OUT OR REMOVE THIS EFFECT IF RE-ENABLING THE SPLASH LOADER STATES ABOVE:
  useEffect(() => {
    markReady();
  }, []);

  return (
    <>
      {/* UNCOMMENT THIS TO RE-ENABLE SPLASH LOADER AFTER GOOGLE SEARCH CONSOLE APPROVAL: */}
      {/* {showSplash && !splashDone && <SplashLoader onDone={handleSplashDone} />} */}

      <div className="w-full">
        <Navbar />
        <main>
          <HeroV2 />
          <TrustedBy />
          <About />
          <ServicesRail />
          <TechStack />
          <WhyChoose />
          <Insights />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
