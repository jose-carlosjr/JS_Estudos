// O OPERADOR instanceof TESTA SE UM OBJETO TEM, EM SEU PROTOTYPE, A FUNÇÃO CONSTRUTORA.


class Table {
    constructor(cor) {
        this.cor = cor
    }
}

class Chairs extends Table {
    constructor(cor, quant) {
        super(cor)
        this.quant = quant
    }
}

let x = new Chairs('Brown', 8)
console.log(x)

// instanceof FUNCIONA MAIS OU MENOS COMO UM typeof
// AQUI O RESULTADO É true, PQ Chairs É UMA INSTÂNCIA DE Table.
console.log(new Chairs instanceof Table) // true

console.log(x instanceof Chairs) // true

console.log(x instanceof Table) // true

console.log(x instanceof Object) // true