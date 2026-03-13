"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const accessItems = [
  {
    icon: "/images/help-logo1.png",
    title: "Contracting Expertise & Mining Consultancy",
    description: "60 years of combined practical experience, as well as the insights gained from our industry networking, makes us the best consultants.",
  },
  {
    icon: "/images/help-logo2.svg",
    title: "Fine Coal & Pelletising Technology",
    description: "We've got our own technology and our connections within the industry give us access to fine coal stocks.",
  },
  {
    icon: "/images/help-logo3.svg",
    title: "Mining Project Management Skills",
    description: "Get expertise based on our extensive academic background, and the experience we gained assisting Eskom's cost-plus mines.",
  },
];

export default function Access() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/images/help-bg.png')" }}
    >
      <div className="absolute inset-0 bg-white/95" />

      <div className="container-custom relative z-10">
        <h2
          className={`section-title mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We&apos;ll Give You <span>Access To</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {accessItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-lg border border-gray-100 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#F47C20]/30 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="w-20 h-20 mx-auto mb-5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={70}
                  height={70}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight group-hover:text-[#F47C20] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`bg-gray-900 rounded-lg p-10 text-center relative overflow-hidden transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="absolute top-4 left-6 opacity-50">
            <Image src="/images/quote-left.svg" alt="quote" width={30} height={30} />
          </div>
          <blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed max-w-3xl mx-auto mb-4 italic">
            There are no secrets to success. It is the result of preparation,
            hard work, and learning from failure.
          </blockquote>
          <cite className="text-[#F47C20] font-semibold text-base not-italic">
            Colin Powell
          </cite>
          <div className="absolute bottom-4 right-6 opacity-50">
            <Image src="/images/quote-right.svg" alt="quote" width={30} height={30} />
          </div>
        </div>
      </div>
    </section>
  );
}
