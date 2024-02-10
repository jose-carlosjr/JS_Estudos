class ContaBancaria {
    constructor(saldoCc, saldoCp, jurosP) {
        this.saldoCc = saldoCc
        this.saldoCp = saldoCp
        this.jurosP = jurosP
    }

    depositoCc(x) {
        this.saldoCc += x
    }

    depositoCp(x) {
        this.saldoCp += x
    }

    saqueCc(y) {
        this.saldoCc -= y
    }

    saqueCp(y) {
        this.saldoCp -= y
    }

    transferir(z) {
        this.saldoCp -= z
        this.saldoCc += z
    }

    juros() {
        this.saldoCp = this.saldoCp + Number(this.saldoCp * this.jurosP)
    }
}

let conta = new ContaBancaria(700, 400, 0.10.toFixed(2))
console.log(conta)

conta.transferir(150)
console.log(conta)

conta.juros()
console.log(conta)

class ContaEspecial extends ContaBancaria {
    constructor(saldoCc, saldoCp, jurosP) {
        super(saldoCc, saldoCp, jurosP*2)
        this.jurosP = jurosP
    }

    juros2() {
        this.saldoCp = this.saldoCp + Number(this.saldoCp * this.jurosP)
    }
}

console.log('\n')

let contaSpecial = new ContaEspecial(900, 850, 0.20.toFixed(2))
console.log(contaSpecial)

contaSpecial.juros2()
console.log(contaSpecial)