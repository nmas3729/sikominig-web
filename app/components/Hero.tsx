import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        // Using original curved background image
        backgroundImage: "url('/images/banner-bg-img.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        // Widen curve scale slightly to reduce compression look
        backgroundSize: "120% 100%", 
        // Increased vertical padding for taller hero section
        paddingTop: "180px",
        paddingBottom: "200px",
      }}
    >
      <div className="container-custom">
        <div
          className="grid lg:grid-cols-2 items-center"
          style={{ columnGap: "60px" }}
        >
          {/* LEFT: Text block - moved down slightly */}
          <div style={{ paddingLeft: "30px", paddingTop: "40px" }}>
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 700,
                color: "#1F2937",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              We Support The{" "}
              <span style={{ color: "#F47C20" }}>Junior Mining</span> Sector
            </h1>

            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "#4B5563",
                lineHeight: 1.6,
                marginBottom: "35px",
                maxWidth: "500px",
              }}
            >
              With accessible &amp; sustainable mining services that guarantee
              success.
            </p>

            <Link href="#contact" className="btn-primary">
              Contact
            </Link>
          </div>

          {/* RIGHT: Hero image + shadow frame */}
          <div
            className="relative"
            style={{ maxWidth: "540px", marginLeft: "auto" }}
          >
            {/* Foreground hero image */}
            <div className="relative" style={{ zIndex: 2 }}>
              <Image
                src="/images/banner-img.jpg"
                alt="Mining operations"
                width={540}
                height={380}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                priority
                unoptimized
              />
            </div>

            {/* Shadow/frame layer - moved significantly lower/right */}
            <div
              style={{
                position: "absolute",
                bottom: "-45px",
                right: "-45px",
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/banner-img-shadow.png"
                alt=""
                width={540}
                height={380}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
