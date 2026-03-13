import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const badges = [
  { name: "B-BBEE Level 2", src: "/images/bbbee-badge.png" },
  { name: "Institute of Directors SA", src: "/images/iodsa-badge.png" },
  { name: "SACMA Member", src: "/images/sacma-badge.png" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner-img.jpg"
          alt="Mining operations background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/50" />
      </div>

      {/* Decorative gold accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#D4A84B] to-transparent opacity-60" />

      <div className="container-custom relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <Image
              src="/images/logo.png"
              alt="Siko Mining Services"
              width={180}
              height={60}
              className="h-14 w-auto brightness-0 invert"
            />
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: '150ms' }}
          >
            Empowering The{" "}
            <span className="text-[#D4A84B]">Junior Mining</span> Sector
          </h1>

          {/* Supporting paragraph */}
          <p 
            className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            Unlocking your mine&apos;s full potential with accessible, sustainable, and highly 
            specialized services that guarantee long-term operational success across South Africa.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-start gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: '450ms' }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4A84B] text-[#1A1A1A] font-semibold rounded-lg transition-all duration-300 hover:bg-[#E8C872] hover:shadow-[0_8px_30px_rgba(212,168,75,0.4)] hover:-translate-y-1"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-[#D4A84B]/50 transition-all duration-300 hover:border-[#D4A84B] hover:bg-[#D4A84B]/10"
            >
              Explore Services
            </Link>
          </div>

          {/* Industry Badges */}
          <div 
            className="animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Accreditations & Memberships</p>
            <div className="flex flex-wrap items-center gap-6">
              {badges.map((badge) => (
                <div 
                  key={badge.name}
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-[#D4A84B] text-xs font-bold">
                      {badge.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#D4A84B] rounded-full" />
        </div>
      </div>
    </section>
  );
}
