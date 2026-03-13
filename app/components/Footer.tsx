"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { name: "Vision", href: "#vision" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1128]">
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.png"
              alt="Siko Mining Logo"
              width={150}
              height={60}
              className="h-auto w-[130px]"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Supporting the junior mining sector with accessible & sustainable mining services that guarantee success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F47C20] font-semibold uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-[#F47C20] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#F47C20] font-semibold uppercase tracking-wide mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@sikomining.co.za"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#F47C20] transition-colors duration-300"
              >
                <Mail size={16} className="text-[#F47C20]" />
                info@sikomining.co.za
              </a>
              <a
                href="tel:+27123456789"
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#F47C20] transition-colors duration-300"
              >
                <Phone size={16} className="text-[#F47C20]" />
                +27 12 345 6789
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#F47C20] flex-shrink-0 mt-0.5" />
                <span>Mpumalanga, South Africa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Copyright {new Date().getFullYear()} All Rights Reserved, Siko Mining Services (Pty) Ltd.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Level 2</span>
              <span className="w-1 h-1 rounded-full bg-[#F47C20]" />
              <span className="text-[#F47C20] font-medium">BBBEE Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
