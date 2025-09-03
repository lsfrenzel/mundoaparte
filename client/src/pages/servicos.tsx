import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import ScrollToTop from "@/components/scroll-to-top";
import { initializeAnimations } from "@/lib/animations";

export default function Servicos() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  const services = [
    {
      icon: "fas fa-swimming-pool",
      title: "Hidroterapia",
      description: "Tratamento em piscina aquecida para recuperação de lesões, fortalecimento muscular e alívio de dores articulares.",
      image: "/cao_fisioterapia4_1756842095797.jpeg",
      details: "A hidroterapia utiliza as propriedades físicas da água para promover a recuperação. O ambiente aquático reduz o impacto nas articulações enquanto oferece resistência natural para fortalecimento muscular.",
      highlight: true
    },
    {
      icon: "fas fa-hands-helping",
      title: "Fisioterapia",
      description: "Exercícios terapêuticos, massagens e técnicas manuais para recuperação de mobilidade e função muscular.",
      image: "/cao_fisioterapia_1756842095796.jpeg",
      details: "Programa personalizado de exercícios e técnicas manuais para restaurar a função normal, melhorar a mobilidade e reduzir a dor em pets com lesões ortopédicas ou neurológicas."
    },
    {
      icon: "fas fa-bolt",
      title: "Laserterapia",
      description: "Tecnologia avançada para acelerar a cicatrização, reduzir inflamações e promover regeneração celular.",
      image: "/cao_fisioterapia2_1756842095797.jpeg",
      details: "Utiliza luz laser de baixa intensidade para estimular processos biológicos naturais, acelerando a cura e proporcionando alívio da dor sem efeitos colaterais."
    },
    {
      icon: "fas fa-leaf",
      title: "Acupuntura",
      description: "Medicina tradicional chinesa adaptada para pets, eficaz no controle da dor e equilíbrio energético.",
      image: "/whatsapp_image_1.jpeg",
      details: "Técnica milenar que utiliza agulhas finas em pontos específicos para estimular o sistema nervoso e promover a liberação de endorfinas naturais."
    },
    {
      icon: "fas fa-heartbeat",
      title: "Reabilitação",
      description: "Programas completos de recuperação pós-cirúrgica e tratamento de lesões ortopédicas e neurológicas.",
      image: "/fisio_1756842516301.jpeg",
      details: "Planos de tratamento integrados que combinam múltiplas terapias para maximizar a recuperação e retorno às atividades normais."
    },
    {
      icon: "fas fa-clock",
      title: "Cuidados Geriátricos",
      description: "Tratamentos especializados para pets idosos, focando na qualidade de vida e alívio de dores artríticas.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      details: "Cuidados especiais para animais idosos, incluindo manejo da dor crônica, manutenção da mobilidade e qualidade de vida."
    },
    {
      icon: "fas fa-wind",
      title: "Ozonioterapia",
      description: "Terapia com ozônio para fortalecer o sistema imunológico, acelerar cicatrização e combater infecções.",
      image: "/fisio2_1756842575712.jpeg",
      details: "Tratamento inovador que utiliza as propriedades do ozônio para melhorar a oxigenação celular, estimular o sistema imunológico e acelerar processos de cura."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6" data-aos="fade-up">
            Nossos Serviços
          </h1>
          <p className="text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Oferecemos uma gama completa de tratamentos especializados para a recuperação e bem-estar do seu pet
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                  className={`rounded-lg w-full mb-4 h-48 ${service.title === 'Acupuntura' || service.title === 'Ozonioterapia' ? 'object-top object-cover' : 'object-cover'}`}
                />
                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {service.details}
                </p>
                {service.highlight && (
                  <div className="bg-primary text-white text-center py-2 px-4 rounded-lg font-semibold">
                    Destaque da Clínica
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}