/*
    O METHOD EXEC RETORNA ALGUMAS INFORMAÇÕES DA EXPRESSÃO REGULAR
    DETALHE: SE NADA FOR ENCONTRADO RETORNA NULL
*/

const x = /\d/.exec('O número 100')
const y = /\d/.exec('100')

console.log(x)
/*
    ['1', index: 9, input: 'O número 100', groups: undefined]
    0: "1"
    groups: undefined
    index: 9
    input: "O número 100"
    length: 1
    [[Prototype]]: Array(0)
*/

console.log(y)
/*    
    ['1', index: 0, input: '100', groups: undefined]
    0: "1"
    groups: undefined
    index: 0
    input: "100"
    length: 1
    [[Prototype]]: Array(0)
*/