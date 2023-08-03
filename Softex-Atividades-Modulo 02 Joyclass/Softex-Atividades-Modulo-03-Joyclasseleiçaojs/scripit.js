let candidate_X = 0
let candidate_Y = 0
let candidate_Z = 0
let blank = 0
let nulo = 0

while (true) {
  let voto = prompt("Digite o número do candidato que deseja votar:\n" +"1 - candidato_X\n" +"2 - candidato_Y\n" +"3 - candidato_Z\n" +"0 - branco\n" +"Para finalizar a votação, digite 'fim'")

  if (voto.toLowerCase() === "fim") {
    break
  }

  voto = parseInt(voto)

  if (isNaN(voto)) {
    alert("Voto inválido! Por favor, digite o número do candidato ou 'fim' para finalizar a votação.")
  } else if (voto === 1) {
    candidate_X++
  } else if (voto === 2) {
    candidate_Y++
  } else if (voto === 3) {
    candidate_Z++
  } else if (voto === 0) {
    blank++
  } else {
    nulo++
  }
}
nulo = nulo + blank

if (candidate_X > candidate_Y && candidate_X > candidate_Z) {
    winner = "Candidato X"
  } else if (candidate_Y > candidate_X && candidate_Y > candidate_Z) {
    winner = "Candidato Y"
  } else if (candidate_Z > candidate_X && candidate_Z > candidate_Y) {
    winner = "Candidato Z"
  } else {
    winner = "Empate"
  }
  
  alert(`Resultado da Eleição:\n Candidato X ${candidate_X} votos\n Candidato Y ${candidate_Y} votos\n Candidato Z ${candidate_Z} votos\n Nulos ${nulo}\n 
  O vencendor foi o ${winner} `)


