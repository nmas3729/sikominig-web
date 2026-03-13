"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Play } from "lucide-react";

const mediaItems = [
  { 
    type: "video" as const, 
    src: "/images/Mining.mp4", 
    title: "Mining Operations",
    thumbnail: "/images/banner-img.jpg"
  },
  { 
    type: "image" as const, 
    src: "/images/WhatsApp Image 2025-07-02 at 4.34.49 PM.jpeg", 
    title: "Siko Mining Team" 
  },
  { 
    type: "video" as const, 
    src: "/images/WhatsApp Video 2025-06-20 at 4.14.30 PM.mp4", 
    title: "Our Technology",
    thumbnail: "/images/stats-bg.png"
  },
  { 
    type: "image" as const, 
    src: "/images/WhatsApp Image 2025-07-04 at 1.00.16 PM.jpeg", 
    title: "Field Operations" 
  },
  { 
    type: "video" as const, 
    src: "/images/WhatsApp Video 2025-07-12 at 3.02.25 PM.mp4", 
    title: "Field Work",
    thumbnail: "/images/banner-img.jpg"
  },
  { 
    type: "image" as const, 
    src: "/images/banner-img.jpg", 
    title: "Mining Equipment" 
  },
];

export default function Media() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="media" className="section-spacing bg-[#F5F5F5]">
      <div className="container-custom">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title">
            Media <span>Gallery</span>
          </h2>
          <p className="section-subtitle">
            See our work in action through videos and images from our operations
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#2A2A2A] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              {item.type === "video" ? (
                <>
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#D4A84B] flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 text-[#1A1A1A] ml-1" fill="#1A1A1A" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </>
              )}
              
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
