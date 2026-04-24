import React from "react";

const services = [
  {
    highlight: "Estrategia",
    rest: " de carrera",
    description: "Para personas que necesitan claridad en sus decisiones profesionales",
    highlightColor: "text-red-400",
    borderColor: "border-red-200",
  },
  {
    highlight: "People",
    rest: " Strategy",
    description: "Diseña tu equipo, define roles y evita errores de contratación desde el inicio",
    highlightColor: "text-career",
    borderColor: "border-orange-100",
  },
  {
    highlight: "Soporte",
    rest: " técnico",
    description: "Configuración, mantenimiento y resolución de incidencias para equipos.",
    highlightColor: "text-logo-dos",
    borderColor: "border-yellow-200",
  },
];

const GoalsSection: React.FC = () => (
  <section className="w-full">
    <div className="border-2 border-border-navbar mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center py-6 md:py-8">
        Define mejor tu equipo antes de que el crecimiento se convierta en un problema
      </h2>
    </div>
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 items-center">
      {services.map((service, idx) => (
        <div
          key={idx}
          className={`relative bg-white rounded-2xl md:rounded-[48px] border ${service.borderColor} w-full max-w-xs md:max-w-none md:w-72 p-4 md:p-8 flex flex-col justify-between shadow-md m-2 md:m-10 overflow-hidden min-h-[180px] md:min-h-[220px]`}
        >
          <div className="z-10">
            <span className={`font-bold text-lg md:text-2xl font-ubuntu ${service.highlightColor}`}>
              {service.highlight}
            </span>
            <span className="text-black text-lg md:text-2xl font-normal font-ubuntu">
              {service.rest}
            </span>
            <span className="block text-black mt-2 md:mt-3 text-sm md:text-base font-ubuntu">
              {service.description}
            </span>
          </div>
          <span
            className="absolute z-0 right-2 bottom-2 text-[90px] font-bold select-none pointer-events-none text-border-navbar opacity-20 md:text-[160px] md:right-[-10px] md:bottom-[-30px]"
            style={{ lineHeight: "1" }}
          >
            ?
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default GoalsSection;
