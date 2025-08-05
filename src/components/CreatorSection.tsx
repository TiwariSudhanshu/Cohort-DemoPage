import React from "react";
import Underline from "./ui/Underline";
import Image from "next/image";
import CreatorsGallery from "./ui/CreatorsGallery";

function CreatorSection() {
  return (
    <section className="bg-black ">
      {/* TOP VECTOR */}
      <Image
        src="/Vector.png"
        alt="top vector"
        width={1920}
        height={100}
        className="
    block w-screen max-w-none
    mx-[calc(50%-50vw)]
    scale-y-75 md:scale-y-75
    origin-center
    pointer-events-none
    my-[-2rem]
  "
        priority
        sizes="100vw"
      />
      <div className="relative">
        <div className="text-center">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Change Makers
          </span>
        </div>
        <div className="relative z-10 w-full px-4 pt-10 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-12 text-white">
            Creators and{" "}
            <span className="relative inline-block w-fit">
              <span className="relative z-10">
                <Underline> Communities on Cohorts</Underline>
              </span>
            </span>{" "}
              
          </h2>
        </div>

        {/*  */}
       

    {/*  */}
    <img src="/Container.png" alt="container" />
    <CreatorsGallery/>

        
      </div>
      {/* BOTTOM VECTOR */}
      <Image
        src="/Vector.png"
        alt="bottom vector"
        width={1920}
        height={100}
        className="
    block w-screen max-w-none
    mx-[calc(50%-50vw)]
    scale-y-75 md:scale-y-75
    origin-center
    pointer-events-none
    my-[-2rem]
  "
        loading="lazy"
        sizes="100vw"
      />
    </section>
  );
}

export default CreatorSection;
