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
        <div className="relative z-10 bg-white rounded-[32px] md:rounded-[48px] border border-logo-dos shadow-lg flex flex-col md:flex-row items-center w-full max-w-6xl md:max-w-7xl min-h-[300px] px-4 md:px-12 py-4">
          <div className="flex-1 flex justify-center items-center w-full md:w-[500px] md:h-[500px] overflow-hidden">
            <img
              src={banner}
              alt="Ilustración"
              className="w-full h-auto max-w-[800px] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-start pl-0 md:pl-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight text-black">
              SIMPLIFICAMOS
              EL PROCESO<br />
              CENTRÁNDONOS
              EN LO QUE<br />
              REALMENTE
              IMPORTA.
            </h1>
            <button
              className="mt-2 flex items-center gap-2 bg-logo-dos text-black font-semibold px-6 md:px-8 py-3 rounded-full shadow hover:bg-yellow-200 transition text-lg md:text-xl"
              onClick={handleScrollServicios}
            >
              Descubre cómo
            </button>
          </div>
        </div>
      </div>
      );
};

export default HeroBanner;