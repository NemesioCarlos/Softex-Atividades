function calc (n1, n2, operacao ) {
  if (operacao === 1) {
    return n1 + n2
  } else if (operacao === 2) {
    return n1 - n2
  } else if (operacao === 3) {
    return n1 * n2
  } else if (operacao === 4) {
    return n1 / n2
  } else {
    return 0
  }
}
 let n1 = parseFloat(prompt("Digite o primeiro numero"))
 let n2 = parseFloat(prompt("Digite o segundo numero"))
 let operacao = parseInt(prompt("Digite o número da operação que deseja realizar:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n"));

let resultado = calc (n1, n2, operacao)

alert(`O resultado da operação escolhida é  ${resultado}`)