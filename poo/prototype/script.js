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