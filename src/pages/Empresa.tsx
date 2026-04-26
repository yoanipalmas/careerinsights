import React, { useEffect, useState } from "react";
import { submitFormspree } from "../utils/formspree";

const initialForm = {
  empresa: "",
  contacto: "",
  email: "",
  empleados: "",
  mensaje: "",
};

const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

const DOT_COLORS = ["#ffb7a1", "#efbc68", "#919f89", "#85a9d2", "#ed7a6b"];

const workItems = [
  { text: "Definición de estructura mínima viable del equipo" },
  { text: "Claridad de roles y responsabilidades" },
  { text: "Criterios de contratación alineados con la etapa del proyecto" },
  { text: "Diseño de procesos básicos de onboarding" },
  { text: "Acompañamiento a founders en decisiones sobre personas" },
  { text: "Primeras prácticas de desarrollo de talento junior" },
];

const formatItems = [
  { label: "Diagnóstico" },
  { label: "Prioridades" },
  { label: "Sesiones" },
  { label: "Seguimiento" },
];

const outcomeItems = [
  { text: "Mayor claridad sobre la estructura actual y futura del equipo" },
  { text: "Roles mejor definidos y alineados con necesidades reales" },
  { text: "Criterios más claros para contratar" },
  { text: "Un onboarding más estructurado para nuevas incorporaciones" },
  { text: "Menos fricción en la gestión diaria del equipo" },
];

const Empresa: React.FC = () => {
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
    if (!form.empresa) newErrors.empresa = "El nombre de la empresa es obligatorio";
    if (!form.contacto) newErrors.contacto = "El nombre de contacto es obligatorio";
    if (!form.email) newErrors.email = "El correo es obligatorio";
    else if (!validateEmail(form.email)) newErrors.email = "Correo inválido";
    if (!form.mensaje) newErrors.mensaje = "El mensaje es obligatorio";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitError("");
      try {
        await submitFormspree(formspreeEndpoint, {
          form: "startup-agendar",
          empresa: form.empresa,
          contacto: form.contacto,
          email: form.email,
          empleados: form.empleados,
          mensaje: form.mensaje,
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
            Para startups
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2A2420] leading-tight mb-6">
            People Strategy para startups<br className="hidden md:block" /> en crecimiento
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Ayudamos a construir las bases humanas y organizativas que tu empresa necesita para escalar sin improvisar.
          </p>
          <button
            onClick={openModal}
            className="bg-[#EFBC68] text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-[#6B8F71] transition-colors duration-200 shadow-md"
          >
            Agendar sesión →
          </button>
        </div>
      </section>

      {/* ¿ESTO ES PARA TI? */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-4 text-center">
            ¿Esto es para tu startup?
          </h2>
          <p className="text-gray-500 text-center mb-10">Si tu empresa está en alguna de estas fases, sí.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", text: "Estais creciendo rápido y los roles ya no están claros", color: "#ffb7a1" },
              { num: "02", text: "Las contrataciones no siempre salen bien y no sabeis por qué", color: "#efbc68" },
              { num: "03", text: "El equipo crece pero la estructura no acompaña el ritmo", color: "#85a9d2" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FAF8F5] rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: item.color }}>
                  {item.num}
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#919f89] font-semibold mt-8 text-lg">
            El objetivo es evitar errores comunes en fases tempranas que generan fricción más adelante.
          </p>
        </div>
      </section>

      {/* QUÉ TRABAJAMOS */}
      <section className="bg-[#FAF8F5] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-3 text-center">
            Qué trabajamos juntos
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Dependiendo del momento de la startup, trabajamos aspectos como:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {workItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-gray-100 shadow-sm">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs mt-0.5" style={{ background: DOT_COLORS[i] }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 italic mt-8">
            Malas contrataciones, roles difusos, sobrecarga de responsabilidades — son errores evitables con la estructura adecuada.
          </p>
        </div>
      </section>

      {/* CÓMO ES */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-3 text-center">
            Cómo es el acompañamiento
          </h2>
          <p className="text-gray-500 text-center mb-10">Flexible y adaptado al momento de la empresa.</p>
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
            El primer paso es una conversación
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Entendemos el momento de tu startup y vemos si este acompañamiento encaja con lo que necesitas ahora.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-[#EFBC68] font-bold px-10 py-4 rounded-full text-lg hover:bg-[#FAF8F5] transition-colors duration-200 shadow-md"
          >
            Agendar sesión →
          </button>
        </div>
      </section>

      {/* QUÉ SACAS */}
      <section className="bg-[#FAF8F5] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A2420] mb-3 text-center">
            Qué sacas de este proceso
          </h2>
          <p className="text-gray-500 text-center mb-10">Tras el acompañamiento, la startup debería contar con:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {outcomeItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 flex items-start gap-4 border-l-4 shadow-sm" style={{ borderColor: DOT_COLORS[i] }}>
                <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5" style={{ background: DOT_COLORS[i] }} />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B8F71] font-semibold mt-8">
            Menos improvisación, más estructura. Desde el principio.
          </p>
        </div>
      </section>

      {/* ESTO NO ES PARA TI */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-[#919F89]/30 rounded-3xl p-8 text-center">
            <div className="flex justify-center gap-2 mb-6">
              {DOT_COLORS.map((color, i) => (
                <div key={i} className="w-3 h-3 rounded-full" style={{ background: color }} />
              ))}
            </div>
            <h2 className="text-xl font-bold text-[#2A2420] mb-4">Esto no es para ti si...</h2>
            <p className="text-gray-600 mb-4">
              Buscas una solución rápida o un consultor que llegue con un manual cerrado. Este acompañamiento requiere que la empresa quiera implicarse en el proceso.
            </p>
            <p className="text-[#919F89] font-semibold">
              El formato se define a partir de una primera conversación, no antes.
            </p>
          </div>
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
                <h2 className="text-2xl font-bold text-[#EFBC68] mb-2 text-center">Agenda una sesión</h2>
                <p className="text-gray-600 text-center mb-6">Cuéntanos sobre tu startup y nos ponemos en contacto contigo.</p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                  <label className="font-semibold">Nombre de la empresa *</label>
                  <input type="text" name="empresa" value={form.empresa} onChange={handleChange} className={`p-3 rounded-xl border ${errors.empresa ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="Tu empresa" />
                  {errors.empresa && <span className="text-red-500 text-sm">{errors.empresa}</span>}

                  <label className="font-semibold">Nombre de contacto *</label>
                  <input type="text" name="contacto" value={form.contacto} onChange={handleChange} className={`p-3 rounded-xl border ${errors.contacto ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="Tu nombre" />
                  {errors.contacto && <span className="text-red-500 text-sm">{errors.contacto}</span>}

                  <label className="font-semibold">Correo electrónico *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className={`p-3 rounded-xl border ${errors.email ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="tucorreo@empresa.com" />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                  <label className="font-semibold">Tamaño del equipo</label>
                  <select name="empleados" value={form.empleados} onChange={handleChange} className="p-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#EFBC68]">
                    <option value="">Selecciona una opción</option>
                    <option value="1-5">1-5 personas</option>
                    <option value="6-15">6-15 personas</option>
                    <option value="16-50">16-50 personas</option>
                    <option value="50+">Más de 50 personas</option>
                  </select>

                  <label className="font-semibold">¿En qué podemos ayudarte? *</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} className={`p-3 rounded-xl border ${errors.mensaje ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-[#EFBC68]`} placeholder="Cuéntanos brevemente el momento de tu startup y qué necesitas" rows={4} />
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

export default Empresa;
