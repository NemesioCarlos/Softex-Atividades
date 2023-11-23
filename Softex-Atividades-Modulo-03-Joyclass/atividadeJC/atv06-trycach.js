function dividir(x, y) {
  try {
    if (y == 0) {
      throw new Error("Divisão por zero");
    }
    return x / y;
  }
  catch (erro) {
    console.log("Erro: " + erro.message);
  }
  finally {
    console.log("Fim da função");
  }
}

const n1 = prompt("Digite um numero para dividir ")
const n2 = prompt("Digite um numero para dividir ")
console.log(dividir(n1, n2)); 
console.log(dividir(10, 0)); 