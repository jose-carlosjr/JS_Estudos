/*
    O OPERADOR CHOICE PERMITE ESPECIFICAR ALTERNATIVAS POSSÍVEIS PARA UMA CORRESPONDÊNCIA
*/

const reg1 = /cat|dog/

console.log(reg1.test('Its a cat')) // true
console.log(reg1.test('Its a dog')) // true
console.log(reg1.test('None of them')) // false

/*
    VOCÊ TAMBÉM PODE USAR AGRUPAMENTO COM PARÊNTESES PARA TORNAR A ESCOLHA MAIS
    ESPECÍFICA OU PARA APLICAR QUANTIFICADORES A MÚLTIPLAS ALTERNATIVAS. POR EXEMPLO:
*/

const reg2 = /(cat|dog)s?/

console.log(reg2.test('Those are cats'))
console.log(reg2.test('Those are dogs'))
console.log(reg2.test('None of them'))