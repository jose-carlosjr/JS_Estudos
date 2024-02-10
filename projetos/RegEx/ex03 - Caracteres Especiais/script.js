// CARACTERES ESPECIAIS

/*
    \d - ACEITA QUALQUER NÚMERO   | \D - O CONTRÁRIO DE \d
    \w - CARACTERES ALFANUMÉRICOS | \W - CONTRÁRIO DE \w
    \s - ESPAÇOS EM BRANCO        | \S - CONTRÁRIO DE \s
    . (ponto) - CORRESPONDE A QUALQUER CARACTERE ÚNICO, EXCETO UMA NOVA LINHA (\n)
*/

const pontoRegEx = /./

console.log(pontoRegEx.test('Sem quebra de linha'))
console.log(pontoRegEx.test('\n'))

const barrad = /\d/ // /[0-9]/

console.log(barrad.test('123'))
console.log(barrad.test('numero'))

const barraD = /\D/ // /[^0-9]/

console.log(barraD.test('123'))
console.log(barraD.test('numero'))