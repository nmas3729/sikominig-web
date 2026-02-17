import Link from "next/link";

const footerLinks = [
  { name: "Vision", href: "#vision" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111827" }}>
      <div style={{ borderBottom: "1px solid #1F2937", padding: "20px 0" }}>
        <div className="container-custom">
          <nav className="flex flex-wrap justify-center" style={{ gap: "25px" }}>
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  color: "#E5E7EB",
                  textDecoration: "none",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div style={{ padding: "20px 0" }}>
        <div className="container-custom" style={{ textAlign: "center" }}>
          <p style={{ color: "#6B7280", fontSize: "13px" }}>
            Copyright © {new Date().getFullYear()} All Rights Reserved, 
            Siko Mining Services (Pty) Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
