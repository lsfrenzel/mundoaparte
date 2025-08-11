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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Fisioterapia e <br />
            <span className="text-accent">Reabilitação Animal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Cuidado especializado para a recuperação e bem-estar do seu pet. 
            Tratamentos modernos com carinho e profissionalismo.
          </p>
          <div className="space-x-4">
            <button 
              onClick={scrollToContact}
              className="bg-accent text-primary px-8 py-4 rounded-full font-semibold btn-hover inline-block"
            >
              Agendar Consulta
            </button>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold btn-hover inline-block"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
