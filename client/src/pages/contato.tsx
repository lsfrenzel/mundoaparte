import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import ScrollToTop from "@/components/scroll-to-top";
import Contact from "@/components/contact";
import { initializeAnimations } from "@/lib/animations";

export default function Contato() {
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
            Entre em Contato
          </h1>
          <p className="text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Estamos prontos para cuidar do seu pet. Agende uma consulta hoje mesmo
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="py-0">
        <Contact />
      </div>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}