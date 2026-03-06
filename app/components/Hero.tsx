import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A1128] pt-24 pb-32 lg:pt-32 lg:pb-40"
    >
      {/* Background ambient glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#F47C20]/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#0F2046] blur-[100px] mix-blend-screen" />

      {/* Noise texture overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT: Text Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
              <span className="flex h-2 w-2 rounded-full bg-[#F47C20] animate-pulse" />
              <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Leading Junior Mining Support</span>
            </div>

            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
              Empowering The <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47C20] to-[#FFB067]">
                Junior Mining
              </span> Sector
            </h1>

            <p className="font-poppins text-lg text-gray-400 leading-relaxed mb-10 max-w-[540px] animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
              Unlocking your mine's full potential with accessible, sustainable, and highly specialized services that guarantee long-term operational success.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '700ms', animationFillMode: 'both' }}>
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F47C20] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#E86F1A] hover:shadow-[0_0_30px_rgba(244,124,32,0.4)] hover:-translate-y-1 w-full sm:w-auto"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/5 hover:border-white/40 w-full sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* RIGHT: Floating Image Showcase */}
          <div className="relative w-full max-w-[600px] ml-auto mt-12 lg:mt-0 animate-fade-in-up" style={{ animationDelay: '900ms', animationFillMode: 'both' }}>

            {/* Glowing backdrop shadow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F47C20]/40 to-transparent blur-[60px] transform scale-90 translate-y-4" />

            <div className="relative z-10 animate-float">
              {/* Glassmorphism decorative card behind image */}
              <div className="absolute -inset-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl transform rotate-3 transition-transform duration-700 hover:rotate-6 hidden sm:block" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F172A]">
                {/* Overlay gradient over image for better text contrast if needed, or just premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent z-10 pointer-events-none" />

                <Image
                  src="/images/banner-img.jpg"
                  alt="Modern mining operations"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Decorative floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl z-20 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F47C20]/20 flex items-center justify-center border border-[#F47C20]/30">
                    <span className="text-[#F47C20] font-bold text-xl">60+</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Years Combined</p>
                    <p className="text-gray-400 text-xs">Industry Experience</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

