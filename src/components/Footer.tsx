const Footer: React.FC = () => {
  return (
    <footer className="bg-[#85A9D2] text-white py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-8 px-6 md:px-8">
        {/* Left Side - Logo and Privacy/Terms */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold">Career Insights</h2>
          <a href="/privacidad" className="text-sm underline hover:text-gray-200">
            Política de privacidad & términos de uso
          </a>
        </div>

        {/* Center - Links */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          <a href="/#conocenos" className="hover:text-gray-200">Conócenos</a>
          <a href="/#servicios" className="hover:text-gray-200">Servicio</a>
          <a href="/contacto" className="hover:text-gray-200">Contacto</a>
          <a href="/blog" className="hover:text-gray-200">Blog</a>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="flex flex-col items-start md:items-end space-y-2">
          <p className="text-sm">Síguenos en redes sociales</p>
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/careerinsights-es" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-white text-blue-400 rounded hover:bg-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@career_in_sights?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-white text-blue-400 rounded hover:bg-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.75 2a1 1 0 0 1 1 1c0 2.485 2.015 4.5 4.5 4.5a1 1 0 0 1 1 1v2.25a1 1 0 0 1-1 1c-.69 0-1.36-.1-2-.29v5.29a6.25 6.25 0 1 1-6.25-6.25 1 1 0 0 1 1 1v2.25a1 1 0 0 1-1 1 2.25 2.25 0 1 0 2.25 2.25V2a1 1 0 0 1 1-1z"/>
              </svg>
            </a>
            {/* Email/Contact */}
            <a href="/contacto" className="flex items-center justify-center w-10 h-10 bg-white text-blue-400 rounded hover:bg-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;