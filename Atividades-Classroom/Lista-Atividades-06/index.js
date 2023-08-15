//1. Descreva para que serve o comando "for".
O comando for é um tipo de laço de repetição que permite executar um bloco de código várias vezes
//2. Como o comando "for" define o início de uma repetição?
Através de uma expressão de inicialização

//3. Como o comando "for" determina o fim da execução?
 Através da condição, ela é avaliada antes de cada iteração do laço e, se for verdadeira, o bloco de código é executado, se  a condição for falsa, o laço termina

//4. Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?
Ocorre através da expressão de incremento que é executada ao final de cada iteração do laço e é usada para alterar o valor das variáveis que são usadas na condição
//5. Implemente o código do slide de número 18.
for (let i = 0; i < 10; i++) {
  console.log("teste")
}

//6. Implemente o código do slide de número 26.
for (let i = 0; i < 10; i++) {
  console.log(i)
}

//7. Implemente o código do slide de número 36.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i)
}
//8. Implemente o código do slide de número 38.

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue
  }
  console.log(i)
}

//9. Implemente o código do slide de número 44.

let nomes = [
  "Nemésio",
  "Carlos",
  "Algusto",
  "José",
  "Marluce"
]
for (let n of nomes) {
  console.log(n)
}

//10. Faça um programa que exiba os números de 1 a 10 em ordem crescente.

for (let j = 1; j <= 10; j++) {
  console.log(j)
}
//11. Crie um programa que exiba os números de 10 a 1 em ordem decrescente.

for (let i = 10; j > 10;)

  //12. Elabore um programa que calcule a soma dos números de 1 a 100.

  let soma = 0
for (i = 1; i <= 100; i++) {
  soma += i
}
console.log(soma)

//13. Desenvolva um programa que exiba todos os números pares de 1 a 50.

for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}
//14. Faça um programa que calcule o produto dos números de 1 a 5.
let product = 1
for (let i = 1; i <= 5; i++) {
  product *= i
}
console.log(product)

//15. Crie um programa que exiba a tabuada do 7.
let table = 7
for (let i = 1; i <= 10; i++) {
  table *= i
  console.log(`7 x ${i} = ${table} `)
}
//16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.

let soma = 0
for (let i = 1; i <= 5; i++) {
  let nota = parseFloat(prompt(`Digite ${i}ª nota`))
  soma += nota
}
alert(`A média das notas é ${soma / 5}`)

//17. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.


for (let i = 0; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i)
  }
}

//18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.
let numbs = []

for (let i = 1; i <= 10; i++) {
  let numb = parseFloat(prompt(`Digite um numero`))
  numbs.push(numb)
}
alert(`O maior numero é: ${Math.max(...numbs)}\n O menor numero é: ${Math.min(...numbs)} `)

//19. Faça um programa que exiba os números ímpares de 1 a 100.

for (let i = 1; i < 100; i++) {
  if (i % 2 != 0) {
    console.log(i)
  }
}
//20. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
//ou igual a 7)

let nota = 0
let aprovados = 0

for (let i = 1; i <= 5; i++) {
  let nota = prompt(`Digite a ${i}ª nota`)
  if (nota >= 7) {
    aprovados++
  }
}
alert(`Foram ${aprovados} aprovados!`)

//21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.
let numb = prompt("Digite um numero inteiro")
let soma = 0

for (let i = 0; i < numb.length; i++) {
  soma += parseInt((numb.charAt(i)))
}

alert(soma)

//22. Elabore um programa que leia um número inteiro e exiba todos os seus divisores.
let numb = 10
let divisores = []
for (i = 0; i <= numb; i++) {
  if (numb % i === 0) {
    divisores.push(i)
  }
}
console.log(divisores)
//23. Desenvolva um programa que calcule a média de altura de 5 pessoas.

soma = 0
for (let i = 1; i <= 5; i++) {
  let height = parseFloat(prompt(`Digite a altura da ${i}ª Pessoa`))
  soma += height
}
console.log(`midia = ${soma / 5}`)

//24. Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra
//"Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos,
//utilize a palavra "FizzBuzz".

for (let i = 1; i <= 100; i++) {

  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}

//25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.

const num = 123
let soma = 0

while (num !== 0) {
  const digit = num % 10
  if (digit % 2 === 0) {
    soma += digit
  }
  num = Math.floor(num / 10)
}
console.log(soma)

//26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o
//número lido for 123, o programa deve exibir 321.   

let numeroLido = parseInt(prompt("Digite um número inteiro:"))

let numeroInvertido = parseInt(numeroLido.toString().split("").reverse().join(''))

console.log("Número invertido:", numeroInvertido)
