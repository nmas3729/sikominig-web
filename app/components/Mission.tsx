"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Target, Eye } from "lucide-react";

export default function Mission() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="vision" className="section-spacing bg-white">
      <div className="container-custom">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title">
            Mission & <span>Vision</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div
            className={`card border-l-4 border-l-[#D4A84B] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-[#D4A84B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Our Mission</h3>
            </div>
            <p className="text-[#525252] leading-relaxed text-lg">
              To facilitate the junior mining sector&apos;s growth and to be leaders in 
              supporting its total mining value chain, providing easy access to quality 
              services it normally has difficulty accessing.
            </p>
          </div>

          {/* Vision */}
          <div
            className={`card border-l-4 border-l-[#D4A84B] transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center">
                <Eye className="w-7 h-7 text-[#D4A84B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A]">Our Vision</h3>
            </div>
            <p className="text-[#525252] leading-relaxed text-lg">
              Through partnerships with experienced companies and individuals, we have 
              identified and filled the gaps that stifle the junior mining sector&apos;s 
              progress, uplifting the lives of those involved and the communities around them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
