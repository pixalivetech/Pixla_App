import React from "react";
import Logo1 from "./../../assets/Home/slogo1.png";
import Logo2 from "./../../assets/Home/slogo2.png";
import Logo3 from "./../../assets/Home/slogo3.png";
import Logo4 from "./../../assets/Home/slogo4.png";
import Logo5 from "./../../assets/Home/slogo5.png";

const SecuredBySection = () => {
  const logos = [
    { src: Logo1, alt: "MMTC-PAMP" },
    { src: Logo2, alt: "NPCI" },
    { src: Logo3, alt: "UPI" },
    { src: Logo4, alt: "Startup India" },
    { src: Logo5, alt: "Bureau of Indian Standards" },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-24 text-center font-sans">
      {/* Heading */}
      <h3 className="text-xl md:text-5xl font-semibold mb-8">Secured By</h3>
<br />
      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-10 md:h-12 lg:h-12 object-contain transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
};

export default SecuredBySection;
