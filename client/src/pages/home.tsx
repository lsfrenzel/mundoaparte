import { useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import ScrollToTop from "@/components/scroll-to-top";
import { initializeAnimations } from "@/lib/animations";

export default function Home() {
  useEffect(() => {
    // Initialize animations after component mounts
    initializeAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      
      {/* Clinic Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6" data-aos="fade-up">
              Nossa Clínica Moderna
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Instalações completas e equipamentos de última geração para o melhor atendimento ao seu pet
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/attached_assets/image_1756737469952.png"
                alt="Interior da Clínica Mundo à Parte Vila Mariana"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg">
                <p className="text-sm">
                  Equipamentos modernos e ambiente acolhedor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}
