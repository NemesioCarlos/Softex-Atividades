let valor1 = prompt(Number("Digite  um valor"));
let valor2 = prompt(Number("Digite  outro valor"));

let operacao = prompt(`Escolha o perador  \n- \n+ \n* \n/ `);
if (operacao === "-") {
  resultado = valor1 - valor2;
} else if (operacao === "+") {
  resultado = valor1 + valor2;
} else if (operacao === "*") {
  resultado === valor1 * valor2;
} else {
  resultado = valor1 / valor2;
}
console.log(resultado);
