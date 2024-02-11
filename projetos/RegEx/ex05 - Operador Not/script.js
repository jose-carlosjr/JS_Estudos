// EXISTEM DUAS FORMAS DE USAR O OPERADOR ^

/* 
    - NEGAÇÃO
    RETORNA true CASO NÃO HAJA DÍGITOS NUMÉRICOS. PORÉM É NECESSÁRIO MAIS UMA CONDIÇÃO
    PQ SE HOUVER QUALQUER OUTRO CARACTERE JUNTO DO(S) NÚMERO(S) ELE RETORNA FALSE
*/
const operadorNot = /[^0-9]/

console.log(operadorNot.test('abc'))
console.log(operadorNot.test('123'))

/*
    O OPERADOR ^ FORA DOS COLCHETES APARENTEMENTE RETORNA true SOMENTE A STRING
    QUE CONTIVER O QUE CONSTA DENTRO DOS COLCHETES
*/
const operadorN0t = /^[0-9]/

console.log(operadorN0t.test('abc'))
console.log(operadorN0t.test('123'))

/*
    - ÂNCORA DE INÍCIO DE LINHA 
    QUANDO USADO FORA DE UMA CLASSE DE CARACTERES ([]), O ^ INDICA QUE A CORRESPONDÊNCIA
    DEVE OCORRER NO INÍCIO DA LINHA. POR EXEMPLO, A EXPRESSÃO REGULAR ^HELLO CORRESPONDERÁ
    A QUALQUER LINHA QUE COMECE COM A PALAVRA "HELLO".
*/

const operadorAncora = /^hello/

console.log(operadorAncora.test('hello world'))
console.log(operadorAncora.test('say hello'))