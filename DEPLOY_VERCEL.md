# Deploy do Projeto no Vercel

## Pré-requisitos
- Conta no Vercel (https://vercel.com)
- Código do projeto no GitHub, GitLab ou Bitbucket

## Passos para Deploy

### 1. Preparar o Repositório
1. Faça push de todo o código para seu repositório Git
2. Certifique-se que os arquivos `vercel.json` e `api/contact.js` estão incluídos

### 2. Deploy no Vercel

#### Opção A: Via Dashboard
1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "New Project"
3. Conecte seu repositório Git
4. Selecione o repositório do projeto
5. Configure as seguintes opções:
   - **Framework Preset**: Other
   - **Build Command**: `vite build && cp -r public/* dist/public/ 2>/dev/null || true`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

#### Opção B: Via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# No diretório do projeto
vercel

# Seguir as instruções interativas
```

### 3. Configurações Necessárias

#### Variáveis de Ambiente (se necessário)
Se você usar banco de dados ou outros serviços, adicione as variáveis de ambiente:
1. No dashboard do Vercel, vá em Project Settings
2. Clique em Environment Variables
3. Adicione suas variáveis (ex: DATABASE_URL)

### 4. Estrutura de Arquivos Adaptada

```
projeto/
├── client/           # Frontend React
├── api/             # Serverless Functions do Vercel
│   └── contact.js   # API para formulário de contato
├── public/          # Assets estáticos
│   └── attached_assets/ # Imagens e mídia
├── vercel.json      # Configuração do Vercel
└── package.json     # Dependências
```

### 5. Recursos Utilizados

#### Frontend (Estático)
- React com Vite
- Tailwind CSS
- Componentes Radix UI
- Animações AOS

#### Backend (Serverless)
- Funções serverless para APIs
- Formulário de contato funcional
- Servindo assets estáticos

### 6. URLs Importantes

Após o deploy:
- **Site Principal**: `https://seu-projeto.vercel.app`
- **API de Contato**: `https://seu-projeto.vercel.app/api/contact`

### 7. Troubleshooting

#### Problema: Build falha
- Verificar se todas as dependências estão no package.json
- Checar erros de TypeScript

#### Problema: Imagens não carregam
- Verificar se estão na pasta `public/attached_assets/`
- Verificar paths no código

#### Problema: API não funciona
- Verificar se arquivo `api/contact.js` existe
- Testar endpoint diretamente

### 8. Vantagens do Vercel

- **Deploy automático**: Cada push faz deploy automaticamente
- **CDN Global**: Site carrega rapidamente no mundo todo
- **HTTPS gratuito**: SSL automático
- **Domínio customizado**: Pode usar seu próprio domínio
- **Serverless**: Escala automaticamente
- **Gratuito**: Plano free generoso para projetos pequenos

## Resultado Final

O site estará disponível com:
✅ Todas as páginas funcionando (Home, Sobre, Serviços, Depoimentos, Contato)
✅ Formulário de contato operacional
✅ Logo e imagens carregando
✅ Mapa do Google Maps
✅ Design responsivo
✅ WhatsApp float
✅ Performance otimizada