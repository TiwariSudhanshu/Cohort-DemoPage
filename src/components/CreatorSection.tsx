import React from "react";
import Underline from "./ui/Underline";

function CreatorSection() {
  return (
    <section className="bg-black mb-7">
      <img
        src="/Vector.png"
        alt="top vector"
        className="
          block w-screen max-w-none
          mx-[calc(50%-50vw)]
          scale-y-75 md:scale-y-75
          origin-center
          pointer-events-none
          my-[-2rem]
                 "
      />

      <div className="relative">
        <div className="text-center">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Change Makers
          </span>
        </div>
        <div className="relative z-10 w-full px-4 pt-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Creators and{" "} 
            <span className="relative inline-block w-fit">
              <span className="relative z-10"><Underline> Communities</Underline></span>
           
            </span>{" "}
            on Cohorts
          </h2>
        </div>

        <div className="w-screen mx-[calc(50%-50vw)]">
          <img
            src="/Frame.png"
            alt="Creators grid"
            className="w-full h-auto max-w-none"
          />
        </div>

        <img
          src="/Vector.png"
          alt="bottom vector"
          className="
            pointer-events-none
            absolute left-1/2 -translate-x-1/2
            w-screen max-w-none
            bottom-0 -translate-y-4 md:-translate-y-8
            z-0
            scale-y-75 md:scale-y-90 origin-center
          "
        />
      </div>
    </section>
  );
}

export default CreatorSection;
