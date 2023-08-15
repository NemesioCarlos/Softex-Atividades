//1. Enumere as diferenças entre os comandos "for" e "while".
O loop for lhe fornece recursos para pré - iniciação 
validar e processar 
O loop while lhe fornece o recurso de validar
//2. Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.
for é geralmente usado quando você sabe o número de iterações,
  O loop while é usado quando você tem uma
ideia sobre a faixa de valores em que para fazer uma iteração, mas 
não sabe o número exato de iterações que ocorrem
//3. Implemente o código do slide de número 9.
let i = 0;
while (i < 10) {
  console.log("frase 10x")
  i++
}
//4. Implemente o código do slide de número 16.
let i = 4649833;
while (i > 10) {
  console.log(i.toFixed(2))
  i /= 35
}
//5. Implemente o código do slide de número 26.
let i = 0
do {
  console.log(i)
  i++
}
while (i < 5)
//6. Escreva um programa que exiba os números de 1 a 10 em ordem crescente utilizando o while.

let i = 0

while (i <= 10) {
  console.log(i)
  i++
}

//7. Crie um programa que exiba os números de 10 a 1 em ordem decrescente utilizando o while.

let i = 10
while (i >= 1) {
  console.log(i)
  i--
}
//8. Elabore um programa que calcule a soma dos números de 1 a 100 utilizando o while.

let soma = 0
let i = 0
while (i <= 100) {
  console.log(soma += i)
  i++
}
//9. Faça um programa que calcule o produto dos números de 1 a 5 utilizando o while.

let produto = 1
let i = 1

while (i <= 5) {
  console.log(produto *= i)
  i++
}
//10. Crie um programa que exiba a tabuada do 9 utilizando o while.
let i = 1
let tabuada = 1
const numero = 9

while (i <= 10) {
  tabuada *= i
  console.log(`${9} x ${i} = ${tabuada}`)
  i++
}

//11. Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o
//menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0
//utilizando o while.

let maiorValor = Number.MIN_SAFE_INTEGER
let menorValor = Number.MAX_SAFE_INTEGER

while (true) {
  const numero = parseInt(prompt("Digite um número inteiro (ou 0 para sair):"))

  if (numero === 0) break

  if (!isNaN(numero)) {
    maiorValor = Math.max(maiorValor, numero)
    menorValor = Math.min(menorValor, numero)
  }
}

console.log("Maior valor digitado:", maiorValor)
console.log("Menor valor digitado:", menorValor)

//12. Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos
//números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando
//o while.
let i = 0
let soma = 0

while (true) {
  let numero = parseInt(prompt("Digite um numero"))
  i++
  soma += numero
  if (numero === -1) {
    break
  }
}
media = soma / i
console.log(media)

//13. Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo
//utilizando o while.

let numero = parseInt(prompt("Digite um número inteiro: "));
let soma = 0;
while (numero !== 0) {
  let digito = numero % 10;
  soma += Math.pow(digito, 3);
  numero = Math.floor(numero / 10);
}
console.log("A soma dos dígitos elevados ao cubo é " + soma);
//14. Faça um programa que exiba os números ímpares de 1 a 100 utilizando o while.

//15. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o
//while.

//16. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
//ou igual a 7) utilizando o while.

//17. Elabore um programa que leia uma sequência de números inteiros do usuário e determine
//quantos números pares foram digitados antes do primeiro número ímpar. O programa deve parar
//de ler quando o usuário digitar o número 0 utilizando o while.

//18. Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos
//números pares e quantos números ímpares foram digitados. O programa deve parar de ler quando
//o usuário digitar o número 0 utilizando o while.

//19. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
//números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5. O
//programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

//20. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
//dos números divisíveis por 3. O programa deve parar de ler quando o usuário digitar o número 0
//utilizando o while.

//21. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
//números possuem mais de três dígitos. O programa deve parar de ler quando o usuário digitar o
//número 0 utilizando o while.

//22. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
//dos números que estão entre 50 e 100. O programa deve parar de ler quando o usuário digitar o
//número 0 utilizando o while.

//23. Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor
//valor digitado que seja positivo e ímpar. O programa deve parar de ler quando o usuário digitar o
//número 0 utilizando o while.

//24. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
//números são pares e quantos números são ímpares entre o primeiro e o último número digitado.
//O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.