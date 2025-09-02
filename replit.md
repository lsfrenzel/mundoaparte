# Overview

This is a veterinary clinic website for "Clínica de Fisioterapia Veterinária - Vila Mariana," a specialized animal physiotherapy and rehabilitation clinic in São Paulo, Brazil. The application is a full-stack web solution built with React for the frontend and Express.js for the backend, featuring a lead generation contact form system for potential clients to book consultations and request services.

The website showcases various veterinary services including hydrotherapy, physiotherapy, laser therapy, acupuncture, rehabilitation, geriatric care, and ozonotherapy for pets. It features separate pages for each menu item (Home, About, Services, Testimonials, Contact) with modern routing, responsive design, and smooth animations. The site includes an updated logo, video content on testimonials page, Google Maps integration with correct address (R. Bela Flor, 217 - Vila Mariana, SP), updated hours (8am-9pm Mon-Fri), email (mundoaparte.vilamariana@gmail.com), and WhatsApp integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **Routing**: Wouter for lightweight client-side routing with separate pages for each menu item
- **UI Components**: Custom component library built on Radix UI primitives with shadcn/ui styling patterns
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: AOS (Animate On Scroll) library and GSAP for interactive animations
- **Form Handling**: React Hook Form with Zod validation for the contact form
- **Navigation**: Active page highlighting with smooth mobile menu animations
- **Deployment**: Optimized for Vercel hosting with static build and serverless functions

## Backend Architecture
- **Development**: Express.js with TypeScript for local development
- **Production**: Vercel serverless functions for contact form processing
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Proper HTTP status codes and error messages
- **CORS**: Configured for cross-origin requests in production

## Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Connection**: Neon Database serverless PostgreSQL for production

## Data Models
- **Users**: Basic user authentication schema with username/password
- **Leads**: Contact form submissions with tutor information, pet details, and service requests
- **Schema Validation**: Zod schemas for runtime type validation on both client and server

## External Dependencies
- **Database Hosting**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **UI Components**: Comprehensive Radix UI component library for accessible primitives
- **Animation Libraries**: AOS for scroll animations, GSAP for advanced interactions
- **Typography**: Google Fonts (Inter) for consistent typography
- **Icons**: Font Awesome for iconography
- **Development Tools**: Replit integration for cloud development environment

## Design System
- **Color Scheme**: Custom veterinary clinic brand colors with CSS custom properties
- **Typography**: Inter font family with predefined weight scales
- **Component Variants**: Class Variance Authority (CVA) for component styling variants
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure WCAG compliance

## Build and Development
- **Build Tool**: Vite for fast development and optimized production builds
- **Code Splitting**: Automatic code splitting with Vite
- **Static Assets**: Served from public/ directory for Vercel compatibility
- **Type Checking**: TypeScript with strict mode enabled
- **Development Server**: Express with Vite middleware for hot module replacement
- **Production Deployment**: Vercel with static build and serverless functions
- **Contact Form**: Serverless function at /api/contact.js for form processing