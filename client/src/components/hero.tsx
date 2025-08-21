export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="hero-image min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Fisioterapia e <br />
            <span className="text-accent">Reabilitação Animal</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto px-4">
            Cuidado especializado para a recuperação e bem-estar do seu pet. 
            Tratamentos modernos com carinho e profissionalismo.
          </p>
          
          {/* Statistics Banner */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 mb-8 mx-auto max-w-4xl" data-aos="fade-up" data-aos-delay="200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">500+</div>
                <p className="text-sm md:text-base text-white/80">Pets Tratados</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">100%</div>
                <p className="text-sm md:text-base text-white/80">Satisfação</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">5+</div>
                <p className="text-sm md:text-base text-white/80">Anos Exp.</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">24h</div>
                <p className="text-sm md:text-base text-white/80">Suporte</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-accent text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold btn-hover w-full sm:w-auto"
            >
              Agendar Consulta
            </button>
            <a 
              href="https://wa.me/5511914645858" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold btn-hover w-full sm:w-auto text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
