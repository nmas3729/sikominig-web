"use client";

import { useState } from "react";
import Image from "next/image";
import { teamMembers } from "../lib/data/teamData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function TeamMember({ 
  member, 
  isReversed, 
  index 
}: { 
  member: typeof teamMembers[0]; 
  isReversed: boolean; 
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 items-center gap-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Column */}
      <div className={isReversed ? "lg:order-2" : ""}>
        <div className={`relative max-w-[400px] mx-auto lg:mx-0 ${isReversed ? 'lg:mr-auto' : 'lg:ml-auto'} group`}>
          <div
            className="relative z-10 w-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className={`object-cover ${member.name.includes("Mzoxolo") ? "object-top" : "object-center"}`}
            />
          </div>

          {/* Decorative outline offset */}
          <div
            className={`absolute -bottom-3 ${isReversed ? '-right-3' : '-left-3'} w-full h-full border-[3px] border-[#F47C20] rounded-2xl z-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1`}
          />
        </div>
      </div>

      {/* Text Column */}
      <div className={isReversed ? "lg:order-1" : ""}>
        <p className="text-[#F47C20] font-semibold text-sm mb-1.5 uppercase tracking-wide">
          {member.role}
        </p>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          {member.name}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          {member.shortBio}
        </p>

        <div className={`grid transition-all duration-500 ease-in-out ${expanded ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0 mb-0"}`}>
          <div className="overflow-hidden">
            {member.fullBio.map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 text-base leading-relaxed mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#F47C20] font-semibold text-sm hover:text-[#E86F1A] transition-colors duration-300 underline underline-offset-4 decoration-2 decoration-[#F47C20]/40 hover:decoration-[#E86F1A]"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default function Team() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="team"
      className="relative bg-cover bg-center pt-20 lg:pt-24 pb-64"
      style={{ backgroundImage: "url('/images/team-sec-bg.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/95" />

      <div className="container-custom relative z-10 w-full">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title !mb-0">
            Meet The <span>Team</span>
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-20 mt-16">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              member={member}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
