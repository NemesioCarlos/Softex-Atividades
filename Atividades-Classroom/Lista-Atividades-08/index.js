
//1. Implemente o código do slide de número 6.
console.log("Estudar é bom")
console.log("Paciência e persistência")
console.log("Revisão é a mãe do aprendizado")
//2. Implemente o código do slide de número 15.
function criarFrases() {
  console.log("Estudar é bom")
  console.log("Paciência e persistência")
  console.log("Revisão é a mãe do aprendizado")
}
criarFrases()
criarFrases()
criarFrases()

//3. Implemente o código do slide de número 24.
function soma(n1, n2) {
  console.log(n1 + n2)
}
soma(10, 46)
soma(12, 24)
soma(10, 42)
//4. Implemente o código do slide de número 33.
function soma(n1, n2) {
  return n1 + n2
}

let teste = soma(2, 3)
console.log(teste)
let teste2 = soma(6, 4)
console.log(teste2)

console.log(soma(5, 5))
//5. Escreva uma função chamada "soma" que receba dois parâmetros (a e b) e retorne a soma deles.
function soma(a, b) {
  return a + b
}
console.log(soma(2, 5))

//6. Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true"
//se o número for par ou "false" caso contrário.
function isPar(numb) {
  if (numb % 2 === 0) {
    return numb = true
  } else { return numb = false }
}
console.log(isPar(5))
console.log(isPar(2))

//7. Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média
//aritmética delas.

function media() {
  let n2 = parseFloat(prompt("Digite a nota"))
  let n1 = parseFloat(prompt("Digite a nota"))
  let n3 = parseFloat(prompt("Digite a nota"))
  return (n1 + n2 + n3) / 3
}
console.log(media())

//8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma
//pessoa e retorne o índice de massa corporal (IMC) dela.

function imc(peso, altura,) {
  return peso / (altura * altura)
}

let peso = prompt("peso")
let altura = prompt("altura")
let imcFinal = imc(peso, altura)
console.log(imcFinal.toFixed(2))

//9. Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
//percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.

function calcularDesconto(valorProduto, desconto) {
  return valorProduto - desconto
}

let produto = 200
let desconto = (10 * produto) / 100

console.log(calcularDesconto(produto, desconto))

//10. Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa
//como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes
//faixas de renda:
//a. Até R$ 1.903,98: isento
//b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
//c. De R$ 2 .826,66 até R$ 3.751,05: alíquota de 15%
//d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
//e. Acima de R$ 4.664,68: alíquota de 27,5%

function calcularImpostoRenda(salarioBruto) {
  let imposto = 0;

  if (salarioBruto <= 1903.98) {
    imposto = 0;
  } else if (salarioBruto <= 2826.65) {
    imposto = salarioBruto * 0.075 - 142.80;
  } else if (salarioBruto <= 3751.05) {
    imposto = salarioBruto * 0.15 - 354.80;
  } else if (salarioBruto <= 4664.68) {
    imposto = salarioBruto * 0.225 - 636.13;
  } else {
    imposto = salarioBruto * 0.275 - 869.36;
  }

  return imposto.toFixed(2);
}

const salarioBruto = 5000;
const impostoRenda = calcularImpostoRenda(salarioBruto);
console.log(impostoRenda);


//11. Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como
//parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais
//próximo.function calcularMediaArredondada(numero){

function calcularMediaArredondada(numero) {
  let soma = 0
  for (i = 0; i < lista.length; i++) {
    soma += numero[i];
  }
  let media = soma / numero.length;
  return Math.round(media)
}
let lista = [8, 8, 8, 8, 8]
let mediaArredondada = calcularMediaArredondada(lista);
console.log(mediaArredondada)

//12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro
//como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares
//presentes nesse número.

function contarDigitosParesImpares(numero) {
  let pares = 0
  let impars = 0
  let digitos = numero.toString().split('')
  for (let i = 0; i < digitos.length; i++) {
    if (digitos[i] % 2 == 0) { pares++ }
    else { impars++ }
  }
  return [pares, impars]
}

let numero = 123456
let [pares, impars] = contarDigitosParesImpares(numero)
console.log(pares, impars)

//13. Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno
//é representado por um objeto com os atributos "nome" e "nota". A função deve calcular e
//retornar a média das notas de todos os alunos.
function calcularMediaAlunos(alunos) {
  let somaNotas = 0

  for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i]
    somaNotas += aluno.nota
    console.log(aluno)
  }
  let media = somaNotas / alunos.length
  return media
}

let listaDeAlunos = [
  { nome: "nemesio", nota: 9 },
  { nome: "jose", nota: 9 },
  { nome: "lib", nota: 10 }
]
console.log(calcularMediaAlunos(listaDeAlunos))

//14. Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como
//parâmetro e retorne a idade atual.

function calcularIdade(anoNascimento) {
  let anoAtual = 2023
  return anoAtual - anoNascimento
}

let ano = prompt("Digite o ano")
let idade = calcularIdade(ano)
alert(idade)

//15. Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a
//tabuada desse número de 1 a 10 no console.

function gerarTabuada(numero) {
  for (i = 1; i <= 10; i++) {
    let tabuada = i * numero
    console.log(`Tabuada de ${numero}`)
    console.log(`${numero} x ${i} = ${tabuada} `)
  }
}
let numero = prompt("Digite o numero ")
console.log(gerarTabuada(numero))

//16. Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre
//1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função
//deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o
//usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas
//utilizadas.
function adivinheNumero() {
  let numero = Math.floor(Math.random() * 100) + 1
  let tentativas = 0
  let chute = 0
  while (chute != numero) {
    tentativas++
    chute = prompt("Digite um numero")
    console.log(numero)
    if (chute === numero) {
      alert(`Parabéns você acertou em ${tentativas} tentativas`)
      break
    } else if (chute < numero) {
      alert("Chute mais alto")
      return
    } else { "chute maisbaixo" }
    return

  }
}
adivinheNumero()
//17. Crie uma função chamada "verificarPropriedade" que receba um objeto e uma string como
//parâmetros, e retorne true se o objeto possuir a propriedade com o nome especificado na string, e
//false caso contrário.

function verificarPropriedade(objeto, propriedade) {
  return objeto.hasOwnProperty(propriedade)
}
let pessoa = { nome: "carlos", idade: 26 }

console.log(verificarPropriedade(pessoa, "nome"))
console.log(verificarPropriedade(pessoa, "email"))

//18. Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a
//"margem de lucro" desejada (em percentual) e o "valor do frete" como parâmetros. A função deve
//calcular e retornar o preço de venda do produto, considerando que o preço de venda é igual ao
//custo acrescido da margem de lucro e do valor do frete.

function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {

  margemLucro = valorCusto * 0.25
  let precoVenda = valorCusto + margemLucro + valorFrete
  return precoVenda
}

let valorcusto = 200
let margeLucro = 0.25
let frete = 25
console.log(calcularPrecoProduto(valorcusto, margeLucro, frete))

//19. Escreva uma função que aceite uma string como parâmetro e encontre a palavra mais longa dentro
//da string. String de exemplo: 'Tutorial de desenvolvimento da web'. Resultado esperado:
//'Desenvolvimento'.

function maiorPalavra(string) {
  let palavras = string.split(" ")
  let maiorPalavra = ""

  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > maiorPalavra.length) {
      maiorPalavra = palavras[i]
    }
  }
  return maiorPalavra
}

const string = "Tutorial de desenvolvimento da web"
console.log(maiorPalavra(string))

//20. Escreva uma função que pegue uma lista de strings e as imprima, uma por linha, em um quadro
//retangular. Por exemplo, a lista ["Hello", "World", "in", "a", "frame"] é impressa como:
//*********
//* Hello *
//* World *
//* in *
//* a *
//* frame *
//*********

function retanguloPorPalavra(array) {
  let maiorPalavra = "";

  // Procura o maior palavra
  for (const element of array) {
    // console.log(`Palavra: ${element}, caracteres: ${element.length}`)

    if (maiorPalavra.length < element.length) {
      maiorPalavra = element;
    }
  }
  console.log("*".repeat(maiorPalavra.length + 4))
  const espaco = " ";

  // Cria o retangulo
  for (const element of array) {

    const numeroDeEspacos = maiorPalavra.length - element.length
    console.log(`* ${element}${espaco.repeat(numeroDeEspacos)} *`)
  }
  console.log("*".repeat(maiorPalavra.length + 4))

  // console.log(`maiorPalavra: ${maiorPalavra}`)
}

const palavras = [
  "Emersson",
  "Carlos",
  "Rinaldo",
  "Israel",
  "Aristóteles",
  "Marcelo",
  "Isis",
  "Nara",
  "Bil",
]

const palavras2 = [
  "Marcelo",
  "Isis",
  "Nara",
  "Bil",
]

retanguloPorPalavra(palavras)
retanguloPorPalavra(palavras2)
//21. Crie uma função que receba um array de strings e retorne um novo array contendo apenas as
//strings que têm mais de 5 caracteres.
function cincoCarac(array) {
  return array.filter(string => string.length > 5)
}
let array = ["carlos", "libna", "lu", "milady", "jose"]
console.log(cincoCarac(array))

//22. Crie uma função que recebe um array de objetos com informações sobre livros (título, autor, ano,
//etc.) e retorne um novo array apenas com os livros escritos por determinado autor.

function infoLivros(livros, autor) {
  return livros.filter(livro => livro.autor === autor)
}


let livros = [
  { titulo: "Como fazer amigos e influenciar pessoas ", autor: "Dale Carnegie", ano: 1975, },
  { titulo: "A republica", autor: "Platão", ano: 428, },
  { titulo: "A alegoria da caverna", autor: "Platão", ano: 428 }
]
const livrosplatao = infoLivros(livros, "Platão")

console.log(livrosplatao)

//23. Crie uma função que recebe um array de objetos representando pessoas (com nome, idade, etc.) e
//retorne o nome da pessoa mais velha.

function pessoaMaisVelha(listaDePessoas) {
  let pessoaMaisVelha = listaDePessoas[0]

  for (i = 0; i < listaDePessoas.length; i++) {
    if (listaDePessoas[i].idade > pessoaMaisVelha.idade) {
      pessoaMaisVelha = listaDePessoas[i]
    }
  }
  return pessoaMaisVelha.nome
}

let listaDePessoas = [
  { nome: "carlos", idade: 26 },
  { nome: "Líbna", idade: 26 },
  { nome: "Marluce", idade: 53 }
]
console.log(pessoaMaisVelha(listaDePessoas))

//24. Escreva uma função que recebe um array de objetos com informações sobre carros (com marca,
//modelo, ano, etc.) e retorne um novo array apenas com os carros fabricados após um certo ano
//específico.

function filterCarsByYear(cars, year) {
  return cars.filter(car => car.year > year);
}

const cars = [
  { brand: 'Ford', model: 'Mustang', year: 1964 },
  { brand: 'Ford', model: 'Fiesta', year: 2019 },
  { brand: 'Chevrolet', model: 'Camaro', year: 2022 },
  { brand: 'Chevrolet', model: 'Onix', year: 2018 },
];

const filteredCars = filterCarsByYear(cars, 2020);
console.log(filteredCars);
//25. Crie uma função chamada "inverterString" que recebe uma string como argumento e retorna a
//string invertida. Por exemplo, para a entrada "hello", a função deve retornar "olleh".
function inverterString(str) {
  return str.split('').reverse().join('');
}


const str = 'hello';
const invertedStr = inverterString(str);
console.log(invertedStr);
