import React, { useState } from "react";
import { submitFormspree } from "../utils/formspree";
import contacUs from "../assets/image/Contact us-rafiki.svg"

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validateEmail = (email: string) =>
  /^\S+@\S+\.\S+$/.test(email);

const Contact: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!validateEmail(form.email)) newErrors.email = "Invalid email";
    if (!form.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitted(false);
      setSubmitError("");
      try {
        await submitFormspree(formspreeEndpoint, {
          form: "contacto",
          nombre: form.name,
          email: form.email,
          asunto: form.subject || "",
          mensaje: form.message,
        });
        setSubmitted(true);
        setForm(initialForm);
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : "Error al enviar");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center py-10 px-4 bg-gray-50">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 font-quicksand text-logo-dos">
          ¿Tienes dudas? ¡Contáctanos!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Estamos aquí para ayudarte. Completa el formulario o usa los medios de contacto.
        </p>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-start">
          {/* Formulario */}
          <form
            className="flex-1 bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 border border-logo-tres max-w-md mx-auto"
            onSubmit={handleSubmit}
            noValidate
          >
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

            <label className="font-semibold">Asunto</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="p-2 rounded border border-gray-300"
              placeholder="Asunto (opcional)"
            />

            <label className="font-semibold">Mensaje *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`p-2 rounded border ${errors.message ? "border-red-400" : "border-gray-300"}`}
              placeholder="Escribe tu mensaje"
              rows={4}
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

            <button
              type="submit"
              className="mt-2 bg-logo-dos text-white font-bold py-2 rounded hover:bg-logo-cuatro transition-colors disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
            {submitted && (
              <span className="text-green-600 text-sm mt-2">¡Mensaje enviado correctamente!</span>
            )}
            {submitError && (
              <span className="text-red-500 text-sm mt-2">{submitError}</span>
            )}
          </form>

          {/* Info de contacto y redes */}
          <div className="flex-1 flex flex-col gap-6 justify-between items-center md:items-start max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-logo-cuatro w-full flex flex-col gap-2">
              <h2 className="font-bold mb-2 text-lg text-logo-cuatro">Información de contacto</h2>
              <div className="flex items-center gap-2">
                <svg className="text-logo-cuatro" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8V7l-3 2-2-2-2 2-2-2-2 2-2-2-3 2v1l3-2 2 2 2-2 2 2 2-2 3 2z"/><path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5l9 5.25 9-5.25z"/></svg>
                <span className="text-sm">Email: <a href="mailto:talentandcareerses@gmail.com" className="text-logo-cuatro underline">talentandcareerses@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="text-logo-cuatro" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2z"/></svg>
                <span className="text-sm">Teléfono: <a href="tel:+34652764972" className="text-logo-cuatro underline">+34 652 764 972</a></span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="text-logo-cuatro" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6 0 1.31.42 2.52 1.13 3.5C8.48 15.36 10.18 16 12 16s3.52-.64 4.87-1.5A5.978 5.978 0 0 0 18 12c0-3.31-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
                <span className="text-sm">Ubicación: Madrid, España</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full mt-4">
              <a href="https://www.linkedin.com/company/careerinsights-es" target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-logo-cuatro translate-x-2 translate-y-2 z-0"></div>
                  <button className="relative w-full flex items-center justify-between px-6 py-3 rounded-full bg-white border border-blue-300 text-black font-semibold z-10 shadow hover:bg-logo-cuatro transition text-xl">
                    LINKEDIN <span className="text-blue-500">→</span>
                  </button>
                </div>
              </a>
              <a href="https://www.tiktok.com/@career_in_sights?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-logo-dos translate-x-2 translate-y-2 z-0"></div>
                  <button className="relative w-full flex items-center justify-between px-6 py-3 rounded-full bg-white border border-yellow-300 text-black font-semibold z-10 shadow hover:bg-logo-dos transition text-xl">
                    TIKTOK <span className="text-yellow-500">→</span>
                  </button>
                </div>
              </a>
              <a href="mailto:talentandcareerses@gmail.com">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-logo-uno translate-x-2 translate-y-2 z-0"></div>
                  <button className="relative w-full flex items-center justify-between px-6 py-3 rounded-full bg-white border border-red-300 text-black font-semibold z-10 shadow hover:bg-logo-uno transition text-xl">
                    EMAIL <span className="text-red-500">→</span>
                  </button>
                </div>
              </a>
            </div>
            <div className="hidden md:block mt-8 w-full">
              <img src={contacUs} alt="Ilustración contacto" className="w-100  max-w-xs mx-auto" />
            </div>
          </div>
        </div>
        <div className="block md:hidden mt-8 w-full">
          <img src={contacUs} alt="Ilustración contacto" className="w-full max-w-xs mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Contact; 