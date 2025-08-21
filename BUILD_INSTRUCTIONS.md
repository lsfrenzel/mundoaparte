# Instruções de Build para Vercel

## O que foi adaptado para o Vercel:

### 1. Estrutura de Arquivos
```
projeto/
├── api/contact.js           # Função serverless para o formulário
├── public/attached_assets/  # Assets movidos para public
├── vercel.json             # Configuração do Vercel
├── client/                 # Frontend React
└── DEPLOY_VERCEL.md        # Instruções completas
```

### 2. Mudanças Realizadas

#### Configuração do Vercel (vercel.json):
- Build estático do frontend com Vite
- Função serverless para formulário de contato
- Roteamento correto para assets

#### API Serverless:
- Criada função `/api/contact.js` para processar formulários
- CORS configurado para funcionamento correto
- Validação de dados implementada

#### Assets:
- Imagens movidas para `public/attached_assets/`
- Caminhos atualizados no código
- Logo funcional no header

#### Frontend:
- Formulário de contato atualizado para usar `/api/contact`
- Mantidas todas as funcionalidades originais
- Design responsivo preservado

### 3. Build Process
```bash
# O Vercel executará automaticamente:
npm install
vite build
```

### 4. Resultado Final
- Site estático hospedado na CDN global do Vercel
- Função serverless para formulário de contato
- HTTPS automático
- Deploy automático a cada push no Git

### 5. Para Testar Localmente
```bash
# Instalar Vercel CLI
npm i -g vercel

# No diretório do projeto
vercel dev
```

Isso permitirá testar as funções serverless localmente antes do deploy final.