import React, { useEffect, useState } from "react";
import SessionSelector from "../components/SessionSelector";
import { submitFormspree } from "../utils/formspree";

const initialForm = { name: "", email: "", message: "" };
const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

const workItems = [
  { icon: "🎯", text: "Claridad sobre intereses, fortalezas y áreas de desarrollo" },
  { icon: "🗺️", text: "Análisis de posibles salidas profesionales según tu perfil" },
  { icon: "💼", text: "Traducción de tu formación y experiencia en opciones reales" },
  { icon: "🚀", text: "Primeros pasos para entrar al mercado laboral con criterio" },
  { icon: "🏢", text: "Cómo funcionan las empresas más allá de los títulos de los puestos" },
];

const outcomeItems = [
  { icon: "✦", text: "Más claridad sobre qué caminos profesionales tienen sentido para ti ahora" },
  { icon: "✦", text: "Un primer plan de acción realista: qué explorar, qué descartar, qué probar" },
  { icon: "✦", text: "Criterios propios para evaluar oportunidades" },
  { icon: "✦", text: "Menos sensación de estar "perdido/a" frente al mercado laboral" },
];

const formatItems = [
  { icon: "💻", label: "Online", desc: "Sesiones individuales desde donde estés" },
  { icon: "📝", label: "Ejercicios", desc: "Reflexión y aterrizaje a la realidad del mercado" },
  { icon: "📚", label: "Material", desc: "Apoyo para seguir trabajando entre sesiones" },
  { icon: "🧭", label: "Seguimiento", desc: "Acompañamiento en la definición de siguientes pasos" },
];

const Junior: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const openModal = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    setSubmitError("");
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "El nombre es obligatorio";
    if (!form.email) newErrors.email = "El correo es obligatorio";
    else if (!validateEmail(form.email)) newErrors.email = "Correo inválido";
    if (!form.message) newErrors.message = "El mensaje es obligatorio";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitError("");
      try {
        await submitFormspree(formspreeEndpoint, {
          form: "sesion-1a1",
          nombre: form.name,
          email: form.email,
          mensaje: form.message,
        });
        setSubmitted(true);
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : "Error al enviar");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="bg-[#FAF8F5] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#EFBC68] mb-4">
            Para particulares
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A2420] leading-tight mb-6">
            Acompañamiento en el inicio<br className="hidden md:block" /> de tu carrera profesional
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Para recién graduados/as, estudiantes en último año o personas en transición hacia su primer empleo. Sin recetas. Con criterio.
          </p>
          <button
            onClick={openModal}
            className="bg-[#EFBC68] text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-[#6B8F71] transition-colors duration-200 shadow-md"
          >
            Solicita tu sesión →
          </button>
        </div>
      </section>

      {/* ¿ESTO ES PARA TI? */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-4 text-center">
            ¿Esto es para ti?
          </h2>
          <p className="text-gray-500 text-center mb-10">Si te identificas con alguna de estas situaciones, sí.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🧭", text: "No tienes claro por dónde empezar en el mercado laboral" },
              { icon: "🔄", text: "Te cuesta traducir lo que has estudiado en opciones reales de trabajo" },
              { icon: "🌀", text: "Te enfrentas al mercado con dudas, presión o demasiadas opiniones externas" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FAF8F5] rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-[#EFBC68]/20">
                <span className="text-3xl">{item.icon}</span>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B8F71] font-semibold mt-8 text-lg">
            Este acompañamiento está diseñado para ayudarte a tomar decisiones con más criterio y menos ruido.
          </p>
        </div>
      </section>

      {/* QUÉ TRABAJAMOS */}
      <section className="bg-[#FAF8F5] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-3 text-center">
            Qué trabajamos juntos/as
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            El objetivo no es decirte qué tienes que hacer, sino ayudarte a entender mejor tus opciones y construir un primer plan realista de carrera.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {workItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-gray-100 shadow-sm">
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 italic mt-8">
            Este acompañamiento busca darte criterio propio para tomar decisiones, no una receta cerrada.
          </p>
        </div>
      </section>

      {/* CÓMO ES */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-3 text-center">
            Cómo es el acompañamiento
          </h2>
          <p className="text-gray-500 text-center mb-10">Cercano, práctico y adaptado a tu momento.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {formatItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-[#FAF8F5]">
                <span className="text-3xl">{item.icon}</span>
                <span className="font-bold text-[#EFBC68]">{item.label}</span>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIO */}
      <section className="bg-[#EFBC68] py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Lista/o para empezar?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            La primera sesión es el punto de partida. Sin compromisos, con mucha claridad.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-[#EFBC68] font-bold px-10 py-4 rounded-full text-lg hover:bg-[#FAF8F5] transition-colors duration-200 shadow-md"
          >
            Solicita tu sesión →
          </button>
        </div>
      </section>

      {/* QUÉ PUEDES ESPERAR */}
      <section className="bg-[#FAF8F5] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-3 text-center">
            Qué puedes esperar
          </h2>
          <p className="text-gray-500 text-center mb-10">Al finalizar el acompañamiento, deberías tener:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {outcomeItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4 border-l-4 border-[#6B8F71] shadow-sm">
                <span className="text-[#6B8F71] font-bold text-xl mt-0.5">{item.icon}</span>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B8F71] font-semibold mt-8">
            Se trata de empezar con una base más sólida.
          </p>
        </div>
      </section>

      {/* ESTO NO ES PARA TI */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-[#919F89]/30 rounded-3xl p-8 text-center">
            <span className="text-3xl mb-4 block">⚠️</span>
            <h2 className="text-xl font-bold text-[#2A2420] mb-4">Esto no es para ti si...</h2>
            <p className="text-gray-600 mb-4">
              Buscas una fórmula rápida o una respuesta cerrada sobre "qué estudiar" o "qué trabajo elegir", o esperas que alguien decida por ti y quieres soluciones mágicas sin reflexión ni trabajo personal.
            </p>
            <p className="text-[#919F89] font-semibold">
              El acompañamiento requiere implicación y honestidad contigo mismo/a.
            </p>
          </div>
        </div>
      </section>

      {/* SESSION SELECTOR */}
      <section className="bg-[#FAF8F5] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-2 text-center">
            ¿Por dónde quieres empezar?
          </h2>
          <p className="text-gray-500 text-center mb-10">Elige el formato que mejor encaje con tu momento.</p>
          <SessionSelector
            showHeading={false}
            variant="original"
            originalTitleOverrides={{
              session1: <>ORIENTACIÓN <br /> LABORAL</>,
            }}
            originalOnClickOverrides={{
              session1: openModal,
            }}
          />
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold">×</button>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
                <div className="text-5xl">✓</div>
                <h2 className="text-2xl font-bold text-[#EFBC68]">¡Solicitud recibida!</h2>
                <p className="text-gray-600">Hemos recibido tu solicitud. Nos pondremos en contacto contigo en breve.</p>
                <button onClick={closeModal} className="mt-4 bg-[#EFBC68] text-white font-bold px-8 py-3 rounded-full hover:bg-[#6B8F71] transition-colors">Cerrar</button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-[#EFBC68] mb-2 text-center">Solicita tu sesión 1 a 1</h2>
                <p className="text-gray-600 text-center mb-6">Cuéntanos en qué podemos ayudarte y nos ponemos en contacto contigo.</p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                  <label className="font-semibold">Nombre completo *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} className={`p-3 rounded-xl border ${errors.name ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="Tu nombre" />
                  {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                  <label className="font-semibold">Correo electrónico *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className={`p-3 rounded-xl border ${errors.email ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="tucorreo@email.com" />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                  <label className="font-semibold">Mensaje *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} className={`p-3 rounded-xl border ${errors.message ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="Cuéntanos brevemente en qué te gustaría que te ayudemos" rows={4} />
                  {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                  <button type="submit" className="mt-2 bg-[#EFBC68] text-white font-bold py-3 rounded-full hover:bg-[#6B8F71] transition-colors disabled:opacity-60" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                  </button>
                  {submitError && <span className="text-red-500 text-sm mt-2">{submitError}</span>}
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Junior;
