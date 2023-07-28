
function getOption() {
  const option = parseInt(prompt("Digite a operação que deseja fazer: \n1. Soma\n2. Subtração\n3. Multiplicacão\n4. Divisão\n0 Sair"));
  return option;
}

function calculate(operator, num1, num2) {
  switch (operator) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      return num1 / num2;
    default:
      return NaN;
  }
}

function runCalculator() {
  let option = -1;

  while (option !== 0) {
   
    option = getOption();

    if (option === 0) {
      alert("Saindo...");
      break;
    }

    if (option >= 1 && option <= 4) {
      const num1 = parseFloat(prompt("Digite o primeiro valor:"));
      const num2 = parseFloat(prompt("Digite o segundo valor:"));

      if (isNaN(num1) || isNaN(num2)) {
        alert("Valores inválidos. Tente novamente.");
        continue;
      }

      const result = calculate(option, num1, num2);
      alert(`Resultado: ${result}`);
    } else {
      alert("Essa opção não existe. Tente novamente.");
    }
  }
}

runCalculator();