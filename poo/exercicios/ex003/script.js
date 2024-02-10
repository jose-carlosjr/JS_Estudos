class Endereco {
    constructor(street, bairro, city, state) {
        this.street = street
        this.bairro = bairro
        this.city = city
        this.state = state
    }

    set streetSet(street) {
        this.street = street
    }

    set bairroSet(bairro) {
        this.bairro = bairro
    }

    set citySet(city) {
        this.city = city
    }

    set stateSet(state) {
        this.state = state
    }
}

let masp = new Endereco('Av. Paulista', 'Centro', 'São Paulo', 'SP')
console.log(masp)

masp.streetSet = 'Av. Brasil'
masp.bairroSet = 'Vila Antonieta'
masp.citySet = 'Osasco'
masp.stateSet = 'RJ'

console.log(masp)