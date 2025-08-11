import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-accent text-primary' : 'bg-primary text-white'
            }`}>
              <i className="fas fa-paw text-xl"></i>
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
              className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <button 
            onClick={toggleMobileMenu}
            className={`md:hidden transition-colors p-2 rounded-lg hover:bg-opacity-20 hover:bg-white ${
              isScrolled ? 'text-white' : 'text-primary'
            }`}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
            }`}></i>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-6 space-y-4 bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left py-3 px-4 text-primary font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors"
            >
              <i className="fas fa-home mr-3"></i>Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left py-3 px-4 text-primary font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors"
            >
              <i className="fas fa-info-circle mr-3"></i>Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left py-3 px-4 text-primary font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors"
            >
              <i className="fas fa-heart mr-3"></i>Serviços
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left py-3 px-4 text-primary font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors"
            >
              <i className="fas fa-star mr-3"></i>Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left py-3 px-4 text-primary font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors"
            >
              <i className="fas fa-envelope mr-3"></i>Contato
            </button>
            <div className="pt-4 border-t border-gray-200">
              <a 
                href="https://wa.me/5511914645858" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 px-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                <i className="fab fa-whatsapp mr-3"></i>WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
