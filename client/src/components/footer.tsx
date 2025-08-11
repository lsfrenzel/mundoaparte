export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Nossa Localização</h2>
            <p className="text-xl text-gray-700">Facilmente acessível na Vila Mariana</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg" data-aos="zoom-in">
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <i className="fas fa-map-marker-alt text-4xl text-primary mb-4"></i>
                <p className="text-lg">Mapa Interativo</p>
                <p className="text-sm">Vila Mariana, São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mundo à Parte</h3>
              <p className="text-gray-300 mb-4">
                Dedicados ao cuidado e bem-estar dos seus pets através de tratamentos especializados e carinho profissional.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => scrollToSection('servicos')}
                    className="hover:text-accent transition-colors"
                  >
                    Hidroterapia
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicos')}
                    className="hover:text-accent transition-colors"
                  >
                    Fisioterapia
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicos')}
                    className="hover:text-accent transition-colors"
                  >
                    Laserterapia
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicos')}
                    className="hover:text-accent transition-colors"
                  >
                    Acupuntura
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicos')}
                    className="hover:text-accent transition-colors"
                  >
                    Reabilitação
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li><i className="fas fa-phone mr-2"></i>(11) 99999-9999</li>
                <li><i className="fas fa-envelope mr-2"></i>contato@mundoaparte.com.br</li>
                <li><i className="fas fa-map-marker-alt mr-2"></i>Vila Mariana, São Paulo</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Horários</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Segunda a Sexta<br /><span className="text-accent">8h às 18h</span></li>
                <li>Sábado<br /><span className="text-accent">8h às 14h</span></li>
                <li>Domingo<br /><span className="text-gray-400">Fechado</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 mt-8 text-center text-gray-300">
            <p>&copy; 2024 Mundo à Parte Vila Mariana. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
