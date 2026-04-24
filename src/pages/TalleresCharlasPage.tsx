import React, { useState } from "react";
import WebinarImg from "../assets/image/Webinar-cuate.svg";
import Modal from "../components/Modal";
import { submitFormspree } from "../utils/formspree";

const temas = [
  "Cómo elegir carrera o formación",
  "Competencias para el mundo laboral actual",
  "Empleabilidad, marca personal y nuevas tendencias",
  "Herramientas digitales para la búsqueda de empleo",
];

const initialForm = {
  tipo: "centro",
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

const TalleresCharlasPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!form.nombre) newErrors.nombre = "El nombre es obligatorio";
    if (!form.email) newErrors.email = "El correo es obligatorio";
    else if (!validateEmail(form.email)) newErrors.email = "Correo inválido";
    if (!form.telefono) newErrors.telefono = "El teléfono es obligatorio";
    if (!form.mensaje) newErrors.mensaje = "El mensaje es obligatorio";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitted(false);
      setSubmitError("");
      try {
        await submitFormspree(formspreeEndpoint, {
          form: "talleres-charlas",
          tipo: form.tipo,
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          mensaje: form.mensaje,
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
    <section className="flex flex-col items-center justify-center px-4 py-8 bg-gray-50 min-h-screen">
      {/* Header y sección principal */}
      <div className="w-full max-w-5xl mx-auto mb-8">
        <div className="bg-white rounded-[40px] border border-logo-dos shadow-lg flex flex-col md:flex-row items-center w-full p-8 md:p-12 mb-10">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold mb-4 text-logo-dos">TALLERES & CHARLAS</h1>
            <p className="text-gray-700 text-lg mb-4">
              Creamos y organizamos talleres y charlas interactivas para centros educativos, instituciones o empresas que buscan inspirar y orientar en temas actuales.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="bg-[#ffb7a1] hover:bg-[#ed7a6b] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 inline-block text-center"
            >
              Solicita una propuesta
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <img src={WebinarImg} alt="Talleres y charlas" className="w-[80%] max-w-xs" />
          </div>
        </div>
      </div>

      {/* Temas */}
      <div className="w-full max-w-4xl flex flex-col items-center mb-12">
        <h2 className="text-2xl font-bold text-logo-dos mb-6 text-center">Temas que podemos trabajar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {temas.map((tema, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white border border-logo-dos rounded-2xl shadow-md p-5">
              <span className="mt-1">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-logo-dos"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="text-gray-800 text-lg font-medium">{tema}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal con formulario */}
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSubmitted(false);
          setErrors({});
          setSubmitError("");
        }}
      >
        <h2 className="text-2xl font-bold text-logo-dos mb-4 text-center">Solicita una propuesta</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <label className="font-semibold">¿Para quién es la propuesta?</label>
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className="p-2 rounded border border-gray-300"
          >
            <option value="centro">Centro educativo</option>
            <option value="empresa">Empresa</option>
          </select>

          <label className="font-semibold">Nombre de la institución o empresa *</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className={`p-2 rounded border ${errors.nombre ? "border-red-400" : "border-gray-300"}`}
            placeholder="Nombre"
          />
          {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}

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

          <label className="font-semibold">Teléfono *</label>
          <input
            type="tel"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            className={`p-2 rounded border ${errors.telefono ? "border-red-400" : "border-gray-300"}`}
            placeholder="Teléfono de contacto"
          />
          {errors.telefono && <span className="text-red-500 text-sm">{errors.telefono}</span>}

          <label className="font-semibold">Mensaje *</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            className={`p-2 rounded border ${errors.mensaje ? "border-red-400" : "border-gray-300"}`}
            placeholder="Cuéntanos brevemente qué necesitas"
            rows={3}
          />
          {errors.mensaje && <span className="text-red-500 text-sm">{errors.mensaje}</span>}

          <button
            type="submit"
            className="mt-2 bg-logo-dos text-white font-bold py-2 rounded hover:bg-logo-cuatro transition-colors disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar solicitud"}
          </button>
          {submitted && (
            <span className="text-green-600 text-sm mt-2">¡Solicitud enviada correctamente!</span>
          )}
          {submitError && (
            <span className="text-red-500 text-sm mt-2">{submitError}</span>
          )}
        </form>
      </Modal>
    </section>
  );
};

export default TalleresCharlasPage; 