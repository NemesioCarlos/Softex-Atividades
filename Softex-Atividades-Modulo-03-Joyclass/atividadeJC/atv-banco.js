const banco = {
  conta: "003",
  saldo: 2500,
  tipo: "corrente",
  agencia: "72",
  buscarSaldo() {
    return this.saldo;
  },
  deposito(valor) {
    return (this.saldo += valor);
  },
  saque(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.logo("Saldo insuficiente");
    }
  },
  numeroDaConta() {
    return this.conta;
  },
};

banco.deposito(522);
console.log(`saldo ${banco.buscarSaldo()}`);
banco.saque(3000);
console.log(`saldo ${banco.buscarSaldo()}`);
