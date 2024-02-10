/*
    ...args É UTILIZADO COMO PARÂMETRO FORMAL QUE RECEBE INFINITOS PARÂMETROS REAIS
    O OBJETO ARGUMENTS (...args) É COMO UM OBJETO ARRAY CORRESPONDENDO AOS ARGUMENTOS PASSADOS PARA UMA FUNÇÃO.
*/

let n1 = 1
let n2 = 5
let n3 = 3
let n4 = 4

function printNumbers(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

printNumbers(n1, n2, n3)
console.log('\n')
printNumbers(n2, n3, n4)
console.log('\n')
printNumbers(2,34,4,5,56,66,7,7,8,8,8,9,9,9,0,0,987,7,6,6,5,4,4,3,2,1,11,3,45,56,7,7,8)