type Question = {
  id: number;
  question: string;
  options: { id: string; text: string }[];
};

const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál de estas actividades disfrutas más?",
    options: [
      { id: "a", text: "Hablar y comunicar ideas" },
      { id: "b", text: "Resolver problemas y analizar datos" },
      { id: "c", text: "Crear cosas nuevas y diseñar" },
    ],
  },
  {
    id: 2,
    question: "¿Prefieres trabajar en un ambiente:",
    options: [
      { id: "a", text: "Dinámico y cambiante" },
      { id: "b", text: "Organizado y estructurado" },
      { id: "c", text: "Flexible y creativo" },
    ],
  },
  {
    id: 3,
    question: "¿Cómo te describirías mejor?",
    options: [
      { id: "a", text: "Extrovertido y sociable" },
      { id: "b", text: "Analítico y detallista" },
      { id: "c", text: "Imaginativo y curioso" },
    ],
  },
  {
    id: 4,
    question: "¿Qué prefieres hacer en un proyecto?",
    options: [
      { id: "a", text: "Coordinar y comunicar con el equipo" },
      { id: "b", text: "Planificar y controlar los detalles" },
      { id: "c", text: "Diseñar y proponer ideas nuevas" },
    ],
  },
  {
    id: 5,
    question: "¿Qué te motiva más en el trabajo?",
    options: [
      { id: "a", text: "Interacción con personas" },
      { id: "b", text: "Resolución de problemas complejos" },
      { id: "c", text: "Innovación y creatividad" },
    ],
  },
  {
    id: 6,
    question: "¿Cómo prefieres aprender?",
    options: [
      { id: "a", text: "Hablando con otros y practicando" },
      { id: "b", text: "Estudiando teoría y datos" },
      { id: "c", text: "Experimentando y creando" },
    ],
  },
  {
    id: 7,
    question: "¿Qué te resulta más atractivo?",
    options: [
      { id: "a", text: "Liderar grupos y proyectos" },
      { id: "b", text: "Investigar y analizar información" },
      { id: "c", text: "Desarrollar nuevas ideas o productos" },
    ],
  },
  {
    id: 8,
    question: "¿Qué te importa más en un trabajo?",
    options: [
      { id: "a", text: "Relaciones interpersonales" },
      { id: "b", text: "Estabilidad y orden" },
      { id: "c", text: "Libertad para innovar" },
    ],
  },
  {
    id: 9,
    question: "¿Cómo te ves en 5 años?",
    options: [
      { id: "a", text: "Como un comunicador o líder" },
      { id: "b", text: "Como un experto técnico o analista" },
      { id: "c", text: "Como un creativo o emprendedor" },
    ],
  },
  {
    id: 10,
    question: "¿Qué tipo de tareas prefieres?",
    options: [
      { id: "a", text: "Interacción y trabajo en equipo" },
      { id: "b", text: "Análisis y planificación detallada" },
      { id: "c", text: "Diseño y creación de cosas nuevas" },
    ],
  },
  {
    id: 11,
    question: "¿Cuál es tu estilo de trabajo?",
    options: [
      { id: "a", text: "Activo y orientado a las personas" },
      { id: "b", text: "Metódico y basado en datos" },
      { id: "c", text: "Explorador y experimental" },
    ],
  },
  {
    id: 12,
    question: "¿Qué disfrutas hacer en tu tiempo libre?",
    options: [
      { id: "a", text: "Socializar y participar en eventos" },
      { id: "b", text: "Leer y aprender cosas nuevas" },
      { id: "c", text: "Crear arte, música o proyectos" },
    ],
  },
  {
    id: 13,
    question: "¿Qué te atrae más de un proyecto?",
    options: [
      { id: "a", text: "Trabajar con gente y liderar" },
      { id: "b", text: "Resolver problemas técnicos" },
      { id: "c", text: "Proponer ideas y cambios" },
    ],
  },
  {
    id: 14,
    question: "¿Qué prefieres en la rutina diaria?",
    options: [
      { id: "a", text: "Variedad y contacto con personas" },
      { id: "b", text: "Estructura y claridad" },
      { id: "c", text: "Flexibilidad para experimentar" },
    ],
  },
  {
    id: 15,
    question: "¿Cuál de estas frases te describe mejor?",
    options: [
      { id: "a", text: "Me gusta ayudar y colaborar" },
      { id: "b", text: "Me gusta entender y analizar" },
      { id: "c", text: "Me gusta inventar y crear" },
    ],
  },
  {
    id: 16,
    question: "¿Qué tipo de ambiente prefieres para trabajar?",
    options: [
      { id: "a", text: "Social y comunicativo" },
      { id: "b", text: "Calmado y organizado" },
      { id: "c", text: "Innovador y flexible" },
    ],
  },
  {
    id: 17,
    question: "¿Cómo afrontas los desafíos?",
    options: [
      { id: "a", text: "Busco ayuda y colaboración" },
      { id: "b", text: "Analizo y planifico soluciones" },
      { id: "c", text: "Busco nuevas formas y enfoques" },
    ],
  },
  {
    id: 18,
    question: "¿Qué te gusta más hacer en un equipo?",
    options: [
      { id: "a", text: "Comunicar y motivar" },
      { id: "b", text: "Organizar y controlar" },
      { id: "c", text: "Proponer ideas y mejoras" },
    ],
  },
  {
    id: 19,
    question: "¿Qué te resulta más gratificante?",
    options: [
      { id: "a", text: "Ver que las personas se entienden" },
      { id: "b", text: "Resolver problemas complejos" },
      { id: "c", text: "Crear algo nuevo y original" },
    ],
  },
  {
    id: 20,
    question: "¿Cuál es tu forma preferida de trabajo?",
    options: [
      { id: "a", text: "Colaborativa y social" },
      { id: "b", text: "Independiente y analítica" },
      { id: "c", text: "Flexible y creativa" },
    ],
  },
];

export default questions;

// Tipos
export type CategoryKey = 'C' | 'H' | 'A' | 'S' | 'I' | 'D' | 'E';

export const QUESTIONS: { [key: number]: string } = {
  1: "¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?",
  2: "¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?",
  3: "¿Te gustaría dirigir un proyecto de urbanización en tu provincia?",
  4: "¿A una frustración siempre oponés un pensamiento positivo?",
  5: "¿Te dedicarías a socorrer a personas accidentadas o atacadas por asaltantes?",
  6: "¿Cuando eras chico te interesaba saber como estaban construidos tus juguetes?",
  7: "¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?",
  8: "¿Escuchas atentamente los problemas que te plantean tus amigos?",
  9: "¿Te ofrecerías para explicar a tus compañeros un determinado tema que ellos no entendieron?",
  10: "¿Eres exigente y crítico con tu equipo de trabajo?",
  11: "¿Te atrae armar rompecabezas o puzzles?",
  12: "¿Puedes establecer la diferencia conceptual entre macroeconomía y microeconomía?",
  13: "¿Usar uniforme te hace sentir distinto, importante?",
  14: "¿Participarías como profesional en un espectáculo de acrobacia aérea?",
  15: "¿Organizas tu dinero de manera que te alcance hasta el próximo cobro?",
  16: "¿Convences fácilmente a otras personas sobre la validez de tus argumentos?",
  17: "¿Estás informado sobre los nuevos descubrimientos de la Teoría del Big-Bang?",
  18: "¿Ante una situación de emergencia actuas rápidamente?",
  19: "¿Cuando tienes que resolver un problema matemático, perseverás hasta encontrar la solución?",
  20: "¿Si te convocara tu club preferido para planificar, organizar y dirigir un campo de deportes, aceptarías?",
  21: "¿Eres el que pone un toque de alegría en las fiestas?",
  22: "¿Crees que los detalles son tan importantes como el todo?",
  23: "¿Te sentirías a gusto trabajando en un ámbito hospitalario?",
  24: "¿Te gustaría participar para mantener el orden ante grandes desórdenes y cataclismos?",
  25: "¿Pasarías varias horas leyendo algún libro de tu interés?",
  26: "¿Planificás detalladamente tus trabajos antes de empezar?",
  27: "¿Entablás una relación casi personal con tu computadora?",
  28: "¿Disfrutás modelando con arcilla?",
  29: "¿Ayudás habitualmente a los no videntes a cruzar la calle?",
  30: "¿Considerás importante que desde la escuela primaria se fomente la actitud crítica y la participación activa?",
  31: "¿Aceptarías que las mujeres formaran parte de las fuerzas armadas bajo las mismas normas que los hombres?",
  32: "¿Te gustaría crear nuevas técnicas para descubrir las patologías de algunas enfermedades a través del microscopio?",
  33: "¿Participarías en una campaña de prevención contra la enfermedad de Chagas?",
  34: "¿Te interesan los temas relacionados al pasado y a la evolución del hombre?",
  35: "¿Te incluirías en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?",
  36: "¿Fuera de los horarios escolares, dedicás algún día de la semana a la realización de actividades corporales?",
  37: "¿Te interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas y de peligro?",
  38: "¿Te ofrecerías para colaborar como voluntario en los gabinetes espaciales de la NASA?",
  39: "¿Te gusta más el trabajo manual que el trabajo intelectual?",
  40: "¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tu servicio como profesional?",
  41: "¿Participarías de una investigación sobre la violencia en el futbol?",
  42: "¿Te gustaría trabajar en un laboratorio mientras estudias?",
  43: "¿Arriesgarías tu vida para salvar la vida de otro que no conoces?",
  44: "¿Te agradaría hacer un curso de primeros auxilios?",
  45: "¿Tolerarías empezar tantas veces como fuere necesario hasta obtener el logro deseado?",
  46: "¿Distribuyes tus horarios del día adecuadamente para poder hacer todo lo planeado?",
  47: "¿Harías un curso para aprender a fabricar los instrumentos y/o piezas de las máquinas con que trabajas?",
  48: "¿Elegirías una profesión en la tuvieras que estar algunos meses alejado de tu familia, por ejemplo el marino?",
  49: "¿Te radicarías en una zona agrícola-ganadera para desarrollar tus actividades como profesional?",
  50: "¿Cuando estás en un grupo trabajando, te entusiasma producir ideas originales y que sean tenidas en cuenta?",
  51: "¿Te resulta fácil coordinar un grupo de trabajo?",
  52: "¿Te resultó interesante el estudio de las ciencias biológicas?",
  53: "¿Si una gran empresa solicita un profesional como gerente de comercialización, te sentirías a gusto desempeñando ese rol?",
  54: "¿Te sumarías a un proyecto nacional para desarrollar la principal fuente de recursos de tu provincia?",
  55: "¿Tienes interés por saber cuáles son las causas que determinan ciertos fenómenos, aunque saberlo no altere tu vida?",
  56: "¿Descubriste algún filósofo o escritor que haya expresado tus mismas ideas con antelación?",
  57: "¿Desearías que te regalen algún instrumento musical para tu cumpleaños?",
  58: "¿Aceptarías colaborar con el cumplimiento de las normas en lugares públicos?",
  59: "¿Crees que tus ideas son importantes, y haces todo lo posible para ponerlas en práctica?",
  60: "¿Cuando se descompone un artefacto en tu casa, te dispones prontamente a repararlo?",
  61: "¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y la fauna en extinción?",
  62: "¿Acostumbras a leer revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?",
  63: "¿Preservar las raíces culturales de nuestro país, te parece importante y necesario?",
  64: "¿Te gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?",
  65: "¿Te gustaría realizar tareas auxiliares en una nave, como por ejemplo izado y arriado de velas, pintura y conservación del casco, arreglo de averías, conservación de motores, etc.?",
  66: "¿Crees que un país debe poseer la más alta tecnología armamentista, a cualquier precio?",
  67: "¿La libertad y la justicia son valores fundamentales en tu vida?",
  68: "¿Aceptarías hacer una práctica remunerada en una industria de productos alimenticios en el área de control de calidad?",
  69: "¿Consideras que la salud pública debe ser prioritaria, gratuita y eficiente para todos?",
  70: "¿Te interesaría investigar sobre alguna nueva vacuna?",
  71: "¿En un equipo de trabajo, prefieres el rol de coordinador?",
  72: "¿En una discusión entre amigos, te ofreces como mediador?",
  73: "¿Estás de acuerdo con la formación de un cuerpo de soldados profesionales?",
  74: "¿Lucharías por una causa justa hasta las últimas consecuencias?",
  75: "¿Te gustaría investigar científicamente sobre cultivos agrícolas?",
  76: "¿Harías un nuevo diseño de una prenda pasada de moda, ante una reunión imprevista?",
  77: "¿Visitarías un observatorio astronómico para conocer en acción el funcionamiento de los aparatos?",
  78: "¿Dirigirías el área de importación y exportación de una empresa?",
  79: "¿Te inhibes al entrar a un lugar nuevo con gente desconocida?",
  80: "¿Te gratificaría el trabajar con niños?",
  81: "¿Harías el diseño de un afiche para una campaña contra el sida?",
  82: "¿Dirigirías un grupo de teatro independiente?",
  83: "¿Enviarías tu currículum a una empresa automotriz que solicita gerente para su área de producción?",
  84: "¿Participarías en un grupo de defensa internacional dentro de alguna fuerza armada?",
  85: "¿Te costearías tus estudios trabajando en una auditoría?",
  86: "¿Eres de los que defiendes causas perdidas?",
  87: "¿Ante una emergencia epidémica participarías en una campaña brindando tu ayuda?",
  88: "¿Sabrías responder qué significa ADN y ARN?",
  89: "¿Elegirías una carrera en la que el uso de un idioma extranjero sea una herramienta de trabajo?",
  90: "¿Trabajar con objetos te resulta más gratificante que trabajar con personas?",
  91: "¿Te resultaría gratificante ser asesor contable en una empresa reconocida?",
  92: "¿Ante un llamado solidario, te ofrecerías para cuidar a un enfermo?",
  93: "¿Te atrae investigar sobre los misterios del universo, por ejemplo los agujeros negros?",
  94: "¿El trabajo individual te resulta más rápido y efectivo que el trabajo grupal?",
  95: "¿Dedicarías parte de tu tiempo a ayudar a personas en situación de vulnerabilidad?",
  96: "¿Cuando eliges tu ropa o decoras un ambiente, tienes en cuenta la combinación de los colores, las telas o el estilo de los muebles?",
  97: "¿Te gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?",
  98: "¿Sabes qué es el PBI?",
};

export const QUESTION_TO_INTEREST: { [key: number]: CategoryKey } = {
  98: 'C', 12: 'C', 64: 'C', 53: 'C', 85: 'C', 1: 'C', 78: 'C', 20: 'C', 71: 'C', 91: 'C',
  9: 'H', 34: 'H', 80: 'H', 25: 'H', 95: 'H', 67: 'H', 41: 'H', 74: 'H', 56: 'H', 89: 'H',
  21: 'A', 45: 'A', 96: 'A', 57: 'A', 28: 'A', 11: 'A', 50: 'A', 3: 'A', 81: 'A', 36: 'A',
  33: 'S', 92: 'S', 70: 'S', 8: 'S', 87: 'S', 62: 'S', 23: 'S', 44: 'S', 16: 'S', 52: 'S',
  75: 'I', 6: 'I', 19: 'I', 38: 'I', 60: 'I', 27: 'I', 83: 'I', 54: 'I', 47: 'I', 97: 'I',
  84: 'D', 31: 'D', 48: 'D', 73: 'D', 5: 'D', 65: 'D', 14: 'D', 37: 'D', 58: 'D', 24: 'D',
  77: 'E', 42: 'E', 88: 'E', 17: 'E', 93: 'E', 32: 'E', 68: 'E', 49: 'E', 35: 'E', 61: 'E',
};

export const QUESTION_TO_APTITUDE: { [key: number]: CategoryKey } = {
  15: 'C', 51: 'C', 2: 'C', 46: 'C',
  63: 'H', 30: 'H', 72: 'H', 86: 'H',
  22: 'A', 39: 'A', 76: 'A', 82: 'A',
  69: 'S', 40: 'S', 29: 'S', 4: 'S',
  26: 'I', 59: 'I', 90: 'I', 10: 'I',
  13: 'D', 66: 'D', 18: 'D', 43: 'D',
  94: 'E', 7: 'E', 79: 'E', 55: 'E',
};

export const CATEGORIES: { [key in CategoryKey]: { name: string; interests: string[]; aptitudes: string[] } } = {
  'C': {
    name: 'Carreras Administrativas y Contables',
    interests: ["Organizativo", "Supervisión", "Orden", "Análisis", "Colaboración", "Cálculo"],
    aptitudes: ["Persuasivo", "Objetivo", "Práctico", "Tolerante", "Responsable", "Ambicioso"]
  },
  'H': {
    name: 'Carreras Humanísticas y Sociales',
    interests: ["Precisión verbal", "Organización", "Lingüística", "Orden", "Justicia", "Relación de hechos"],
    aptitudes: ["Responsable", "Justo", "Conciliador", "Persuasivo", "Sagaz", "Imaginativo"]
  },
  'A': {
    name: 'Carreras Artísticas',
    interests: ["Estético", "Armónico", "Manual", "Visual", "Auditivo"],
    aptitudes: ["Sensible", "Imaginativo", "Creativo", "Detallista", "Innovador", "Intuitivo"]
  },
  'S': {
    name: 'Carreras de Medicina y Cs. de la Salud',
    interests: ["Asistir", "Investigativo", "Precisión", "Senso-Perceptivo", "Analítico", "Ayudar"],
    aptitudes: ["Altruista", "Solidario", "Paciente", "Comprensivo", "Respetuoso", "Persuasivo"]
  },
  'I': {
    name: 'Carreras de Ingeniería y Computación',
    interests: ["Cálculo", "Científico", "Manual", "Exacto", "Planificar"],
    aptitudes: ["Preciso", "Práctico", "Crítico", "Analítico", "Rígido"]
  },
  'D': {
    name: 'Carreras de Defensa y Seguridad',
    interests: ["Justicia", "Equidad", "Colaboración", "Espíritu de equipo", "Liderazgo"],
    aptitudes: ["Arriesgado", "Solidario", "Valiente", "Agresivo", "Persuasivo"]
  },
  'E': {
    name: 'Carreras de Ciencias Exactas y Agrarias',
    interests: ["Clasificar", "Numérico", "Análisis y Síntesis", "Organización", "Orden", "Investigación"],
    aptitudes: ["Metódico", "Analítico", "Observador", "Introvertido", "Paciente", "Seguro"]
  }
};
