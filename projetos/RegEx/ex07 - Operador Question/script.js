/*
    O OPERADOR QUESTION (?) ESTABELECE O(S) CARACTERES(S) ANTERIOR(ES) A ELE COMO OPCIONAL(S)
*/

const reg = /Hello!?/

console.log(reg.test('Hello')) // true
console.log(reg.test('Hello!')) // true
console.log(reg.test('Olá')) // false
console.log(reg.test('Olá!')) // false

// EXEMPLO PRÁTICO

const ano = /^\d{2}\/\d{2}(\/\d{4})?$/

console.log(ano.test('11/02')) // true
console.log(ano.test('11/02/2024')) // true
console.log(ano.test('11/02/20245')) // false
console.log(ano.test('11/o2/2024')) // false
console.log(ano.test('113/02/20245')) // false

/*
    ^ - VALIDA SOMENTE AQUILO QUE COMEÇAR COM ESSA EXPRESSÃO REGULAR
    \d{2} - VALIDA SOMENTE 2 DÍGITOS NUMÉRICOS
    \/ - VALIDA LITERALMENTE UMA BARRA '/'
    (\/\d{4})? - PARÊNTESES PARA DELIMITAR OQ QUEREMOS TORNAR OPCIONAL; VALIDA SOMENTE
    4 DÍGITOS; OPERADOR QUESTION PARA TORNAR OPCIONAL TUDO Q CONSTA DENTRO DO PARÊNTESES.
    $ - MARCA O FINAL DA STRING
*/