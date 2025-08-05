"use client";
import Image from "next/image";
import { useState } from "react";
import Underline from "./ui/Underline";

export default function CohortsFeaturesSection() {
  const [active, setActive] = useState<"creators" | "members">("creators");

  const creatorContent = {
    sections: [
      {
        title: "Create Your Own",
        highlight: "Community Space!",
        description:
          "Launch a brand-new community in under 4 minutes!\nJust name it, pick your type, and you're ready to bring people in  no tech, no waiting.",
      },
      {
        title: "Engage Members",
        highlight: "Effortlessly!",
        description:
          "Start real conversations, not just content drops!\nPost updates, polls, media, and more to keep your community active and connected.",
      },
      {
        title: "Host Live Events and",
        highlight: "Gatherings!",
        description:
          "Run live sessions, Q&As, and community calls – directly inside your space. No Zoom links. No third‑party tools. Just click and connect.",
      },
      {
        title: "Share Exclusive Content",
        highlight: "Securely!",
        description:
          "Upload and organise your premium content – Videos & courses – with built‑in access control and no content leaks.",
      },
      {
        title: "Inspire Participation with",
        highlight: "Leaderboards!",
        description:
          "Turn your top members into ambassadors.\nUse gamification and leaderboard systems to reward activity, loyalty, and contribution.",
      },
      {
        title: "Monetise Your Community,",
        highlight: "Your Way!",
        description:
          "Charge for memberships, content, or events or earn passively through native ads. With Cohorts App, you choose how to monetise without giving up control.",
      },
    ],
  };

  const userContent = {
    sections: [
      {
        title: "Discover New",
        highlight: "Communities",
        description:
          "Find spaces that match your interests, goals, and even your location.",
      },
      {
        title: "Join Your Favourite",
        highlight: "Creators'",
        description:
          "Be part of exclusive spaces created by the people you already follow and love.",
      },
      {
        title: "Find Meetups",
        highlight: "Near You",
        description:
          "Attend real-world events hosted by communities and individuals.",
      },
      {
        title: "Earn",
        highlight: "CHT Coins",
        description:
          "Get rewarded for showing up, engaging, and adding value to your community.",
      },
      {
        title: "Stay on Top of",
        highlight: "Leaderboard",
        description:
          "Join daily, contribute consistently, and get recognised for your activity.",
      },
      {
        title: "Join Multiple",
        highlight: "Communities",
        description:
          "Follow your interests, meet new people, and never be stuck in just one group.",
      },
    ],
  };

  const currentContent = active === "creators" ? creatorContent : userContent;

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="relative mx-auto max-w-7xl px-4 pt-24 md:px-6 md:py-28">
        <div className="mb-6 flex justify-center">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            FEATURES
          </span>
        </div>
        <h2 className="mb-8 text-center text-2xl font-bold md:text-5xl text-white">
          What can you do on <br />
          <span className="relative inline-block w-fit">
            <span className="relative z-10">
              <Underline>Cohorts?</Underline>
            </span>
          </span>
        </h2>

        <div className="mb-20 flex justify-center">
          <div className="relative flex items-center bg-gradient-to-r from-purple-700 to-purple-900 p-1 rounded-full w-[200px] h-[48px]">
            <div
              className={`absolute top-1 bottom-1 left-1 w-[90px] rounded-full bg-white transition-all duration-300 ${
                active === "members" ? "translate-x-[100px]" : "translate-x-0"
              }`}
            />
            <button
              className={`z-10 w-[95px] h-full text-base font-medium transition-colors duration-300 ${
                active === "creators" ? "text-black" : "text-white"
              }`}
              onClick={() => setActive("creators")}
            >
              Creators
            </button>
            <button
              className={`z-10 w-[90px] h-full flex items-center justify-center text-base pl-3 font-medium transition-colors duration-300 ${
                active === "members" ? "text-black" : "text-white"
              }`}
              onClick={() => setActive("members")}
            >
              Members
            </button>
          </div>
        </div>

        {currentContent.sections.map((section, index) => (
          <div
            key={index}
            className={`relative z-10 mb-28 mt-20 flex flex-col-reverse items-center gap-16 md:mb-20 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full px-2 pt-10 md:w-1/2 md:px-12 md:pt-0 order-2 md:order-1">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                {section.title}{" "}
                <span className="bg-gradient-to-r from-white via-purple-500 to-purple-500 bg-clip-text text-transparent">
                  {section.highlight}
                </span>
              </h3>
              <p className="max-w-xl text-zinc-300">
                {section.description.split("\n").map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < section.description.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            <div className="relative w-full md:w-1/2 order-1 md:order-2">
              <Image
                src={`/${active === "creators" ? "content" : "user"}${index + 1}.png`}
                width={900}
                height={900}
                alt={`${section.title} ${section.highlight}`}
                className="relative z-10"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
