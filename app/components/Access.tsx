import Image from "next/image";

const accessItems = [
  {
    icon: "/images/help-logo1.png",
    title: "Contracting Expertise & Mining Consultancy",
    description: "60 years of combined practical experience, as well as the insights gained from our industry networking, makes us the best consultants.",
  },
  {
    icon: "/images/help-logo2.svg",
    title: "Fine Coal & Pelletising Technology",
    description: "We've got our own technology and our connections within the industry give us access to fine coal stocks.",
  },
  {
    icon: "/images/help-logo3.svg",
    title: "Mining Project Management Skills",
    description: "Get expertise based on our extensive academic background, and the experience we gained assisting Eskom's cost-plus mines.",
  },
];

export default function Access() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url('/images/help-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px 0",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,255,255,0.95)" }}></div>

      <div className="container-custom relative" style={{ zIndex: 10 }}>
        <h2 className="section-title" style={{ marginBottom: "50px" }}>
          We&apos;ll Give You <span>Access To</span>
        </h2>

        <div className="grid md:grid-cols-3" style={{ gap: "30px", marginBottom: "60px" }}>
          {accessItems.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                padding: "35px 25px",
                boxShadow: "0 5px 25px rgba(0,0,0,0.08)",
                textAlign: "center",
                border: "1px solid #E5E7EB",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div style={{ width: "70px", height: "70px", margin: "0 auto 20px" }}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={70}
                  height={70}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  unoptimized
                />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1F2937", marginBottom: "12px", lineHeight: 1.4 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#4B5563", lineHeight: 1.7 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            backgroundColor: "#111827",
            borderRadius: "8px",
            padding: "40px 30px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", top: "15px", left: "25px" }}>
            <Image src="/images/quote-left.svg" alt="quote" width={30} height={30} unoptimized />
          </div>
          <blockquote
            style={{
              fontSize: "18px",
              color: "#FFFFFF",
              fontWeight: 500,
              lineHeight: 1.7,
              maxWidth: "800px",
              margin: "0 auto 15px",
              fontStyle: "italic",
            }}
          >
            There are no secrets to success. It is the result of preparation,
            hard work, and learning from failure.
          </blockquote>
          <cite style={{ color: "#F47C20", fontWeight: 600, fontStyle: "normal", fontSize: "15px" }}>
            Colin Powell
          </cite>
          <div style={{ position: "absolute", bottom: "15px", right: "25px" }}>
            <Image src="/images/quote-right.svg" alt="quote" width={30} height={30} unoptimized />
          </div>
        </div>
      </div>
    </section>
  );
}
