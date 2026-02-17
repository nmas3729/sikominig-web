import Image from "next/image";

const services = [
  {
    icon: "/images/services-logo4.png",
    title: "Rehabilitation",
    description: "We are fully equipped to carry out mine rehabilitation as an essential part of the mining process.",
  },
  {
    icon: "/images/services-logo1.png",
    title: "Dry Bulk Commodity Transportation & Material",
    description: "Our association with the biggest coal transporters, Eskom, gives us experience in transporting bulk commodities, as well as handling material, e.g. crushing, screening and conveying.",
  },
  {
    icon: "/images/services-logo3.png",
    title: "Commodity Trading",
    description: "We have strong capabilities in commodity trading, with a particular focus on coal. Our team brings deep expertise in market analysis, contract structuring, and risk management across the coal value chain.",
  },
  {
    icon: "/images/services-logo3.png",
    title: "Mining",
    description: "We are actively pursuing our own permits, prospecting rights, and mining rights as part of our strategic growth in the sector.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#FAFAFA", padding: "80px 0" }}>
      <div className="container-custom">
        <h2 className="section-title" style={{ marginBottom: "50px" }}>
          Our <span>Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: "25px" }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                padding: "30px 20px",
                boxShadow: "0 5px 25px rgba(0,0,0,0.08)",
                border: "1px solid #E5E7EB",
                transition: "transform 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F3F4F6",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  style={{ width: "35px", height: "35px", objectFit: "contain" }}
                  unoptimized
                />
              </div>
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1F2937", marginBottom: "10px", lineHeight: 1.4 }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: 1.7 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
