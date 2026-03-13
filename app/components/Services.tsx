"use client";

import { Leaf, Truck, TrendingUp, HardHat } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  {
    icon: Leaf,
    title: "Rehabilitation",
    description: "We are fully equipped to carry out mine rehabilitation as an essential part of the mining process, restoring land to its natural state.",
  },
  {
    icon: Truck,
    title: "Dry Bulk Commodity Transportation & Material Handling",
    description: "Our association with the biggest coal transporters gives us experience in transporting bulk commodities, as well as crushing, screening and conveying.",
  },
  {
    icon: TrendingUp,
    title: "Commodity Trading",
    description: "Strong capabilities in commodity trading with deep expertise in market analysis, contract structuring, and risk management across the coal value chain.",
  },
  {
    icon: HardHat,
    title: "Mining",
    description: "Actively pursuing our own permits, prospecting rights, and mining rights as part of our strategic growth in the sector.",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="services"
      className="section-spacing bg-white"
    >
      <div className="container-custom">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title">
            Our <span>Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive mining solutions tailored to support the junior mining sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card group flex gap-6 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center text-[#D4A84B] transition-all duration-300 group-hover:bg-[#D4A84B] group-hover:text-white group-hover:scale-110">
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#D4A84B] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#525252] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
