const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
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

    // Get email credentials from environment
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    console.log('Environment check:', { 
      hasEmailUser: !!emailUser, 
      hasEmailPass: !!emailPass 
    });
    
    if (!emailUser || !emailPass) {
      console.error('Email credentials missing from environment variables');
      return res.status(500).json({ 
        success: false, 
        message: 'Configuração de email não encontrada. Entre em contato pelo WhatsApp: (11) 91464-5858' 
      });
    }

    // Email configuration with enhanced options
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Email transporter verified successfully');
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError);
      return res.status(500).json({ 
        success: false, 
        message: 'Erro na configuração do email. Entre em contato pelo WhatsApp: (11) 91464-5858' 
      });
    }

    const mailOptions = {
      from: emailUser,
      to: 'mundoaparte.vilamariana@gmail.com',
      subject: `Novo Lead - ${tutorName} (Pet: ${petName})`,
      html: `
        <h2>Nova Solicitação de Contato</h2>
        
        <h3>Dados do Tutor:</h3>
        <p><strong>Nome:</strong> ${tutorName}</p>
        <p><strong>Telefone:</strong> ${tutorPhone}</p>
        <p><strong>Email:</strong> ${tutorEmail}</p>
        
        <h3>Dados do Pet:</h3>
        <p><strong>Nome:</strong> ${petName}</p>
        <p><strong>Idade:</strong> ${petAge || 'Não informado'}</p>
        <p><strong>Raça:</strong> ${petBreed || 'Não informado'}</p>
        
        <h3>Serviços Solicitados:</h3>
        <ul>
          ${services.map(service => `<li>${service}</li>`).join('')}
        </ul>
        
        <h3>Urgência:</h3>
        <p>${urgency || 'Normal'}</p>
        
        ${additionalInfo ? `
        <h3>Informações Adicionais:</h3>
        <p>${additionalInfo}</p>
        ` : ''}
        
        <hr>
        <p><em>Enviado pelo site da Clínica de Fisioterapia Veterinária - Vila Mariana</em></p>
      `
    };

    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
    });

  } catch (error) {
    console.error('Error in contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erro interno do servidor. Tente novamente ou entre em contato pelo WhatsApp: (11) 91464-5858' 
    });
  }
}