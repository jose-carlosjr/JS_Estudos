// INSTANCIANDO CLASSES POR FUNÇÃO

function criarCao(raca, patas, cor) {
    let cao = Object.create({})
    cao.raca = raca
    cao.patas = patas
    cao.cor = cor
    return cao
}

console.log(criarCao('Shi Tsu', '4', 'Branco'))

let golden = criarCao('Golden Retriever', '4', 'Brown')
console.log(golden)
