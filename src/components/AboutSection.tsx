import React from "react";
import VisionBoard from "../assets/image/Vision-board-rafiki.svg";
import webinar from "../assets/image/Webinar-cuate.svg"
import cohorte from "../assets/image/Cohort-analysis-amico.svg"
import analyze from "../assets/image/Analyze-pana.svg"
import { Link } from 'react-router-dom';
import Diana from "../assets/image/Diana.svg";

const cards = [
  {
    title: "NUESTRA MISIÓN",
    text: "Acompañar a Startups y personas a tomar decisiones sobre carrera, equipo y estructura con más claridad y contexto",
    img: VisionBoard,
    border: "border-red-200",
  },
  {
    title: "A QUIÉN SERVIMOS",
    text: "Empresas en crecimiento sin departamento de RRHH\nEquipos que están empezando a estructurarse\nFounders que necesitan apoyo en decisiones de personas",
    img: webinar,
    border: "border-gray-200",
  },
  {
    title: "RECURSOS COMPLETOS",
    text: "Nuestras areas de trabajo son bastante amplias incluyendo: Cultura, recruitment, diseño de perfiles, onboarding & off-boarding, políticas de empresa, performance & desarrollo, entre otras",
    img: cohorte,
    border: "border-yellow-200",
  },
  {
    title: "NUESTRO ENFOQUE",
    text: "Trabajamos desde el contexto de cada empresa para definir decisiones sostenibles en el tiempo.",
    img: analyze,
    border: "border-red-200",
  },
];

const AboutSection: React.FC = () => (
  <section id="conocenos" className="w-full flex flex-col items-center gap-10 py-8">
    {/* Técnica Diana destacada */}
    <Link to="/metodo" className="w-full flex justify-center">
      <div className="relative flex flex-col md:flex-row items-center bg-white rounded-3xl border-2 border-blue-200 shadow-md p-6 md:p-10 gap-6 md:gap-8 max-w-5xl w-full hover:shadow-lg transition-all cursor-pointer">
        <div className="flex justify-center items-center w-full md:flex-1">
          <img src={Diana} alt="Técnica Diana" className="w-36 h-36 md:w-48 md:h-48 object-contain" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-blue-700">TÉCNICA DIANA</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">Desarrollado para simplificar la toma de decisiones en la planificación de la carrera profesional. Esta técnica te ayuda a visualizar tus objetivos y a identificar sistemáticamente los pasos necesarios para alcanzarlos.</p>
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:underline">Descubre cómo <span className="text-2xl">→</span></span>
        </div>
      </div>
    </Link>

    {/* Otras tarjetas */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl">
      {cards.map((card, idx) => (
        <div key={idx} className={`flex flex-col sm:flex-row items-center bg-white rounded-2xl border ${card.border} shadow-sm p-6 gap-4 transition-all`}>
          <img src={card.img} alt={card.title} className="w-24 h-24 md:w-32 md:h-32 object-contain flex-shrink-0" />
          <div className="flex-1 flex flex-col justify-center items-start text-left">
            <h3 className="font-bold text-xl md:text-2xl mb-2 text-black">{card.title}</h3>
            <p className="text-sm md:text-base text-gray-700 whitespace-pre-line">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection; 