let songs = ['All my love', 'Take me home', 'Get away', 'Where are u', 'do i need u']
let band = {
    nome: 'RockBand',
    get getSong() { // CHAMA A VARIÁVEL songs
        return songs
    }
}

console.log(band.nome, band.getSong)

delete band.getSong // DELETA O GETTER getSong

console.log(band)

///////////////////////////////////////////

// CRIANDO UM GETTER NUMA VARIÁVEL EXISTENTE

let soma = {
    x: 50,
}

Object.defineProperty(soma, 'y', {get: function() { // GETTER COM NOME 'y'. ELE SOMA O VALOR DA PROPRIEDADE x COM 20
    return this.x + 20
}})

console.log(soma.y)

////////////////////////////////////////////

// PROPRIEDADE COM NOME COMPUTADO

let expr = 'foo'

let obj = {
    get [expr]() {
        return 'bar'
    }
}

console.log(obj.foo) // bar