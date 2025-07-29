"use client";

import CohortsFeaturesSection from "@/components/CohortsFeatureSection";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ThreePillars from "@/components/ThreePillars";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CreatorSection from "@/components/CreatorSection";
import EmpoweringCommunities from "@/components/EmpoweringCommunities";

export default function Home() {

  return (
    <div className="min-h-screen bg-black text-white">
    <Header/>
    <HeroSection/>
    <CreatorSection/>
    <EmpoweringCommunities/>
    <CohortsFeaturesSection/>
    <ThreePillars/>
    <FAQ/>
    <Footer/>
    </div>
  );
}
