export default function Footer() {
  return (
    <>
      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4" data-aos="fade-up">
              Nossa Localização
            </h2>
            <p className="text-xl text-gray-700" data-aos="fade-up" data-aos-delay="200">
              Venha nos conhecer na Vila Mariana
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Como Chegar</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-map-marker-alt text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Endereço</h4>
                      <p>R. Bela Flor, 217 - Vila Mariana<br />São Paulo - SP</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Telefone</h4>
                      <p>(11) 91464-5858</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">E-mail</h4>
                      <p>mundoaparte.vilamariana@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-clock text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">Horário de Funcionamento</h4>
                      <p>Segunda a Sexta: 8h às 21h<br />Sábado: 8h às 14h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9962445516827!2d-46.635592!3d-23.578877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sR.%20Bela%20Flor%2C%20217%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004150-090!5e0!3m2!1spt-BR!2sbr!4v1755799800000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica Mundo à Parte Vila Mariana - R. Bela Flor, 217"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mundo à Parte</h3>
              <p className="text-gray-300 mb-4">
                Especializada em fisioterapia e reabilitação animal, oferecendo cuidados personalizados para a recuperação do seu pet.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://wa.me/5511914645858" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Hidroterapia</li>
                <li>Fisioterapia</li>
                <li>Laserterapia</li>
                <li>Acupuntura</li>
                <li>Reabilitação</li>
                <li>Cuidados Geriátricos</li>
                <li>Ozonioterapia</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li><i className="fas fa-phone mr-2"></i>(11) 91464-5858</li>
                <li><i className="fas fa-envelope mr-2"></i>mundoaparte.vilamariana@gmail.com</li>
                <li><i className="fas fa-map-marker-alt mr-2"></i>R. Bela Flor, 217 - Vila Mariana, SP</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Horários</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Segunda a Sexta<br /><span className="text-accent">8h às 21h</span></li>
                <li>Sábado<br /><span className="text-accent">8h às 14h</span></li>
                <li>Domingo<br /><span className="text-gray-400">Fechado</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 mt-8 text-center text-gray-300">
            <p>&copy; 2025 Mundo à Parte Vila Mariana. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}