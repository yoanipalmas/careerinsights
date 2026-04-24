import React from "react";
import defineObjective from "../assets/image/define-objetive.svg";
import addCircle from "../assets/image/add-circule.svg";
import startHere from "../assets/image/start-here.svg";
import expand from "../assets/image/expand.svg";
import { Link } from "react-router-dom";
import Diana from "../assets/image/Diana.svg"

const DianaSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center px-6 py-4 bg-transparent">
            {/*Boton de volver*/}

            <div className="w-full max-w-7xl mx-auto mb-4 px-4 pt-4">
                <Link to="/" className="flex items-center text-logo-dos font-medium text-lg hover:underline transition">
                    <span className="text-2xl mr-1">←</span> Volver
                </Link>
            </div>

            {/* Sección inicial */}
            <div className="bg-white rounded-[48px] border border-logo-dos shadow-lg flex flex-col md:flex-row items-center max-w-7xl w-full p-12 mb-16">
                <div className="flex-1 flex flex-col justify-center items-start">
                    <h2 className="text-4xl font-bold mb-6 text-black">
                        ¿QUÉ ES LA TÉCNICA DIANA?
                    </h2>
                    <p className="text-gray-700 text-lg">
                        La Técnica Diana es un modelo de visualización inspirado en la estructura de un objetivo. Te ayuda a organizar tus ambiciones y a dar pasos realistas y factibles para alcanzarlas. <br /><br />
                        En el centro de la diana está tu objetivo ideal, ya sea un trabajo concreto, un estilo de vida o incluso un sueño a largo plazo. A partir de ese centro se dibujan círculos concéntricos donde se incluyen factores clave como el tiempo, la ubicación y los requisitos. <br /><br />
                        La belleza de esta técnica reside en su flexibilidad. Puedes empezar por algo pequeño y realista, ampliando gradualmente su alcance a medida que ganas confianza y recursos o vas cumpliendo los requisitos que planteaste en los círculos. <br /><br />
                        Esta herramienta puede usarse de manera global y reducir tu enfoque a medida que te acercas a tu diana.
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img src={Diana} alt="Técnica Diana" className="w-[80%] max-w-md" />
                </div>
            </div>

            {/* Título de pasos */}
            <h3 className="text-3xl font-bold text-center mb-10">
                Desglosemos paso a paso cómo funciona
            </h3>

            {/* Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
                {/* Card 1 */}
                <div className="flex flex-col md:flex-row items-center border border-logo-dos rounded-2xl shadow-md p-6 gap-6">
                    <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">DEFINE TU OBJETIVO IDEAL</h4>
                        <p className="text-gray-700 ">
                            Piensa en lo que realmente quieres. Escríbelo y colócalo en el centro de tu Diana. Sé lo más específico posible. Por ejemplo, si estás buscando trabajo, tu objetivo podría ser: “un trabajo remoto como Desarrollador Full Stack con horario flexible dentro de Madrid en los próximos 6 meses.”
                        </p>
                    </div>
                    <div className="w-full md:w-[40%] flex justify-center">
                        <img src={defineObjective} alt="Define objetivo" className="w-full h-auto" />
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col md:flex-row items-center border border-logo-dos rounded-2xl shadow-md p-6 gap-6">
                    <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">AÑADE EL SIGUIENTE CÍRCULO</h4>
                        <p className="text-gray-700 ">
                            Rodea tu objetivo con círculos que indiquen los factores que influyen en él. <br />
                            <strong>Tiempo</strong>: ¿Cuánto tiempo estás dispuesto a esperar o a trabajar para conseguir ese objetivo? <br />
                            <strong>Lugar</strong>: ¿Estás dispuesto a trasladarte o a trabajar a distancia? <br />
                            <strong>Requisitos</strong>: ¿Necesitas habilidades, certificaciones o experiencia específicas?
                        </p>
                    </div>
                    <div className="w-full md:w-[40%] flex justify-center">
                        <img src={addCircle} alt="Añade círculo" className="w-full h-auto" />
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col md:flex-row items-center border border-logo-dos rounded-2xl shadow-md p-6 gap-6">
                    <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">EMPIEZA DONDE ESTÁS</h4>
                        <p className="text-gray-700 ">
                            Empieza estableciendo objetivos pequeños y alcanzables en el corto plazo. Por ejemplo: postular a 3 empleos al día en un puesto de desarrollador remoto, hacer networking con 2 personas a la semana en LinkedIn o actualizar tu perfil de LinkedIn.
                        </p>
                    </div>
                    <div className="w-full md:w-[40%] flex justify-center">
                        <img src={startHere} alt="Empieza aquí" className="w-full h-auto" />
                    </div>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col md:flex-row items-center border border-logo-dos rounded-2xl shadow-md p-6 gap-6">
                    <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">AMPLÍA TU ALCANCE</h4>
                        <p className="text-gray-700 ">
                            A medida que vayas alcanzando hitos o te sientas con más confianza, puedes ampliar tu búsqueda o tus propuestas de trabajo en función de tu objetivo ideal. Esto te ayuda a mantener la motivación y ganar nuevas competencias para aumentar tu competitividad.
                        </p>
                    </div>
                    <div className="w-full md:w-[40%] flex justify-center">
                        <img src={expand} alt="Amplía alcance" className="w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* ¡DA EL PRIMER PASO! */}
            <div className="mt-16 w-full max-w-7xl">
                <div className="flex flex-col md:flex-row items-start justify-between border border-logo-dos rounded-2xl p-8 shadow-md gap-6">
                    {/* Texto */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">¡DA EL PRIMER PASO!</h3>
                        <p className="text-gray-700 mb-6">
                            La Técnica Diana no sólo te ayuda a alcanzar objetivos, sino también en definir lo que realmente deseas y qué estás dispuesto a hacer para conseguirlo, teniendo en cuenta tu contexto y tus opciones reales. <br /><br />
                            Una vez que definas tu objetivo en el siguiente paso, practica esta técnica en conjunto con tus intereses y habilidades. Me encantará ver cómo estructuras tus objetivos. ¡Me cuentas!
                        </p>
                    </div>

                    {/* Botones */}
                    <div className="flex flex-col gap-6 md:w-[30%]">

                        <Link to={"https://www.linkedin.com/company/careerinsights-es"}>
                            {/* LINKEDIN */}
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-logo-cuatro translate-x-2 translate-y-2 z-0"></div>
                                <button className="relative w-full flex items-center justify-between px-6 py-3 rounded-full bg-white border border-blue-300 text-black font-semibold z-10 shadow hover:bg-logo-cuatro transition text-xl">
                                    LINKEDIN <span className="text-blue-500">→</span>
                                </button>
                            </div>
                        </Link>


                        {/* TIKTOK */}
                        <Link to={"https://www.tiktok.com/@career_in_sights?is_from_webapp=1&sender_device=pc"}>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-logo-dos translate-x-2 translate-y-2 z-0"></div>
                                <button className="relative w-full flex items-center justify-between px-6 py-3 rounded-full bg-white border border-yellow-300 text-black font-semibold z-10 shadow hover:bg-logo-dos transition text-xl">
                                    TIKTOK <span className="text-yellow-500">→</span>
                                </button>
                            </div>
                        </Link>

                        {/* EMAIL */}
                        <Link to={"mailto:talentandcareerses@gmail.com"}>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-logo-uno translate-x-2 translate-y-2 z-0"></div>
                                <button className="relative w-full flex items-center justify-between px-6 py-3 rounded-full bg-white border border-red-300 text-black font-semibold z-10 shadow hover:bg-logo-uno transition text-xl">
                                    EMAIL <span className="text-red-500">→</span>
                                </button>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DianaSection;