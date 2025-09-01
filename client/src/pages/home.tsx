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
      
      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6" data-aos="fade-up">
              Conheça Nossa Clínica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Veja como cuidamos dos seus pets com carinho, profissionalismo e dedicação
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="400">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto"
                controls
                poster="/attached_assets/image_1756737469952.png"
                preload="metadata"
                style={{ maxHeight: '500px' }}
              >
                <source src="/fisioterapia_vilamariana_1756736752678.mp4" type="video/mp4" />
                <source src="/attached_assets/fisioterapia_vilamariana_1756736752678.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded-lg">
                <p className="text-sm">
                  Mundo à Parte Vila Mariana - Fisioterapia Animal
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
