"use client";
import Image from 'next/image';

const ImageGallerySection = () => {
  return (
    <section className="w-full h-[24rem] overflow-hidden relative">
      <div className="relative w-full h-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap gap-4 px-4 h-full w-max">
          {[...Array(2)].map((_, idx) => (
            <div className="flex gap-4 h-full" key={idx}>
              <div className="flex flex-col gap-2">
                <div className="w-64 h-44 relative rounded-lg overflow-hidden">
                  <Image src="/Creators/img1.jpg" alt="Creator 1" fill className="object-cover" />
                </div>
                <div className="w-64 h-48 relative rounded-lg overflow-hidden">
                  <Image src="/Creators/img2.jpg" alt="Creator 2" fill className="object-cover" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-64 h-64 relative rounded-lg overflow-hidden">
                  <Image src="/Creators/img3.jpg" alt="Creator 3" fill className="object-cover" />
                </div>
                <div className="flex gap-2">
                  <div className="w-32 h-28 relative rounded-lg overflow-hidden">
                    <Image src="/Creators/img4.jpg" alt="Creator 4" fill className="object-cover" />
                  </div>
                  <div className="w-32 h-28 relative rounded-lg overflow-hidden">
                    <Image src="/Creators/img5.jpg" alt="Creator 5" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="w-80 h-96 relative rounded-lg overflow-hidden">
                <Image src="/Creators/img6.jpg" alt="Creator 6" fill className="object-cover" />
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-64 h-44 relative rounded-lg overflow-hidden">
                  <Image src="/Creators/img7.jpg" alt="Creator 7" fill className="object-cover" />
                </div>
                <div className="w-64 h-48 relative rounded-lg overflow-hidden">
                  <Image src="/Creators/img8.jpg" alt="Creator 8" fill className="object-cover" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-64 h-64 relative rounded-lg overflow-hidden">
                  <Image src="/Creators/img9.jpg" alt="Creator 9" fill className="object-cover" />
                </div>
                <div className="flex gap-2">
                  <div className="w-32 h-28 relative rounded-lg overflow-hidden">
                    <Image src="/Creators/img10.jpg" alt="Creator 10" fill className="object-cover" />
                  </div>
                  <div className="w-32 h-28 relative rounded-lg overflow-hidden">
                    <Image src="/Creators/img11.jpg" alt="Creator 11" fill className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="w-80 h-96 relative rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dr51pu9n9/image/upload/v1754221598/img12_jn6nv7.png" alt="Creator 13" fill className="object-cover" />
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-64 h-44 relative rounded-lg overflow-hidden">
                  <Image src="https://res.cloudinary.com/dr51pu9n9/image/upload/v1754221596/img13_hriukw.jpg" alt="Creator 12" fill className="object-cover" />
                </div>
                <div className="w-64 h-48 relative rounded-lg overflow-hidden">
                  <Image src="/Creators/img14.png" alt="Creator 14" fill className="object-cover" />
                </div>
              </div>

              <div className="w-80 h-96 relative rounded-lg overflow-hidden">
                <Image src="/Creators/img15.png" alt="Creator 15" fill className="object-cover" />
              </div>

              <div className="flex flex-col gap-2 w-48 h-96">
                <div className="w-48 h-48 relative rounded-lg overflow-hidden">
                  <Image src="/Creators/img16.png" alt="Creator 16" fill className="object-cover" />
                </div>
                <div className="w-48 h-48 relative rounded-lg overflow-hidden">
                  <Image src="/Creators/img17.png" alt="Creator 17" fill className="object-cover" />
                </div>
              </div>

              <div className="flex gap-2 h-96">
                <div className="flex flex-col w-48 gap-2">
                  <div className="w-48 h-48 relative rounded-lg overflow-hidden">
                    <Image src="/Creators/img18.jpg" alt="Creator 18" fill className="object-cover" />
                  </div>
                  <div className="w-48 h-48 relative rounded-lg overflow-hidden">
                    <Image src="/Creators/img19.jpg" alt="Creator 19" fill className="object-cover" />
                  </div>
                </div>
                <div className="w-62 h-96 relative rounded-lg overflow-hidden">
                  <Image src="/Creators/img20.jpg" alt="Creator 20" fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ImageGallerySection;
