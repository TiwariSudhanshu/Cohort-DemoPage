"use client";

import Image from "next/image";
import Underline from "@/components/ui/Underline";

export default function AboutVision() {
  return (
    <section className="relative pt-20 bg-black text-white overflow-hidden">
      {/* Decorative Top Vector */}
      <Image
        src="/Vector.png"
        alt="Decorative Vector"
        width={1920}
        height={200}
        className="w-full h-[15vmax] mt-[-5vmax] pointer-events-none z-0 opacity-90"
        priority
      />

      <div className="relative container mx-auto px-4 z-10 text-center">
        <div className="text-center mb-8">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Vision
          </span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold relative inline-block ">
          <Underline> Vision behind Cohorts! </Underline>
        </h2>
      </div>

      {/* Vision Image Full Width with Padding */}
      <div className="relative w-full px-4 md:px-8 lg:px-16 mt-[-6vmax] z-10">
        <Image
          src="/about.png"
          alt="Vision Illustration"
          width={1920}
          height={800}
          className="w-full h-auto rounded-3xl"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
