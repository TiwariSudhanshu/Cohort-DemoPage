"use client";
import Image from "next/image";
import Underline from "./ui/Underline";

function EmpoweringCommunities() {
  return (
    <section className="py-24 bg-black bg-wavy-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
         <div className="text-center">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Built for this
          </span>
        </div>
        <h2 className="text-5xl mt-7 md:text-5xl leading-tight font-bold text-white mb-16">
          Empowering Every Kind of <br />
          <span className="relative inline-block">
            <span className="relative z-10"><Underline>Community!</Underline></span>
          </span>
        </h2>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 1. Large Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#2B0A3D] to-[#1E0030] rounded-2xl p-6 md:p-7 md:py-12 text-left shadow-lg text-white ring-1 ring-white/10">
            <div className="flex flex-col items-start">
              <Image
                src="/com.png"
                alt="Community OS"
                width={32}
                height={32}
                className="mb-3 h-8 w-8 object-contain brightness-0 invert"
                aria-hidden="true"
              />
              <h3 className="text-xl md:text-2xl font-semibold leading-tight tracking-tight">
                Community OS - Built for Depth, Not Just Broadcast
              </h3>
              <p className="text-white/80 mt-3 text-xs md:text-sm leading-snug font-sora tracking-wide">
                Real communities are more than comments. Host live events, run
                deep discussions, and create spaces where your people engage –
                not just scroll.
              </p>
            </div>
          </div>

          {/* 2. Monetisation (white) */}
          <div className="bg-white rounded-2xl p-6 md:p-7 text-left shadow-md ring-1 ring-black/5">
            <div className="flex flex-col items-start">
              <Image
                src="/comII.png"
                alt="Monetisation"
                width={32}
                height={32}
                className="mb-3 h-8 w-8 object-contain"
                aria-hidden="true"
              />
              <div className="text-black text-lg md:text-xl pt-8 font-semibold leading-tight tracking-tight">
                Monetisation
              </div>
              <p className="text-gray-700 mt-2 text-xs md:text-sm leading-snug font-sora tracking-wide">
                Coins, events, memberships – without the algorithm middleman. We
                let you earn from what actually matters: connection, not clout.
              </p>
            </div>
          </div>

          {/* 3. Course Hosting (bluish) */}
          <div className="bg-gradient-to-br from-[#2B0A3D] to-[#1E0030] rounded-2xl p-6 md:p-7 text-left text-white shadow-lg ring-1 ring-white/10">
            <div className="flex flex-col items-start">
              <Image
                src="/comIII.png"
                alt="Course Hosting"
                width={32}
                height={32}
                className="mb-3 h-8 w-8 object-contain brightness-0 invert"
                aria-hidden="true"
              />
              <div className="text-lg md:text-xl font-semibold leading-tight tracking-tight">
                Course Hosting with Community Built-In
              </div>
              <p className="text-white/80 mt-2 text-xs md:text-sm leading-snug font-sora tracking-wide">
                Launch courses where learning is social, real-time, and
                feedback-driven.
              </p>
            </div>
          </div>

          {/* 4. Brands (white) */}
          <div className="bg-white rounded-2xl p-6 md:p-7 text-left shadow-md ring-1 ring-black/5">
            <div className="flex flex-col items-start">
              <Image
                src="/comIV.png"
                alt="Brands and Internet Startups"
                width={32}
                height={32}
                className="mb-3 h-8 w-8 object-contain"
                aria-hidden="true"
              />
              <div className="text-black text-lg md:text-xl font-semibold leading-tight tracking-tight">
                Brands and Internet Startups
              </div>
              <p className="text-gray-700 mt-2 text-xs md:text-sm leading-snug font-sora tracking-wide">
                Create customer-led communities that fuel feedback loops,
                loyalty, and true product evangelism.
              </p>
            </div>
          </div>

          {/* 5. Creator Economy (bluish) */}
          <div className="bg-gradient-to-br from-[#2B0A3D] to-[#1E0030] rounded-2xl p-6 md:p-7 text-left text-white shadow-lg ring-1 ring-white/10">
            <div className="flex flex-col items-start">
              <Image
                src="/comV.png"
                alt="Creator Economy"
                width={32}
                height={32}
                className="mb-3 h-8 w-8 object-contain brightness-0 invert"
                aria-hidden="true"
              />
              <div className="text-lg md:text-xl font-semibold leading-tight tracking-tight">
                Designed for the Creator Economy 2.0
              </div>
              <p className="text-white/80 mt-2 text-xs md:text-sm leading-snug font-sora tracking-wide">
                Beyond content – it’s connection that pays. We let you own your
                income and future – all in one place.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-base md:text-lg font-semibold transition-colors shadow-lg">
            Get Started for Free
          </button>
        </div>
      </div>
    </section>
  );
}

export default EmpoweringCommunities;
