export default function Services() {
  const services = [
    {
      icon: "fas fa-swimming-pool",
      title: "Hidroterapia",
      description: "Tratamento em piscina aquecida para recuperação de lesões, fortalecimento muscular e alívio de dores articulares.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      highlight: true
    },
    {
      icon: "fas fa-hands-helping",
      title: "Fisioterapia",
      description: "Exercícios terapêuticos, massagens e técnicas manuais para recuperação de mobilidade e função muscular.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      icon: "fas fa-bolt",
      title: "Laserterapia",
      description: "Tecnologia avançada para acelerar a cicatrização, reduzir inflamações e promover regeneração celular.",
      image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      icon: "fas fa-leaf",
      title: "Acupuntura",
      description: "Medicina tradicional chinesa adaptada para pets, eficaz no controle da dor e equilíbrio energético.",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      icon: "fas fa-heartbeat",
      title: "Reabilitação",
      description: "Programas completos de recuperação pós-cirúrgica e tratamento de lesões ortopédicas e neurológicas.",
      image: "https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      icon: "fas fa-clock",
      title: "Cuidados Geriátricos",
      description: "Tratamentos especializados para pets idosos, focando na qualidade de vida e alívio de dores artríticas.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      icon: "fas fa-wind",
      title: "Ozonioterapia",
      description: "Terapia com ozônio para fortalecer o sistema imunológico, acelerar cicatrização e combater infecções.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-primary mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos especializados para a recuperação e bem-estar do seu pet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-2xl p-8 text-center card-hover" 
              data-aos="fade-up" 
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">
                {service.description}
              </p>
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-lg w-full mb-4 object-cover h-48"
              />
              {service.highlight && (
                <div className="text-primary font-semibold">Destaque da Clínica</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
