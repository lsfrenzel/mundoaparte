export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-auto object-cover"
                poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              >
                <source 
                  src="https://videos.pexels.com/video-files/8518275/8518275-hd_1920_1080_25fps.mp4" 
                  type="video/mp4" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Clínica veterinária moderna" 
                  className="w-full"
                />
              </video>
            </div>
          </div>
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold text-primary mb-6">Mundo à Parte Vila Mariana</h2>
            <p className="text-lg text-gray-700 mb-6">
              Nossa clínica é especializada em fisioterapia e reabilitação animal, oferecendo 
              tratamentos modernos e personalizados para cães e gatos que precisam de cuidados especiais.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Com uma equipe altamente qualificada e equipamentos de última geração, 
              proporcionamos o melhor cuidado para a recuperação do seu pet.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-gray-600">Pets Tratados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <p className="text-gray-600">Satisfação</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24h</div>
                <p className="text-gray-600">Suporte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
