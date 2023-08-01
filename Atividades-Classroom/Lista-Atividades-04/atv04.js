//1. Implemente o código do slide de número 5.

let phrase = prompt("Eu amo estudar")
console.log(phrase)

//2. Implemente o código do slide de número 13.

    let string ="123"
    console.log(typeof Number(string))

    let number = "321"
    console.log(typeof String(string))


//3. Implemente o código do slide de número 16.

    let number01 = prompt("Digite o primeiro número")
    let number02 = prompt("Digite o segundo número")

    let result = Number(number01) + Number(number02)
    console.log(result)

//4. Implemente o código do slide de número 23.
    string1 = "Estudar "
    string2 = "É bom!"
    console.log(string1 + string2)
    number = 48
    console.log(string1 + string2 + " " + number)

//5. Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
    let user = prompt("Digite seu nome")
    alert(`Bem-vindo ${user}`)

//6. Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número
//inteiro.    
    let AgeUser = prompt("Digite sua idade ")
    console.log(typeof Number(AgeUser))

//7. Receba um número inteiro do usuário e converta-o em um número decimal (float).

let ageUser = parseInt(prompt("Digite um numero inteiro para converter "))

ageUser = parseFloat(ageUser)
console.log(typeof (ageUser) )
console.log(ageUser)

//8. Peça ao usuário para digitar dois números inteiros e exiba a soma deles.
    let numb1 = parseInt(prompt("Digite um numero  "))
    let numb2 = parseInt(prompt("Digite outro numero  "))
    lert(`A soma dos numeros ${numb1} e ${numb2} é ${numb1 + numb2}`)

//9. Receba um número decimal do usuário e calcule o seu quadrado.
    let n1 = parseFloat(prompt("Digite o numero que deseja o quadrado"))
    let quadrado = n1 * n1 
    alert(`O quadrado do numero ${n1} é ${quadrado}`)

//10. Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade.
    let userYear = prompt("Digite seu ano de nascinento")
    let ageUser = 2023 - userYear
    alert(ageUser) 

//11. Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida,
//concatene-os em uma única string e exiba o nome completo.
  
    let name = prompt("Digite seu primeiro nome")
    let lastName = prompt("Digite seu sobrenome")
    const fullName = name  + " " + lastName
    alert(`Seu nome completo é: ${fullName}`)

//12. Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números
//foram digitados.
  
    let numbers = prompt("Digite uma sequencia de numero separados com espaço")
    alert(`${numbers.length}`)

//13. Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual animal foi digitado.
  
    let animal = prompt("Digite um animal")
    alert(`O animal digitado foi: ${animal}`)

//14. Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo
//invertido (sobrenome, nome).

    let name = prompt("Digite seu primeiro nome")
    let lastName = prompt("Digite seu sobrenome")
    const reverseName = lastName  + " " + name
    alert(`Seu nome invertido é: ${fullName}`) 


//15. Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).

    let  phrase = prompt("Digite um texto para saber a quantidae de caracteres que ele possui")
    alert(`o texto possui ${phrase.length} caracteres`)

//16. Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.

let number = prompt("Digite um numero para saber se é par ou impar ")
    if (number % 2 === 0) {
        alert(`${number} é par`)
    } else alert(`${number} é impar`)

//17. Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.

 let number = prompt("Digite um numero para saber se é positivo ou não ")
  if (number >0 ) {
    alert(`${number} é positivo`)
  } else alert(`${number} é negativo`)

//18. Peça ao usuário que insira dois números e exiba o maior deles.

alert("Digite dois nueros para saber qual é o maior entre eles ")
let number1 = prompt("Digite o primeiro numero  ")
let number2 = prompt("Digite o segundo numero  ")
  if (number1  > number2 ) {
    alert(`${number1} é maior que ${number2}`)
  } else alert(`${number2} é menor que ${number1}`)

//19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de
//massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.

    let weight = prompt("Digite o seu peso em kg:")
    let height = prompt("Digite a sua altura em metros:")
    let imc = weight / (height * height)
    alert(`Seu IMC é ${imc.toFixed(2)}`)

//20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
  
    let userName = prompt("Verifique se seu nome tem mais de 5 caracteres")
    if(userName.length > 5 ) {
    alert("Seu nome tem mais de 5 caracteres")
    } else {
    alert("seu nome tem menos de 5 caracteres")
    }

//21. Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:
//"Você é casado(a)", "Você é solteiro(a)", etc.).

    let materialStatus = prompt("Digite seu estado civil ")

    if (materialStatus == "solteiro" || materialStatus == "solteira") { 
    alert("Você está solteiro(a)")
    } else if (materialStatus == "casado" || materialStatus == "casada") { 
    alert("Você é casado(a)")
    } else { alert("Opção invalida")}


//22. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e
//exiba o resultado.

    let width = prompt("Digite a base do retângulo")
    let length = prompt("Digite a largura do retângulo")
    let area = width * length 
    alert(area)

//23. Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de
    //sua escolha). 
    let city = prompt("Digite uma cidade")

    const letter = "S"
    city = city.toUpperCase()

    if (city.startsWith(letter)) {
    alert("A cidade começa com S")
    } else {
    alert("A ciade não começa com S")
    }

//24. Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
  
    let numb1 = parseFloat(prompt("Digite um numero decimal"))
    let numb2 = parseFloat(prompt("Digite outro numero decimal"))
    let restDiv = numb1 % numb2 

    alert(restDiv)

//25. Solicite ao usuário um número decimal e converta-o em um número inteiro.
    let numb1 = parseFloat(prompt("Digite um numero decimal"))
    numb1 = parseInt(numb1)
    alert(`o numero convertido em inteiro é  ${numb1}`)

//26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o
   // novamente para uma string antes de exibi-lo.

    let numb1 = prompt("Digite um numero")

    numb1 = parseInt(numb1)
    numb1 += 10
    numb2 = numb1.toString()
    alert(numb2)
    console.log(typeof(numb2))

//27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano
    //separadamente, convertendo-os em números inteiros.
    
    let data = (prompt("Digite a data em formato DD/MM/AA"))

    alert(`Dia: ${data.slice(0, 2)}`)
    alert(`Mês: ${data.slice(2, 4)}`)
    alert(`Ano: ${data.slice(4, 6)}`)
 

//28. Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma
//mensagem completa, como "Você mora em [cidade], [estado].".
    
    let city = prompt("Digite o nome da sua cidade")
    let state = prompt("Digite o nome do seu estado")
    let live = ("você mora em ")

    alert(`${live + city} no estado de ${state}`)

//29. Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de
//boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".

    let yBirth = prompt("Digite seu ano de dascimento ")
    const msg = ("Seja bem vindo ao curso, nascido em ")
    alert(`${msg + yBirth}`)

//30. Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única
//string, separando-os com um espaço.

    let userName = prompt("Digite seu nome")
    let userYear = parseInt(prompt("Digite seu ano de nascimento"))

    alert(userName + " " + userYear )
    
//31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto,
//adicionando o símbolo de moeda da sua escolha.
    
    let productName = prompt("Digite o nome do produto")
    let value = 3000
    let coin = "$"
    alert(productName + " " + coin + value )
    
//32. Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro desse número.
    
    let number = prompt("Digite um numero")
    let double = number*2
    let msg = ("O do dobro seu numero é: ")
    alert(msg + double)

//33. Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de agradecimento personalizada.

    let email = prompt("Digite seu email")
    let msg = (`Obrigado por se inscrever ${email}`)
    alert(msg)

//34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente (divisão inteira) entre eles.

    let n1 = parseInt(prompt("Digite um numero"))
    let n2 = parseInt(prompt("Digite outro numero"))
    let soma = n1 + n2 
    let sub = n1 - n2
    let mult = n1 * n2
    let div = n1 / n2
    alert(`Aqui está a \nsoma: ${soma}\nSubtração: ${sub}\nMultiplicação: ${mult}\nDivisão: ${div.toFixed(1)}`)


    
//35. Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do triângulo.
    
    let baseTriangle = parseFloat(prompt("Digite a base do triângulo"))
    let heightTriangle = parseFloat(prompt("Digite a altura do triângulo"))
    
    let areaTriangle = (baseTriangle * heightTriangle) / 2
    alert(`A area do triangulo é: ${areaTriangle}` )
    
//36. Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).

    let radius = prompt("Digite a raio ")
    let perimeter = 2 * Math.PI * radius
    alert(perimeter.toFixed(2))
    
//37. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba perímetro do retângulo.
   
    let base = prompt("Digite a base")
    let height = prompt("Digite a altura")
    let perimeter = 2 * (base + height)
    alert(perimeter)

//38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média aritmética desses números.
    
    let n1 = parseFloat(prompt("Digite o primeiro numero"))
    let n2 = parseFloat(prompt("Digite o segundo numero"))
    let n3 = parseFloat(prompt("Digite o terceiro numero"))
    let media = (n1 + n2 + n3) / 3
    alert(`a media dos numeros digitados é ${media}`)

//39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já viveu (considerando um ano com 365 dias).

    let age = prompt("Digite a sua idade")
    let months = age * 12
    let days = age * 365
    alert(`Você já viveu ${months} meses e ${days} dias.`)

//40. Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor para dólares e exiba o resultado.
    
    let reais = prompt("Digite a quantia em reais ")
    let cotacao = 4.78
    let dol = reais / cotacao
    alert(`$${reais} convertido em dolar: ${dol.toFixed(2)}`)

//41. Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.

    let decimalNumb = parseFloat(prompt("Digite um numero dicimal"))
    let rounded = Math.round(decimalNumb)
    alert(rounded)


//42. Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) * n3.

    let n1 = prompt("Digite um numero")
    let n2 = prompt("Digite um numero")
    let n3 = prompt("Digite um numero")
    let result = (n1 + n2) * n3
    alert(result)

//43. Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando a fórmula: Fahrenheit = (Celsius * 9/5) + 32.

    let celsius = prompt("Digite a temperuta em graus celsius")
    let fahrenheit = (celsius * 9/5) + 32
    alert(fahrenheit)
