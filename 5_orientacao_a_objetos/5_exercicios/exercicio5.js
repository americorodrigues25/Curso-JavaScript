class Conta {
  constructor(saldoCC, saldoCp, juros) {
    this.saldoCC = saldoCC;
    this.saldoCp = saldoCp;
    this.juros = juros;
  }

  deposito(valor) {
    this.saldoCC += valor;
  }

  saque(valor) {
    this.saldoCC -= valor;
  }

  transferenciaCP(valor) {
    this.saldoCC -= valor;
    this.saldoCp += valor;
  }

  transferenciaCC(valor) {
    this.saldoCp -= valor;
    this.saldoCC += valor;
  }

  jurosDeAniversario() {
    let juros = (this.saldoCp * this.juros) / 100;
    this.saldoCp += juros;
  }
}

class ContaEspecial extends Conta {
  constructor(saldoCC, saldoCp, juros) {
    super(saldoCC, saldoCp, juros * 2);
  }
}

let conta = new Conta(5000, 10000, 1.5);
console.log(conta);

conta.saque(500);
console.log(conta);

conta.deposito(1000);
console.log(conta);

conta.transferenciaCP(3000);
console.log(conta);

conta.transferenciaCC(1950);
console.log(conta);

conta.jurosDeAniversario();

console.log(conta);

let conta2 = new ContaEspecial(1000, 5000, 2)
console.log(conta2);

conta2.saque(5000);
console.log(conta2);

conta2.jurosDeAniversario();
console.log(conta2);