/*
    O MÉTODO MATCH() É UM MÉTODO DE STRING EM JAVASCRIPT QUE É USADO PARA ENCONTRAR CORRESPONDÊNCIAS ENTRE UMA STRING E UMA EXPRESSÃO REGULAR. ELE RETORNA UM ARRAY CONTENDO TODAS AS CORRESPONDÊNCIAS ENCONTRADAS OU NULL SE NENHUMA CORRESPONDÊNCIA FOR ENCONTRADA.
*/

const phrase = 'A quick brown ! fox jumps @ over the # lazy dog'
// RETORNA TODOS, E SOMENTE, OS CARACTERES ALFANUMÉRICOS
const regex = /\w+/g

console.log(phrase.match(regex)) // ['A', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']