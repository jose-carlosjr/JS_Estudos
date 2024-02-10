//TRES ESCOPOS DIFERENTES QUE NÃO INTERFEREM NA VARIÁVEL DE MESMO NOME
let a = 10

function print(x, y) {
    let a = x * y

    if (a > 14) {
        let a = 5
        console.log(a)
    }

    console.log(a)
}

print(3, 5)

console.log(a)