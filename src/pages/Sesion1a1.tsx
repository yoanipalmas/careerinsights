import React, { useState, useEffect } from "react";
import { submitFormspree } from "../utils/formspree";
import FaceToFace from "../assets/image/Face to face-amico.svg";

const initialForm = { name: "", email: "", message: "" };
const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

const Sesion1a1: React.FC = () => {
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
    <section className="flex flex-col items-center justify-center px-4 py-8 bg-gray-50 min-h-screen">
      <div className="w-full max-w-5xl mx-auto mb-8">
        <div className="bg-white rounded-[40px] border border-logo-dos shadow-lg flex flex-col md:flex-row items-center w-full p-8 md:p-12 mb-10">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold mb-4 text-logo-dos">SESIÓN 1 TO 1</h1>
            <p className="text-gray-700 text-lg mb-4">
              A veces lo que más necesitamos es alguien que nos escuche, nos oriente y nos ayude a ver con más claridad las opciones que tenemos delante.<br />
              En nuestras sesiones 1 to 1 te acompañamos de forma personalizada para resolver tus dudas, explorar tus intereses y ayudarte a dar los primeros pasos hacia tu futuro académico o profesional.
            </p>
            <button
              type="button"
              onClick={openModal}
              className="bg-[#ffb7a1] hover:bg-[#ed7a6b] text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
            >
              Solicita tu sesión
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <img src={FaceToFace} alt="Sesión 1 a 1" className="w-[80%] max-w-xs" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white border border-logo-dos rounded-2xl shadow-md p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-logo-dos mb-2">¿A quién va dirigido?</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-1">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-logo-dos"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="text-gray-800 text-lg font-medium">Jóvenes que quieren descubrir su vocación</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-logo-dos"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="text-gray-800 text-lg font-medium">Personas que necesitan redefinir su camino laboral</span>
            </div>
          </div>
        </div>
        <div className="bg-white border border-logo-dos rounded-2xl shadow-md p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-logo-dos mb-2">¿Qué obtienes?</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-1">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-logo-dos"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="text-gray-800 text-lg font-medium">Escucha activa y orientación individual</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-logo-dos"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="text-gray-800 text-lg font-medium">Recomendaciones de estudios, carreras o cambios profesionales</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-logo-dos"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="text-gray-800 text-lg font-medium">Herramientas para tomar decisiones con seguridad</span>
            </div>
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

export default Sesion1a1;
