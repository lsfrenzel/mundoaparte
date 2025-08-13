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
      const response = await apiRequest('POST', '/api/leads', data);
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
    <section id="contato" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-xl mb-8">
              Estamos prontos para cuidar do seu pet. Agende uma consulta e veja como podemos ajudar na recuperação.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold">Endereço</h4>
                  <p>R. Bela Flor, 217 - Vila Mariana, São Paulo - SP, 04128-050</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold">Telefone</h4>
                  <p>(11) 91464-5858</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold">E-mail</h4>
                  <p>mundoaparte.vilamariana@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-bold">Horário de Funcionamento</h4>
                  <p>Segunda a Sexta: 8h às 21h<br />Sábado: 8h às 14h</p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold text-primary mb-6">Agende sua Consulta</h3>
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
