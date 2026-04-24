import React, { useEffect } from "react";
import SessionSelector from "../components/SessionSelector";

const Senior: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 bg-gray-50 min-h-screen">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white rounded-[40px] border border-logo-dos shadow-lg w-full p-8 md:p-12 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-logo-dos">
            Acompañamiento en momentos de transición profesional
          </h1>

          <p className="text-gray-700 text-lg mb-4">
            Este servicio está dirigido a personas con trayectoria profesional que se encuentran en un punto de revisión, cambio o redefinición de su carrera.
          </p>

          <div className="text-gray-700 text-lg mb-4">
            <p className="mb-2">Puede encajar contigo si:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>llevas años trabajando y sientes que tu rol actual ya no te representa</li>
              <li>estás valorando un cambio de sector, de tipo de empresa o de responsabilidad</li>
              <li>te encuentras en un momento de transición (salida de una empresa, pausa profesional, reorientación)</li>
              <li>quieres tomar decisiones con más criterio y menos inercia</li>
            </ul>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Qué trabajamos juntos/as</h2>
            <p className="mb-3">
              El acompañamiento se centra en ayudarte a ordenar tu experiencia, redefinir tu posicionamiento profesional y explorar escenarios realistas de evolución.
            </p>
            <p className="mb-2">Durante el proceso trabajamos, entre otros:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Análisis de tu trayectoria profesional: hitos, patrones, aprendizajes</li>
              <li>Clarificación de tu posicionamiento actual (qué sabes hacer, cómo aportas valor)</li>
              <li>Identificación de posibles direcciones de evolución profesional</li>
              <li>Relectura de tu perfil en términos de mercado (no solo de títulos de puesto)</li>
              <li>Criterios para evaluar oportunidades futuras con más perspectiva</li>
            </ul>
            <p className="mt-4">
              El foco está en entender qué quieres construir a partir de lo que ya tienes.
            </p>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Cómo es el acompañamiento</h2>
            <p className="mb-2">El formato es reflexivo, estratégico y adaptado a tu momento vital:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sesiones individuales (online)</li>
              <li>Espacios de reflexión guiada</li>
              <li>Aterrizaje de ideas en escenarios reales de mercado</li>
              <li>Definición de próximos pasos profesionales</li>
            </ul>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Qué puedes esperar de este proceso</h2>
            <p className="mb-2">Al finalizar el acompañamiento, deberías tener:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mayor claridad sobre tu posicionamiento profesional actual</li>
              <li>Una lectura más estratégica de tu experiencia</li>
              <li>Criterios para decidir próximos movimientos (cambio de rol, sector, tipo de proyecto, etc.)</li>
              <li>Un plan de exploración o transición realista</li>
            </ul>
          </div>

          <p className="text-gray-700 text-lg mb-6">
            Si te interesa este servicio, el primer paso es una breve conversación para entender tu situación actual y ver si este acompañamiento encaja con tu momento profesional.
          </p>

          <div className="w-full">
            <SessionSelector
              showHeading={false}
              variant="original"
              originalTitleOverrides={{
                session1: (
                  <>
                    DESARROLLO <br /> PROFESIONAL
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

export default Senior;
