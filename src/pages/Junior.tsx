import React, { useEffect } from "react";
import SessionSelector from "../components/SessionSelector";

const Junior: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 bg-gray-50 min-h-screen">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white rounded-[40px] border border-logo-dos shadow-lg w-full p-8 md:p-12 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-logo-dos">
            Acompañamiento en el inicio de tu carrera profesional
          </h1>

          <p className="text-gray-700 text-lg mb-4">
            Este servicio está pensado para personas que están dando sus primeros pasos en el mundo profesional: recién graduados/as, estudiantes en último año o personas en transición hacia su primer empleo.
          </p>

          <div className="text-gray-700 text-lg mb-4">
            <p className="mb-2">Si sientes que:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>no tienes claro por dónde empezar</li>
              <li>te cuesta traducir lo que has estudiado en opciones reales de trabajo</li>
              <li>te enfrentas al mercado laboral con dudas, presión o demasiadas opiniones externas</li>
            </ul>
            <p className="mt-4">
              este acompañamiento está diseñado para ayudarte a tomar decisiones con más criterio y menos ruido.
            </p>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Qué trabajamos juntos/as</h2>
            <p className="mb-3">
              El objetivo no es decirte qué tienes que hacer, sino ayudarte a entender mejor tus opciones y construir un primer plan realista de carrera.
            </p>
            <p className="mb-2">Durante el proceso trabajamos, entre otros:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Claridad sobre intereses, fortalezas y áreas de desarrollo</li>
              <li>Análisis de posibles salidas profesionales según tu perfil</li>
              <li>Traducción de tu formación y experiencia en opciones de carrera reales</li>
              <li>Primeros pasos para entrar al mercado laboral (enfoque, posicionamiento, criterios)</li>
              <li>Comprensión de cómo funcionan las empresas más allá de los títulos de los puestos</li>
            </ul>
            <p className="mt-4">
              Este acompañamiento busca darte criterio propio para tomar decisiones, no una receta cerrada.
            </p>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Cómo es el acompañamiento</h2>
            <p className="mb-2">El formato es cercano, práctico y adaptado a tu momento:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sesiones individuales (online)</li>
              <li>Ejercicios de reflexión y aterrizaje a la realidad del mercado</li>
              <li>Material de apoyo para seguir trabajando entre sesiones</li>
              <li>Acompañamiento en la definición de siguientes pasos</li>
            </ul>
            <p className="mt-4">
              Es un espacio para ordenar ideas, ganar perspectiva y tomar decisiones más conscientes.
            </p>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Qué puedes esperar de este proceso</h2>
            <p className="mb-2">Al finalizar el acompañamiento, deberías tener:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Más claridad sobre qué caminos profesionales tienen sentido para ti ahora</li>
              <li>Un primer plan de acción realista (qué explorar, qué descartar, qué probar)</li>
              <li>Criterios propios para evaluar oportunidades</li>
              <li>Menos sensación de estar “perdido/a” frente al mercado laboral</li>
            </ul>
            <p className="mt-4">Se trata de empezar con una base más sólida.</p>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <p className="mb-3">
              Si buscas una fórmula rápida o una respuesta cerrada sobre “qué estudiar”, “qué trabajo elegir” o esperas que alguien decida por ti y quieres soluciones mágicas sin reflexión ni trabajo personal
            </p>
            <p>
              El acompañamiento requiere implicación y honestidad contigo mismo/a.
            </p>
          </div>

          <div className="w-full">
            <SessionSelector
              showHeading={false}
              variant="original"
              originalTitleOverrides={{
                session1: (
                  <>
                    ORIENTACIÓN <br /> LABORAL
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

export default Junior;
