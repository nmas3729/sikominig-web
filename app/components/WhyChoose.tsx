"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Clock, Shield, Users, Gem, Truck, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "60+ Years Combined Mining Experience",
    description: "Decades of hands-on expertise across diverse mining operations",
  },
  {
    icon: Shield,
    title: "Level 2 BBBEE Compliant",
    description: "Committed to transformation and empowerment in the sector",
  },
  {
    icon: Users,
    title: "Strong Industry Partnerships",
    description: "Established relationships with key players across the value chain",
  },
  {
    icon: Gem,
    title: "Specialized Junior Mining Support",
    description: "Tailored solutions for emerging and junior mining operations",
  },
  {
    icon: Truck,
    title: "Proven Coal Logistics & Handling",
    description: "Expert handling of dry bulk commodities and transportation",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Service Delivery",
    description: "Comprehensive support from planning through to execution",
  },
];

export default function WhyChoose() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="section-spacing bg-[#1A1A1A]">
      <div className="container-custom">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Why Choose <span className="text-[#D4A84B]">Siko Mining</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Trusted by mining operations across South Africa for our expertise, reliability, and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`group flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#D4A84B]/30 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center group-hover:bg-[#D4A84B]/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#D4A84B]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#D4A84B] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
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
