import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { submitFormspree } from "../utils/formspree";

const initialForm = {
  tipo: "empresa",
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

const ITBasics: React.FC = () => {
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
          form: "it-basics",
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
    <section className="flex flex-col items-center justify-center px-4 py-10 bg-gray-50 min-h-screen">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white rounded-[40px] border border-logo-dos shadow-lg w-full p-8 md:p-12 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-logo-dos">
            Soporte operativo para startups en fase inicial
          </h1>

          <p className="text-gray-700 text-lg mb-4">
            ¿Necesitas poner en marcha tu operativa técnica básica para poder trabajar con fluidez desde el primer día?
          </p>

          <div className="text-gray-700 text-lg mb-6">
            <p className="mb-2">Trabajamos con equipos que:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Están empezando y no tienen soporte técnico interno</li>
              <li>Van a incorporar a sus primeras personas al equipo</li>
              <li>Necesitan configurar equipos, accesos y herramientas</li>
              <li>Quieren resolver incidencias técnicas sin distraer al equipo fundador del negocio</li>
            </ul>
            <p className="mt-4">
              Es un servicio operativo, diseñado para cubrir necesidades concretas en momentos clave del arranque de la empresa.
            </p>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Qué cubre este servicio</h2>
            <p className="mb-3">
              El objetivo es ayudar a que la infraestructura básica de trabajo no se convierta en un freno para el equipo.
            </p>
            <p className="mb-2">Entre otros, este servicio puede incluir:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Configuración de equipos de trabajo</li>
              <li>Puesta en marcha de accesos y herramientas básicas</li>
              <li>Soporte técnico puntual (remoto o presencial)</li>
              <li>Acompañamiento en el setup operativo inicial del equipo</li>
              <li>Resolución de incidencias técnicas básicas</li>
            </ul>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Servicios técnicos que cubrimos</h2>
            <p className="mb-3">
              Este servicio está pensado para resolver necesidades operativas habituales en startups en fase inicial. Entre los servicios que ofrecemos se incluyen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Configuración y puesta a punto de equipos de trabajo (portátiles, cuentas de usuario, accesos)</li>
              <li>Preparación de equipos para nuevas incorporaciones</li>
              <li>Configuración básica de herramientas de trabajo (correo, almacenamiento, herramientas colaborativas)</li>
              <li>Soporte técnico puntual para incidencias habituales del día a día</li>
              <li>Migración básica de equipos y datos cuando hay cambios de dispositivos</li>
              <li>Configuración de red básica en espacios de trabajo pequeños</li>
              <li>Acompañamiento en el setup operativo inicial de equipos remotos o híbridos</li>
            </ul>
            <p className="mt-4">
              Estos servicios se ofrecen de forma puntual o en formato de soporte recurrente, según las necesidades del equipo y el momento de la startup.
            </p>
          </div>

          <p className="text-gray-700 text-lg mb-8">
            Si te interesa este servicio, el primer paso es una breve conversación para entender vuestras necesidades operativas y valorar si este tipo de soporte encaja con vuestro momento actual.
          </p>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="bg-[#ffb7a1] hover:bg-[#ed7a6b] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 inline-block text-center"
          >
            Solicita una propuesta
          </button>
        </div>
      </div>

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

export default ITBasics;
