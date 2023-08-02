let userName = prompt("Informe seu nome completo:")
let userData = parseInt(prompt("Informe seu ano de nascimento:"))

while (isNaN(userData) || userData < 1922 || userData > 2022) {
  alert("Ano invalido. Digite novamente")
  userData = parseInt(prompt("Informe sua data de nascimento"))
} 
let ageUser = 2022 - userData 
alert(`Olá ${userName}! Você tem ${age} anos `)