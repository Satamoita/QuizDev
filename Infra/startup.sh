apt update 
apt install -y docker.io git

git clone https://github.com/Satamoita/quiz-react-real.git/quizbdf
cd /quizbdf

docker build -t quiz-react-real .
docker run -d --name quiz-react -p 4173:4173 -e PORT=4173 quiz-react-real