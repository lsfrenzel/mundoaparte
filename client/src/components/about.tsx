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
                poster="/image_1756737469952.png"
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
                  src="/image_1756737469952.png" 
                  alt="Clínica de Fisioterapia Veterinária - Vila Mariana - Interior da Clínica" 
                  className="w-full"
                />
              </video>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">Clínica de Fisioterapia Veterinária - Vila Mariana</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Nossa clínica é especializada em fisioterapia e reabilitação animal, oferecendo 
              tratamentos modernos e personalizados para cães e gatos que precisam de cuidados especiais.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Com uma equipe altamente qualificada e equipamentos de última geração, 
              proporcionamos o melhor cuidado para a recuperação do seu pet.
            </p>
            
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
        
        {/* Seção sobre a Dra. Fátima */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4" data-aos="fade-up">
              Nossa Fundadora
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div data-aos="fade-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/fatima_1756813549083.jpeg" 
                    alt="Dra. Fátima Bollini Leonard - Veterinária Especialista" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/louisefatima_1756813549081.jpeg" 
                    alt="Dra. Fátima com paciente" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <h4 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                Dra. Fátima Bollini Leonard
              </h4>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                A clínica foi fundada pela veterinária Fátima Bollini Leonard, que, além de possuir vasta 
                experiência profissional e acadêmica, nutre uma verdadeira paixão por cães e gatos, algo que 
                é refletido em seu atendimento exemplar e que inspira toda a equipe.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <span className="text-gray-700">Especialista em Fisioterapia Veterinária</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <span className="text-gray-700">Vasta experiência acadêmica e profissional</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <span className="text-gray-700">Paixão dedicada ao bem-estar animal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
