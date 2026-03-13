"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Mission() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="vision" className="bg-white py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group">
              <Image
                src="/images/mission-img.jpg"
                alt="Mining mission"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-3 -left-3 w-full h-full border-[3px] border-[#F47C20] rounded-lg -z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Mission & <span className="text-[#F47C20]">Vision</span>
            </h2>
            <div className="text-gray-600 text-base leading-relaxed space-y-4">
              <p>
                Our purpose is to facilitate the junior mining sector&apos;s growth, 
                and to be leaders in supporting its total mining value chain, 
                providing easy access to quality services it normally has difficulty accessing.
              </p>
              <p>
                Through partnerships with experienced companies and individuals, 
                as well as the valuable skills we have amassed over 60 years, 
                we have identified and filled the gaps that stifle the junior mining sector&apos;s progress. 
                Siko Mining will provide what is needed to achieve sustainable success 
                in this sector, in turn uplifting the lives of those involved and 
                the communities around them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
