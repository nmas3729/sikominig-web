import Image from "next/image";

const logos = [
  "/images/worked-logo1.png",
  "/images/worked-logo2.png",
  "/images/worked-logo3.png",
  "/images/worked-logo4.png",
  "/images/worked-logo5.png",
  "/images/worked-logo6.png",
  "/images/JAE-PNG-CHECK.png",
];

export default function WorkedWith() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "80px 0", textAlign: "center" }}>
      <div className="container-custom">
        <h2 className="section-title" style={{ marginBottom: "40px" }}>
          We&apos;Ve <span>Worked</span> With
        </h2>

        <div className="flex flex-wrap justify-center items-center" style={{ gap: "30px" }}>
          {logos.map((logo, index) => (
            <div key={index}>
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                width={100}
                height={50}
                style={{ height: "50px", width: "auto", objectFit: "contain" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
