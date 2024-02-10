class Conta {
    constructor(saldo) {
        this.saldo = saldo
    }

    deposito(valor) {
        this.saldo = this.saldo + valor
    }

    saque(valor) {
        this.saldo = this.saldo - valor
    }
}

let contaPoupanca = new Conta(600) // contaPoupanca RECEBE 600

contaPoupanca.deposito(250) // contaPoupanca RECEBE + 250 | AGORA 850
contaPoupanca.saque(90) // contaPoupanca RECEBE - 90 | AGORA 760

console.log(contaPoupanca.saldo) // contaPoupanca AGORA TEM 760