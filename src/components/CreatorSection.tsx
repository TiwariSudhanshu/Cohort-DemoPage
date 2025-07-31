import React from 'react'

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
        {/* content sits above the bottom vector */}
        <div className="relative z-10 container mx-auto px-4 pt-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Creators and Communities on{" "}
            <span className="text-purple-400 underline">Cohorts</span>
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
  )
}

export default CreatorSection
