export default function About() {
  return (
    <section id="sobre" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div data-aos="fade-right">
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <video 
                controls
                className="w-full h-auto object-cover"
                poster="/postervideo_1756815844890.png"
                preload="metadata"
              >
                <source 
                  src="/fisioterapia_vilamariana_1756736752678.mp4" 
                  type="video/mp4" 
                />
                <source 
                  src="/attached_assets/fisioterapia_vilamariana_1756736752678.mp4" 
                  type="video/mp4" 
                />
                <img 
                  src="/postervideo_1756815844890.png" 
                  alt="Clínica de Fisioterapia Veterinária - Vila Mariana - Interior da Clínica" 
                  className="w-full"
                />
              </video>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">Clínica de Fisioterapia Veterinária - Vila Mariana</h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-700">
                Bem-vindos à nossa clínica especializada em fisioterapia e reabilitação veterinária. 
                Oferecemos cuidados completos e personalizados para seus pets.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-cream rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <p className="text-sm sm:text-base text-gray-600">Pets Tratados</p>
              </div>
              <div className="text-center p-4 bg-cream rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary">5+</div>
                <p className="text-sm sm:text-base text-gray-600">Anos de Experiência</p>
              </div>
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <p className="text-sm sm:text-base text-primary font-semibold">Satisfação</p>
              </div>
              <div className="text-center p-4 bg-cream rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24h</div>
                <p className="text-sm sm:text-base text-gray-600">Suporte</p>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}
