import { useEffect } from "react";

export default function WhatsAppFloat() {
  useEffect(() => {
    // Add pulse animation after component mounts
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton && window.gsap) {
      window.gsap.to(whatsappButton, {
        scale: 1.1,
        duration: 1,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

  return (
    <a 
      href="https://wa.me/5511914645858" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float fixed w-14 h-14 md:w-16 md:h-16 bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      data-aos="zoom-in" 
      data-aos-delay="1000"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
