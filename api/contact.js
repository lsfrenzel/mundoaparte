import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Serverless function for Vercel
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método não permitido' 
    });
  }

  try {
    const { tutorName, petName, phone, email, species, service, message } = req.body;

    // Validation
    if (!tutorName || !petName || !phone || !email || !species || !service) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos os campos obrigatórios devem ser preenchidos' 
      });
    }

    // Log the form submission (visible in Vercel functions logs)
    console.log('Contact form submission:', {
      tutor: tutorName,
      pet: petName,
      service: service,
      timestamp: new Date().toISOString()
    });

    // Send email via Resend
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'mundoaparte.vilamariana@gmail.com',
        subject: `Novo Lead - ${tutorName} (Pet: ${petName})`,
        html: `
          <h2>Nova Solicitação de Contato</h2>
          <p><strong>Tutor:</strong> ${tutorName}</p>
          <p><strong>Pet:</strong> ${petName}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Espécie:</strong> ${species}</p>
          <p><strong>Serviço:</strong> ${service}</p>
          <p><strong>Mensagem:</strong> ${message || 'Nenhuma mensagem adicional'}</p>
          <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        `
      });
      
      console.log('Email sent successfully via Resend');
      
      return res.status(200).json({ 
        success: true, 
        message: 'Solicitação enviada com sucesso! Entraremos em contato em breve.' 
      });
    } catch (emailError) {
      console.error('Resend error:', emailError);
      
      // Fallback: Return success but log the error
      return res.status(200).json({ 
        success: true, 
        message: 'Solicitação recebida! Entre em contato pelo WhatsApp (11) 91464-5858 para confirmar rapidamente.' 
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Solicitação registrada! Entre em contato pelo WhatsApp (11) 91464-5858.' 
    });
  }
}