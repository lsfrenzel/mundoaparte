import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  tutorName: string;
  petName: string;
  phone: string;
  email: string;
  species: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    tutorName: '',
    petName: '',
    phone: '',
    email: '',
    species: '',
    service: '',
    message: ''
  });

  const submitLead = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Use Vercel API endpoint for production
      const endpoint = import.meta.env.PROD ? '/api/contact' : '/api/leads';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description: "Sua solicitação foi enviada. Entraremos em contato em breve!",
      });
      setFormData({
        tutorName: '',
        petName: '',
        phone: '',
        email: '',
        species: '',
        service: '',
        message: ''
      });
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
      console.error('Error submitting form:', error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.tutorName || !formData.petName || !formData.phone || !formData.email || !formData.species || !formData.service) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    submitLead.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-12 sm:py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div data-aos="fade-right">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Entre em Contato</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              Estamos prontos para cuidar do seu pet. Agende uma consulta e veja como podemos ajudar na recuperação.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start sm:items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center text-primary mr-3 sm:mr-4 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-sm sm:text-base"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Endereço</h4>
                  <p className="text-sm sm:text-base">R. Bela Flor, 217 - Vila Mariana<br />São Paulo - SP, 04128-050</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center text-primary mr-3 sm:mr-4">
                  <i className="fas fa-phone text-sm sm:text-base"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Telefone</h4>
                  <p className="text-sm sm:text-base">(11) 91464-5858</p>
                </div>
              </div>

              <div className="flex items-start sm:items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center text-primary mr-3 sm:mr-4 flex-shrink-0">
                  <i className="fas fa-envelope text-sm sm:text-base"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">E-mail</h4>
                  <p className="text-sm sm:text-base break-all">mundoaparte.vilamariana@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start sm:items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center text-primary mr-3 sm:mr-4 flex-shrink-0">
                  <i className="fas fa-clock text-sm sm:text-base"></i>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Horário de Funcionamento</h4>
                  <p className="text-sm sm:text-base">Segunda a Sexta: 8h às 21h<br />Sábado: 8h às 14h</p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-gray-800">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Agende sua Consulta</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome do Tutor *</label>
                  <Input
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.tutorName}
                    onChange={(e) => handleInputChange('tutorName', e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Nome do Pet *</label>
                  <Input
                    type="text"
                    placeholder="Nome do seu pet"
                    value={formData.petName}
                    onChange={(e) => handleInputChange('petName', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone *</label>
                    <Input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Espécie *</label>
                    <Select value={formData.species} onValueChange={(value) => handleInputChange('species', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cao">Cão</SelectItem>
                        <SelectItem value="gato">Gato</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">E-mail *</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Serviço de Interesse *</label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hidroterapia">Hidroterapia</SelectItem>
                      <SelectItem value="fisioterapia">Fisioterapia</SelectItem>
                      <SelectItem value="laserterapia">Laserterapia</SelectItem>
                      <SelectItem value="acupuntura">Acupuntura</SelectItem>
                      <SelectItem value="reabilitacao">Reabilitação</SelectItem>
                      <SelectItem value="geriatrico">Cuidados Geriátricos</SelectItem>
                      <SelectItem value="ozonioterapia">Ozonioterapia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea
                    rows={4}
                    placeholder="Conte-nos sobre o caso do seu pet..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold btn-hover"
                  disabled={submitLead.isPending}
                >
                  {submitLead.isPending ? "Enviando..." : "Enviar Solicitação"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
