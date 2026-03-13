"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="about" className="bg-gray-50 py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Who are <span className="text-[#F47C20]">We?</span>
            </h2>
            <div className="text-gray-600 text-base leading-relaxed space-y-4 mb-8">
              <p>
                Siko Mining Services Pty Ltd (&quot;SMS&quot;) is a level 2 
                BBBEE-compliant mining entity.
              </p>
              <p>
                With over 60 years of experience in the mining sector, SMS has 
                identified major gaps over the years, particularly within the 
                Junior Mining sector.
              </p>
            </div>
            <Link href="#contact" className="btn-secondary">
              Read More
            </Link>
          </div>

          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative group">
              <Image
                src="/images/we-img.jpg"
                alt="About Siko Mining"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full border-[3px] border-[#F47C20] rounded-lg -z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
