import { useState } from "react";
import {
  QUESTIONS,
  QUESTION_TO_INTEREST,
  QUESTION_TO_APTITUDE,
  CATEGORIES,
} from "../data/questions";
import type { CategoryKey } from "../data/questions";
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const TOTAL_QUESTIONS = Object.keys(QUESTIONS).length;

export default function TestOrientacion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const qids = Object.keys(QUESTIONS).map(Number);
  const currentQid = qids[currentIndex];
  const currentQuestion = QUESTIONS[currentQid];

  // Barra de progreso
  const progress = Math.round(((currentIndex) / TOTAL_QUESTIONS) * 100);

  const handleSelect = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQid]: value }));
  };

  const handleNext = () => {
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
    setShowResult(false);
  };

  // Lógica de cálculo de resultados
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
    // Top interest
    let topInterest: CategoryKey | null = null;
    let topInterestScore = 0;
    for (const cat in interestScores) {
      if ((interestScores[cat as CategoryKey] || 0) > topInterestScore) {
        topInterest = cat as CategoryKey;
        topInterestScore = interestScores[cat as CategoryKey] || 0;
      }
    }
    // Top aptitude
    let topAptitude: CategoryKey | null = null;
    let topAptitudeScore = 0;
    for (const cat in aptitudeScores) {
      if ((aptitudeScores[cat as CategoryKey] || 0) > topAptitudeScore) {
        topAptitude = cat as CategoryKey;
        topAptitudeScore = aptitudeScores[cat as CategoryKey] || 0;
      }
    }
    return {
      topInterest,
      topInterestScore,
      topAptitude,
      topAptitudeScore,
      interestScores,
      aptitudeScores,
    };
  };

  const results = getResults();

  const resumenDelResultado = `
Interés dominante: ${results.topInterest ? CATEGORIES[results.topInterest].name : 'N/A'} (${results.topInterest || ''})
Puntaje: ${results.topInterestScore}
Rasgos: ${results.topInterest ? CATEGORIES[results.topInterest].interests.join(", ") : ''}

Aptitud dominante: ${results.topAptitude ? CATEGORIES[results.topAptitude].name : 'N/A'} (${results.topAptitude || ''})
Puntaje: ${results.topAptitudeScore}
Rasgos: ${results.topAptitude ? CATEGORIES[results.topAptitude].aptitudes.join(", ") : ''}
`;

  const sendResultByEmail = () => {
    setSending(true);
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: 'Participante del Test',      
        email: email,
        result: resumenDelResultado,
      },
      USER_ID
    ).then(
      () => {
        setSent(true);
        setSending(false);
      },
      () => {
        alert('Error al enviar el email');
        setSending(false);
      }
    );
  };

  if (showIntro) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Test CHASIDE de Orientación Vocacional</h1>
          <p className="mb-4 text-lg">
            Este test te ayudará a identificar tus intereses y aptitudes profesionales según el modelo CHASIDE. 
            Responde sinceramente a cada pregunta para obtener un resultado personalizado.
          </p>
          <p className="mb-2 text-md">
            <strong>Número de preguntas:</strong> 98
          </p>
          <p className="mb-6 text-md">
            <strong>Tiempo estimado:</strong> 10-15 minutos
          </p>
          <button
            onClick={() => setShowIntro(false)}
            className="px-6 py-3 bg-[var(--color-logo-cuatro)] hover:bg-[var(--color-logo-tres)] text-white rounded-lg font-semibold transition"
          >
            Comenzar test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Test de Orientación Laboral</h1>
      {!showResult ? (
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
          {/* Barra de progreso */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
            <div
              className="bg-[var(--color-logo-cuatro)] h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mb-6 text-lg font-semibold">{currentQid}. {currentQuestion}</p>
          <div className="flex flex-col gap-4">
            {["yes", "no"].map((val) => (
              <label
                key={val}
                className={`cursor-pointer rounded-md border p-4 flex items-center
                  ${answers[currentQid] === val ? "bg-[#ffb7a1] border-[#ed7a6b] text-white" : "bg-white border-gray-300 hover:bg-gray-100"}
                `}
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
              className={`px-4 py-2 rounded-md font-semibold transition
                ${currentIndex === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}
              `}
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={!answers[currentQid]}
              className={`px-4 py-2 rounded-md font-semibold transition 
                ${answers[currentQid] ? "bg-[#ed7a6b] hover:bg-[#ffb7a1] text-white" : "bg-gray-300 cursor-not-allowed"}
              `}
            >
              {currentIndex === TOTAL_QUESTIONS - 1 ? "Finalizar" : "Siguiente"}
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">¡Test completado!</h2>
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Interés dominante:</h3>
            {results.topInterest ? (
              <>
                <p className="font-semibold text-[var(--color-logo-cuatro)]">{CATEGORIES[results.topInterest].name} ({results.topInterest})</p>
                <p className="text-sm">Puntaje: {results.topInterestScore}</p>
                <p className="text-sm mb-2">Rasgos: {CATEGORIES[results.topInterest].interests.join(", ")}</p>
              </>
            ) : <p>No hay interés dominante.</p>}
            <h3 className="text-lg font-bold mb-2 mt-4">Aptitud dominante:</h3>
            {results.topAptitude ? (
              <>
                <p className="font-semibold text-[var(--color-logo-cuatro)]">{CATEGORIES[results.topAptitude].name} ({results.topAptitude})</p>
                <p className="text-sm">Puntaje: {results.topAptitudeScore}</p>
                <p className="text-sm mb-2">Rasgos: {CATEGORIES[results.topAptitude].aptitudes.join(", ")}</p>
              </>
            ) : <p>No hay aptitud dominante.</p>}
          </div>
          {!sent ? (
            <div className="mt-6 flex flex-col items-center">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="border p-2 rounded mb-2 w-full max-w-xs"
                required
              />
              <button
                onClick={sendResultByEmail}
                disabled={sending || !email}
                className="bg-[var(--color-logo-cuatro)] text-white px-4 py-2 rounded"
              >
                {sending ? 'Enviando...' : 'Enviar resultado por email'}
              </button>
            </div>
          ) : (
            <p className="text-green-600 mt-4">¡Resultado enviado a tu correo!</p>
          )}
          <button
            onClick={handleRestart}
            className="mt-6 px-6 py-3 bg-[#ffb7a1] hover:bg-[#ed7a6b] rounded-lg font-semibold text-white transition"
          >
            Reiniciar Test
          </button>
        </div>
      )}
    </div>
  );
} 