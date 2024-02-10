class Mangá {
    constructor(nome, genero, pag, idade) {
        this.nome = nome
        this.genero = genero
        this.pag = pag
        this.idade = idade
    }
}

// Symbol SÃO PROPRIEDADES ÚNICAS, QUE NÃO PODEM SER ALTERADAS
// SERIA IGUAL A IDEIA DO const EM RELAÇÃO À VARIÁVEIS
let empresa = Symbol()
Mangá.prototype[empresa] = 'Akiba'

let btooom = new Mangá('Btooom!', 'Battle Royale', 180, '+18')
let akameGaKill = new Mangá('Akame ga Kill', 'Adventure', 190, '+18')

console.log(btooom, akameGaKill)

// ACESSANDO Symbol DA CLASS
console.log(Mangá.prototype[empresa])

// ACESSANDO Symbol DO OBJETO QUE DISPÕE DAS PROPRIEDADES DA CLASS
console.log(btooom[empresa])
console.log(akameGaKill[empresa])