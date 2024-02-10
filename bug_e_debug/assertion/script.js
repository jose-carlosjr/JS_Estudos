/* 
    *CONCEITUAL*
    ASSERTION: VERIFICAÇÕES NO PROGRAMA PARAR ASSEGURAR QUE TUDO OCORRA COMO ESPERADO
*/

let arr = [1, 2, 3, 4, 5]
let arr2 = []

function iterarArray(arr) { // O JS PARECE ENTENDER QUANDO SE TRATA DE UM OUTRO ARRAY QUE NÃO SEJA O UTILIZADO NA CONDIÇÃO
    if (arr.length == 0) {
        console.log('Necessário ter pelo menos um elemento') // TROQUEI THROW NEW ERROR POR CONSOLE.LOG PRA NAO PARAR O PROGRAMA
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(i)
        }
    }
}

iterarArray(arr)
console.log('\n')
iterarArray(arr2)
console.log('\n')

////////////////////////////////////////////////////

// EXEMPLO: QUERO UM ARRAY VAZIO

function vazioArray(arr2) {
    if (arr2.length > 0) {
        throw new Error('O array não pode conter elementos')
    } else {
        console.log('Tudo nos conformes')
    }
}

vazioArray(arr2)
console.log('\n')
vazioArray(arr)