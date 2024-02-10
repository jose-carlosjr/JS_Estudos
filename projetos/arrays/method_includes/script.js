// RETORNA UMA INFORMAÇÃO SE HÁ OU NÃO O ITEM SOLICITADO DENTRO DO ARRAY EM QUESTÃO

let games = ['RDR2', 'GTA V', 'GOW', 'Left4Dead', 'COD MW', 'Mario']

console.log(games.includes('Left4Dead'))
console.log(games.includes('the Last of Us'))

console.log('\n')

console.log(games.includes('GTA V', 1)) // TRUE | TÁ NO ÍNDICE 1
console.log(games.includes('GTA V', 2)) // FALSE | NÃO TÁ NO ÍNDICE 2

// EXEMPLO: if (games.includes('RDR2'))