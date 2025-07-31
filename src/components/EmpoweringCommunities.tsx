"use client";
import Image from "next/image";

function EmpoweringCommunities() {
  return (
    <section className="py-24 bg-black bg-wavy-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-3xl font-bold text-white mb-16">
          Empowering Every Kind of <br />
          <span className="relative inline-block">
            <span className="relative z-10">Community!</span>
            <svg
              className="pointer-events-none absolute inset-x-0 -bottom-1 h-[0.5em] w-full"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{ filter: "drop-shadow(0 2px 6px rgba(139,92,246,0.6))" }}
            >
              <path
                d="M2 5 C 30 2, 70 8, 98 5"
                stroke="#8b5cf6"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </h2>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 1. Large card (bluish) -> com.png */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#2B0A3D] to-[#1E0030] rounded-2xl p-6 md:p-7 md:py-12 text-left shadow-lg text-white ring-1 ring-white/10">
            <div className="flex flex-col items-start">
              {/* force icon to white on bluish */}
              <Image
                src="/com.png"
                alt="Community OS"
                width={20}
                height={20}
                className="mb-3 h-5 w-5 object-contain brightness-0 invert"
                aria-hidden="true"
              />
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
                Community OS - Built for Depth, Not Just Broadcast
              </h3>
              <p className="text-white/80 mt-3 text-sm md:text-[15px] leading-snug">
                Real communities are more than comments. Host live events, run deep
                discussions, and create spaces where your people engage – not just
                scroll.
              </p>
            </div>
          </div>

          {/* 2. Monetisation (white) -> comII.png */}
          <div className="bg-white rounded-2xl p-6 md:p-7 text-left shadow-md ring-1 ring-black/5">
            <div className="flex flex-col items-start">
              {/* keep original (black on white) */}
              <Image
                src="/comII.png"
                alt="Monetisation"
                width={20}
                height={20}
                className="mb-3 h-5 w-5 object-contain"
                aria-hidden="true"
              />
              <div className="text-black text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                Monetisation
              </div>
              <p className="text-gray-700 mt-2 text-sm leading-snug">
                Coins, events, memberships – without the algorithm middleman. We let
                you earn from what actually matters: connection, not clout.
              </p>
            </div>
          </div>

          {/* 3. Course Hosting (bluish) -> comIII.png */}
          <div className="bg-gradient-to-br from-[#2B0A3D] to-[#1E0030] rounded-2xl p-6 md:p-7 text-left text-white shadow-lg ring-1 ring-white/10">
            <div className="flex flex-col items-start">
              {/* force icon to white on bluish */}
              <Image
                src="/comIII.png"
                alt="Course Hosting"
                width={20}
                height={20}
                className="mb-3 h-5 w-5 object-contain brightness-0 invert"
                aria-hidden="true"
              />
              <div className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                Course Hosting with Community Built-In
              </div>
              <p className="text-white/80 mt-2 text-sm leading-snug">
                Launch courses where learning is social, real-time, and
                feedback-driven.
              </p>
            </div>
          </div>

          {/* 4. Brands (white) -> comIV.png */}
          <div className="bg-white rounded-2xl p-6 md:p-7 text-left shadow-md ring-1 ring-black/5">
            <div className="flex flex-col items-start">
              {/* keep original (black on white) */}
              <Image
                src="/comIV.png"
                alt="Brands and Internet Startups"
                width={20}
                height={20}
                className="mb-3 h-5 w-5 object-contain"
                aria-hidden="true"
              />
              <div className="text-black text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                Brands and Internet Startups
              </div>
              <p className="text-gray-700 mt-2 text-sm leading-snug">
                Create customer-led communities that fuel feedback loops, loyalty,
                and true product evangelism.
              </p>
            </div>
          </div>

          {/* 5. Creator Economy (bluish) -> comV.png */}
          <div className="bg-gradient-to-br from-[#2B0A3D] to-[#1E0030] rounded-2xl p-6 md:p-7 text-left text-white shadow-lg ring-1 ring-white/10">
            <div className="flex flex-col items-start">
              {/* force icon to white on bluish */}
              <Image
                src="/comV.png"
                alt="Creator Economy"
                width={20}
                height={20}
                className="mb-3 h-5 w-5 object-contain brightness-0 invert"
                aria-hidden="true"
              />
              <div className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                Designed for the Creator Economy 2.0
              </div>
              <p className="text-white/80 mt-2 text-sm leading-snug">
                Beyond content – it’s connection that pays. We let you own your
                income and future – all in one place.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
}

export default EmpoweringCommunities;
