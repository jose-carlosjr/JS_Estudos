function nomeComIdade(nome, idade) {
    if (idade === undefined) {
        console.log(`Seu nome é ${nome}`)
    } else {
        console.log(`Seu nome é ${nome}, você tem ${idade} anos`)
    }
}

nomeComIdade('jose', 23)

/////////////////////////////////////////

function divisao(n1, n2) {
    if (n1 == undefined || n2 == undefined) {
        console.log('A função necessita de dois valores')
    } else if (n1 < n2 || n1 < 0 || n2 < 0) {
        console.log('Não é possível realizar a divisão')
    } else {
        return n1 / n2
    }
}

console.log(divisao(66, 4).toFixed(1).replace('.',','))