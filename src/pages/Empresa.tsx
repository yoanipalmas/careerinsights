import React, { useEffect } from "react";
import SessionSelector from "../components/SessionSelector";

const Empresa: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 bg-gray-50 min-h-screen">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white rounded-[40px] border border-logo-dos shadow-lg w-full p-8 md:p-12 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-logo-dos">
            People Strategy para startups en crecimiento
          </h1>

          <p className="text-gray-700 text-lg mb-4">
            El foco está en ayudar a la empresa a construir las bases humanas y organizativas que necesita para escalar sin improvisar.
          </p>

          <div className="text-gray-700 text-lg mb-6">
            <p className="mb-2">Dependiendo del momento de la startup, trabajamos aspectos como:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Definición de estructura mínima viable del equipo</li>
              <li>Claridad de roles y responsabilidades</li>
              <li>Criterios de contratación alineados con la etapa del proyecto</li>
              <li>Diseño de procesos básicos de onboarding</li>
              <li>Acompañamiento a founders en la toma de decisiones sobre personas</li>
              <li>Primeras prácticas de desarrollo de talento junior</li>
            </ul>
            <p className="mt-4">
              Nuestro objetivo es evitar errores comunes en fases tempranas que suelen generar fricción más adelante: malas contrataciones, roles difusos, sobrecarga de responsabilidades y falta de estructura mínima.
            </p>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Cómo es el acompañamiento</h2>
            <p className="mb-2">El formato es flexible y se adapta al momento de la empresa:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Diagnóstico inicial del estado actual del equipo</li>
              <li>Definición de prioridades según la fase de crecimiento</li>
              <li>Sesiones estratégicas con founders y personas clave</li>
              <li>Trabajo conjunto en la definición de estructura y roles</li>
              <li>Acompañamiento en decisiones clave de personas</li>
            </ul>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Qué sacas de este proceso</h2>
            <p className="mb-2">Tras el acompañamiento, la startup debería contar con:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mayor claridad sobre su estructura actual y futura</li>
              <li>Roles mejor definidos y alineados con necesidades reales</li>
              <li>Criterios más claros para contratar</li>
              <li>Un onboarding más estructurado para nuevas incorporaciones</li>
              <li>Menos fricción en la gestión diaria del equipo</li>
            </ul>
          </div>

          <p className="text-gray-700 text-lg mb-6">
            El primer paso es una conversación inicial para entender el momento de la startup y ver si este tipo de acompañamiento encaja con sus necesidades actuales. A partir de ahí se define un formato de trabajo adaptado: proyecto puntual o acompañamiento durante una fase concreta de crecimiento.
          </p>

          <div className="w-full">
            <SessionSelector
              showHeading={false}
              variant="original"
              originalTitleOverrides={{
                talleres: (
                  <>
                    PEOPLE STRATEGY <br /> FOR SCALE UPS
                  </>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empresa;
