// Vercel Serverless Function para formulário de contato
export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { tutorName, email, phone, petName, petAge, petType, services, urgency, message } = req.body;
      
      // Validação básica
      if (!tutorName || !email || !phone || !petName) {
        return res.status(400).json({ 
          success: false, 
          message: 'Campos obrigatórios não preenchidos' 
        });
      }

      // Simular envio (em produção, você conectaria com um serviço de email)
      console.log('Novo contato recebido:', {
        tutorName,
        email,
        phone,
        petName,
        petAge,
        petType,
        services,
        urgency,
        message,
        timestamp: new Date().toISOString()
      });

      // Resposta de sucesso
      res.status(200).json({
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });

    } catch (error) {
      console.error('Erro ao processar formulário:', error);
      res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
      });
    }
  } else {
    res.status(405).json({
      success: false,
      message: 'Método não permitido'
    });
  }
}