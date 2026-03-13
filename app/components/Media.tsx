"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const videos = [
  { src: "/images/Mining.mp4", title: "Mining Operations" },
  { src: "/images/WhatsApp Video 2025-06-20 at 4.14.30 PM.mp4", title: "Our Technology" },
  { src: "/images/WhatsApp Video 2025-07-12 at 3.02.25 PM.mp4", title: "Field Work" },
];

const galleryImages = [
  { src: "/images/WhatsApp Image 2025-07-02 at 4.34.49 PM.jpeg", title: "Siko Mining Team" },
  { src: "/images/WhatsApp Image 2025-07-04 at 1.00.16 PM.jpeg", title: "Mining Operations" },
];

export default function Media() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="media" className="bg-gray-100 py-20">
      <div className="container-custom">
        <h2
          className={`section-title mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our <span>Media</span>
        </h2>
        <p
          className={`text-center mb-12 text-gray-500 text-base transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          See our work in action through videos and images from our operations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`bg-[#2C3440] rounded-xl p-3 shadow-2xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <video
                controls
                muted
                loop
                playsInline
                className="w-full rounded-lg block"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-3 px-1 text-white/80 text-sm font-medium">{video.title}</p>
            </div>
          ))}
        </div>

        <h3
          className={`text-center text-2xl font-bold text-gray-800 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our Gallery
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`bg-[#2C3440] rounded-2xl p-3 shadow-lg border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 3) * 100}ms` : "0ms" }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="mt-3 px-1">
                <p className="text-white/80 text-xs font-medium uppercase tracking-wider">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
