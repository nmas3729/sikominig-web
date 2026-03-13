"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { Weight, Gauge, Star, Calendar } from "lucide-react";

const stats = [
  { 
    icon: Weight,
    value: "+3MT", 
    label: "Tons of Coal Moved", 
    numericValue: 3 
  },
  { 
    icon: Gauge,
    value: "90%", 
    label: "Output Efficiency", 
    numericValue: 90 
  },
  { 
    icon: Star,
    value: "10/10", 
    label: "Client Satisfaction", 
    numericValue: 10 
  },
  { 
    icon: Calendar,
    value: "+33", 
    label: "Years in the Business", 
    numericValue: 33 
  },
];

function AnimatedCounter({ 
  value, 
  numericValue, 
  isVisible 
}: { 
  value: string; 
  numericValue: number; 
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.round(increment * currentStep), numericValue));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isVisible, numericValue]);
  
  const displayValue = () => {
    if (value.includes("MT")) return `+${count}MT`;
    if (value.includes("%")) return `${count}%`;
    if (value.includes("/")) return `${count}/10`;
    if (value.startsWith("+")) return `+${count}`;
    return count.toString();
  };
  
  return <span>{displayValue()}</span>;
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="section-spacing bg-[#1A1A1A] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A84B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#D4A84B]">Track Record</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that demonstrate our commitment to excellence in mining services
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`card-dark text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#D4A84B]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#D4A84B]" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D4A84B] mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    numericValue={stat.numericValue} 
                    isVisible={isVisible} 
                  />
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
