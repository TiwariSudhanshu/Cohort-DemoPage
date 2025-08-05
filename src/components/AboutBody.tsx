"use client";

import Image from "next/image";
import Underline from "./ui/Underline";

export default function AboutBody() {
  return (
    <section className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-8">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Differentiation
          </span>
        </div>
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-16">
          <Underline> What Makes Us Different?</Underline>
        </h2>

        <div className="space-y-24">
          {/* Section 1 */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-3xl font-semibold mb-4">
                Engage Members{" "}
                <span className="bg-gradient-to-r from-white to-[#7816C9] bg-clip-text text-transparent">
                  Effortlessly
                </span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed tracking-wide">
                Prioritizing meaningful connections over just consumption. We
                build ecosystems where people engage, not just watch.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <Image
                src="/about1.png"
                alt="Engage Members Effortlessly"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-3xl font-semibold mb-4">
                Monetization beyond{" "}
                <span className="bg-gradient-to-r from-white to-[#7816C9] bg-clip-text text-transparent">
                  just courses
                </span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed tracking-wide">
                Creators earn through automated community ads – we’re the first
                platform to turn engagement into income.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <Image
                src="/about2.png"
                alt="Monetization Beyond Courses"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-3xl font-semibold mb-4">
                Built-In{" "}
                <span className="bg-gradient-to-r from-white to-[#7816C9] bg-clip-text text-transparent">
                  Streaks & Rituals
                </span>
              </h3>
              <p className="text-gray-300 text-base leading-relaxed tracking-wide">
                Turn daily activity into habit. Make engagement consistent
                through streaks & CHI Coins that keep your community alive.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <Image
                src="/about3.png"
                alt="Built-In Streaks & Rituals"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
