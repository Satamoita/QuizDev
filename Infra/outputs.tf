output "public_ip" {
  value = aws_instance.quiz_app.public_ip
}

output "url_de_acesso" {
  value = "http://${aws_instance.quiz_app.public_ip}:4173"
}
