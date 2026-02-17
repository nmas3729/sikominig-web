import Image from "next/image";

export default function Mission() {
  return (
    <section id="vision" style={{ backgroundColor: "#FFFFFF", padding: "80px 0" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: "40px" }}>
          <div className="relative">
            <Image
              src="/images/mission-img.jpg"
              alt="Mining mission"
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
                left: "-10px",
                width: "100%",
                height: "100%",
                border: "3px solid #F47C20",
                borderRadius: "8px",
                zIndex: -1,
              }}
            ></div>
          </div>

          <div>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#1F2937", marginBottom: "20px" }}>
              Our Mission &amp; <span style={{ color: "#F47C20" }}>Vision</span>
            </h2>
            <div style={{ color: "#4B5563", fontSize: "15px", lineHeight: 1.8 }}>
              <p style={{ marginBottom: "15px" }}>
                Our purpose is to facilitate the junior mining sector&apos;s growth, 
                and to be leaders in supporting its total mining value chain, 
                providing easy access to quality services it normally has difficulty accessing.
              </p>
              <p>
                Through partnerships with experienced companies and individuals, 
                as well as the valuable skills we have amassed over 60 years, 
                we have identified and filled the gaps that stifle the junior mining sector&apos;s progress. 
                Siko Mining will provide what is needed to achieve sustainable success 
                in this sector, in turn uplifting the lives of those involved and 
                the communities around them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
