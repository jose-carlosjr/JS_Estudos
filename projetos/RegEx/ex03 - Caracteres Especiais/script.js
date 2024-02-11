// CARACTERES ESPECIAIS

/*
    \d - ACEITA QUALQUER NÚMERO   | \D - O CONTRÁRIO DE \d
    \w - CARACTERES ALFANUMÉRICOS | \W - CONTRÁRIO DE \w
    \s - ESPAÇOS EM BRANCO        | \S - CONTRÁRIO DE \s
    . (ponto) - CORRESPONDE A QUALQUER CARACTERE ÚNICO, EXCETO UMA NOVA LINHA (\n)
*/

// .
const pontoRegEx = /./

console.log(pontoRegEx.test('Sem quebra de linha'))
console.log(pontoRegEx.test('\n'))

// \d e \D
const barrad = /\d/ // /[0-9]/

console.log(barrad.test('123'))
console.log(barrad.test('numero'))

const barraD = /\D/ // /[0-9]/

console.log(barraD.test('123'))
console.log(barraD.test('numero'))

// \s

const barras = /\s/

console.log(barras.test(' '))
console.log(barras.test('semespaço'))
console.log(barras.test('caracteres com espaço'))

// \w e \W

const barraw = /\w/ // ALFANUMÉRICO

console.log(barraw.test('abc123'))
console.log(barraw.test('!@#$%'))

const barraW = /\W/ // Not ALFANUMÉRICO

console.log(barraW.test('abc123'))
console.log(barraW.test('!@#$%'))