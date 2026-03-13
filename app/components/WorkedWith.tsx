"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const logos = [
  "/images/worked-logo1.png",
  "/images/worked-logo2.png",
  "/images/worked-logo3.png",
  "/images/worked-logo4.png",
  "/images/worked-logo5.png",
  "/images/worked-logo6.png",
  "/images/JAE-PNG-CHECK.png",
];

export default function WorkedWith() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="bg-white py-20 text-center">
      <div className="container-custom">
        <h2
          className={`section-title mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We&apos;ve <span>Worked</span> With
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`transition-all duration-500 hover:scale-110 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={100}
                height={50}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
