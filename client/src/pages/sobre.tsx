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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div data-aos="fade-right">
              <div className="rounded-2xl shadow-lg overflow-hidden">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-auto object-cover"
                  poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                >
                  <source 
                    src="https://videos.pexels.com/video-files/8518275/8518275-hd_1920_1080_25fps.mp4" 
                    type="video/mp4" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Clínica veterinária moderna" 
                    className="w-full"
                  />
                </video>
              </div>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-4xl font-bold text-primary mb-6">Mundo à Parte Vila Mariana</h2>
              <p className="text-lg text-gray-700 mb-6">
                Nossa clínica é especializada em fisioterapia e reabilitação animal, oferecendo 
                tratamentos modernos e personalizados para cães e gatos que precisam de cuidados especiais.
              </p>
              <p className="text-lg text-gray-700 mb-8">
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