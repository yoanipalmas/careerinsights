import React from "react";

const GoalsSection: React.FC = () => (
  <section className="w-full">
    <div className="border-2 border-border-navbar mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center py-6 md:py-8">
        Objetivos, puntos fuertes y oportunidades.
      </h2>
    </div>
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 items-center">
      {/* Card 1 */}
      <div className="relative bg-white rounded-2xl md:rounded-[48px] border text-red-400 border-red-200 w-full max-w-xs md:max-w-none md:w-72 p-4 md:p-8 flex flex-col justify-between shadow-md m-2 md:m-10 overflow-hidden min-h-[180px] h-[200px] md:h-auto">
        <div className="z-10">
          <span className="font-bold text-red-400 text-lg md:text-2xl font-ubuntu">
            Define
          </span>
          <span className="block text-black text-lg md:text-2xl font-normal font-ubuntu">
            tu meta
          </span>
          <span className="block text-black mt-1 md:mt-2 text-sm md:text-lg font-ubuntu">
            ¿Dónde quieres ir?
          </span>
        </div>
        <span
          className="absolute z-20 right-2 bottom-2 text-[90px] font-bold font-chloe select-none pointer-events-none text-border-navbar opacity-30 md:text-[420px] md:right-[-0px] md:bottom-[-120px]"
          style={{ lineHeight: "1" }}
        >
          1
        </span>
      </div>
      {/* Card 2 */}
      <div className="relative bg-white rounded-2xl md:rounded-[48px] border text-career border-orange-100 w-full max-w-xs md:max-w-none md:w-72 p-4 md:p-8 flex flex-col justify-between shadow-md m-2 md:m-10 overflow-hidden min-h-[180px] h-[200px] md:h-auto">
        <div className="relative z-10">
          <span className="font-bold text-career text-lg md:text-2xl font-ubuntu">
            Evalúa
          </span>
          <span className="block text-black text-lg md:text-2xl font-normal font-ubuntu">
            tus opciones
          </span>
          <span className="block text-black mt-1 md:mt-2 text-sm md:text-lg font-ubuntu">
            ¿Dónde quieres ir?
          </span>
        </div>
        <span
          className="absolute z-20 right-2 bottom-2 text-[90px] font-bold font-chloe select-none pointer-events-none text-career opacity-30 md:text-[420px] md:right-[-80px] md:bottom-[-120px]"
          style={{ lineHeight: "1" }}
        >
          2
        </span>
      </div>
      {/* Card 3 */}
      <div className="relative bg-white rounded-2xl md:rounded-[48px] border text-logo-dos border-yellow-200 w-full max-w-xs md:max-w-none md:w-72 p-4 md:p-8 flex flex-col justify-between shadow-md m-2 md:m-10 overflow-hidden min-h-[180px] h-[200px] md:h-auto">
        <div className="relative z-10">
          <span className="font-bold text-logo-dos text-lg md:text-2xl font-ubuntu">
            Actúa
          </span>
          <span className="block text-black text-lg md:text-2xl font-normal font-ubuntu">
            Alcanza tu meta
          </span>
        </div>
        <span
          className="absolute z-20 right-2 bottom-2 text-[90px] font-bold font-chloe select-none pointer-events-none text-logo-dos opacity-30 md:text-[420px] md:right-[-80px] md:bottom-[-120px]"
          style={{ lineHeight: "1" }}
        >
          3
        </span>
      </div>
    </div>
  </section>
);

export default GoalsSection;
