/*
    UM EXEMPLO MAIS COMPLEXO USANDO UM GERADOR EM JAVASCRIPT PARA IMPLEMENTAR UMA FUNÇÃO QUE GERA UMA SEQUÊNCIA DE FIBONACCI DE FORMA PREGUIÇOSA, OU SEJA, APENAS GERANDO OS VALORES DA SEQUÊNCIA CONFORME NECESSÁRIO. A SEQUÊNCIA DE FIBONACCI É UMA SÉRIE DE NÚMEROS ONDE CADA NÚMERO É A SOMA DOS DOIS NÚMEROS ANTERIORES NA SEQUÊNCIA, COMEÇANDO COM 0 E 1. 
*/

function* fibonacciGenerator() {
    let anterior = 0 
    let atual = 1
    let resp = 1
    while(true) {
        yield resp
        resp = anterior
        anterior = atual
        atual = atual + resp
        resp = atual
    }
}

const fibGen = fibonacciGenerator()

// GERANDO OS PRIMEIROS 10 NÚMEROS DA SEQUÊNCIA DE FIBONACCI
for(let i = 0; i < 10; i++) {
    console.log(fibGen.next().value)
}

// anterior 0 1 1 2 3 5
// atual    1 1 2 3 5 8
// resp     1 1 2 3 5 8

// 1 1 2 3 5 8

// GERANDO MAIS 5 NÚMEROS DA SEQUÊNCIA
for(let i = 0; i < 5; i++) {
    console.log(fibGen.next().value)
}