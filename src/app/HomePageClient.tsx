"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { markReady } from "@/lib/ready";

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
  useEffect(() => {
    markReady();
  }, []);

  return (
    <>

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
