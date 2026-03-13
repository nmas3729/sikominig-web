"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const accreditations = [
  { src: "/images/top-logo1.png", alt: "B-BBEE Level 2", width: 115, height: 115 },
  { src: "/images/top-logo2.png", alt: "Institute of Directors South Africa", width: 212, height: 97 },
  { src: "/images/top-logo3.png", alt: "SACMA", width: 242, height: 59 },
];

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.5 });

  return (
    <section ref={ref} className="bg-white py-10">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-10">
          {accreditations.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="max-h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
