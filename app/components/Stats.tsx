const stats = [
  { value: "+/-1MT", label: "Tons of Coal Moved" },
  { value: "90%", label: "Output Efficiency" },
  { value: "10/10", label: "Client Satisfaction" },
  { value: "+90", label: "Years in the Business" },
];

export default function Stats() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url('/images/stats-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "70px 0",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(17,24,39,0.9)" }}></div>

      <div className="container-custom relative" style={{ zIndex: 10 }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "40px",
            color: "#FFFFFF",
          }}
        >
          Our <span style={{ color: "#F47C20" }}>Stats</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "30px" }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 800,
                  color: "#F47C20",
                  marginBottom: "8px",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "14px", color: "#E5E7EB", fontWeight: 400 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
