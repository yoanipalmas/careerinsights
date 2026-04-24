import React from "react";

const PrivacyPolicy: React.FC = () => (
  <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow my-12">
    <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
    <p className="mb-4">
      En Career Insights, nos comprometemos a proteger tu privacidad y garantizar el cumplimiento de la normativa vigente en materia de protección de datos, en particular el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Quién es el responsable del tratamiento de tus datos?</h2>
    <p className="mb-4">
      <strong>Responsable:</strong> Career Insights<br/>
      <strong>Contacto:</strong> <a href="/contacto" className="text-blue-500 underline">Formulario de contacto</a>
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué datos personales recogemos?</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Datos identificativos: nombre, correo electrónico.</li>
      <li>Datos de navegación y uso del sitio web.</li>
      <li>Otros datos proporcionados voluntariamente a través de formularios.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Con qué finalidad tratamos tus datos?</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Gestionar y responder a tus consultas o solicitudes.</li>
      <li>Prestar y mejorar nuestros servicios.</li>
      <li>Enviarte información relevante sobre nuestros servicios, si así lo has consentido.</li>
      <li>Cumplir con obligaciones legales.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Cuál es la legitimación para el tratamiento de tus datos?</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>El consentimiento del usuario.</li>
      <li>La ejecución de un contrato o precontrato.</li>
      <li>El cumplimiento de obligaciones legales.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Durante cuánto tiempo conservamos tus datos?</h2>
    <p className="mb-4">
      Los datos personales se conservarán mientras sean necesarios para la finalidad para la que se recabaron y, en todo caso, durante los plazos legalmente exigidos.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿A qué destinatarios se comunicarán tus datos?</h2>
    <p className="mb-4">
      No se cederán datos a terceros, salvo obligación legal o salvo que sea necesario para la prestación del servicio.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Cuáles son tus derechos?</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Acceder, rectificar y suprimir tus datos.</li>
      <li>Solicitar la limitación u oposición al tratamiento.</li>
      <li>Portar tus datos a otro responsable.</li>
      <li>Retirar el consentimiento en cualquier momento.</li>
      <li>Presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">www.aepd.es</a>).</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">Contacto</h2>
    <p>
      Puedes ejercer tus derechos o realizar cualquier consulta sobre protección de datos a través de nuestro <a href="/contacto" className="text-blue-500 underline">formulario de contacto</a>.
    </p>
    <p className="text-xs text-gray-500 mt-8">Última actualización: {new Date().toLocaleDateString()}</p>
  </div>
);

export default PrivacyPolicy; 