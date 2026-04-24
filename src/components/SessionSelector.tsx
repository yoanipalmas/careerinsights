import React from "react";
import { useNavigate } from "react-router-dom";

// Importa tus imágenes
import SesionImg from "../assets/image/Face to face-amico.svg";
import OrientacionImg from "../assets/image/User research-bro.svg";
import TalleresImg from "../assets/image/Seminar-bro.svg";
import StartupLifeImg from "../assets/image/Startup life-cuate.svg";

const sessionsCareer = [
  {
    title: <>JUNIOR</>,
    img: SesionImg,
    alt: "Junior",
    onClick: "/junior",
  },
  {
    title: <>SENIOR</>,
    img: OrientacionImg,
    alt: "Senior",
    onClick: "/senior",
  },
  {
    title: <>EMPRESA</>,
    img: TalleresImg,
    alt: "Empresa",
    onClick: "/empresa",
  },
  {
    title: (
      <>
        IT BASICS <br /> FOR EARLY TEAMS
      </>
    ),
    img: StartupLifeImg,
    alt: "IT Basics for Early Teams",
    onClick: "/it-basics",
  },
];

const sessionsOriginal = [
  {
    key: "session1",
    title: (
      <>
        SESION <br /> 1 TO 1
      </>
    ),
    img: SesionImg,
    alt: "Sesión 1 a 1",
    onClick: "/sesion-1a1",
  },
  {
    key: "test",
    title: (
      <>
        TEST DE <br /> ORIENTACIÓN LABORAL
      </>
    ),
    img: OrientacionImg,
    alt: "Orientación laboral",
    onClick: "/test",
  },
  {
    key: "talleres",
    title: (
      <>
        TALLERES & <br /> CHARLAS
      </>
    ),
    img: TalleresImg,
    alt: "Talleres y charlas",
    onClick: "/talleres-charlas",
  },
];

type SessionSelectorProps = {
  showHeading?: boolean;
  headingText?: string;
  variant?: "career" | "original";
  originalTitleOverrides?: {
    session1?: React.ReactNode;
    test?: React.ReactNode;
    talleres?: React.ReactNode;
  };
};

const SessionSelector: React.FC<SessionSelectorProps> = ({
  showHeading = true,
  headingText = "Reserva la sesión que encaja mejor contigo",
  variant = "career",
  originalTitleOverrides,
}) => {
  const navigate = useNavigate();
  const sessions =
    variant === "original"
      ? sessionsOriginal.map((session) => ({
          ...session,
          title: originalTitleOverrides?.[session.key as "session1" | "test" | "talleres"] ?? session.title,
        }))
      : sessionsCareer;
  return (
    <section id="servicios" className="w-full flex flex-col items-center py-8">
      {showHeading && (
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 font-quicksand">
          {headingText}
        </h2>
      )}
      <div className="flex flex-col md:flex-row md:flex-nowrap gap-8 justify-center items-center w-full">
        {sessions.map((session, idx) => (
          <div
            key={idx}
            className={
              `bg-white rounded-2xl border border-color-logo-tres flex flex-col items-center p-8 w-80 h-[360px] cursor-pointer transition-shadow duration-300 font-ubuntu-regular shadow-md hover:shadow-[8px_8px_0_0_var(--color-logo-tres)]`
            }
            style={{ borderColor: "var(--color-logo-tres)" }}
            onClick={session.onClick ? () => navigate(session.onClick) : undefined}
          >
            <img src={session.img} alt={session.alt} className="mb-6 h-48" />
            <div className="text-xl font-bold text-center font-quicksand min-h-[72px] flex items-center justify-center">
              {session.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SessionSelector; 