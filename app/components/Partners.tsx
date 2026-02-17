import Image from "next/image";

const accreditations = [
  { src: "/images/top-logo1.png", alt: "B-BBEE Level 2", width: 115, height: 115 },
  { src: "/images/top-logo2.png", alt: "Institute of Directors South Africa", width: 212, height: 97 },
  { src: "/images/top-logo3.png", alt: "SACMA", width: 242, height: 59 },
];

export default function Partners() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "40px 0" }}>
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center" style={{ gap: "40px" }}>
          {accreditations.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                style={{ maxHeight: "55px", width: "auto", objectFit: "contain" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
