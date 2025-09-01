import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'mundoaparte.vilamariana@gmail.com',
    pass: process.env.EMAIL_PASS || '' // App password needed
  }
});

async function sendEmailNotification(lead: any) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'mundoaparte.vilamariana@gmail.com',
      to: 'mundoaparte.vilamariana@gmail.com',
      subject: `Novo Lead - ${lead.tutorName} (Pet: ${lead.petName})`,
      html: `
        <h2>Nova Solicitação de Contato</h2>
        <p><strong>Tutor:</strong> ${lead.tutorName}</p>
        <p><strong>Pet:</strong> ${lead.petName}</p>
        <p><strong>Telefone:</strong> ${lead.phone}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Espécie:</strong> ${lead.species}</p>
        <p><strong>Serviço:</strong> ${lead.service}</p>
        <p><strong>Mensagem:</strong> ${lead.message || 'Nenhuma mensagem adicional'}</p>
        <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(leadData);
      
      // Send email notification
      await sendEmailNotification(lead);
      
      console.log("New lead received:", lead);
      
      res.json({ success: true, leadId: lead.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating lead:", error);
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  // Get all leads (for admin purposes)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ 
        success: false, 
        message: "Erro ao buscar leads" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
