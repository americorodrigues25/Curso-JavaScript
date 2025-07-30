class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }
};



const conta = new Conta(500)

conta.deposito(500);
console.log(conta.saldo);

conta.saque(200);

console.log(conta.saldo)