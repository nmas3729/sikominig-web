"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
  { value: "+3MT", label: "Tons of Coal Moved", numericValue: 3 },
  { value: "90%", label: "Output Efficiency", numericValue: 90 },
  { value: "10/10", label: "Client Satisfaction", numericValue: 10 },
  { value: "+33", label: "Years in the Business", numericValue: 33 },
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
  
  // Format the displayed value based on the original format
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
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/images/stats-bg.png')" }}
    >
      <div className="absolute inset-0 bg-gray-900/90" />

      <div className="container-custom relative z-10">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-white transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our <span className="text-[#F47C20]">Stats</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F47C20] mb-2 leading-none">
                <AnimatedCounter 
                  value={stat.value} 
                  numericValue={stat.numericValue} 
                  isVisible={isVisible} 
                />
              </div>
              <div className="text-sm text-gray-300 font-normal">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
