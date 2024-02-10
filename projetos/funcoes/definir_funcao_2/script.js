function potencia(x, y) {
    console.log(Math.pow(x, y))
}

potencia(6, 2)

/////////////////////////////////////

function multiplicar(a, b, c) {
    console.log(a * b * c)
}

multiplicar(3, 4, 5)

const mult = multiplicar(3, 4, 5)
console.log(mult)

/////////////////////////////////////

function habilitacao(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log('Pode dirigir')
    } else {
        console.log('Não pode dirigir')
    }
}

console.log(habilitacao(18, true))
console.log(habilitacao(17, false))

console.log(habilitacao(18, 1)) // 1 EQUIVALE A TRUE
console.log(habilitacao(17, 0)) // 0 EQUIVALE A FALSE
