//1. Descreva para que serve o comando "for".
O comando for é um tipo de laço de repetição que permite executar um bloco de código várias vezes
//2. Como o comando "for" define o início de uma repetição?
Através de uma expressão de inicialização

//3. Como o comando "for" determina o fim da execução?
 Através da condição, ela é avaliada antes de cada iteração do laço e, se for verdadeira, o bloco de código é executado, se  a condição for falsa, o laço termina

//4. Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?
Ocorre através da expressão de incremento que é executada ao final de cada iteração do laço e é usada para alterar o valor das variáveis que são usadas na condição
//5. Implemente o código do slide de número 18.
for(let i = 0; i < 10; i++) {
    console.log("teste")
}

//6. Implemente o código do slide de número 26.
for(let i = 0; i <10; i++) {
    console.log(i)
}

//7. Implemente o código do slide de número 36.
for (let i = 0; i<10; i++){
    if( i === 5) {
        break
    }
    console.log(i)
}
//8. Implemente o código do slide de número 38.

for (let i = 0; i < 10; i++){
    if(i == 5){
    continue
    }
    console.log(i)
}

//9. Implemente o código do slide de número 44.


//10. Faça um programa que exiba os números de 1 a 10 em ordem crescente.

//11. Crie um programa que exiba os números de 10 a 1 em ordem decrescente.

//12. Elabore um programa que calcule a soma dos números de 1 a 100.

//13. Desenvolva um programa que exiba todos os números pares de 1 a 50.

//14. Faça um programa que calcule o produto dos números de 1 a 5.

//15. Crie um programa que exiba a tabuada do 7.

//16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.

//17. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.

//18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.

//19. Faça um programa que exiba os números ímpares de 1 a 100.

//20. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
//ou igual a 7).


//21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.

//22. Elabore um programa que leia um número inteiro e exiba todos os seus divisores.

//23. Desenvolva um programa que calcule a média de altura de 5 pessoas.

//24. Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra


//"Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos,
//utilize a palavra "FizzBuzz".

//25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.


//26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o
//número lido for 123, o programa deve exibir 321.