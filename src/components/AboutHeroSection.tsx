"use client";

import HeroBG from "@/components/ui/heroBG";

export default function AboutHeroSection() {
  return (
    <section
      className="relative mt-[6vmax] pt-[1.5vmax] min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #000000, #271A34, #000000)",
      }}
    >
      <HeroBG />

      <div className="container mx-auto px-4 text-center z-30 mt-[-10vmax] max-w-4xl">
        <h1 className="text-2xl md:text-[35px] font-semibold text-white mb-4 leading-tight">
          Cohorts App is where communities grow, people connect, and engagement turns into income.
        </h1>

        <p className="text-base md:text-lg text-gray-300 mb-8">
          If you’ve got people, passion, or purpose: we’ve got the platform.
        </p>

        <a
          href="https://group.cohortsapp.com/widget/form/q4tCuBYn63FfdrPu7Rwz"
          className="inline-block  bg-[#7816C9] hover:bg-purple-700 text-white px-8 py-3  rounded-lg text-lg font-semibold transition duration-300 shadow-lg"
            target="_blank"
        >
          Get Started for Free
        </a>
      </div>
    </section>
    
  );
}
