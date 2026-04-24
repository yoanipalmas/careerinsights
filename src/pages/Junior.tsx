import React, { useEffect, useState } from "react";
import SessionSelector from "../components/SessionSelector";
import { submitFormspree } from "../utils/formspree";

const initialForm = { name: "", email: "", message: "" };
const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

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
              <li>Menos sensación de estar "perdido/a" frente al mercado laboral</li>
            </ul>
            <p className="mt-4">Se trata de empezar con una base más sólida.</p>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <p className="mb-3">
              Si buscas una fórmula rápida o una respuesta cerrada sobre "qué estudiar", "qué trabajo elegir" o esperas que alguien decida por ti y quieres soluciones mágicas sin reflexión ni trabajo personal
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
                session1: <>ORIENTACIÓN <br /> LABORAL</>,
              }}
              originalOnClickOverrides={{
                session1: openModal,
              }}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
                <div className="text-5xl">✓</div>
                <h2 className="text-2xl font-bold text-logo-dos">¡Solicitud recibida!</h2>
                <p className="text-gray-600">Hemos recibido tu solicitud. Nos pondremos en contacto contigo en breve.</p>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-logo-dos text-white font-bold px-8 py-3 rounded-full hover:bg-logo-cuatro transition-colors"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-logo-dos mb-2 text-center">Solicita tu sesión 1 a 1</h2>
                <p className="text-gray-600 text-center mb-6">Cuéntanos en qué podemos ayudarte y nos ponemos en contacto contigo.</p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                  <label className="font-semibold">Nombre completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`p-2 rounded border ${errors.name ? "border-red-400" : "border-gray-300"}`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

                  <label className="font-semibold">Correo electrónico *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`p-2 rounded border ${errors.email ? "border-red-400" : "border-gray-300"}`}
                    placeholder="tucorreo@email.com"
                  />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                  <label className="font-semibold">Mensaje *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={`p-2 rounded border ${errors.message ? "border-red-400" : "border-gray-300"}`}
                    placeholder="Cuéntanos brevemente en qué te gustaría que te ayudemos"
                    rows={4}
                  />
                  {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

                  <button
                    type="submit"
                    className="mt-2 bg-logo-dos text-white font-bold py-2 rounded-full hover:bg-logo-cuatro transition-colors disabled:opacity-60"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                  </button>
                  {submitError && <span className="text-red-500 text-sm mt-2">{submitError}</span>}
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Junior;
