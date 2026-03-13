"use client";

import { useState } from "react";
import Image from "next/image";
import { teamMembers } from "../lib/data/teamData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ChevronDown, ChevronUp } from "lucide-react";

function TeamCard({ 
  member, 
  index 
}: { 
  member: typeof teamMembers[0]; 
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`card group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Photo */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-gray-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            member.name.includes("Mzoxolo") ? "object-top" : "object-center"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
      </div>

      {/* Info */}
      <p className="text-[#D4A84B] font-semibold text-sm uppercase tracking-wide mb-1">
        {member.role}
      </p>
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
        {member.name}
      </h3>
      <p className="text-[#525252] text-sm leading-relaxed mb-4">
        {member.shortBio}
      </p>

      {/* Expandable bio */}
      <div className={`grid transition-all duration-500 ease-in-out ${
        expanded ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0 mb-0"
      }`}>
        <div className="overflow-hidden">
          {member.fullBio.map((paragraph, idx) => (
            <p key={idx} className="text-[#525252] text-sm leading-relaxed mb-3 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1 text-[#D4A84B] font-semibold text-sm hover:text-[#B8923F] transition-colors duration-300"
      >
        {expanded ? (
          <>
            Read Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Read More <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}

export default function Team() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="team"
      className="section-spacing bg-[#F5F5F5]"
    >
      <div className="container-custom">
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title">
            Meet The <span>Team</span>
          </h2>
          <p className="section-subtitle">
            Leadership with decades of combined experience in the mining industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
