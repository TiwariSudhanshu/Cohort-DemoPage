"use client";
import { useEffect, useState } from "react";

const words = ["Creators", "Businesses", "Community Builders"];

export default function HeroSection() {
   const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFlip(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative mt-[6vmax] pt-[1.5vmax] min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #000000, #271A34, #000000)",
      }}
    >
      <img src="/hero1.png" alt="" className="absolute top-35 left-62 scale-[0.8] z-20 hidden sm:block" />
      <img src="/hero2.png" alt="" className="absolute top-66 left-20 scale-[0.8] z-20 hidden sm:block" />
      <img src="/hero3.png" alt="" className="absolute left-20 scale-[0.8] z-20 hidden sm:block" />
      <img src="/hero4.png" alt="" className="absolute right-[-10] top-40 scale-[0.8] z-10 hidden sm:block" />
      <img src="/hero5.png" alt="" className="absolute left-80 top-75 scale-[0.8] z-10 hidden sm:block" />
      <img src="/hero5.png" alt="" className="absolute right-70 top-80 scale-[0.8] z-10 hidden sm:block" />
      <img src="/hero6.png" alt="" className="absolute top-0 right-80 scale-[0.8] z-10 hidden sm:block" />
      <img src="/hero7.png" alt="" className="absolute top-0 left-80 scale-[0.8] z-10 hidden sm:block" />
      <img src="/hero8.png" alt="" className="absolute top-10 left-10 scale-[0.8] z-10 hidden sm:block" />

      <div className="absolute top-30 left-68 w-4 h-4 bg-purple-500 rounded-full glow-orb hidden sm:block" />
      <div className="absolute top-18 right-23 w-6 h-6 bg-purple-400 rounded-full glow-orb hidden sm:block" />
      <div className="absolute bottom-67 left-90 w-3 h-3 bg-purple-400 rounded-full glow-orb hidden sm:block" />
      <div className="absolute bottom-56 right-84 w-5 h-5 bg-purple-500 rounded-full glow-orb hidden sm:block" />

      <div className="container mx-auto px-4 text-center z-30 mt-[5vmax]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl md:ml-40 font-bold mb-6 leading-tight flex flex-wrap justify-center items-center gap-2">
          The complete community platform for{" "}
          <span className="relative inline-block w-[15ch] h-[1.2em] text-purple-400">
            <span
              className={`absolute left-0 top-0 transition-transform duration-300 ease-in-out transform origin-bottom ${
                flip ? "rotate-x-180 opacity-0" : "rotate-x-0 opacity-100"
              }`}
              style={{ backfaceVisibility: "hidden" }}
            >
              {words[index]}
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Build, Engage, and Monetize Your Community - All in One Platform.
        </p>


        <img
          src="https://res.cloudinary.com/dr51pu9n9/image/upload/v1753959874/Vector_1_hdo2ye.png"
          alt="vector"
          className="absolute left-0 top-30 z-5 hidden sm:block"
        />

        <div className="relative mx-auto mb-10 z-30">
          <img
            src="/hero-feed.png"
            alt="App Feed UI"
            className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg"
          />
        </div>

        <img
          src="https://res.cloudinary.com/dr51pu9n9/image/upload/v1753959949/Vector_2_einqjg.png"
          alt="vector"
          className="absolute right-18 top-20 z-5 hidden sm:block"
        />

        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
          Get Started for Free
        </button>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .flip-text {
          transform-style: preserve-3d;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
      `}</style>
    </section>
  );
}
