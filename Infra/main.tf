provider "aws" {
  region = "us-east-1"
}

resource "aws_key_pair" "deployer" {
  key_name   = "QuizDevReal"
  public_key = file("~/.ssh/QuizDevReal.pub")
}

resource "aws_security_group" "quiz_sg" {
  name        = "quiz-sg"
  description = "Liberar porta 4173"
  
  ingress {
    from_port   = 4173
    to_port     = 4173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "quiz_app" {
  ami           = "ami-0c2b8ca1dad447f8a" # Ubuntu 22.04 us-east-1
  instance_type = "t2.micro"
  key_name      = aws_key_pair.deployer.key_name
  vpc_security_group_ids = [aws_security_group.quiz_sg.id]
  user_data     = file("startup.sh")

  tags = {
    Name = "quiz-react-app"
  }
}
