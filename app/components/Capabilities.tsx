"use client";

import { Wrench, Cpu, ClipboardList } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Wrench,
    title: "Contracting Expertise & Mining Consultancy",
    description: "Expert advisory services and contract mining solutions tailored to the unique needs of junior mining operations.",
  },
  {
    icon: Cpu,
    title: "Fine Coal & Pelletising Technology",
    description: "Advanced coal processing and pelletising technologies that maximize resource extraction and operational efficiency.",
  },
  {
    icon: ClipboardList,
    title: "Mining Project Management Skills",
    description: "Comprehensive project management from feasibility studies through to full-scale mining operations.",
  },
];

export default function Capabilities() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section-spacing bg-[#F5F5F5]">
      <div className="container-custom">
        <div
          ref={ref}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title">
            Core <span>Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Leveraging decades of industry experience to deliver comprehensive mining solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.title}
                className={`card group text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4A84B]/10 text-[#D4A84B] mb-6 transition-all duration-300 group-hover:bg-[#D4A84B] group-hover:text-white group-hover:scale-110">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 leading-snug">
                  {capability.title}
                </h3>
                <p className="text-[#525252] leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
