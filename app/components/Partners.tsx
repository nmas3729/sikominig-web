"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const partners = [
  { src: "/images/top-logo1.png", alt: "B-BBEE Level 2", width: 115, height: 115 },
  { src: "/images/top-logo2.png", alt: "Institute of Directors South Africa", width: 212, height: 97 },
  { src: "/images/top-logo3.png", alt: "SACMA", width: 242, height: 59 },
  { src: "/images/top-logo1.png", alt: "Partner 4", width: 115, height: 115 },
  { src: "/images/top-logo2.png", alt: "Partner 5", width: 212, height: 97 },
];

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.5 });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-white border-t border-b border-gray-100">
      <div className="container-custom">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm uppercase tracking-widest text-[#D4A84B] font-semibold mb-2">Trusted By</p>
          <h3 className="text-xl font-bold text-[#1A1A1A]">Our Partners & Accreditations</h3>
        </div>

        <div className="horizontal-scroll justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex-shrink-0 flex items-center justify-center px-6 py-4 bg-gray-50 rounded-xl transition-all duration-500 hover:bg-white hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
