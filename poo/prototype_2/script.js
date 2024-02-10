let pessoa = {
    maos: 2
}

console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) === Object.prototype)

/* 
    O MÉTODO hasOwnProperty NUNCA FOI CRIADO PARA O OBJETO pessoa, PORÉM
    ELE CONSEGUE FAZER O FALLBACK DE IR ATÉ O 'Object', VER QUE ELE POSSUI
    ESSE MÉTODO E USÁ-LO NO OBJETO 'pessoa', JUSTAMENTE PORQUE 'Object' É 'PAI' DE 'pessoa'
*/
console.log(pessoa.hasOwnProperty('maos'))

/////////////////////////////////////////////////////////////////////////////////////////////////

let pessoaNova = Object.create(pessoa) // CRIEI UM NOVO OBJETO E ESTABELECI O OBJETO 'pessoa' COMO SEU PROTOTYPE

console.log(Object.getPrototypeOf(pessoaNova)) // MOSTRA QUAL O PROTOTYPE DE pessoaNova
console.log(pessoaNova.maos) // RETORNA A PROPRIEDADE 'maos' DO OBJETO 'pessoa' JUSTAMENTE POR 'pessoaNova' SER FILHO DE 'pessoa'

console.log(pessoaNova.hasOwnProperty('maos')) // false | A PROPRIEDADE 'maos' NÃO PERTENCE À 'pessoaNova' e sim a 'pessoa'

// DETALHE: O MÉTODO 'hasOwnProperty' USADO ACIMA É DERIVADO DO 'Object', QUE PASSOU PARA 'pessoa', QUE PASSOU PARA 'pessoaNova'

console.log(Object.getPrototypeOf(pessoaNova) === pessoa) // true
console.log(Object.getPrototypeOf(pessoaNova) === Object.prototype) // false