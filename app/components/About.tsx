import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#FAFAFA", padding: "80px 0" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: "40px" }}>
          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#1F2937", marginBottom: "20px" }}>
              Who are <span style={{ color: "#F47C20" }}>We?</span>
            </h2>
            <div style={{ color: "#4B5563", fontSize: "15px", lineHeight: 1.8 }}>
              <p style={{ marginBottom: "15px" }}>
                Siko Mining Services Pty Ltd (&quot;SMS&quot;) is a level 2 
                BBBEE-compliant mining entity.
              </p>
              <p style={{ marginBottom: "25px" }}>
                With over 60 years of experience in the mining sector, SMS has 
                identified major gaps over the years, particularly within the 
                Junior Mining sector.
              </p>
            </div>
            <Link href="#contact" className="btn-secondary">
              Read More
            </Link>
          </div>

          <div className="relative">
            <Image
              src="/images/we-img.jpg"
              alt="About Siko Mining"
              width={600}
              height={400}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              }}
              unoptimized
            />
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "-10px",
                width: "100%",
                height: "100%",
                border: "3px solid #F47C20",
                borderRadius: "8px",
                zIndex: -1,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
