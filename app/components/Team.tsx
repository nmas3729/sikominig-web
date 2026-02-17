"use client";

import { useState } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Bonani Siko",
    role: "CEO / Executive Director",
    image: "/images/team-img2.jpg",
    shortBio: "Bonani Siko is a qualified Mining Engineer with a National Diploma in Coal Mining, a National Higher Diploma in Coal Mining, a B-Tech in Mining Engineering at the University of Johannesburg (UJ), as well as a certificate from an executive development program with the University of Cape Town (UCT). He further has a mine managers certificate of competency with South Africas Department of Mining Resources (DMR).",
    fullBio: [
      "He is currently a director at Siko Mining Services (SMS), and has been a general manager at Wescoal Holdings Pty Ltd, heading their mining operations (appointed under Section 4.1 of the Mine Health and Safety Act) for almost 4 years. Aside from the general manager role, Bonani also served as a director at Wescoal Mining Pty Ltd and Aztolinx Pty Ltd.",
      "Bonani has extensive experience in the coal mining space and mining in general. He had the opportunity to complete the total coal mining value chain through Eskoms primary energy division, a role he served as their Senior Manager of Coal Operations, in support of coal supply agreements between Eskoms coal-fired power stations, and the mining houses. Additionally, Bonani acted as Divisional Executive at Eskoms primary energy division, and CEO at Wescoal Mining.",
      "Bonani is an active member of the South African Colliery Managers Association (SACMA), and the Institute of Directors Southern Africa (IoDSA). He has more than 30 years experience in the mining industry.",
    ],
  },
  {
    name: "Lusito Mthethwa",
    role: "Finance Director",
    image: "/images/lusito.jpeg",
    shortBio: "Lusito Mthethwa is the Finance Director at Siko Mining and Founder and CEO at Dispersive Consulting, specializing in Accounting, Tax, and Advisory services.",
    fullBio: [
      "He is a Certified Business Accountant in Practice (SA) through CIBA, bringing deep expertise in business accounting and financial management.",
      "Lusito is a registered General Tax Practitioner (SA) with SAIT, providing comprehensive tax planning and compliance services.",
      "He also holds certification as a Certified Labour Practitioner through the Department of Labour, giving him a well-rounded understanding of business operations, compliance, and workforce regulations.",
    ],
  },
  {
    name: "Mzoxolo Beqezi",
    role: "Technology Consultant",
    image: "/images/mzoxolo.png",
    shortBio: "Mzoxolo Beqezi brings over 20 years of experience in Information Technology, including 12 years dedicated to Mining IT. He is the founder of NMAS INNOVATIONS (Pty) Ltd, a certified AWS and Azure specialist, a skilled Linux Administrator, and holds additional credentials in ITIL, cybersecurity, and cloud architecture.",
    fullBio: [
      "His expertise covers systems implementation, infrastructure design, network management, and IT governance across complex industrial and mining environments.",
      "Throughout his career, Mzoxolo has provided IT support and consulting services to several major corporations, including Anglo American, Thungela Resources, Transnet, and Barclays Africa, gaining valuable insight into diverse operational environments and large-scale IT challenges.",
      "At Siko Mining, Mzoxolo plays a pivotal role in planning, deploying, and maintaining secure, scalable technology solutions that enhance efficiency, safety, and data-driven decision-making.",
      "Mzoxolos broad experience, spanning both hands-on technical operations and strategic consulting, enables him to bridge the gap between IT systems and business performance.",
    ],
  },
];

function TeamMember({ member, isReversed }: { member: typeof teamMembers[0]; isReversed: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 items-center" style={{ gap: "40px" }}>
      <div className={isReversed ? "lg:order-2" : ""}>
        <div className="relative" style={{ maxWidth: "400px", margin: "0 auto" }}>
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              objectFit: "cover",
            }}
            unoptimized
          />
          <div
            style={{
              position: "absolute",
              bottom: "-8px",
              left: isReversed ? "auto" : "-8px",
              right: isReversed ? "-8px" : "auto",
              width: "100%",
              height: "100%",
              border: "3px solid #F47C20",
              borderRadius: "8px",
              zIndex: -1,
            }}
          ></div>
        </div>
      </div>

      <div className={isReversed ? "lg:order-1" : ""}>
        <p style={{ color: "#F47C20", fontWeight: 600, fontSize: "14px", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          {member.role}
        </p>
        <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1F2937", marginBottom: "15px" }}>
          {member.name}
        </h3>
        <p style={{ color: "#4B5563", fontSize: "14px", lineHeight: 1.8, marginBottom: "15px" }}>
          {member.shortBio}
        </p>

        {expanded && (
          <div style={{ marginBottom: "15px" }}>
            {member.fullBio.map((paragraph, index) => (
              <p key={index} style={{ color: "#4B5563", fontSize: "14px", lineHeight: 1.8, marginBottom: "12px" }}>
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            color: "#F47C20",
            fontWeight: 600,
            fontSize: "14px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            textDecoration: "underline",
          }}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative"
      style={{
        backgroundImage: "url('/images/team-sec-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 0",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(255,255,255,0.95)" }}></div>

      <div className="container-custom relative" style={{ zIndex: 10 }}>
        <h2 className="section-title" style={{ marginBottom: "60px" }}>
          Meet The <span>Team</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "70px" }}>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              member={member}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
