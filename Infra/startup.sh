#!/bin/bash

# Atualiza pacotes
yum update -y

# Instala Docker e Git
yum install -y docker git

# Inicia o Docker
service docker start
usermod -aG docker ec2-user

# Vai para a pasta do usuário padrão
cd /home/ec2-user

# Clona o repositório
git clone https://github.com/Satamoita/QuizDev.git

# Entra no diretório do app
cd QuizDev

# Constrói a imagem Docker com o nome desejado
docker build -t quiz-react-real .

# Sobe o container na porta 80 (externa) → 4173 (interna)
docker run -d --name quiz-react -p 80:4173 -e PORT=4173 quiz-react-real
