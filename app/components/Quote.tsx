"use client";

import { Quote as QuoteIcon } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Quote() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-20 lg:py-28 bg-[#1A1A1A] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent opacity-40" />
      
      <div className="container-custom">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <QuoteIcon className="w-12 h-12 text-[#D4A84B] mx-auto mb-8 opacity-60" />
          
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8 italic">
            &ldquo;There are no secrets to success. It is the result of preparation, hard work, and learning from failure.&rdquo;
          </blockquote>
          
          <cite className="text-[#D4A84B] font-semibold text-lg not-italic">
            — Colin Powell
          </cite>
        </div>
      </div>
    </section>
  );
}
