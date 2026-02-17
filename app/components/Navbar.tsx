"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Vision", href: "#vision" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "The Team", href: "#team" },
  { name: "Media", href: "#media" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Using the brand Goldenrod for the primary accent
  const brandGold = "#DAA520";

  return (
    <header style={{ backgroundColor: "#1B2A41", position: "sticky", top: 0, zIndex: 50, borderBottom: `2px solid ${brandGold}` }}>
      <div className="container-custom">
        <nav className="flex items-center justify-between" style={{ padding: "15px 0" }}>
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Siko Mining Logo"
              width={150}
              height={60}
              className="h-auto"
              style={{ width: "130px" }}
              unoptimized
            />
          </Link>

          <div className="hidden lg:flex items-center" style={{ gap: "30px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  color: hoveredLink === link.name ? "#FFFFFF" : brandGold,
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            style={{ color: brandGold, background: "none", border: "none", cursor: "pointer" }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </nav>

        {isOpen && (
          <div className="lg:hidden" style={{ paddingBottom: "15px" }}>
            <div className="flex flex-col" style={{ gap: "15px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: brandGold,
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    padding: "5px 0",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}