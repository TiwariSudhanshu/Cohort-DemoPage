"use client";
import { useEffect, useRef, useState } from "react";
import HeroBG from "./ui/heroBG";

const words = ["Creators", "Businesses", "Community Builders"];
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoStarted, setIsVideoStarted] = useState(false);
  const playerRef = useRef<YT.Player | null>(null);

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

  useEffect(() => {
    if (isPlaying && window.YT && window.YT.Player) {
      createYouTubePlayer();
    } else if (isPlaying) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      window.onYouTubeIframeAPIReady = createYouTubePlayer;
      document.body.appendChild(tag);
    }
  }, [isPlaying]);

  function createYouTubePlayer() {
    playerRef.current = new window.YT.Player("yt-player", {
      videoId: "cv5kxeUg5Jc",
      playerVars: { autoplay: 1, rel: 0 },
      events: {
        onStateChange: (event) => {
          if (event.data === 1) setIsVideoStarted(true);
        },
      },
    });
  }

  return (
    <section
      id="home"
      className="relative mt-[6vmax] pt-[1.5vmax] min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #000000, #271A34, #000000)",
      }}
    >
      {/* Decorative images */}
      <HeroBG />

      <div className="container mx-auto px-4 text-center z-30 mt-[5vmax]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-center">
          The complete community platform for
          <br />
          <span className="inline-block mt-2 text-purple-400 relative w-full h-[1.2em]">
            <span
              className={`absolute left-1/2 -translate-x-1/2 transition-transform duration-300 ease-in-out transform origin-bottom ${
                flip ? "rotate-x-180 opacity-0" : "rotate-x-0 opacity-100"
              }`}
              style={{ backfaceVisibility: "hidden" }}
            >
              {words[index]}
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-center">
          Build, Engage, and Monetize Your Community — All in One Platform.
        </p>

        <div className="relative mx-auto mb-10 z-30">
          <div className="w-full max-w-2xl mx-auto aspect-video shadow-2xl rounded-lg overflow-hidden relative">
            {/* Thumbnail with play button */}
            {!isPlaying && (
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-100"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src="/thumbnail.jpg"
                  alt="Custom thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer">
                  <svg
                    className="w-20 h-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle cx="42" cy="42" r="42" opacity="0.5" />
                    <polygon points="33,27 60,42 33,57" fill="white" />
                  </svg>
                </div>
              </div>
            )}

            {/* Loader while waiting for video to start */}
            {isPlaying && !isVideoStarted && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* YouTube iframe */}
            <div className="w-full h-full">
              {isPlaying && <div id="yt-player" className="w-full h-full" />}
            </div>
          </div>
        </div>

        <a
          href="https://group.cohortsapp.com/widget/form/q4tCuBYn63FfdrPu7Rwz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg inline-block"
        >
          Get Started for Free
        </a>
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
