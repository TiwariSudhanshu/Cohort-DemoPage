import Image from 'next/image';

const ImageGallerySection = () => {
  return (
    <section className="w-full h-[24rem] overflow-hidden">
      <div className="overflow-x-auto scrollbar-hide relative h-full">
        <div className="flex gap-4 w-max px-4 h-full">
          
          <div className="flex flex-col gap-2">
            <div className="w-64 h-44 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img1.jpg"
                alt="Creator 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-64 h-48 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img2.jpg"
                alt="Creator 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-64 h-64 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img3.jpg"
                alt="Creator 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-32 h-28 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img4.jpg"
                alt="Creator 4"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-60 h-55 absolute bottom-0 left-100 rounded-lg overflow-hidden z-10 mt-16">
            <Image
              src="/Creators/img5.jpg"
              alt="Creator 5"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-80 h-96 relative rounded-lg overflow-hidden">
            <Image
              src="/Creators/img6.jpg"
              alt="Creator 6"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-64 h-44 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img7.jpg"
                alt="Creator 7"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-64 h-48 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img8.jpg"
                alt="Creator 8"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-64 h-64 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img9.jpg"
                alt="Creator 9"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-32 h-28 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img10.jpg"
                alt="Creator 10"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-60 h-50 absolute bottom-0 left-320 rounded-lg overflow-hidden z-10 mt-16">
            <Image
              src="/Creators/img11.jpg"
              alt="Creator 11"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-80 h-96 relative rounded-lg overflow-hidden">
            <Image
            src="/Creators/img13.png"

              alt="Creator 13"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-64 h-44 relative rounded-lg overflow-hidden">
              <Image
                   src="/Creators/img12.jpg"
                alt="Creator 12"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-64 h-48 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img14.png"
                alt="Creator 14"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-80 h-96 relative rounded-lg overflow-hidden">
            <Image
              src="/Creators/img15.png"
              alt="Creator 15"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 w-48 h-96">
            <div className="w-48 h-48 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img16.png"
                alt="Creator 16"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-48 h-48 relative rounded-lg overflow-hidden">
              <Image
                src="/Creators/img17.png"
                alt="Creator 17"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ImageGallerySection;
