export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      pet: "Rex",
      initial: "M",
      text: "O Rex estava com muita dificuldade para andar após a cirurgia. Com a hidroterapia aqui na clínica, ele voltou a correr e brincar como antes. Equipe maravilhosa!",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      pet: "Luna",
      initial: "C",
      text: "A Luna tinha artrite e sofria muito. A laserterapia mudou completamente a vida dela. Hoje ela está muito mais ativa e feliz. Recomendo de olhos fechados!",
      rating: 5
    },
    {
      name: "Ana Carolina",
      pet: "Mimi",
      initial: "A",
      text: "Meu gatinho Mimi teve uma lesão na coluna e os veterinários disseram que ele poderia não andar mais. Graças ao tratamento aqui, ele se recuperou completamente!",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-primary mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-xl text-gray-700">Histórias reais de recuperação e satisfação</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="testimonial-card card-hover" 
              data-aos="fade-up" 
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-600">Tutor do {testimonial.pet}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                {testimonial.text}
              </p>
              <div className="flex text-yellow-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
