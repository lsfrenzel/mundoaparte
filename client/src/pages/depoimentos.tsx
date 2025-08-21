import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { initializeAnimations } from "@/lib/animations";

export default function Depoimentos() {
  useEffect(() => {
    initializeAnimations();
  }, []);

  const testimonials = [
    {
      name: "Maria Silva",
      pet: "Rex",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      text: "O Rex estava com muita dificuldade para andar após a cirurgia. Com a hidroterapia aqui na clínica, ele voltou a correr e brincar como antes. Equipe maravilhosa!",
      rating: 5,
      service: "Hidroterapia"
    },
    {
      name: "Carlos Mendes",
      pet: "Luna",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      text: "A Luna tinha artrite e sofria muito. A laserterapia mudou completamente a vida dela. Hoje ela está muito mais ativa e feliz. Recomendo de olhos fechados!",
      rating: 5,
      service: "Laserterapia"
    },
    {
      name: "Ana Carolina",
      pet: "Mimi",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      text: "Meu gatinho Mimi teve uma lesão na coluna e os veterinários disseram que ele poderia não andar mais. Graças ao tratamento aqui, ele se recuperou completamente!",
      rating: 5,
      service: "Reabilitação"
    },
    {
      name: "Roberto Santos",
      pet: "Buddy",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      text: "Buddy é um cão idoso e estava perdendo mobilidade. Os cuidados geriátricos da clínica devolveram a qualidade de vida dele. Muito grato pela dedicação da equipe.",
      rating: 5,
      service: "Cuidados Geriátricos"
    },
    {
      name: "Patricia Lima",
      pet: "Mel",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      text: "A Mel tinha uma infecção persistente que não melhorava. A ozonioterapia foi fundamental para sua recuperação. Tratamento inovador e eficaz!",
      rating: 5,
      service: "Ozonioterapia"
    },
    {
      name: "Fernanda Costa",
      pet: "Thor",
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      text: "Thor machucou a pata e ficou mancando por semanas. A fisioterapia aqui foi essencial para ele voltar a andar normalmente. Profissionais extremamente competentes!",
      rating: 5,
      service: "Fisioterapia"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6" data-aos="fade-up">
            Depoimentos
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
            Histórias reais de recuperação e satisfação dos nossos clientes
          </p>
          
          {/* Video Section */}
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-auto object-cover"
                poster="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              >
                <source 
                  src="https://videos.pexels.com/video-files/4009720/4009720-hd_1920_1080_25fps.mp4" 
                  type="video/mp4" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
                  alt="Pets felizes após tratamento" 
                  className="w-full"
                />
              </video>
            </div>
            <p className="text-white mt-4 text-sm opacity-90">
              Veja como nossos tratamentos transformam a vida dos pets
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-gray-100" 
                data-aos="fade-up" 
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">Tutor do {testimonial.pet}</p>
                    <span className="text-sm bg-accent text-primary px-2 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex text-yellow-500 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-lg"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}