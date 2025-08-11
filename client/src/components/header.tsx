import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-scrolled' : 'header-bg'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <i className="fas fa-paw text-white text-xl"></i>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}>
                Mundo à Parte
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-gray-200' : 'text-gray-600'
              }`}>
                Vila Mariana
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className={`transition-colors hover:text-accent ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className={`transition-colors hover:text-accent ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className={`transition-colors hover:text-accent ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className={`transition-colors hover:text-accent ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className={`transition-colors hover:text-accent ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Contato
            </button>
          </div>

          <button className="md:hidden text-primary">
            <i className={`fas fa-bars text-xl transition-colors ${
              isScrolled ? 'text-white' : 'text-primary'
            }`}></i>
          </button>
        </nav>
      </div>
    </header>
  );
}
