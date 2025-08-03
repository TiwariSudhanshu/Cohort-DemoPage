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
        title: "Powerful Website Builder",
        text: "Create your own web3 community website effortlessly with our intuitive website builder."
      },
      {
        title: "Customizable Templates",
        text: "Choose from a variety of professionally designed templates tailored for different community needs."
      },
      {
        title: "No Code Needed",
        text: "Build and manage your community without writing a single line of code."
      }
    ],
    Engage: [
      {
        title: "Community Dashboard",
        text: "Track member activity, engagement, and growth all in one place."
      },
      {
        title: "Event Management",
        text: "Organize and promote events, manage RSVPs, and keep your community active."
      },
      {
        title: "Discussion Forums",
        text: "Foster meaningful conversations with integrated forums and chat features."
      }
    ],
    Monetize: [
      {
        title: "NFT Memberships",
        text: "Offer exclusive NFT-based memberships and unlock premium content for holders."
      },
      {
        title: "Token Gating",
        text: "Restrict access to certain areas or content based on token holdings."
      },
      {
        title: "Monetize Engagement",
        text: "Reward community members for their contributions and participation."
      }
    ]
  };

  return (
    <>
      <section className="bg-black text-white relative">
        <div className="text-center mb-6">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Pillars
          </span>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold mb-10 text-white">
          The 3 Pillars of Powerful <Underline>Communities</Underline>
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

      <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] mt-16">
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
          className="absolute top-10 left-[5%] sm:left-[10%] w-[100px] sm:w-[180px] md:w-[260px] h-auto"
        />
        <Image
          src="/pillar2.png"
          alt="pillar2"
          width={260}
          height={300}
          className="absolute top-10 right-[5%] sm:right-[10%] w-[100px] sm:w-[180px] md:w-[260px] h-auto"
        />
        <Image
          src="/pillar3.png"
          alt="pillar3"
          width={220}
          height={280}
          className="absolute bottom-12 left-[25%] sm:left-[33%] w-[90px] sm:w-[160px] md:w-[220px] h-auto"
        />
        <Image
          src="/Frame5.png"
          alt="frame5"
          width={500}
          height={500}
          className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[250px] sm:w-[400px] md:w-[500px] h-auto"
        />
        <Image
          src="/frame2.png"
          alt="frame2"
          width={300}
          height={300}
          className="absolute bottom-[8%] right-[8%] w-[140px] sm:w-[200px] md:w-[300px] h-auto"
        />
      </div>
    </>
  );
}

export default ThreePillars;
