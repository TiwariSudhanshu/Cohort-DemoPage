"use client";

import Underline from "@/components/ui/Underline";
import ProfileCard from "@/components/ui/ProfileCard";
import Image from "next/image";

export default function AboutTeam() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden">
        <div className="container mx-auto px-4 z-10 text-center mb-24">
          <div className="mb-4">
            <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
              Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block mb-12">
            <Underline> Builders of Cohorts App </Underline>
          </h2>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-x-12 px-4 max-w-6xl mx-auto">
            <ProfileCard
              imageSrc="/builder1.png"
              name="Abdul Mateen Shariff"
              position="Co-Founder & CEO"
              linkedinUrl="https://www.linkedin.com/in/mateen-shariff/"
            />
            <ProfileCard
              imageSrc="/builder2.png"
              name="Mohammed Yasser"
              position="Co-Founder & CMO"
              linkedinUrl="https://www.linkedin.com/in/mohammed-yasser-0983a2171/"
            />
          </div>
        </div>
        <Image
          src="/Vector.png"
          alt="Decorative Vector"
          width={1920}
          height={200}
          className="w-full absolute top-130 h-auto pointer-events-none z-0 opacity-50"
          priority
        />
        <div className="container mx-auto px-4 z-10 mt-10 text-center relative ">
          <div className="mb-4">
            <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
              Advisors/Investors
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block mb-12">
            <Underline> Backers of Cohorts App </Underline>
          </h2>

          <div className="flex justify-center">
            <ProfileCard
              imageSrc="/backer.png"
              name="Mr. Nitin Chamarahally"
              position="Tech Advisor & Early Supporter"
              linkedinUrl="https://www.linkedin.com/in/nitin-chamarahally-330b39211/"
            />
          </div>
        </div>
      </section>
      <section className="relative py-20 bg-black text-white overflow-hidden">
        {/* Decorative Top Vector */}

        <div className="relative container mx-auto px-4 mt-10 z-10 text-center">
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
              Trajectory
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold relative inline-block mb-18">
            <Underline> Where We’re Going! </Underline>
          </h2>
        </div>

        {/* Trajectory Image Full Width with Padding */}
        <div className="relative w-full px-4 md:px-8 lg:px-16 z-10">
          <Image
            src="/about-2.png"
            alt="Trajectory Illustration"
            width={1920}
            height={800}
            className="w-full h-auto rounded-3xl"
            sizes="100vw"
          />
        </div>
      </section>
    </>
  );
}
