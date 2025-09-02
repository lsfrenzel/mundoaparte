import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import ScrollToTop from "@/components/scroll-to-top";
import { initializeAnimations } from "@/lib/animations";

export default function Sobre() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6" data-aos="fade-up">
            Sobre Nós
          </h1>
          <p className="text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Conheça nossa história, missão e a equipe dedicada ao cuidado do seu pet
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Seção sobre a Dra. Fátima */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4" data-aos="fade-up">
                Nossa Fundadora
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                Conheça a veterinária especialista que dedica sua vida ao cuidado dos pets
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div data-aos="fade-right">
                <div className="relative">
                  {/* Imagem principal */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6">
                    <img 
                      src="/fatima_1756813549083.jpeg" 
                      alt="Dra. Fátima Bollini Leonard - Veterinária Especialista" 
                      className="w-full h-80 sm:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Imagem secundária */}
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <img 
                      src="/louisefatima_1756813549081.jpeg" 
                      alt="Dra. Fátima com paciente" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Elemento decorativo */}
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent rounded-full opacity-20"></div>
                </div>
              </div>
              
              <div data-aos="fade-left">
                <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                  Dra. Fátima Bollini Leonard
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  A clínica foi fundada pela veterinária Fátima Bollini Leonard, que, além de possuir vasta 
                  experiência profissional e acadêmica, nutre uma verdadeira paixão por cães e gatos, algo que 
                  é refletido em seu atendimento exemplar e que inspira toda a equipe.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-accent/20 rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-stethoscope text-white text-lg"></i>
                    </div>
                    <span className="text-gray-700 font-medium">Especialista em Fisioterapia Veterinária</span>
                  </div>
                  <div className="flex items-center p-4 bg-cream rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-graduation-cap text-white text-lg"></i>
                    </div>
                    <span className="text-gray-700 font-medium">Vasta experiência acadêmica e profissional</span>
                  </div>
                  <div className="flex items-center p-4 bg-accent/20 rounded-xl">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-heart text-white text-lg"></i>
                    </div>
                    <span className="text-gray-700 font-medium">Paixão dedicada ao bem-estar animal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12" data-aos="fade-up">
            <div className="bg-accent p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-primary">Nossa Missão</h3>
              </div>
              <p className="text-gray-700 text-center">
                Proporcionar cuidados veterinários especializados com excelência, 
                promovendo a qualidade de vida e bem-estar dos animais através de 
                tratamentos inovadores e atendimento humanizado.
              </p>
            </div>

            <div className="bg-accent p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-eye text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-primary">Nossa Visão</h3>
              </div>
              <p className="text-gray-700 text-center">
                Ser referência em fisioterapia e reabilitação animal, 
                reconhecida pela inovação em tratamentos e pelo carinho 
                dedicado a cada paciente e sua família.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}
