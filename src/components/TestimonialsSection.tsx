import React, { useState } from "react";

const testimonials = [
  {
    name: "Marta Navarro Casillas",
    role: "Evaluación de currículums",
    text: "Trabajar con Yoani fue un gran apoyo durante mi proceso de búsqueda laboral. Me ayudó a aclarar ideas, enfocar mi perfil y ganar confianza en las entrevistas. Tiene un enfoque muy práctico y humano, que realmente marca la diferencia. ¡La recomiendo totalmente!",
    stars: 5,
    color: "#ffb7a1",
  },
  {
    name: "Andrew Taylor",
    role: "Orientación para el desarrollo de carrera",
    text: "Yoani has been an incredible support during my ongoing job search. She's helping me prepare for interviews, focus on key strengths, and improve my CV and LinkedIn profile. Her expertise and dedication are worth far more than the cost — her guidance truly makes a difference in achieving your career goals.",
    stars: 5,
    color: "#efbc68",
  },
  {
    name: "Carmen Aguilar Iñiguez",
    role: "Orientación para el desarrollo de carrera",
    text: "Me ha encantado la profesionalidad que pone Yoani en cada proyecto 🎉",
    stars: 5,
    color: "#919f89",
  },
  {
    name: "Matias Kamelman",
    role: "Consultant Developer @ Thoughtworks",
    text: "He tenido el privilegio de poder contar con Yoani como mentora y career coach dentro de mi formación como desarrollador Fullstack. Su pericia y capacidad de entendimiento de las necesidades del mercado fueron fundamentales en mis primeros pasos de salida al mundo laboral. Un privilegio poder contar con ella.",
    stars: 5,
    color: "#85a9d2",
  },
  {
    name: "Loreto Anguita Alonso",
    role: "Founder / CEO @ Initia",
    text: "Trabajar con Yoani ha sido un verdadero impulso en mi carrera. Su apoyo, cercanía y claridad me ayudaron a enfocarme, mejorar mi perfil profesional y ganar confianza en mi búsqueda de empleo. Se nota que le apasiona lo que hace y eso se transmite. ¡Gracias de verdad, Yoani!",
    stars: 5,
    color: "#ed7a6b",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[#efbc68]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Avatar = ({ name, color }: { name: string; color: string }) => {
  const initials = name.split(" ").slice(0, 2).map(n => n[0]).join("");
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
      style={{ background: color }}
    >
      {initials}
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Show 1 on mobile, up to 3 on desktop
  const visible = [
    testimonials[current % total],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#EFBC68] mb-2">Testimonios</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420]">Lo que dicen nuestros clientes</h2>
          <div className="flex justify-center gap-1 mt-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#efbc68]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-500 text-sm font-medium">5.0 en LinkedIn</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-sm border-t-4 flex flex-col justify-between transition-all duration-300 ${i !== 0 ? "hidden md:flex" : "flex"}`}
              style={{ borderColor: t.color }}
            >
              <div>
                <Stars count={t.stars} />
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Avatar name={t.name} color={t.color} />
                <div>
                  <p className="font-semibold text-sm text-[#2A2420]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-[#EFBC68] text-[#EFBC68] hover:bg-[#EFBC68] hover:text-white transition flex items-center justify-center"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ background: i === current ? "#EFBC68" : "#d1d5db" }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-[#EFBC68] text-[#EFBC68] hover:bg-[#EFBC68] hover:text-white transition flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
