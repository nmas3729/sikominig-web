"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative" style={{ padding: "80px 0" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          transform: "rotate(180deg)",
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "60px", display: "block" }}
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            style={{ fill: "#F47C20" }}
          />
        </svg>
      </div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/footer-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(17,24,39,0.92)" }}></div>

      <div className="container-custom relative" style={{ zIndex: 10 }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "50px",
            color: "#FFFFFF",
          }}
        >
          Get in Touch <span style={{ color: "#F47C20" }}>With Us!</span>
        </h2>

        <div className="grid lg:grid-cols-2" style={{ gap: "40px" }}>
          <div style={{ backgroundColor: "rgba(31,41,55,0.8)", borderRadius: "8px", padding: "30px" }}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  borderRadius: "4px",
                  backgroundColor: "#111827",
                  border: "1px solid #374151",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  marginBottom: "15px",
                  outline: "none",
                }}
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  borderRadius: "4px",
                  backgroundColor: "#111827",
                  border: "1px solid #374151",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  marginBottom: "15px",
                  outline: "none",
                }}
              />
              <textarea
                placeholder="Message..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  borderRadius: "4px",
                  backgroundColor: "#111827",
                  border: "1px solid #374151",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  marginBottom: "20px",
                  outline: "none",
                  resize: "none",
                }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{ width: "auto", opacity: isSubmitting ? 0.5 : 1 }}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          <div>
            <p style={{ color: "#E5E7EB", fontSize: "15px", lineHeight: 1.7, marginBottom: "30px" }}>
              Fill in your details below to schedule a free consultation to discuss a strategy forward.
            </p>

            <div style={{ marginBottom: "25px" }}>
              <h4 style={{ color: "#F47C20", fontWeight: 600, fontSize: "16px", marginBottom: "5px" }}>Mail Us</h4>
              <a href="mailto:info@sikomining.co.za" style={{ color: "#E5E7EB", textDecoration: "none", fontSize: "14px" }}>
                info@sikomining.co.za
              </a>
            </div>


            <div>
              <h4 style={{ color: "#F47C20", fontWeight: 600, fontSize: "16px", marginBottom: "5px" }}>Location</h4>
              <p style={{ color: "#E5E7EB", fontSize: "14px", lineHeight: 1.7 }}>
                210 Pilgrims Rest, Reedstream Park,<br />
                Rietspruit, Mpumalanga, South Africa 2231
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
