"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  {
    icon: "/images/services-logo4.png",
    title: "Rehabilitation",
    description: "We are fully equipped to carry out mine rehabilitation as an essential part of the mining process.",
  },
  {
    icon: "/images/services-logo1.png",
    title: "Dry Bulk Commodity Transportation & Material",
    description: "Our association with the biggest coal transporters, Eskom, gives us experience in transporting bulk commodities, as well as handling material, e.g. crushing, screening and conveying.",
  },
  {
    icon: "/images/services-logo3.png",
    title: "Commodity Trading",
    description: "We have strong capabilities in commodity trading, with a particular focus on coal. Our team brings deep expertise in market analysis, contract structuring, and risk management across the coal value chain.",
  },
  {
    icon: "/images/services-logo3.png",
    title: "Mining",
    description: "We are actively pursuing our own permits, prospecting rights, and mining rights as part of our strategic growth in the sector.",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="services"
      className="bg-gray-50 py-20"
    >
      <div className="container-custom">
        <h2
          className={`section-title mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our <span>Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-lg border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#F47C20]/30 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="w-16 h-16 mb-5 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#F47C20]/10 transition-colors duration-300">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-3 leading-tight group-hover:text-[#F47C20] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
