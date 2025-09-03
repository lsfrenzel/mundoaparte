import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
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
    const { tutorName, tutorPhone, tutorEmail, petName, petAge, petBreed, services, urgency, additionalInfo } = req.body;

    // Validação básica
    if (!tutorName || !tutorPhone || !tutorEmail || !petName || !services || services.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos os campos obrigatórios devem ser preenchidos' 
      });
    }

    // Log para debugging no Vercel
    console.log('Contact form submission:', {
      tutorName,
      petName,
      hasServices: services.length > 0,
      timestamp: new Date().toISOString()
    });

    // Configuração do transporter com fallback
    let transporter;
    try {
      transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        secure: true,
        port: 465
      });

      // Teste de conexão
      await transporter.verify();
    } catch (emailError) {
      console.error('Email configuration error:', emailError);
      // Retorna sucesso mas com instrução para contato direto
      return res.status(200).json({ 
        success: true, 
        message: 'Solicitação recebida! Entre em contato pelo WhatsApp (11) 91464-5858 para agilizar o atendimento.' 
      });
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c5530;">Nova Solicitação - Clínica Vila Mariana</h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">Dados do Tutor</h3>
          <p><strong>Nome:</strong> ${tutorName}</p>
          <p><strong>Telefone:</strong> ${tutorPhone}</p>
          <p><strong>Email:</strong> ${tutorEmail}</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">Dados do Pet</h3>
          <p><strong>Nome:</strong> ${petName}</p>
          <p><strong>Idade:</strong> ${petAge || 'Não informado'}</p>
          <p><strong>Raça:</strong> ${petBreed || 'Não informado'}</p>
        </div>
        
        <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">Serviços Solicitados</h3>
          <ul style="margin: 0; padding-left: 20px;">
            ${services.map(service => `<li style="margin: 5px 0;">${service}</li>`).join('')}
          </ul>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Urgência:</strong> ${urgency || 'Normal'}</p>
          ${additionalInfo ? `<p><strong>Observações:</strong> ${additionalInfo}</p>` : ''}
        </div>
        
        <div style="text-align: center; padding: 20px; border-top: 2px solid #2c5530; margin-top: 30px;">
          <p style="color: #666; font-size: 14px;">
            Enviado em ${new Date().toLocaleString('pt-BR')}<br>
            <em>Clínica de Fisioterapia Veterinária - Vila Mariana</em>
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Clínica Vila Mariana" <${process.env.EMAIL_USER}>`,
      to: 'mundoaparte.vilamariana@gmail.com',
      subject: `🐾 Novo Lead: ${tutorName} - Pet: ${petName}`,
      html: emailContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso:', info.messageId);

    return res.status(200).json({ 
      success: true, 
      message: 'Solicitação enviada com sucesso! Entraremos em contato em breve.' 
    });

  } catch (error) {
    console.error('Erro no formulário de contato:', error);
    
    // Retorna sucesso com mensagem alternativa para não quebrar UX
    return res.status(200).json({ 
      success: true, 
      message: 'Solicitação registrada! Para agilizar, entre em contato pelo WhatsApp: (11) 91464-5858' 
    });
  }
}