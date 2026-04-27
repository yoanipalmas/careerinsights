import React from "react";
import banner from "../../assets/image/Selecting team-rafiki.svg";
// import { Link } from "react-router-dom";

const HeroBanner: React.FC = () => {
    const handleScrollServicios = () => {
      const section = document.getElementById("servicios");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
      <div className="relative flex justify-center items-center min-h-[400px] md:min-h-[600px] bg-transparent overflow-visible">
        <div className="relative z-10 bg-white rounded-[32px] md:rounded-[48px] border border-logo-dos shadow-lg flex flex-col md:flex-row items-center w-full max-w-6xl md:max-w-7xl px-4 md:px-12 py-8 md:py-4">
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-1 pb-6 md:pb-0 pl-0 md:pl-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8 leading-tight text-black">
              TOMA MEJORES<br />
              DECISIONES DE<br />
              TALENTO
            </h1>
            <button
              className="mt-2 flex items-center gap-2 bg-logo-dos text-black font-semibold px-6 md:px-8 py-3 rounded-full shadow hover:bg-yellow-200 transition text-lg md:text-xl"
              onClick={handleScrollServicios}
            >
              Ver servicios
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center w-full md:w-[500px] md:h-[500px] overflow-hidden order-1 md:order-2">
            <img
              src={banner}
              alt="Ilustración"
              className="w-full h-auto max-w-[320px] md:max-w-[800px] object-contain"
            />
          </div>
        </div>
      </div>
      );
};

export default HeroBanner;