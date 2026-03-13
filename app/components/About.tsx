"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowRight, Shield, Clock } from "lucide-react";

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="about" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group">
              <Image
                src="/images/we-img.jpg"
                alt="About Siko Mining Services"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#D4A84B] rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              
              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-[#D4A84B] text-[#1A1A1A] rounded-xl p-4 shadow-lg">
                <p className="text-3xl font-bold">60+</p>
                <p className="text-sm font-medium">Years Combined Experience</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-sm uppercase tracking-widest text-[#D4A84B] font-semibold mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Who is <span className="text-[#D4A84B]">Siko Mining Services?</span>
            </h2>
            
            <div className="text-[#525252] text-lg leading-relaxed space-y-4 mb-8">
              <p>
                Siko Mining Services Pty Ltd (&quot;SMS&quot;) is a Level 2 BBBEE-compliant 
                mining entity dedicated to supporting and empowering the junior mining sector 
                across South Africa.
              </p>
              <p>
                With over 60 years of combined experience in the mining sector, SMS has 
                identified major gaps over the years, particularly within the Junior Mining 
                sector, and has positioned itself to bridge these gaps with innovative solutions.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#D4A84B]" />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A]">Level 2</p>
                  <p className="text-sm text-[#525252]">BBBEE Compliant</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#D4A84B]" />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A]">33+ Years</p>
                  <p className="text-sm text-[#525252]">Industry Experience</p>
                </div>
              </div>
            </div>

            <Link 
              href="#contact" 
              className="inline-flex items-center gap-2 text-[#D4A84B] font-semibold hover:gap-3 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
