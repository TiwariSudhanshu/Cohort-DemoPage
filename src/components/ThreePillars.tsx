"use client";

import { useState } from "react";
import Image from "next/image";

import Underline from "./ui/Underline";

function ThreePillars() {
  const TABS = ["Build", "Engage", "Monetize"] as const;
  const [active, setActive] = useState<(typeof TABS)[number]>("Build");

  const contentMap = {
    Build: [
      {
        title: "4-Minute Launch Flow!",
        text: "Start your own branded community space in just a few clicks. No clutter, no friction.",
      },
      {
        title: "Multi-Format Content Hosting!",
        text: "Host videos, PDFs, modules, and discussions in one seamless place.",
      },
      {
        title: "Private Communities!",
        text: "Limit access to select members, teams, or internal circles – perfect for exclusivity.",
      },
      {
        title: "Free or Paid Access!",
        text: "Decide how your community lives: open to all or gated behind membership.",
      },
    ],
    Engage: [
      {
        title: "Gamified Engagement with CHT Coins",
        text: "Members earn CHT Coins by showing up, contributing, or completing streaks - driving consistent interaction and retention.",
      },
      {
        title: "Host Events",
        text: "Plan and schedule events directly through your community calendar - so every member stays in sync and shows up.",
      },
      {
        title: "Integrated 1-Click Calls",
        text: "No Zoom links or external platforms. Run live sessions, AMAs, or cohort calls directly inside your community.",
      },
      {
        title: "Video-First Content",
        text: "Drop exclusive videos or course content for your community - all viewable inside the app, with no third-party links.",
      },
    ],
    Monetize: [
      {
        title: "Community Ads",
        text: "Once eligible, brands can run ads inside your community. You control what runs, and you get paid.",
      },
      {
        title: "Paid Communities",
        text: "Charge for access with flexible pricing - one-time or recurring.",
      },
      {
        title: "Paid Content or Courses",
        text: "Sell pre-recorded content securely - no leaks, no third-party tools.",
      },
      {
        title: "Paid Events & Webinars",
        text: "Host and monetize live sessions directly inside the app.",
      },
    ],
  };

  return (
    <>
      <section className=" bg-black text-white relative">
        <div className="text-center mb-6">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Pillars
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10 text-white">
          The 3 Pillars of Powerful{" "}
          <span className="relative inline-block">
            <span className="relative z-10">
              <Underline> Communities</Underline>
            </span>
          </span>
        </h2>

        <div className="flex justify-center mb-12">
          <div className="flex rounded-full bg-gradient-to-r from-purple-500 to-purple-900 p-1 gap-1">
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
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4 min-h-[200px]">
          {contentMap[active].map(({ title, text }) => (
            <div
              key={title}
              className="border-l border-white/20 pl-4 space-y-2"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-300 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="relative w-full h-[600px]">
        <Image
          src="/Vector.png"
          alt="bg"
          fill
          className="object-cover brightness-50"
          sizes="100vw"
          priority
        />
        <Image
          src="/pillar1.png"
          alt="pillar1"
          width={260}
          height={300}
          className="absolute top-10 left-[20%] w-[260px] h-auto"
        />
        <Image
          src="/pillar2.png"
          alt="pillar2"
          width={260}
          height={300}
          className="absolute top-10 right-[20%] w-[260px] h-auto"
        />
        <Image
          src="/pillar3.png"
          alt="pillar3"
          width={220}
          height={280}
          className="absolute bottom-10 left-[15%] w-[220px] h-auto"
        />
        <Image
          src="/pillar4.png"
          alt="pillar4"
          width={200}
          height={260}
          className="absolute bottom-12 right-[15%] w-[200px] h-auto"
        />
        <Image
          src="/pillar-center.png"
          alt="pillar-center"
          width={500}
          height={600}
          className="absolute w-[500px] top-40 left-1/2 -translate-x-1/2"
        />
      </div>

      <div className="mt-16 flex justify-center">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
          Get Started for Free
        </button>
      </div>

      <div className="flex justify-center">
        <Image
          src="/Frame 5.png"
          alt="frame"
          width={1200}
          height={600}
          className="w-auto h-auto"
          loading="lazy"
          sizes="80vw"
        />
      </div>

      <div className="flex justify-center">
        <Image
          src="/frame2.png"
          alt="frame2"
          width={1200}
          height={600}
          className="w-auto h-auto"
          loading="lazy"
          sizes="80vw"
        />
      </div>
    </>
  );
}

export default ThreePillars;
