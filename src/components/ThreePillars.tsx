"use client";
import { useState } from "react";

function ThreePillars() {
  const TABS = ["Build", "Engage", "Monetize"] as const;
  const [active, setActive] = useState<(typeof TABS)[number]>("Build");
  return (
    <>
      <section className="py-24 bg-black text-white relative">
        <div className="text-center mb-6">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Pillars
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-8 text-white">
          The 3 Pillars of Powerful{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Communities</span>
            <svg
              viewBox="0 0 300 30"
              className="absolute left-0 bottom-[-5px] w-full h-6 z-0"
              preserveAspectRatio="none"
            >
              <path
                d="M5 20 C60 35, 240 0, 295 20"
                stroke="#7e22ce"
                strokeWidth="12"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <div className="flex justify-center mb-12">
          <div
            className="flex rounded-full bg-gradient-to-r from-purple-500 to-purple-900 p-1 gap-1"
            role="tablist"
            aria-label="Product tabs"
          >
            {TABS.map((tab) => {
              const isActive = tab === active;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActive(tab)}
                  className={`px-6 py-2 text-sm rounded-full font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                    isActive
                      ? "bg-white text-black shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                  role="tab"
                  aria-selected={isActive}
                  aria-pressed={isActive}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
          <div className="space-y-10">
            <div className="border-l border-white/20 pl-4">
              <h3 className="text-lg font-semibold mb-1">
                4-Minute Launch Flow!
              </h3>
              <p className="text-gray-300 text-sm">
                Start your own branded community space in just a few clicks. No
                clutter, no friction.
              </p>
            </div>

            <div className="border-l border-white/20 pl-4">
              <h3 className="text-lg font-semibold mb-1">
                Multi-Format Content Hosting!
              </h3>
              <p className="text-gray-300 text-sm">
                Host videos, PDFs, modules, and discussions in one seamless
                place.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="border-l border-white/20 pl-4">
              <h3 className="text-lg font-semibold mb-1">
                Private Communities!
              </h3>
              <p className="text-gray-300 text-sm">
                Limit access to select members, teams, or internal circles –
                perfect for exclusivity.
              </p>
            </div>

            <div className="border-l border-white/20 pl-4">
              <h3 className="text-lg font-semibold mb-1">
                Free or Paid Access!
              </h3>
              <p className="text-gray-300 text-sm">
                Decide how your community lives: open to all or gated behind
                membership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-[600px]">
        <img
          src="/Vector.png"
          alt="bg"
          className="w-full h-full object-cover brightness-50"
        />

        <img
          src="/p1.png"
          alt="com"
          className="absolute top-10 left-[20%] w-[260px] h-auto"
        />
        <img
          src="/p2.png"
          alt="com"
          className="absolute top-10 right-[20%] w-[260px] h-auto"
        />
        <img
          src="/p3.png"
          alt="com"
          className="absolute bottom-10 left-[15%] w-[220px] h-auto"
        />
        <img
          src="/p4.png"
          alt="com"
          className="absolute bottom-12 right-[15%] w-[200px] h-auto"
        />
      </div>

      <div className="mt-16 flex justify-center">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
          Get Started for Free
        </button>
      </div>

      <div className="flex justify-center">
        <img src="/frame2.png" alt="frame 2" />
      </div>
    </>
  );
}

export default ThreePillars;
