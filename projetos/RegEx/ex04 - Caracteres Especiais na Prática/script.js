// SEMPRE QUE HOUVER 4 DÍGITOS RETORNA true
const ano = /\d\d\d\d/

// MESMO Q PASSE DE 4 DÍGITOS ELE CONTINUA RETORNANDO true ENTÃO COLOQUEI UMA OUTRA CONDIÇÃO: length == 3
console.log(ano.test('732') && '732'.length == 4)
console.log(ano.test('20242') && '20242'.length == 4)

// SEMPRE QUE HOUVER 3 CARACTERES ALFANUMÉRICOS RETORNA true

const alfaNum = /\w\w\w/

// AQUI NOVAMENTE COM UMA OUTRA CONDIÇÃO
console.log(alfaNum.test('@no') && '@no'.length == 3)
console.log(alfaNum.test('An0') && 'Ano'.length == 3)
console.log(alfaNum.test('Alfa') && 'Alfa'.length == 3)