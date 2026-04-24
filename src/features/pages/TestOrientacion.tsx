import { useState } from "react";
import {
  QUESTIONS,
  QUESTION_TO_INTEREST,
  QUESTION_TO_APTITUDE,
  CATEGORIES,
} from "../data/questions";
import type { CategoryKey } from "../data/questions";
import { getTopCareers } from "../data/careers";
import { submitFormspree } from "../../utils/formspree";
import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const TOTAL_QUESTIONS = Object.keys(QUESTIONS).length;

interface StudentData {
  nombre: string;
  email: string;
  edad: string;
  genero: string;
  ubicacion: string;
}

const initialStudent: StudentData = {
  nombre: "",
  email: "",
  edad: "",
  genero: "",
  ubicacion: "",
};

const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

export default function TestOrientacion() {
  const [step, setStep] = useState<"intro" | "registro" | "test" | "result">("intro");
  const [student, setStudent] = useState<StudentData>(initialStudent);
  const [studentErrors, setStudentErrors] = useState<Partial<StudentData>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const qids = Object.keys(QUESTIONS).map(Number);
  const currentQid = qids[currentIndex];
  const progress = Math.round((currentIndex / TOTAL_QUESTIONS) * 100);

  // --- Registro ---
  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    setStudentErrors({ ...studentErrors, [e.target.name]: "" });
  };

  const handleRegistroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Partial<StudentData> = {};
    if (!student.nombre) errors.nombre = "Obligatorio";
    if (!student.email) errors.email = "Obligatorio";
    else if (!validateEmail(student.email)) errors.email = "Correo inválido";
    if (!student.edad) errors.edad = "Obligatorio";
    if (!student.genero) errors.genero = "Obligatorio";
    if (!student.ubicacion) errors.ubicacion = "Obligatorio";
    setStudentErrors(errors);
    if (Object.keys(errors).length === 0) setStep("test");
  };

  // --- Test ---
  const handleSelect = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQid]: value }));
    setTimeout(() => {
      if (currentIndex < TOTAL_QUESTIONS - 1) {
        setCurrentIndex((i) => i + 1);
      } else {
        setStep("result");
        sendResults();
      }
    }, 350);
  };

  const handleNext = () => {
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setStep("result");
      sendResults();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  // --- Resultados ---
  const getResults = () => {
    const interestScores: { [key in CategoryKey]?: number } = {};
    const aptitudeScores: { [key in CategoryKey]?: number } = {};
    for (const qidStr in answers) {
      const qid = Number(qidStr);
      if (answers[qid] === "yes") {
        if (QUESTION_TO_INTEREST[qid]) {
          const cat = QUESTION_TO_INTEREST[qid];
          interestScores[cat] = (interestScores[cat] || 0) + 1;
        }
        if (QUESTION_TO_APTITUDE[qid]) {
          const cat = QUESTION_TO_APTITUDE[qid];
          aptitudeScores[cat] = (aptitudeScores[cat] || 0) + 1;
        }
      }
    }
    let topInterest: CategoryKey | null = null;
    let topInterestScore = 0;
    for (const cat in interestScores) {
      if ((interestScores[cat as CategoryKey] || 0) > topInterestScore) {
        topInterest = cat as CategoryKey;
        topInterestScore = interestScores[cat as CategoryKey] || 0;
      }
    }
    let topAptitude: CategoryKey | null = null;
    let topAptitudeScore = 0;
    for (const cat in aptitudeScores) {
      if ((aptitudeScores[cat as CategoryKey] || 0) > topAptitudeScore) {
        topAptitude = cat as CategoryKey;
        topAptitudeScore = aptitudeScores[cat as CategoryKey] || 0;
      }
    }
    return { topInterest, topInterestScore, topAptitude, topAptitudeScore };
  };

  const results = getResults();

  const SOFT_SKILLS: Record<CategoryKey, string[]> = {
    C: ["Organización", "Liderazgo", "Negociación", "Toma de decisiones", "Orientación a resultados"],
    H: ["Empatía", "Escucha activa", "Comunicación", "Trabajo en equipo", "Resolución de conflictos"],
    A: ["Creatividad", "Pensamiento original", "Observación", "Sensibilidad estética", "Apertura al cambio"],
    S: ["Vocación de servicio", "Paciencia", "Trabajo bajo presión", "Atención al detalle", "Empatía"],
    I: ["Pensamiento analítico", "Resolución de problemas", "Precisión", "Pensamiento lógico", "Perseverancia"],
    D: ["Disciplina", "Responsabilidad", "Trabajo en equipo", "Liderazgo", "Gestión del estrés"],
    E: ["Curiosidad intelectual", "Pensamiento crítico", "Rigor", "Investigación", "Atención al detalle"],
  };

  const topSoftSkills: string[] = (() => {
    const skills = new Set<string>();
    if (results.topInterest) SOFT_SKILLS[results.topInterest].forEach(s => skills.add(s));
    if (results.topAptitude) SOFT_SKILLS[results.topAptitude].forEach(s => skills.add(s));
    return Array.from(skills).slice(0, 6);
  })();

  const sendResults = async () => {
    setSending(true);
    const { topInterest, topAptitude } = getResults();
    const resumen = `
Nombre: ${student.nombre}
Email: ${student.email}
Edad: ${student.edad}
Género: ${student.genero}
Ubicación: ${student.ubicacion}

Interés dominante: ${topInterest ? CATEGORIES[topInterest].name : "N/A"} (${topInterest || ""})
Aptitud dominante: ${topAptitude ? CATEGORIES[topAptitude].name : "N/A"} (${topAptitude || ""})
    `.trim();

    // Enviar al alumno por EmailJS
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { to_name: student.nombre, to_email: student.email, result: resumen },
        USER_ID
      );
      setSent(true);
    } catch (_) {
      setEmailError(true);
    }

    // Enviar al admin por Formspree
    try {
      await submitFormspree(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        form: "test-chaside",
        nombre: student.nombre,
        email: student.email,
        edad: student.edad,
        genero: student.genero,
        ubicacion: student.ubicacion,
        interes_dominante: topInterest ? `${CATEGORIES[topInterest].name} (${topInterest})` : "N/A",
        aptitud_dominante: topAptitude ? `${CATEGORIES[topAptitude].name} (${topAptitude})` : "N/A",
      });
    } catch (_) {}

    setSending(false);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setStudent(initialStudent);
    setSent(false);
    setStep("intro");
  };

  // --- INTRO ---
  if (step === "intro") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Test CHASIDE de Orientación Vocacional</h1>
          <p className="mb-4 text-lg text-gray-600">
            Este test te ayudará a identificar tus intereses y aptitudes profesionales y a descubrir las carreras que mejor encajan contigo.
          </p>
          <div className="flex justify-center gap-8 mb-6 text-sm text-gray-500">
            <span>📋 <strong>98 preguntas</strong></span>
            <span>⏱ <strong>10-15 minutos</strong></span>
          </div>
          <button
            onClick={() => setStep("registro")}
            className="px-8 py-3 bg-logo-dos hover:bg-logo-cuatro text-white rounded-full font-semibold transition"
          >
            Comenzar
          </button>
        </div>
      </div>
    );
  }

  // --- REGISTRO ---
  if (step === "registro") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Antes de empezar</h2>
          <p className="text-gray-500 mb-6">Necesitamos algunos datos para enviarte tus resultados.</p>
          <form onSubmit={handleRegistroSubmit} className="flex flex-col gap-4" noValidate>
            <div>
              <label className="font-semibold block mb-1">Nombre completo *</label>
              <input
                type="text"
                name="nombre"
                value={student.nombre}
                onChange={handleStudentChange}
                placeholder="Tu nombre"
                className={`w-full p-2 rounded border ${studentErrors.nombre ? "border-red-400" : "border-gray-300"}`}
              />
              {studentErrors.nombre && <span className="text-red-500 text-sm">{studentErrors.nombre}</span>}
            </div>

            <div>
              <label className="font-semibold block mb-1">Correo electrónico *</label>
              <input
                type="email"
                name="email"
                value={student.email}
                onChange={handleStudentChange}
                placeholder="tucorreo@email.com"
                className={`w-full p-2 rounded border ${studentErrors.email ? "border-red-400" : "border-gray-300"}`}
              />
              {studentErrors.email && <span className="text-red-500 text-sm">{studentErrors.email}</span>}
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="font-semibold block mb-1">Edad *</label>
                <input
                  type="number"
                  name="edad"
                  value={student.edad}
                  onChange={handleStudentChange}
                  placeholder="Ej: 17"
                  min={12}
                  max={99}
                  className={`w-full p-2 rounded border ${studentErrors.edad ? "border-red-400" : "border-gray-300"}`}
                />
                {studentErrors.edad && <span className="text-red-500 text-sm">{studentErrors.edad}</span>}
              </div>

              <div className="flex-1">
                <label className="font-semibold block mb-1">Género *</label>
                <select
                  name="genero"
                  value={student.genero}
                  onChange={handleStudentChange}
                  className={`w-full p-2 rounded border bg-white ${studentErrors.genero ? "border-red-400" : "border-gray-300"}`}
                >
                  <option value="">Selecciona</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="No binario">No binario</option>
                  <option value="Prefiero no decir">Prefiero no decir</option>
                </select>
                {studentErrors.genero && <span className="text-red-500 text-sm">{studentErrors.genero}</span>}
              </div>
            </div>

            <div>
              <label className="font-semibold block mb-1">Ciudad / Provincia *</label>
              <input
                type="text"
                name="ubicacion"
                value={student.ubicacion}
                onChange={handleStudentChange}
                placeholder="Ej: Madrid, Barcelona..."
                className={`w-full p-2 rounded border ${studentErrors.ubicacion ? "border-red-400" : "border-gray-300"}`}
              />
              {studentErrors.ubicacion && <span className="text-red-500 text-sm">{studentErrors.ubicacion}</span>}
            </div>

            <button
              type="submit"
              className="mt-2 bg-logo-dos text-white font-bold py-3 rounded-full hover:bg-logo-cuatro transition"
            >
              Empezar el test →
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- TEST ---
  if (step === "test") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">Pregunta {currentIndex + 1} de {TOTAL_QUESTIONS}</span>
            <span className="text-sm text-gray-500">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-logo-dos h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mb-6 text-lg font-semibold text-gray-800">{currentQid}. {QUESTIONS[currentQid]}</p>
          <div className="flex flex-col gap-4">
            {["yes", "no"].map((val) => (
              <label
                key={val}
                className={`cursor-pointer rounded-xl border p-4 flex items-center transition
                  ${answers[currentQid] === val
                    ? "bg-logo-dos border-logo-dos text-white"
                    : "bg-white border-gray-300 hover:bg-gray-50"
                  }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQid}`}
                  value={val}
                  checked={answers[currentQid] === val}
                  onChange={() => handleSelect(val)}
                  className="mr-4"
                />
                {val === "yes" ? "Sí" : "No"}
              </label>
            ))}
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-full font-semibold transition
                ${currentIndex === 0 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              ← Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={!answers[currentQid]}
              className={`px-6 py-2 rounded-full font-semibold transition
                ${answers[currentQid]
                  ? "bg-logo-dos hover:bg-logo-cuatro text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
            >
              {currentIndex === TOTAL_QUESTIONS - 1 ? "Finalizar ✓" : "Siguiente →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RESULTADO ---
  const topCareers = results.topInterest ? getTopCareers(results.topInterest) : [];

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50 py-12">
      <div className="w-full max-w-3xl">
        {/* Cabecera resultado */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-6 text-center">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">¡Test completado, {student.nombre}!</h2>
          {sent ? (
            <p className="text-green-600 text-sm mb-4">✓ Hemos enviado tu resultado a {student.email}</p>
          ) : sending ? (
            <p className="text-gray-400 text-sm mb-4">Enviando resultados...</p>
          ) : emailError ? (
            <p className="text-orange-500 text-sm mb-4">⚠️ No pudimos enviar el correo. Descarga tus resultados en PDF.</p>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {results.topInterest && (
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-left">
                <p className="text-xs text-orange-400 font-semibold uppercase mb-1">Interés dominante</p>
                <p className="font-bold text-lg text-gray-800">{CATEGORIES[results.topInterest].name}</p>
                <p className="text-sm text-gray-500 mt-1">{CATEGORIES[results.topInterest].interests.slice(0, 3).join(", ")}</p>
              </div>
            )}
            {results.topAptitude && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-left">
                <p className="text-xs text-blue-400 font-semibold uppercase mb-1">Aptitud dominante</p>
                <p className="font-bold text-lg text-gray-800">{CATEGORIES[results.topAptitude].name}</p>
                <p className="text-sm text-gray-500 mt-1">{CATEGORIES[results.topAptitude].aptitudes.slice(0, 3).join(", ")}</p>
              </div>
            )}
          </div>
        </div>

        {/* Soft skills */}
        {topSoftSkills.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-1">Tus soft skills destacadas</h3>
            <p className="text-sm text-gray-400 mb-4">Basadas en tu perfil de intereses y aptitudes</p>
            <div className="flex flex-wrap gap-3">
              {topSoftSkills.map((skill, i) => (
                <span key={i} className="bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Carreras recomendadas */}
        {topCareers.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Carreras recomendadas para ti</h3>
            <div className="flex flex-col gap-4">
              {topCareers.map((career, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-800 text-lg">{career.title}</h4>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ml-2 whitespace-nowrap
                      ${career.jobDemand === "Alta" ? "bg-green-100 text-green-700" :
                        career.jobDemand === "Media" ? "bg-yellow-100 text-yellow-700" :
                        "bg-red-100 text-red-700"}`}>
                      Demanda {career.jobDemand}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{career.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                    <span>💰 {career.avgSalary}</span>
                    <span>🏢 {career.workEnvironment}</span>
                    <span className="col-span-2">🎓 {career.educationPath}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {career.topSkills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4 print:hidden">
          <button
            onClick={() => window.print()}
            className="px-8 py-3 bg-white border-2 border-logo-dos text-logo-dos hover:bg-orange-50 rounded-full font-semibold transition"
          >
            ⬇ Descargar resultados (PDF)
          </button>
          <button
            onClick={handleRestart}
            className="px-8 py-3 bg-logo-dos hover:bg-logo-cuatro text-white rounded-full font-semibold transition"
          >
            Repetir test
          </button>
        </div>
      </div>
    </div>
  );
}
