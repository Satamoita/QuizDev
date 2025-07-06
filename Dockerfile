# Etapa de build
FROM node:20.15.1-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package*.json ./
RUN npm install

# Copia o restante do projeto
COPY . .

# Executa o build de produção
RUN npm run build

# Etapa final: servidor para os arquivos gerados
FROM node:20.15.1-alpine

WORKDIR /app
RUN npm install -g serve

# Copia os arquivos gerados no build
COPY --from=builder /app/dist ./dist

# Expõe a porta padrão do Vite preview/serve
EXPOSE 4173

# Comando que serve os arquivos
CMD ["serve", "-s", "dist", "-l", "4173"]
