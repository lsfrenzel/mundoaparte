export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-primary mb-4">Avaliações dos Nossos Clientes</h2>
          <p className="text-xl text-gray-700">Excelente atendimento com ótimas avaliações no Google</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Google Reviews Highlight */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-8 text-center" data-aos="fade-up">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
                alt="Google" 
                className="w-8 h-8 mr-3"
              />
              <h3 className="text-2xl font-bold text-gray-800">Google Avaliações</h3>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-500 text-3xl mr-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="text-3xl font-bold text-gray-800">5.0</span>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Nossos clientes avaliam nosso atendimento como <strong>excelente</strong>. 
              Veja o que eles dizem sobre nossos serviços especializados em fisioterapia veterinária.
            </p>
            
            <a 
              href="https://business.google.com/v/_/010394032306447486102/2cbb/_?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              data-testid="link-google-reviews"
            >
              <i className="fab fa-google mr-3"></i>
              Ver Todas as Avaliações no Google
            </a>
          </div>

          {/* Destacar pontos fortes */}
          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-green-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2">Atendimento Humanizado</h4>
              <p className="text-gray-600">Cuidado carinhoso e personalizado para cada pet</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-medal text-blue-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2">Profissionais Qualificados</h4>
              <p className="text-gray-600">Equipe especializada em fisioterapia veterinária</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-purple-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-semibold text-primary mb-2">Resultados Comprovados</h4>
              <p className="text-gray-600">Recuperação efetiva e melhora na qualidade de vida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
