//12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro
//como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares
//presentes nesse número.

function contarDigitosParesImpares (numero) {
    let pares = 0 
    let impars = 0 
    let digitos = numero.toString().split('')
    for (let i = 0; i < digitos.length; i++){
    if (digitos[i] % 2 == 0) { pares++}
    else {impars++}
    }
    return [pares , impars]
}

let numero = 123456
let [pares, impars] = contarDigitosParesImpares(numero)
console.log(pares,impars) 