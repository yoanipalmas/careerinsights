import React, { useEffect, useRef, useState } from "react";
import SessionSelector from "../components/SessionSelector";
import { submitFormspree } from "../utils/formspree";

const initialForm = {
  empresa: "",
  contacto: "",
  email: "",
  empleados: "",
  mensaje: "",
};

const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

const Empresa: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
      setSubmitted(false);
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
            People Strategy para startups en crecimiento
          </h1>

          <p className="text-gray-700 text-lg mb-4">
            El foco está en ayudar a la empresa a construir las bases humanas y organizativas que necesita para escalar sin improvisar.
          </p>

          <div className="text-gray-700 text-lg mb-6">
            <p className="mb-2">Dependiendo del momento de la startup, trabajamos aspectos como:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Definición de estructura mínima viable del equipo</li>
              <li>Claridad de roles y responsabilidades</li>
              <li>Criterios de contratación alineados con la etapa del proyecto</li>
              <li>Diseño de procesos básicos de onboarding</li>
              <li>Acompañamiento a founders en la toma de decisiones sobre personas</li>
              <li>Primeras prácticas de desarrollo de talento junior</li>
            </ul>
            <p className="mt-4">
              Nuestro objetivo es evitar errores comunes en fases tempranas que suelen generar fricción más adelante: malas contrataciones, roles difusos, sobrecarga de responsabilidades y falta de estructura mínima.
            </p>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Cómo es el acompañamiento</h2>
            <p className="mb-2">El formato es flexible y se adapta al momento de la empresa:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Diagnóstico inicial del estado actual del equipo</li>
              <li>Definición de prioridades según la fase de crecimiento</li>
              <li>Sesiones estratégicas con founders y personas clave</li>
              <li>Trabajo conjunto en la definición de estructura y roles</li>
              <li>Acompañamiento en decisiones clave de personas</li>
            </ul>
          </div>

          <div className="text-gray-700 text-lg mb-6">
            <h2 className="text-2xl font-bold text-logo-dos mb-3">Qué sacas de este proceso</h2>
            <p className="mb-2">Tras el acompañamiento, la startup debería contar con:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mayor claridad sobre su estructura actual y futura</li>
              <li>Roles mejor definidos y alineados con necesidades reales</li>
              <li>Criterios más claros para contratar</li>
              <li>Un onboarding más estructurado para nuevas incorporaciones</li>
              <li>Menos fricción en la gestión diaria del equipo</li>
            </ul>
          </div>

          <p className="text-gray-700 text-lg mb-6">
            El primer paso es una conversación inicial para entender el momento de la startup y ver si este tipo de acompañamiento encaja con sus necesidades actuales. A partir de ahí se define un formato de trabajo adaptado: proyecto puntual o acompañamiento durante una fase concreta de crecimiento.
          </p>

          <div className="w-full">
            <SessionSelector
              showHeading={false}
              variant="original"
              originalTitleOverrides={{
                session1: <>AGENDAR</>,
                talleres: (
                  <>
                    PEOPLE STRATEGY <br /> FOR SCALE UPS
                  </>
                ),
              }}
              originalOnClickOverrides={{
                session1: scrollToForm,
              }}
            />
          </div>
        </div>

        {/* Formulario de contacto para startups */}
        <div ref={formRef} id="formulario-startup" className="w-full bg-white border border-logo-dos rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-logo-dos mb-2 text-center">Agenda una sesión</h2>
          <p className="text-gray-600 text-center mb-6">Cuéntanos sobre tu startup y nos ponemos en contacto contigo.</p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>

            <label className="font-semibold">Nombre de la empresa *</label>
            <input
              type="text"
              name="empresa"
              value={form.empresa}
              onChange={handleChange}
              className={`p-2 rounded border ${errors.empresa ? "border-red-400" : "border-gray-300"}`}
              placeholder="Tu empresa"
            />
            {errors.empresa && <span className="text-red-500 text-sm">{errors.empresa}</span>}

            <label className="font-semibold">Nombre de contacto *</label>
            <input
              type="text"
              name="contacto"
              value={form.contacto}
              onChange={handleChange}
              className={`p-2 rounded border ${errors.contacto ? "border-red-400" : "border-gray-300"}`}
              placeholder="Tu nombre"
            />
            {errors.contacto && <span className="text-red-500 text-sm">{errors.contacto}</span>}

            <label className="font-semibold">Correo electrónico *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`p-2 rounded border ${errors.email ? "border-red-400" : "border-gray-300"}`}
              placeholder="tucorreo@empresa.com"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

            <label className="font-semibold">Tamaño del equipo</label>
            <select
              name="empleados"
              value={form.empleados}
              onChange={handleChange}
              className="p-2 rounded border border-gray-300 bg-white"
            >
              <option value="">Selecciona una opción</option>
              <option value="1-5">1-5 personas</option>
              <option value="6-15">6-15 personas</option>
              <option value="16-50">16-50 personas</option>
              <option value="50+">Más de 50 personas</option>
            </select>

            <label className="font-semibold">¿En qué podemos ayudarte? *</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              className={`p-2 rounded border ${errors.mensaje ? "border-red-400" : "border-gray-300"}`}
              placeholder="Cuéntanos brevemente el momento de tu startup y qué necesitas"
              rows={4}
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
              <span className="text-green-600 text-sm mt-2 text-center">¡Solicitud enviada! Nos pondremos en contacto pronto.</span>
            )}
            {submitError && (
              <span className="text-red-500 text-sm mt-2">{submitError}</span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Empresa;
