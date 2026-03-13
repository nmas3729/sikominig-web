"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

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
    title: "Coal Processing Technology" 
  },
  { 
    type: "video" as const, 
    src: "/images/WhatsApp Video 2025-06-20 at 4.14.30 PM.mp4", 
    title: "Field Operations",
    thumbnail: "/images/stats-bg.png"
  },
  { 
    type: "image" as const, 
    src: "/images/WhatsApp Image 2025-07-04 at 1.00.16 PM.jpeg", 
    title: "Mining Equipment" 
  },
  { 
    type: "video" as const, 
    src: "/images/WhatsApp Video 2025-07-12 at 3.02.25 PM.mp4", 
    title: "Transportation & Logistics",
    thumbnail: "/images/banner-img.jpg"
  },
  { 
    type: "image" as const, 
    src: "/images/banner-img.jpg", 
    title: "Mining Site Overview" 
  },
];

export default function Media() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + mediaItems.length) % mediaItems.length);
    }
  };
  
  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % mediaItems.length);
    }
  };

  return (
    <>
      <section ref={ref} id="media" className="section-spacing bg-[#F5F5F5]">
        <div className="container-custom">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">
              Media & <span>Operations</span>
            </h2>
            <p className="section-subtitle">
              See our work in action through videos and images from our operations
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {mediaItems.map((item, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#2A2A2A] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer text-left ${
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 lg:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 lg:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div 
            className="relative w-full max-w-5xl mx-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {mediaItems[lightboxIndex].type === "video" ? (
              <video
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
              >
                <source src={mediaItems[lightboxIndex].src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={mediaItems[lightboxIndex].src}
                alt={mediaItems[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            )}
            
            {/* Title */}
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <p className="text-white text-lg font-medium">{mediaItems[lightboxIndex].title}</p>
              <p className="text-gray-400 text-sm mt-1">{lightboxIndex + 1} / {mediaItems.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
