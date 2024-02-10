// GETTERS E SETTERS
class Country {
    constructor(name, language, continent, pib) {
        this.name = name
        this.language = language
        this.continent = continent
        this.pib = pib
    }

    get getPib() {
        return this.pib
    }

    set setPib(pib) {
        this.pib = pib
    }
}

let japan = new Country('Japan', 'Nihongo', 'Asia', '0') // CRIAÇÃO E DEFINIÇÃO DO OBJETO E SUAS PROPRIEDADES RESPECTIVAMENTE
console.log(japan)

japan.setPib = 3.12 // SETANDO UM NOVO VALOR PARA A PROPRIEDADE pib PARA 3.12
console.log(japan.getPib) // CHAMANDO A PROPRIEDADE pib, AGORA COM UM NOVO VALOR 3.12

console.log(japan) // pib MUDOU DE 0 PARA 3.12