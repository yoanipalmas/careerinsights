import React, { useEffect, useState } from "react";
import { submitFormspree } from "../utils/formspree";

const initialForm = {
  tipo: "empresa",
  nombre: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

const DOT_COLORS = ["#ffb7a1", "#efbc68", "#919f89", "#85a9d2", "#ed7a6b"];

const targetItems = [
  { num: "01", text: "Estais empezando y no teneis soporte técnico interno", color: "#ffb7a1" },
  { num: "02", text: "Vais a incorporar a vuestras primeras personas al equipo", color: "#efbc68" },
  { num: "03", text: "Necesitais configurar equipos, accesos y herramientas desde cero", color: "#85a9d2" },
];

const serviceItems = [
  { text: "Configuración y puesta a punto de equipos de trabajo (portátiles, cuentas, accesos)" },
  { text: "Preparación de equipos para nuevas incorporaciones" },
  { text: "Configuración básica de herramientas (correo, almacenamiento, colaborativas)" },
  { text: "Soporte técnico puntual para incidencias del día a día" },
  { text: "Migración básica de equipos y datos en cambios de dispositivo" },
  { text: "Configuración de red básica en espacios de trabajo pequeños" },
  { text: "Setup operativo inicial para equipos remotos o híbridos" },
];

const formatItems = [
  { label: "Remoto" },
  { label: "Presencial" },
  { label: "Puntual" },
  { label: "Recurrente" },
];

const outcomeItems = [
  { text: "Operativa técnica lista desde el primer día" },
  { text: "Equipo configurado y con accesos sin fricciones" },
  { text: "Founders sin distracciones técnicas que los alejen del negocio" },
  { text: "Base sólida para crecer sin deuda técnica operativa" },
];

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

  const openModal = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    setSubmitError("");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSubmitted(false);
  };

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
    <div className="w-full">

      {/* HERO */}
      <section className="bg-[#FAF8F5] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#EFBC68] mb-4">
            Soporte técnico
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A2420] leading-tight mb-6">
            Soporte operativo para startups<br className="hidden md:block" /> en fase inicial
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            La infraestructura técnica básica lista desde el primer día, para que el equipo pueda trabajar con fluidez sin distraer a los founders.
          </p>
          <button
            onClick={openModal}
            className="bg-[#EFBC68] text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-[#6B8F71] transition-colors duration-200 shadow-md"
          >
            Solicitar propuesta →
          </button>
        </div>
      </section>

      {/* ¿ESTO ES PARA TI? */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-4 text-center">
            ¿Esto es para vosotros?
          </h2>
          <p className="text-gray-500 text-center mb-10">Trabajamos con equipos que se reconocen en estas situaciones.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {targetItems.map((item, i) => (
              <div key={i} className="bg-[#FAF8F5] rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: item.color }}>
                  {item.num}
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#919f89] font-semibold mt-8 text-lg">
            Es un servicio operativo, pensado para cubrir necesidades concretas en momentos clave del arranque.
          </p>
        </div>
      </section>

      {/* QUÉ CUBRE */}
      <section className="bg-[#FAF8F5] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-3 text-center">
            Qué cubre este servicio
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            El objetivo es que la infraestructura básica de trabajo no se convierta en un freno para el equipo.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {serviceItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs mt-0.5" style={{ background: DOT_COLORS[i % DOT_COLORS.length] }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 italic mt-8">
            Servicios puntuales o en formato de soporte recurrente, según las necesidades del equipo.
          </p>
        </div>
      </section>

      {/* CÓMO ES */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-3 text-center">
            Cómo trabajamos
          </h2>
          <p className="text-gray-500 text-center mb-10">Adaptado a vuestro momento y formato de trabajo.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {formatItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-[#FAF8F5]">
                <div className="w-10 h-10 rounded-full" style={{ background: DOT_COLORS[i] }} />
                <span className="font-bold text-[#2A2420]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIO */}
      <section className="bg-[#EFBC68] py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Necesitais poner en marcha vuestra operativa?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            El primer paso es una breve conversación para entender vuestras necesidades y valorar si encajamos.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-[#EFBC68] font-bold px-10 py-4 rounded-full text-lg hover:bg-[#FAF8F5] transition-colors duration-200 shadow-md"
          >
            Solicitar propuesta →
          </button>
        </div>
      </section>

      {/* QUÉ CONSEGUÍS */}
      <section className="bg-[#FAF8F5] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-3 text-center">
            Qué conseguís
          </h2>
          <p className="text-gray-500 text-center mb-10">Con la operativa técnica resuelta, el equipo puede centrarse en lo que importa.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {outcomeItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4 border-l-4 shadow-sm" style={{ borderColor: DOT_COLORS[i] }}>
                <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5" style={{ background: DOT_COLORS[i] }} />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B8F71] font-semibold mt-8">
            Menos fricciones técnicas. Más foco en el negocio.
          </p>
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
                <h2 className="text-2xl font-bold text-[#EFBC68] mb-2 text-center">Solicita una propuesta</h2>
                <p className="text-gray-600 text-center mb-6">Cuéntanos qué necesitais y nos ponemos en contacto.</p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                  <label className="font-semibold">¿Para quién es la propuesta?</label>
                  <select name="tipo" value={form.tipo} onChange={handleChange} className="p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#EFBC68]">
                    <option value="empresa">Empresa</option>
                    <option value="centro">Centro educativo</option>
                  </select>

                  <label className="font-semibold">Nombre de la empresa o institución *</label>
                  <input type="text" name="nombre" value={form.nombre} onChange={handleChange} className={`p-3 rounded-xl border ${errors.nombre ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="Nombre" />
                  {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}

                  <label className="font-semibold">Correo electrónico *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className={`p-3 rounded-xl border ${errors.email ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="tucorreo@email.com" />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                  <label className="font-semibold">Teléfono *</label>
                  <input type="tel" name="telefono" value={form.telefono} onChange={handleChange} className={`p-3 rounded-xl border ${errors.telefono ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="Teléfono de contacto" />
                  {errors.telefono && <span className="text-red-500 text-sm">{errors.telefono}</span>}

                  <label className="font-semibold">Mensaje *</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} className={`p-3 rounded-xl border ${errors.mensaje ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="Cuéntanos brevemente qué necesitais" rows={4} />
                  {errors.mensaje && <span className="text-red-500 text-sm">{errors.mensaje}</span>}

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

export default ITBasics;
