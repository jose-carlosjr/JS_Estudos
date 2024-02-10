class Carro {
    constructor(marca, cor, gasolinaL, consumo) {
        this.marca = marca
        this.cor = cor
        this.gasolinaL = gasolinaL
        this.consumo = consumo // O consumo SE REFERE AO QUANTO DE GASOLINA É CONSUMIDA NA FUNÇÃO dirigirKm(km)
    }

    dirigirKm(km) {
        // A INTENÇÃO DESSA DIVISÃO É FAZER COM QUE A KILOMETRAGEM DIVIDIDA PELO CONSUMO NOS FORNEÇA O QUANTO DE GASOLINA FOI USADA
        let litrosConsumidos = km / this.consumo 
        this.gasolinaL -= litrosConsumidos
    }

    abastecerL(l) {
        this.gasolinaL += l
    }
}

let carro = new Carro('BMW', 'Black', 30, 5)
console.log(carro)

carro.dirigirKm(10)
console.log(carro)

carro.abastecerL(7)
console.log(carro)


/*
class Carro {
    constructor(marca, cor, gasolinaL) {
        this.marca = marca
        this.cor = cor
        this.gasolinaL = gasolinaL
    }

    dirigirKm(x) {
        console.log(`Você dirigiu ${x} Km`)
        this.gasolinaL -= x
        console.log(`Agora possui ${this.gasolinaL} L de gasolina`)
    }

    abastecerL(y) {
        console.log(`Você possui ${this.gasolinaL} litros de gasolina`)
        this.gasolinaL += y
        console.log(`Após o abastecimento: ${this.gasolinaL} litros de gasolina`)
    }
}

let carro = new Carro('BMW', 'Black', 30)
console.log(carro)

carro.dirigirKm(3)
carro.abastecerL(5)
*/