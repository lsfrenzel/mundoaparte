import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

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

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-scrolled' : 'header-bg'
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <nav className="flex items-center justify-between min-h-[60px] mobile-header-height">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/attached_assets/logopet-removebg-preview_1755800541296.png" 
              alt="Mundo à Parte Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div>
              <h1 className={`text-lg sm:text-xl font-bold transition-colors ${
                isScrolled ? 'text-white' : 'text-primary'
              }`}>
                Mundo à Parte
              </h1>
              <p className={`text-xs sm:text-sm transition-colors ${
                isScrolled ? 'text-gray-200' : 'text-gray-600'
              }`}>
                Vila Mariana
              </p>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/"
              className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                isScrolled ? 'text-white' : 'text-primary'
              } ${isActive('/') ? 'text-accent' : ''}`}
            >
              Início
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/sobre"
              className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                isScrolled ? 'text-white' : 'text-primary'
              } ${isActive('/sobre') ? 'text-accent' : ''}`}
            >
              Sobre
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                isActive('/sobre') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/servicos"
              className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                isScrolled ? 'text-white' : 'text-primary'
              } ${isActive('/servicos') ? 'text-accent' : ''}`}
            >
              Serviços
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                isActive('/servicos') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/depoimentos"
              className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                isScrolled ? 'text-white' : 'text-primary'
              } ${isActive('/depoimentos') ? 'text-accent' : ''}`}
            >
              Depoimentos
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                isActive('/depoimentos') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/contato"
              className={`font-medium transition-all duration-300 hover:text-accent relative group ${
                isScrolled ? 'text-white' : 'text-primary'
              } ${isActive('/contato') ? 'text-accent' : ''}`}
            >
              Contato
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                isActive('/contato') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </div>

          <button 
            onClick={toggleMobileMenu}
            className={`md:hidden transition-colors p-3 rounded-lg hover:bg-opacity-20 hover:bg-white flex items-center justify-center w-12 h-12 ${
              isScrolled ? 'text-white' : 'text-primary'
            }`}
            aria-label="Menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
            }`}></i>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden absolute left-0 right-0 top-full ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-6 space-y-4 bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200 shadow-lg mobile-menu-container">
            <Link 
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left py-3 px-4 font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors ${
                isActive('/') ? 'bg-accent text-primary' : 'text-primary'
              }`}
            >
              <i className="fas fa-home mr-3"></i>Início
            </Link>
            <Link 
              href="/sobre"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left py-3 px-4 font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors ${
                isActive('/sobre') ? 'bg-accent text-primary' : 'text-primary'
              }`}
            >
              <i className="fas fa-info-circle mr-3"></i>Sobre
            </Link>
            <Link 
              href="/servicos"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left py-3 px-4 font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors ${
                isActive('/servicos') ? 'bg-accent text-primary' : 'text-primary'
              }`}
            >
              <i className="fas fa-heart mr-3"></i>Serviços
            </Link>
            <Link 
              href="/depoimentos"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left py-3 px-4 font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors ${
                isActive('/depoimentos') ? 'bg-accent text-primary' : 'text-primary'
              }`}
            >
              <i className="fas fa-star mr-3"></i>Depoimentos
            </Link>
            <Link 
              href="/contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left py-3 px-4 font-medium hover:bg-accent hover:text-primary rounded-lg transition-colors ${
                isActive('/contato') ? 'bg-accent text-primary' : 'text-primary'
              }`}
            >
              <i className="fas fa-envelope mr-3"></i>Contato
            </Link>
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
