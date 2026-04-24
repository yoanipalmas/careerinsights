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
    text: "Orientación personalizada y recursos para ayudarle a tomar decisiones profesionales con confianza y claridad",
    img: VisionBoard,
    border: "border-red-200",
  },
  {
    title: "A QUIÉN SERVIMOS",
    text: "Te ofrecemos ideas y herramientas para explorar opciones profesionales, comprender el panorama del sector y tomar decisiones informadas sobre tu futuro.",
    img: webinar,
    border: "border-gray-200",
  },
  {
    title: "RECURSOS COMPLETOS",
    text: "Gran cantidad de recursos que abarcan temas como la elaboración de currículos, la preparación de entrevistas, estrategias para establecer contactos y mucho más.",
    img: cohorte,
    border: "border-yellow-200",
  },
  {
    title: "NUESTRO ENFOQUE",
    text: "La trayectoria profesional de cada persona es única. Nuestras sesiones de asesoramiento personalizadas están diseñadas para comprender sus aspiraciones, puntos fuertes y valores, ajustándonos a sus objetivos personales.",
    img: analyze,
    border: "border-red-200",
  },
];

const AboutSection: React.FC = () => (
  <section id="conocenos" className="w-full flex flex-col items-center gap-10 py-8">
    {/* Técnica Diana destacada */}
    <Link to="/metodo" className="w-full flex justify-center">
      <div className="relative flex flex-col md:flex-row items-center bg-white rounded-3xl border-2 border-blue-200 shadow-md p-10 gap-8 max-w-5xl w-full hover:shadow-lg transition-all cursor-pointer">
        <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
          <img src={Diana} alt="Técnica Diana" className="w-48 h-48 object-contain" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-700">TÉCNICA DIANA</h2>
          <p className="text-lg text-gray-700 mb-4">Desarrollado para simplificar la toma de decisiones en la planificación de la carrera profesional. Esta técnica te ayuda a visualizar tus objetivos y a identificar sistemáticamente los pasos necesarios para alcanzarlos.</p>
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:underline">Descubre cómo <span className="text-2xl">→</span></span>
        </div>
      </div>
    </Link>

    {/* Otras tarjetas */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
      {cards.map((card, idx) => (
        <div key={idx} className={`flex flex-row items-center bg-white rounded-2xl border ${card.border} shadow-sm p-8 gap-6 transition-all`}>
          <img src={card.img} alt={card.title} className="w-32 h-32 object-contain" />
          <div className="flex-1 flex flex-col justify-center items-start text-left">
            <h3 className="font-bold text-2xl mb-2 text-black">{card.title}</h3>
            <p className="text-m text-gray-700">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection; 