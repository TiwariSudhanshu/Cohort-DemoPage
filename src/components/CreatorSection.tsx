import React from "react";

function CreatorSection() {
  return (
    <section className="bg-black mt-[5vmax]">
      {/* TOP VECTOR — full width, no overlap */}
      <img
        src="/Vector.png"
        alt="top vector"
        className="
          block w-screen max-w-none
          mx-[calc(50%-50vw)]
          scale-y-75 md:scale-y-90
          origin-center
          pointer-events-none
        "
      />
  
      {/* CONTENT + SLIGHT UNDERLAP SETUP */}
      <div className="relative">
         <div className="text-center">
          <span className="inline-block bg-white text-purple-600 text-xs font-semibold px-4 py-1 rounded-full tracking-widest uppercase">
            Change Makers
          </span>
        </div>
        {/* content sits above the bottom vector */}
        <div className="relative z-10 container mx-auto px-4 pt-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Creators{" "}
            <span className="relative inline-block w-fit">
              <span className="relative z-10">and Communities</span>
              <svg
                viewBox="0 0 300 20"
                className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-[300px] h-[20px] z-0"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="20"
                  x2="300"
                  y2="0"
                  stroke="#7e22ce"
                  strokeWidth="16"
                  strokeLinecap="butt"
                />
              </svg>
            </span>{" "}
            on Cohorts
          </h2>

          <img
            src="https://res.cloudinary.com/dr51pu9n9/image/upload/v1753860531/Frame_hdnmzz.png"
            alt="Creators grid"
            className="mx-auto"
          />
        </div>

        {/* BOTTOM VECTOR — behind content, only a little underlap */}
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
