"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Shield } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Media", href: "#media" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F]">
      {/* Main Footer Content */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Siko Mining Logo"
              width={150}
              height={60}
              className="h-auto w-[140px] brightness-0 invert mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering the junior mining sector with accessible, sustainable mining services that guarantee operational success.
            </p>
            {/* BBBEE Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-[#D4A84B]/10 rounded-lg border border-[#D4A84B]/20">
              <Shield className="w-6 h-6 text-[#D4A84B]" />
              <div>
                <p className="text-xs text-gray-400">Certified</p>
                <p className="text-sm font-semibold text-[#D4A84B]">Level 2 BBBEE</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-[#D4A84B] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Our Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-gray-400 text-sm">Rehabilitation</span>
              <span className="text-gray-400 text-sm">Transportation & Handling</span>
              <span className="text-gray-400 text-sm">Commodity Trading</span>
              <span className="text-gray-400 text-sm">Mining Operations</span>
              <span className="text-gray-400 text-sm">Consultancy</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@sikomining.co.za"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#D4A84B] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#D4A84B]/10 transition-colors duration-300">
                  <Mail size={18} className="text-[#D4A84B]" />
                </div>
                info@sikomining.co.za
              </a>
              <a
                href="tel:+27130000000"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#D4A84B] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#D4A84B]/10 transition-colors duration-300">
                  <Phone size={18} className="text-[#D4A84B]" />
                </div>
                +27 (0) 13 XXX XXXX
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#D4A84B]" />
                </div>
                <span className="pt-2">
                  210 Pilgrims Rest, Reedstream Park,<br />
                  Rietspruit, Mpumalanga 2231
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              {new Date().getFullYear()} Siko Mining Services (Pty) Ltd. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed with purpose for the mining industry
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
