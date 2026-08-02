"use client";

import { useState, useEffect, useCallback } from "react";
import SplashLoader from "@/components/layout/SplashLoader";
import { markReady } from "@/lib/ready";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroV2 from "@/components/sections/HeroV2";

import TrustedBy from "@/components/sections/TrustedBy";
import Manifesto from "@/components/sections/Manifesto";
import About from "@/components/sections/About";
import ServicesRail from "@/components/sections/ServicesRail";
import TechStack from "@/components/sections/TechStack";
import WhyChoose from "@/components/sections/WhyChoose";
import SelectedWork from "@/components/sections/SelectedWork";
import Comparison from "@/components/sections/Comparison";
import Insights from "@/components/sections/Insights";


import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  // The loader plays on every visit and splits open to reveal the page, so the
  // content below renders at full opacity from the start — it is what shows
  // through the gap.
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const isBot = typeof navigator !== "undefined" && /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|chrome-lighthouse|lighthouse/i.test(navigator.userAgent);
    if (isBot) {
      setSplashDone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSplashDone = useCallback(() => {
    setSplashDone(true);
    document.body.style.overflow = "";
    markReady();
  }, []);

  return (
    <>
      {!splashDone && <SplashLoader onDone={handleSplashDone} />}

      <div className="w-full">
        <Navbar />
        <main>
          <HeroV2 />
          <TrustedBy />
          {/* <Manifesto /> */}
          <About />
          <ServicesRail />
          <TechStack />
          {/* <SelectedWork /> */}
          <WhyChoose />
          {/* <Comparison /> */}
          <Insights />


          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
