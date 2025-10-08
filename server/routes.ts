import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";
import { getUncachableResendClient } from "./resend";

async function sendEmailNotification(lead: any) {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    await client.emails.send({
      from: fromEmail,
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
    });
    
    console.log('Email sent successfully via Resend');
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    // Gracefully degrade - don't throw error, just log it
    // The lead was already persisted, so the form submission succeeded
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
