import Image from "next/image";

const videos = [
  { src: "/images/Mining.mp4", title: "Mining Operations" },
  { src: "/images/WhatsApp Video 2025-06-20 at 4.14.30 PM.mp4", title: "Our Technology" },
  { src: "/images/WhatsApp Video 2025-07-12 at 3.02.25 PM.mp4", title: "Field Work" },
];

const galleryImages = [
  { src: "/images/WhatsApp Image 2025-07-02 at 4.34.49 PM.jpeg", title: "Siko Mining Team" },
  { src: "/images/WhatsApp Image 2025-07-04 at 1.00.16 PM.jpeg", title: "Mining Operations" },
];

export default function Media() {
  return (
    <section id="media" style={{ backgroundColor: "#F3F4F6", padding: "80px 0" }}>
      <div className="container-custom">
        <h2 className="section-title" style={{ marginBottom: "15px" }}>
          Our <span>Media</span>
        </h2>
        <p style={{ textAlign: "center", marginBottom: "50px", color: "#6B7280", fontSize: "15px" }}>
          See our work in action through videos and images from our operations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "20px", marginBottom: "60px" }}>
          {videos.map((video, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#2C3440",
                borderRadius: "12px",
                padding: "10px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <video
                controls
                muted
                loop
                playsInline
                style={{ width: "100%", borderRadius: "8px", display: "block" }}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        <h3 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 700, color: "#1F2937", marginBottom: "30px" }}>
          Our Gallery
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "20px" }}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#2C3440",
                borderRadius: "12px",
                padding: "10px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={400}
                height={300}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
