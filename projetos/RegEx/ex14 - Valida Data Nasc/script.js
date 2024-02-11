const dataNasc = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/

console.log(dataNasc.test('11/02/1996')) // true
console.log(dataNasc.test('27/12/1996')) // true
console.log(dataNasc.test('11/0/1996')) // false
console.log(dataNasc.test('11/02/96')) // false

// UMA FORMA UM POUCO MAIS PRECISA DE FAZER É A SEGUINTE:

const validaData = /[0-31]{2}\/[0-12]{2}\/[1900-2024]{4}/

console.log(validaData.test('12/11/1901'))
console.log(validaData.test('40/12/2000'))
console.log(validaData.test('28/19/1950'))
console.log(validaData.test('33/09/1899'))