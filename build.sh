#!/bin/bash
# Build script para Vercel

echo "Iniciando build..."

# Instalar dependências
npm install

# Build do frontend com Vite
echo "Construindo frontend..."
vite build

# Copiar assets públicos para o diretório de output
echo "Copiando assets..."
cp -r public/* dist/public/ 2>/dev/null || true

echo "Build concluído!"
echo "Arquivos gerados em dist/public/"
ls -la dist/public/