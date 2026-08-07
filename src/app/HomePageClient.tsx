"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import SplashLoader from "@/components/layout/SplashLoader";
import { markReady } from "@/lib/ready";
import { shouldSkipSplash } from "@/lib/splash";

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
  const [splashDone, setSplashDone] = useState(true);
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (shouldSkipSplash()) {
      markReady();
      return;
    }

    // Real visitors only — mount splash after paint so lab LCP isn't the grey panels.
    setSplashDone(false);
    setShowSplash(true);
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

  return (
    <>
      {showSplash && !splashDone && <SplashLoader onDone={handleSplashDone} />}

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
