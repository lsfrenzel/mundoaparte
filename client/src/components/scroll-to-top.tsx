import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 left-4 sm:bottom-24 sm:left-6 md:bottom-28 md:left-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary hover:bg-primary-light text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
      aria-label="Voltar ao topo"
      data-aos="zoom-in"
    >
      <i className="fas fa-chevron-up text-lg sm:text-xl md:text-2xl"></i>
    </button>
  );
}