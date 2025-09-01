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
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}
