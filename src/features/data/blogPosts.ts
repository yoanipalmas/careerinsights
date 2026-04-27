export type BlogPost = {
  title: string;
  excerpt: string;
  image?: string;
  url: string;
  slug: string;
  content?: string;
  videoUrl?: string;
  category: string;
  color: string;
  published?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Cómo diseñar tu primer equipo en una startup (antes de contratar)",
    slug: "como-disenar-tu-primer-equipo-en-una-startup",
    category: "Startups",
    color: "#85a9d2",
    url: "/blog/como-disenar-tu-primer-equipo-en-una-startup",
    excerpt:
      "Uno de los errores más frecuentes en las startups en fase inicial no es contratar mal, sino contratar sin haber diseñado previamente cómo debería funcionar el equipo.",
    published: true,
    content: `## Cómo diseñar tu primer equipo en una startup (antes de contratar)

Uno de los errores más frecuentes en las startups en fase inicial no es contratar mal, sino contratar sin haber diseñado previamente cómo debería funcionar el equipo.

Cuando una empresa empieza a crecer, la presión por avanzar rápido suele llevar a tomar decisiones de contratación impulsivas: se incorpora a alguien "porque hace falta ayuda", sin haber definido con claridad qué problema viene a resolver ese rol ni cómo encaja dentro de la estructura de la empresa.

El resultado suele ser el mismo: frustración, sobrecarga de responsabilidades, expectativas poco claras y, en muchos casos, rotación temprana.

## Cómo pivotar este proceso

### 1. Antes de pensar en personas, piensa en funciones

Toda startup tiene funciones críticas que deben cubrirse desde el inicio, aunque no haya una persona dedicada a cada una. Por ejemplo: Producto, Tecnología u Operaciones, Comercial / Crecimiento.

Cuando estas funciones no se definen, suelen repartirse de forma informal entre las personas que ya están en el equipo. Esto puede funcionar al principio, pero a medida que la empresa crece, la falta de claridad empieza a generar fricciones: tareas que se duplican, responsabilidades que nadie asume y decisiones que se retrasan.

Definir las funciones clave permite entender qué necesita realmente la empresa, independientemente de quién vaya a ocupar esos roles.

### 2. Un rol no es una persona (ni una lista infinita de tareas)

Otro error habitual es diseñar puestos en función de la persona que se tiene en mente, en lugar de diseñarlos en función de las necesidades reales del negocio.

Un rol bien definido debería responder a tres preguntas básicas:

- ¿Para qué existe este rol?
- ¿Qué impacto se espera que tenga en la empresa?
- ¿Cuáles son sus responsabilidades principales?

Cuando un rol se convierte en una lista interminable de tareas sin foco ni límites, lo más probable es que la persona que lo ocupe termine sobrecargada y sin una sensación clara de impacto. Esto no solo afecta al desempeño individual, sino también al funcionamiento del equipo en su conjunto.

### 3. Diseñar estructura no significa crear burocracia

Muchas startups evitan definir estructura por miedo a "volverse corporativas". Sin embargo, estructura no es sinónimo de rigidez. Al contrario: una estructura mínima bien pensada permite que las personas tengan más autonomía, porque saben qué se espera de ellas y dónde termina su responsabilidad.

Diseñar una estructura mínima viable implica:

- Clarificar qué áreas existen en la empresa
- Definir cómo se toman decisiones
- Establecer a quién corresponde cada tipo de responsabilidad

### 4. Contratar es una consecuencia, no el punto de partida

Cuando una startup define bien su estructura y sus roles, la contratación se vuelve mucho más sencilla. Deja de ser una búsqueda desesperada de "alguien que ayude" y pasa a ser una decisión informada sobre qué perfil aporta valor en este momento concreto del proyecto.

Además, este trabajo previo permite:

- Entrevistar mejor
- Evaluar con más criterio
- Reducir el riesgo de malas contrataciones
- Integrar más rápido a las nuevas incorporaciones

Contratar sin estructura suele ser rápido. Corregirlo después casi nunca lo es.

### 5. Diseñar hoy para no improvisar mañana

Las primeras contrataciones marcan el tono de cómo funcionará el equipo en el futuro. Las dinámicas que se establecen al inicio tienden a replicarse y amplificarse con el crecimiento.

**Invertir tiempo en diseñar el primer equipo es ganar sostenibilidad.**`,
  },
  {
    title: "El auge del 'Senior Fractional': datos sobre la descorporativización del talento en España",
    slug: "el-auge-del-senior-fractional",
    category: "Talento Senior",
    color: "#efbc68",
    url: "/blog/el-auge-del-senior-fractional",
    excerpt:
      "Cada vez más veo el estancamiento en perfiles con más de 10 años de experiencia. ¿Es por falta de competencias o por un cambio estructural en la demanda de las empresas?",
    published: true,
    content: `## El auge del "Senior Fractional": datos sobre la descorporativización del talento en España

Cada vez más veo en sesiones 1:1 o en LinkedIn el estancamiento en perfiles con más de 10 años de experiencia y todo el tiempo me pregunto: ¿es por la falta de competencias o por un cambio estructural en la demanda de las empresas?

Según los últimos indicadores de movilidad laboral, estamos ante la mayor migración de talento Senior hacia modelos de colaboración externa de la última década.

## Un poco de contexto en cifras

Mientras que la experiencia es un activo teórico, el mercado laboral español presenta una barrera de entrada vertical cada vez más alta. Según el Informe del Mercado Laboral de LHH y el Grupo Adecco, el talento mayor de 45 años enfrenta un riesgo crítico: más del 50% de los desempleados en esta franja de edad son de larga duración (más de un año en búsqueda activa).

Este "factor tiempo" no responde a la falta de actualización, sino a la rigidez de las estructuras corporativas que priorizan el coste de mantenimiento sobre el valor de la veteranía.

## El "Efecto Meseta"

Muchos profesionales llegan a una "meseta" donde el ROI (Retorno de Inversión) de su energía en la empresa es decreciente. Dedican el 65% de su jornada a la gestión política y burocrática, y solo el 35% a la resolución de problemas críticos, que es donde reside su verdadero valor.

## La transición a la carrera de portafolio (Portfolio Career)

Para el Senior que busca el siguiente paso, la solución técnica no es "buscar otro empleo igual", sino diversificar su valor en tres pilares:

- **Consultoría Estratégica:** Monetizar el "saber qué hacer" en momentos de crisis o cambio.
- **Fractional Roles:** Ocupar la dirección de un área (RRHH, Operaciones, Finanzas) en 2 o 3 empresas pequeñas simultáneamente.
- **Consejos Asesores (Advisory Boards):** Aportar visión de largo plazo sin la carga de la ejecución diaria.

El mercado de 2026 no castiga la edad, castiga la rigidez. La métrica de éxito para un Senior hoy es la transferibilidad de sus activos intelectuales. Aquellos que logran "empaquetar" su experiencia como una solución externa están viendo un incremento en su satisfacción profesional y, frecuentemente, en sus ingresos netos al diversificar riesgos.

## El dilema de RRHH y el "exilio" del talento Senior

¿Por qué las organizaciones permiten que este capital intelectual se marche justo cuando es más valioso? El análisis desde la gestión de personas revela una desconexión estructural verdaderamente alarmante:

- **La trampa de la pirámide de costes:** En las estructuras tradicionales, el crecimiento salarial está ligado a la jerarquía vertical. Muchos departamentos de RRHH se ven forzados a elegir entre "ascender" a un Senior a posiciones de gestión pura o mantener un coste salarial que el presupuesto no tolera.
- **Obsolescencia en los planes de carrera:** La mayoría de los planes de sucesión están diseñados para el upskilling de juniors, pero carecen de rutas de "Latitud Senior".
- **El sesgo de la "Sobre-cualificación":** Paradójicamente, RRHH a menudo descarta seniors para nuevos retos internos por miedo a que se "aburran" o por considerarlos demasiado caros.

El abandono de los perfiles Senior no es una falta de valía del profesional, sino una miopía en el diseño organizacional. Las empresas que no saben integrar el talento senior bajo modelos flexibles están regalando su ventaja competitiva a la competencia o al mercado de la consultoría independiente.

Estamos empezando el 2026 y el mercado puede cambiar en cualquier momento. Será interesante ver hacia dónde va esta alza.`,
  },
  {
    title: "3 cosas que no te dicen de la entrevista técnica",
    slug: "3-cosas-que-no-te-dicen-de-la-entrevista-tecnica",
    category: "Entrevistas",
    color: "#919f89",
    url: "/blog/3-cosas-que-no-te-dicen-de-la-entrevista-tecnica",
    excerpt:
      "Cuando alguien te pide que cuentes qué te juegas en una entrevista técnica, la respuesta suele sonar obvia. En la práctica, hay factores que casi nunca aparecen en los posts genéricos y que terminan condicionando el resultado.",
    published: true,
    content: `## 3 cosas que no te dicen de la entrevista técnica

Cuando alguien te pide que cuentes en pocas palabras qué te juegas en una entrevista técnica, la respuesta suele sonar obvia: "tu capacidad técnica". En la práctica, sin embargo, hay varios factores operativos y de comportamiento que casi nunca aparecen en los posts genéricos sobre preparación, y que terminan condicionando el resultado.

A continuación, tres de esos factores —y qué hacer para abordarlos— respaldados por datos y observaciones recientes.

## 1. Mantén lo esencial fresco

Las entrevistas técnicas no son ejercicios abstractos: en la mayoría de procesos, las pruebas se diseñan para comprobar competencias aplicadas sobre el stack concreto que la empresa usa. Dicho de otro modo, dominar la teoría no basta; esperan que puedas aplicar las tecnologías de la oferta con soltura.

**Qué hacer:**

- Revisa el job posting con lupa: identifica los frameworks, librerías o patrones que mencionan y prepara ejemplos concretos (microproyectos, PRs, demos) en esas tecnologías.
- Refresca conceptos clave (APIs, patrones de arquitectura, manejo de estados, testing básico) en contextos reales: no memorices definiciones, practica aplicándolas.
- Ten repositorios o snippets listos para mostrar en la entrevista: la evidencia contextualizada suele pesar más que respuestas teóricas.

## 2. "Preparado" no significa solo repasar

Los procesos de contratación se han vuelto más exigentes y variados: entrevistas en vivo, ejercicios "take-home" con alto nivel de exigencia y varias rondas técnicas son cada vez más comunes, sobre todo en empresas con procesos ya asentados.

**Cómo prepararte:**

- Simula el formato real: usa plataformas de mock interviews o practica con compañero/a en sesiones cronometradas que reproduzcan la duración y la presión.
- En las semanas previas, alterna ejercicios sencillos con problemas que integren varias técnicas: eso fortalece la capacidad de afrontar desafíos combinados.
- Si el proceso incluye take-homes, planifica y gestiona el tiempo: un test "de 3 horas" no debe convertirse en un trabajo de 20 horas si no te lo han pedido explícitamente.

## 3. Primero piensa, luego código

Hoy, las empresas valoran cada vez más las "human skills" y la manera en que el candidato razona y comunica su solución. Las habilidades de comunicación, la claridad al explicar decisiones y la capacidad para priorizar soluciones prácticas forman parte del mismo criterio de evaluación que el código que escribes.

**Qué hacer:**

- Antes de teclear, enuncia el problema en voz alta, pregunta casos borde y confirma supuestos; esto evita malentendidos y demuestra rigor.
- Expón la estrategia: di la complejidad temporal/espacial, los trade-offs posibles y cómo testarías la solución.
- Escribe pruebas simples o ejemplos de entrada/salida: pensar en casos de prueba anticipa fallos y muestra cuidado en la entrega.

## Mini checklist práctico (para llevar a la entrevista)

- Revisa el job posting y prepara 2 micro-proyectos (o PRs) con el stack solicitado.
- Haz 4–6 mocks cronometrados en cualquier formato (live o take-home) para mantenerte en forma.
- Ensaya la explicación: problem statement, planteamiento, casos de prueba, complejidad y optimizaciones.
- Ten preguntas preparadas sobre el producto, el equipo y el criterio de éxito del puesto.

Las entrevistas técnicas son, en esencia, ejercicios combinados de técnica, práctica y comunicación. Prepararse bien hoy implica alinear tu entrenamiento con el stack, practicar bajo presión y mostrar un razonamiento claro y estructurado.

**No es un problema de "talento natural": es una disciplina que se entrena.**`,
  },
  {
    title: "¿Por qué a las mujeres les cuesta negociar el salario?",
    slug: "por-que-a-las-mujeres-les-cuesta-negociar-el-salario",
    category: "Brecha Salarial",
    color: "#ffb7a1",
    url: "/blog/por-que-a-las-mujeres-les-cuesta-negociar-el-salario",
    excerpt:
      "Una pregunta me acompañó al terminar de ver America's Sweethearts en Netflix: ¿por qué a las mujeres nos cuesta más negociar nuestro salario? El caso de las Dallas Cowboys Cheerleaders lo ilustra con una fuerza inusitada.",
    published: true,
    content: `## ¿Por qué a las mujeres les cuesta negociar el salario?

Este fin de semana terminé de ver la docuserie de Netflix *America's Sweethearts* y una pregunta me acompañó hasta el final: ¿por qué a las mujeres nos cuesta más negociar nuestro salario?

El caso de las Dallas Cowboys Cheerleaders (DCC) lo ilustra con una fuerza inusitada. Estas mujeres tardaron seis décadas en lograr lo que debería haber sido un derecho desde su origen: un salario digno. Y todo mientras generaban valor —mucho valor— de forma invisible.

## El caso DCC

A lo largo de su historia, estas mujeres cobraban un dinero que apenas cubría la gasolina, pero para sobrevivir tenían que trabajar en dos o tres sitios diferentes a la vez que cumplían sus otros roles y entrenaban cada día: todo esto haciéndolo de forma perfecta.

La respuesta institucional ante una queja de discriminación fue reveladora: *"¿Pero por qué quieren renunciar a sus trabajos de tiempo completo cuando esto es lo más impresionante de lo que hacen?"*

Durante décadas, ser parte de las DCC implicaba sacrificio físico y mental, ensayos constantes, apariciones públicas y una imagen impecable: todo a cambio de "honor" y visibilidad. Con orgullo no se paga el alquiler.

No es hasta la temporada 2, estrenada en junio de 2025, cuando lograron una subida salarial del **400%**, alcanzando hasta 75 USD por hora, tras haber cobrado apenas entre 15 y 20 USD por hora hasta 2024.

## Vamos a los números

Estudios muestran que las mujeres que negocian son vistas como "menos simpáticas", mientras que esa misma conducta en hombres se interpreta como liderazgo.

Forbes publicó en 2024 un artículo donde demostró que muchas mujeres negocian más que los hombres, pero los hombres siguen recibiendo mayores aumentos. La brecha no se explica únicamente por frecuencia de negociación, se explica también por la perpetuación de estructuras y pensamientos.

En España, los datos fiscales de 2022 reflejan una diferencia media anual de aproximadamente **5.000 €**: hombres con 25.137 € y mujeres con 20.130 €. Eso sitúa la brecha salarial en cerca del **19,9 %**.

A pesar de que el Real Decreto 902/2020 exige la elaboración de registros salariales por género, la brecha salarial aún persiste.

## Consejos

**Para los líderes:**

- Apuesten por la transparencia y los planes de crecimiento por méritos propios.

**Para las mujeres (o negociadores):**

- Identifica tu valor: llega con datos de mercado, comparaciones salariales y ejemplos de tu impacto.
- Practica tu discurso para evitar improvisaciones: ensaya tu petición con alguien de confianza que pueda darte feedback.
- Habla sobre impacto, no de las necesidades: cambia un "necesito ganar más" por "mi trabajo genera este valor y merece ser reconocido en consecuencia".
- Recuerda no avergonzarte por pedir: pedir lo justo no es ser ambiciosa, es ser consciente de tu valor y exigir que se te trate igual que al resto.

Solo tú sabes lo que traes a la mesa y lo que vale. Nunca olvides que: **"El que no arriesga no gana".**`,
  },
  {
    title: "¿Qué busca una empresa cuando contrata talento junior?",
    slug: "que-busca-una-empresa-cuando-contrata-talento-junior",
    category: "Talento Junior",
    color: "#ed7a6b",
    url: "/blog/que-busca-una-empresa-cuando-contrata-talento-junior",
    excerpt:
      "Para muchas organizaciones tech, incorporar talento junior no consiste solo en cubrir vacantes a bajo coste, sino en identificar personas con potencial que puedan convertirse en piezas clave. Pero, ¿qué variables miran hoy las empresas?",
    published: true,
    content: `## ¿Qué busca una empresa cuando contrata talento junior?

Para muchas organizaciones tech, incorporar talento junior no consiste solo en cubrir vacantes a bajo coste, sino en identificar personas con potencial que, con el entorno adecuado, puedan convertirse en piezas clave. Pero, ¿qué variables miran hoy las empresas al contratar candidatos sin experiencia profesional consolidada?

## 1. Base técnica sólida

Las empresas esperan que los juniors manejen fundamentos clave y sepan aplicarlos de manera práctica. Lenguajes como JavaScript y Python, Git, frameworks comunes (React, Node.js) y manejo de bases de datos (SQL/NoSQL) son indispensables. También se valora experiencia mínima en testing y despliegues con CI/CD.

La mayoría de las empresas otorgan la misma importancia a las habilidades sociales y los atributos personales a la hora de evaluar a los desarrolladores junior, y demandan competencias como control de versiones, testing y workflows modernos.

## 2. Curiosidad y capacidad de aprendizaje

Las empresas enfatizan el crecimiento constante y la flexibilidad para adaptarse al cambio. Un informe de HackerRank señala que el 61% del personal sin oportunidades de formación planea cambiar de empresa dentro de un año.

## 3. Comunicación y trabajo en equipo

El desarrollo de software es una labor colaborativa. Los juniors deben comunicarse con claridad, escuchar, recibir y aplicar feedback.

"Una comunicación sólida permite a los desarrolladores junior explicar su forma de pensar e interactuar con los equipos de manera eficaz."

Además, la colaboración entre equipos técnicos y no técnicos es vista como una habilidad clave en reclutamiento tech.

## 4. Actitud humilde y proactiva

En redes como Reddit, desarrolladores senior coinciden en que una actitud auténtica y humilde marca la diferencia:

"Admiten cuando no saben algo... Curiosidad, ética de trabajo, positividad, humildad, disposición a pedir ayuda... Las habilidades técnicas se pueden enseñar, pero una buena actitud no."

## 5. Resolución de problemas y pensamiento estructurado

No se trata de resolver algoritmos perfectos, sino de cómo se aborda una tarea desconocida. La lógica, la organización mental y la capacidad de explicar decisiones importan tanto como el resultado final.

"Si no pueden explicar el 'por qué', podría significar que solo estaban siguiendo instrucciones en lugar de pensar de forma crítica."

## 6. Atención al detalle y calidad de código

Pequeños errores pueden tener grandes consecuencias. El código limpio, legible y mantenible —junto a tests automatizados— es valorado por empresas que buscan reducir errores y facilitar la escalabilidad del producto.

## En conclusión

Contratar talento junior hoy va más allá de dominar un lenguaje. Se trata de encontrar personas motivadas, colaborativas, con potencial para crecer y aportar sostenibilidad al equipo.

**Las habilidades técnicas se pueden enseñar. La actitud, la curiosidad y las ganas de aprender son las que marcan la diferencia.**`,
  },
];
