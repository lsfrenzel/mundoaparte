declare global {
  interface Window {
    AOS: any;
    gsap: any;
  }
}

export function initializeAnimations() {
  // Initialize AOS
  if (window.AOS) {
    window.AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }

  // GSAP animations for hover effects
  if (window.gsap) {
    // Button hover animations
    window.gsap.set('.btn-hover', {
      transformOrigin: 'center center'
    });

    document.querySelectorAll('.btn-hover').forEach((button: Element) => {
      button.addEventListener('mouseenter', function() {
        window.gsap.to(this, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      button.addEventListener('mouseleave', function() {
        window.gsap.to(this, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Card hover animations
    document.querySelectorAll('.card-hover').forEach((card: Element) => {
      card.addEventListener('mouseenter', function() {
        window.gsap.to(this, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', function() {
        window.gsap.to(this, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Service icons animation with ScrollTrigger
    if (window.gsap.ScrollTrigger) {
      document.querySelectorAll('.service-icon').forEach((el: Element, index: number) => {
        window.gsap.from(el, {
          scale: 0,
          rotation: 360,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%'
          }
        });
      });
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = (this as HTMLAnchorElement).getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = (target as HTMLElement).offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
