  *GERAL
// 1. Defina o que é uma variável na programação. 
 É um espaço  na memória do computador para armazenar dados que podem ser manipulados.

// 2. Escreva com as suas palavras a diferença entre as declarações const, let e var e como elas podem ser aplicadas na prática. 
 Se usa const quando não vamos mudar o valor da variável, let é o recomendado a usar pois pode mudar o valor quantas vezes for sem problemas, e o var é um modo antigo e não é mais aconselhável usar  por possíveis erros que podem acontecer ao mudar o valor dela.
 
 //3. Explique a diferença entre as variáveis do tipo objeto e lista. 
 Um objeto   tem propriedades e um valor que pode ser atribuído a um nome.
 Uma lista armazena uma coleção de elementos em uma ordem. 
 
  *STRING

/* 1. Crie uma variável chamada "nome" e atribua a ela uma string com seu nome. Em seguida, exiba o conteúdo da variável "nome" no terminal. */
  let  nome = "Nemesio"
  console.log(nome)
/*2. Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba o comprimento da string armazenada na variável "frase". */
  let frase = "O que está em cima é como o que está embaixo. O que está dentro é como o que está fora."
  console.log(frase.length) 

//3. Crie uma variável chamada "palavra" e atribua a ela uma palavra qualquer. Em seguida, exiba a primeira letra da palavra armazenada na variável "palavra". 
  var palavra = "correspondência" 
  console.log(palavra.charAt(0))

//4. Crie uma variável chamada "frase" e atribua a ela uma frase de sua escolha. Em seguida, exiba a frase em letras maiúsculas. 
  let frase = "O que está em cima é como o que está embaixo. O que está dentro é como o que está fora."
  console.log(frase.toUpperCase())

//5. Crie uma variável chamada "endereço" e atribua a ela um valor de sua escolha. Em seguida, sobrescreva o valor da variável para um outro endereço e verifique no terminal o valor atual da variável. 
  let endereco = "Itapissuma"
  console.log(endereco)

  endereco = "Recife"
  console.log(endereco) 

  * INTEGER E FLOAT 

//1. Declare uma constante chamada" PI" e atribua a ela o valor de 3.14159.
  const pi = 3.14159

 /* 2. Declare uma nova variável chamada "y" e atribua a ela o valor da constante "PI". */
  let y = pi 
  console.log(y)

//3. Declare uma constante chamada "taxaJuros" e atribua a ela o valor de 0.05, representando uma taxa de juros de 5%.
  const taxaJuros = 0.05

//4. Declare duas variáveis "x" e "y" e atribua para elas valores inteiros;
  let x = 1000
  let y = 2000
//5. Exiba no terminal a "soma" dessas duas variáveis. 
//6. Exiba no terminal a "subtração" dessas duas variáveis.
//7. Exiba no terminal a "multiplicação" dessas duas variáveis. 
//8. Exiba no terminal a "divisão" dessas duas variáveis. 

console.log(`soma:  ${x + y}`)
console.log(`subtração:  ${x - y}`)
console.log(`Mutiplicação:  ${x * y}`)
console.log(`Divisão:  ${x / y}`)

* Boolean 
//1. Crie uma variável chamada "estaChovendo" e atribua a ela o valor booleano que indica se está chovendo ou não.
  let estaChovendo = true

//2. Declare uma variável chamada "verdadeiro" e atribua a ela o valor booleano true
  const verdadeiro = true

//3. Declare uma variável chamada "falso" e atribua a ela o valor booleano false.
  const falso = false

//4. Verifique no terminal se a variável "verdadeiro" é igual a variável "falso"
  console.log(verdadeiro === falso)

//5. Declare uma variável chamada "temperatura" e atribua a ela um valor numérico representando a temperatura atual. Em seguida, verifique e exiba no terminal se esta temperatura é maior que 30 graus Celsius. 

    let temperatura = 26
    console.log(tempera >= 30)

//6. Declare uma variável chamada "resultado" e atribua a ela o valor booleano resultante da comparação "10 > 5". Em seguida, exiba o valor da variável resultado no terminal. 
 
  let resultado = true
    console.log(resultado) 
//7. Declare uma variável chamada "teste" e atribua a ela o valor booleano resultante da comparação "25 < 15". Em seguida, exiba o valor da variável resultado no terminal. 
      let teste = false
      console.log(teste)
      
      * Objeto

//1. Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "endereço" e atribua valores a elas. 
    let pessoa = {
      nome: "carlos",
      idade: 26,
      endereço: "Itapissuma",
    }
     
//2. Acesse o valor da propriedade "nome" do objeto "pessoa".
  console.log(pessoa.nome)

//3. Adicione uma nova propriedade chamada "profissao" ao objeto pessoa e atribua um valor a ela. 4. Atualize o valor da propriedade "idade" do objeto pessoa para um novo valor. 
  pessoa.profissao = "programador"
      console.log(pessoa)
//5. Crie outro objeto chamado "animal" com as propriedades "nome", "especie" e "cor" e atribua valores a elas. 
let animal = {
  nome: "gato",
  especie: "sphynx", 
  cor: "branco",

}
//6. Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "ano" e atribua valores a elas. 
  let livro = {
    titulo: "A republica",
    autor: "Platão",
    ano: "século IV a.C"
  }
    console.log(livro)
      
//7. Acesse o valor da propriedade "autor" do objeto livro. 
    console.log(livro.autor)

//8. Atualize o valor da propriedade "ano" do objeto livro para um novo valor. 
    livro.ano = "seculo V a.C"
   

//9. Exclua a propriedade "titulo" do objeto utilizando o operador "delete".
    delete livro.titulo
     console.log(livro)


//10. Crie um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano" e atribua valores a elas. Em seguida, exiba todas as propriedades do objeto no console. 
  const carro = {
    marca: "toyota",
    modelo: "Hilux",
    ano: 2023
  } 
  console.log(carro)

  
//11. Atualize o valor da propriedade "modelo" para "undefined" do objeto "carro" e exiba todas as propriedades do objeto no console.
  carro.modelo = undefined
  console.log(carro)

  * Outros tipos de variáveis 

//1. Declare uma variável chamada "variavelNull" e atribua a ela o valor nulo ("null"). 

    let  variavelNull = null
    
//2. Declare uma variável chamada "variavelUndefined" e não atribua nenhum valor a ela. 

    let variavelUndefined  
   
 // 3. Verifique se a variável "variavelNull" é igual a "null". 

    console.log(variavelNull)

  // 4. Verifique se a variável "variavelUndefined" é igual a "undefined". 

    console.log(variavelUndefined)

 //5. Atribua o valor "undefined" a uma propriedade chamada "nome" de um objeto vazio. 

    let objeto = {
    nome: undefined
 }


 * Array 
//1. Crie um array vazio chamado "numeros". 
//2. Adicione os números 1, 2, 3 e 4 ao array "numeros". 

  let numero =  [
    1,
    2,
    3,
    4,
  ]

 console.log(numero[1])

//3. Acesse o valor do segundo elemento do array "numeros". 

//4. Atualize o valor do terceiro elemento do array "numeros" para 10. 
  numero[2] = 10
  console.log(numero)

//5. Remova o último elemento do array "numeros" utilizando a função ".pop". 

  numero.pop()
  console.log(numero)

//6. Verifique o comprimento do array "numeros". 

  console.log(numero.length)

 //7. Crie um novo array chamado "frutas" contendo as strings "maçã", "banana" e "laranja".
 //8. Acesse o valor do primeiro elemento do array frutas. 
 //9. Adicione a string "uva" ao final do array frutas utilizando a função ".push".

let frutas = ["maçã","banana","laranja",]

console.log(frutas[0])
frutas.push("uva")
console.log(frutas)
 


//10. Crie um objeto chamado "aluno" com as propriedades "nome" e "idade" e atribua valores a elas. Em seguida, crie um array chamado "alunos" e adicione o objeto "aluno" a esse array. 
  let aluno = {
    nome:"Carlos",
    idade:26
  }
  let alunos = [
    aluno
  ]
console.log(alunos)


//11. Acesse o valor da propriedade "nome" do primeiro elemento do array "alunos".
  console.log(aluno.nome)

//12. Adicione mais três objetos do tipo "aluno" ao array "alunos". 
let aluno2 = { nome:"maria", idade:25, }
let aluno3 = { nome:"Larissa", idade:27, }
let aluno4 = { nome:"Robson", idade:26, }

alunos.push(aluno2)
alunos.push(aluno3)
alunos.push(aluno4)

console.log(alunos)

//13. Crie um array chamando "produtos" contendo 10 produtos de supermercado. Em seguida, exiba no terminal apenas os produtos que ficaram em posições pares.

let produtos = [
   "cafe",
   "leite",
   "pão",
   "queijo",
   "carne",
   "trigo",
   "arroz",
   "carvão",
   "sal",
   "verduras",
]

for (let i = 0; i < produtos; i++) {
  if (i % 2 ===0) {
    console.log(produtos[i])
  }
}

* Typeof

/*1. Crie uma variável chamada "numero" e atribua a ela um número qualquer. Verifique o tipo de dado
dessa variável usando "typeof".*/
    const number = 3000
    console.log(typeof(number))

/*2. Crie uma variável chamada "texto" e atribua a ela uma string qualquer. Verifique o tipo de dado
  dessa variável usando "typeof"*/

    const text = "Etmologia"
    console.log(typeof(text))

/*3. Crie uma variável chamada "booleano" e atribua a ela um valor booleano ("true" ou "false").
Verifique o tipo de dado dessa variável usando "typeof".*/
    const boolean = true
    console.log(typeof(boolean))

/*4. Crie uma variável chamada "array" e atribua a ela um array vazio. Verifique o tipo de dado dessa
variável usando "typeof".*/
    const array = []
    console.log(typeof(array))

/*5. Crie uma variável chamada "objeto" e atribua a ela um objeto vazio. Verifique o tipo de dado dessa
variável usando "typeof".*/
    const object = {}
    console.log(typeof(object))

/*6. Crie uma variável chamada "nulo" e atribua a ela o valor nulo ("null"). Verifique o tipo de dado
dessa variável usando typeof.*/

    const nulo = null
    console.log(typeof nulo)

/*7. Crie uma variável chamada "indefinido" sem atribuir nenhum valor. Verifique o tipo de dado dessa
variável usando "typeof".*/
    const undefinned = undefined
    console.log(typeof undefinned)

* Operadores lógicos

/*1. Crie uma estrutura condicional que verifica se dois números são iguais utilizando o operador de
igualdade ("==").*/
    const n1 = 10
    const n2 = 20

    if(n1 == n2) { 
      console.log("os numeros são iguais")
    } else {
      console.log("Os numeros são diferente")
    }

/*2. Crie uma estrutura condicional que verifica se dois números são diferentes utilizando o operador de
diferença ("!=").*/

    const n1 = 20
    const n2 = 50

    if(n1 != n2) {
      console.log("Os numeros são diferentes")
    } else {
      console.log("Os numeros são iguais")
    }
    
/*3. Crie uma estrutura condicional que verifica se um número é maior que outro utilizando o operador
de maior que (">").*/
    const n1 = 25
    const n2 = 30
    
    if (n1 > n2) {
      console.log(`O numero ${n1} é maior que o numero ${n2}`)
    } else {
      console.log(`O numero ${n1} é menor que o numero ${n2}`)
    } 

/*4. Crie uma estrutura condicional que verifica se um número é menor que outro utilizando o operador
de menor que ("<").*/

const n1 = 200
const n2 = 422

if (n1 < n2) {
  console.log(`O numero ${n1} é menor que o numero ${n2}`)
} else {
  console.log(`O numero ${n1} é maior que o numero ${n2}`)
} 

/*5. Crie uma estrutura condicional que verifica se um número é maior ou igual a outro utilizando o
operador de maior ou igual a (">=").*/

const n1 = 3000
const n2 = 3000

if (n1 >= n2) {
  console.log(`O numero ${n1} é maior ou igual ao numero ${n2}`)
} else {
  console.log(`O numero ${n1} é menor ou menor ou igual numero ${n2}`)
} 

/*6. Crie uma estrutura condicional que verifica se um número é menor ou igual a outro utilizando o
operador de menor ou igual a ("<=").*/

const n1 = 86
const n2 = 96

if (n1 <= n2) {
  console.log(`O numero ${n1} é menor ou menor ou igual numero ${n2}`)
} else {
  console.log(`O numero ${n1} é maior ou igual ao numero ${n2}`)
} 


7. Crie uma estrutura condicional que verifica se duas condições são verdadeiras utilizando o operador
lógico AND ("&&").

const n1 = 86
const n2 = 96

if(n1 ) {
  console.log(`O numero ${n1} é menor ou menor ou igual numero ${n2}`)
} else {
  console.log(`O numero ${n1} é maior ou igual ao numero ${n2}`)
} 


/*8. Crie uma estrutura condicional que verifica se pelo menos uma das condições é verdadeira
utilizando o operador lógico OR ("||").*/

    const n1 = 25
    const n2 = 86
    if ( n1 > 10 || n2 > 12){
      console.log("Umas das condiçoes é verdadeira")
    } else


9. /*Crie uma estrutura condicional que nega uma condição utilizando o operador lógico NOT ("!").*/

    const n1 = 15
    if (!(x > 20)){
      console.log("n1 é maior que 20")
    } else {
      console.log("n1 é maior que 20")
    }

/*10. Crie uma estrutura condicional que verifica se um número está dentro de um determinado
intervalo, utilizando os operadores lógicos AND e os operadores de comparação (">=" e "<=").*/

    let number = 200
    if (number >= 100 && number <= 1000) {
      console.log("O número está dentro do intervalo.");
    } else {
      console.log("O número não está dentro do intervalo.");
    }

/*11. Crie uma estrutura condicional que verifica se um número está fora de um determinado intervalo,
utilizando os operadores lógicos OR e os operadores de comparação ("<" e ">").*/

    let number = 200
    if (number >= 100 && number <= 1000) {
      console.log("O número está dentro do intervalo.");
    } else {
      console.log("O número não está dentro do intervalo.");
    }

/*12. Crie uma estrutura condicional que verifica se um número é positivo, utilizando o operador de
maior que (">") e o operador de igualdade ("==") para verificar se o número é maior que zero.*/

    const numb = -500
    if (numb > 0) {
      console.log(`O numero ${numb} é Positivo `)
    }else if (numb == 0){
      console.log(`O numero ${numb} é igual a 0 `)
    }else {
      console.log(`O numero ${numb} é negativo `)
    }
      
/*13. Crie uma estrutura condicional que verifica se uma string é vazia, utilizando o operador de
igualdade ("==") e o operador de tamanho ("length") para verificar se o tamanho da string é igual a
zero*/.

      const softex = "front-end"

      if (softex == "") {
        console.log("A string é vazia")
      } else{ console.log(`Essa stromg tem ${softex.length} caracteres`)}

/*14. Crie uma estrutura condicional que verifica se uma variável é do tipo booleano, utilizando o
operador "typeof" e o operador de igualdade ("==") para verificar se o tipo de dado é igual a
"boolean".*/

      const teste = true
      if (typeof teste == "boolean") {
        console.log("A variável é do tipo booleano.")
      } else{
        console.log("A variável não é do tipo booleano.")
      }

     


