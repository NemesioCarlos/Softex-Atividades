
/*1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a
zero.*/

    let n1 = prompt("Digite um numero")
    if (n1 > 0) {
        alert("O numero digitado é positivo")
    } else if (n1<0) {
        alert("o numero digitado é negativo")
    } else if (n1===0){
        alert("O numero digitado é igual a zero")
    } else {alert("Opção invalida")}

/*2. Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de
idade.*/

    let age = prompt("Digite sua idade")
    if (age>18) {
        alert("Maior de idade")
    } else {
        alert("Menor de idade")
    }

/*3. Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são
iguais.*/

    let numb1 = parseInt(prompt("Informe um nomero"))
    let numb2 = parseInt(prompt("Informe outro numero"))
    if(numb1 > numb2) {
        alert(`O numero ${numb1} é maior que numero${numb2}`)
    } else if (numb1 < numb2) {
        alert(`O numero  ${numb2} é maior que o numero ${numb1}`)    
    } else if (numb1===numb2) {
        alert("Os numero são iguais")
    } else {
        alert("Opção invalida")
    }

/*4. Faça um programa que verifique se um número é par ou ímpar.
    let numb1 = prompt("Verifique se um numero é par ou impar")*/

    if (numb1>0) {
        alert(`O numero ${numb1} é positivo`)
    } else {
        alert("O numero é negativo")
    }

/*5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
aluno está aprovado (média maior ou igual a 7) ou reprovado.*/

    let numb1 = prompt("Verifique se um numero é par ou impar")
    if (numb1>0) {
        alert(`O numero ${numb1} é positivo`)
    } else {
        alert("O numero é negativo")
    }

/*6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
de caracteres em seu nome.*/

let userName1 = prompt("Digite o primeiro nome")
let userName2 = prompt("Digite o segundo nome")
if(userName1.length > userName2.length) {
alert(`O nome ${userName1} é maior que o nome ${userName2}`)    
} else {
    alert(`O nome ${userName2} é maior que o nome ${userName1}`)
}


/*7. Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.
    let letter = prompt("Digite uma letra para saber se é vogal ou consoante")*/
    
    if ((letter === "a") || (letter === "e") || (letter === "i") || (letter === "o") || (letter === "u")) {
        alert("É vogal")
    } else {
        alert("É consoante")
    }

/*8. Faça um programa que receba três números e os imprima em ordem crescente.*/
    
    let numbers = [
        prompt("Digite o primeiro numero"),
        prompt("Digite o segundo numero"),
        prompt("Digite o terceiro numero"),
    ]
    alert(numbers.sort())

/*9. Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e
a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,
obesa ou muito obesa.*/

let imc = weight / (height * height);
    if (imc < 17) {
    alert(`IMC: ${imc.toFixed(2)} Abaixo do peso`);
    } else if (imc >= 18 || imc <= 24) {
    alert(`IMC: ${imc.toFixed(2)} Peso normal`);
    } else if (imc >= 25 || imc <= 28) {
    alert(`IMC: ${imc.toFixed(2)} Acima d peso`);
    } else {
    alert(`${imc.toFixed(2)} Obesidade`);
    }

/*10. Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês
correspondente.*/ 
    let months = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abriu",
            "Maio",
            "Junho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ]
    
        let numberMonth = (prompt("Digite o numero do mês "))
    
        let monthName = months [numberMonth - 1]
    
        alert(` ${monthName} `)


/*11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
15%.*/
    let novoSalarioFuncionario = 0
    
        let salarioFuncionario = parseFloat(prompt("Digite o salario "))
    
    
        if (salarioFuncionario > 1500) {
        alert( novoSalarioFuncionario = salarioFuncionario + (salarioFuncionario * 10 / 100))
            } else alert( novoSalarioFuncionario = salarioFuncionario + (salarioFuncionario * 15 / 100))
     

/*12. Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo,
exibindo uma mensagem apropriada.*/


/*13. Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem
informando se é um dia útil ou um fim de semana.*/


//14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom",
//"Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando switch/case.

        let i = parseInt(prompt("Digite um numero de 1 a 5"))
    
    
        switch (i) {
            case 1:
                alert(`${i}: Muito bom!`) 
                break
            case 2:
                alert(`${i}: Bom!`)
                break
            case 3:
                alert(`${i}: Regular!`)
                break
            case 4:
                alert(`${i}: Insuficiente!`)
                break
            case 5:
                alert(`${i}: Muito Insuficiente!`)
    }

15. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -
Domingo, 2 - Segunda-feira, etc.).


16. Receba um número decimal do usuário e arredonde-o para o inteiro mais próximo usando a
estrutura de controle try/catch para tratar exceções.


17. Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12
anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).


18. Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma
mensagem informando se é solteiro, casado, divorciado ou viúvo.


19. Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da
operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).


20. Desenvolva um programa que leia o nome e a idade de uma pessoa. Utilize o bloco try/catch para
garantir que a idade digitada seja um valor inteiro válido.


21. Crie um programa que leia um valor em metros e o converta para centímetros, milímetros e
quilômetros. Utilize o bloco try/catch para tratar possíveis exceções durante os cálculos.
