import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import ScrollToTop from "@/components/scroll-to-top";
import { initializeAnimations } from "@/lib/animations";

export default function BanhoTosa() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  const services = [
    {
      title: "Banho Relaxante",
      description: "Banho com produtos hipoalergênicos e shampoos terapêuticos especiais para cada tipo de pelagem.",
      icon: "fas fa-bath",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop",
      details: "Inclui escovação, limpeza de ouvidos e corte de unhas"
    },
    {
      title: "Tosa Higiênica",
      description: "Tosa especializada em áreas sensíveis para manter a higiene e saúde do seu pet.",
      icon: "fas fa-cut",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
      details: "Foco em regiões íntimas, patas e região dos olhos"
    },
    {
      title: "Tosa Completa",
      description: "Serviço completo de embelezamento com cortes personalizados para cada raça.",
      icon: "fas fa-scissors",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
      details: "Corte estilizado, acabamento profissional e hidratação"
    },
    {
      title: "Spa para Pets",
      description: "Tratamento completo de relaxamento com aromaterapia e massagem terapêutica.",
      icon: "fas fa-spa",
      image: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=400&h=300&fit=crop",
      details: "Experiência única de bem-estar para seu pet",
      highlight: true
    },
    {
      title: "Hidratação Profunda",
      description: "Tratamento intensivo para pelagem ressecada com produtos naturais.",
      icon: "fas fa-tint",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
      details: "Restaura o brilho natural e maciez da pelagem"
    },
    {
      title: "Limpeza de Ouvidos",
      description: "Limpeza especializada para prevenir infecções e manter a saúde auditiva.",
      icon: "fas fa-stethoscope",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
      details: "Procedimento delicado com produtos específicos"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary to-primary-light text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-up">
                Banho & Tosa
              </h1>
              <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
                Cuidados especializados de higiene e beleza para seu pet, com todo carinho e profissionalismo que ele merece.
              </p>
              <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-accent text-xl"></i>
                  <span className="text-lg">Produtos hipoalergênicos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-accent text-xl"></i>
                  <span className="text-lg">Profissionais especializados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-accent text-xl"></i>
                  <span className="text-lg">Ambiente relaxante</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-accent text-xl"></i>
                  <span className="text-lg">Atendimento personalizado</span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/5511914645858"
                  className="inline-flex items-center bg-accent hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <i className="fab fa-whatsapp mr-3 text-xl"></i>
                  Agende seu Banho & Tosa
                </a>
              </div>
            </div>
            
            {/* Spline 3D Animation */}
            <div className="relative" data-aos="fade-left" data-aos-delay="300">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://my.spline.design/grumpycat-PQqps8L82rPkrF7HuEBTLzmc/"
                  className="w-full h-full border-0"
                  title="Animação 3D de Gato"
                  loading="lazy"
                  style={{ 
                    border: 'none',
                    borderRadius: '16px',
                    background: 'transparent'
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6" data-aos="fade-up">
              Nossos Serviços de Banho & Tosa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Oferecemos uma gama completa de serviços de higiene e beleza para manter seu pet sempre limpo, cheiroso e elegante.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-gray-100" 
                data-aos="fade-up" 
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <div className="service-icon mb-4">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg w-full mb-4 object-cover h-48"
                />
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {service.details}
                </p>
                {service.highlight && (
                  <div className="bg-primary text-white text-center py-2 px-4 rounded-lg font-semibold">
                    Serviço Premium
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Por que escolher nosso Banho & Tosa?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                    <i className="fas fa-award text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Profissionais Qualificados</h3>
                    <p className="text-gray-600">Nossa equipe é formada por profissionais experientes e apaixonados por animais.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                    <i className="fas fa-leaf text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Produtos Naturais</h3>
                    <p className="text-gray-600">Utilizamos apenas produtos de alta qualidade, naturais e seguros para seu pet.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                    <i className="fas fa-heart text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Cuidado Individualizado</h3>
                    <p className="text-gray-600">Cada pet recebe atenção personalizada respeitando suas necessidades específicas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                    <i className="fas fa-shield-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Ambiente Seguro</h3>
                    <p className="text-gray-600">Instalações modernas e seguras para garantir o bem-estar do seu pet.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop" 
                alt="Pet feliz após banho e tosa"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Seu pet merece o melhor cuidado
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Agende hoje mesmo um horário para banho e tosa. Seu pet sairá daqui limpinho, cheiroso e ainda mais bonito!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <a
              href="https://wa.me/5511914645858"
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-primary font-bold py-4 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              <i className="fab fa-whatsapp mr-3 text-xl"></i>
              Agendar pelo WhatsApp
            </a>
            <a
              href="tel:+5511914645858"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-phone mr-3 text-xl"></i>
              Ligar Agora
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}