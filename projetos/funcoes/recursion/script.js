function recursao(n) {
    if (n - 1 < 2) {
        console.log('Recursão parou')
    } else if (n % 2 != 0) {
        console.log(`O número ${n} é ímpar`)
        recursao(n - 1)
    } else {
        console.log(`O número ${n} é par`)
        recursao(n - 2)
    }
}

// RECURSION: UMA FUNCIONALIDADE QUE PERMITE UMA FUNÇÃO SER CHAMADA NOVAMENTE
// NESSE CASO FOI CRIADO MEIO Q UM "LOOP" USANDO UM IF E UMA FUNCTION

/*
CASO O NÚMERO SEJA ÍMPAR ELE RECEBE MENOS 1 E SE TORNA PAR > O NÚMERO PASSA A RECEBER -2 PARA INICIAR
UMA CONTAGEM DECRESCENTE SEMPRE EM PAR
*/

/*
TOMAR CUIDADO COM O EXCESSO DE REPETIÇÕES. UTILIZAR ESSE RECURSO SOMENTE QUANDO NECESSÁRIO.
PARAR NÃO DEIXAR O CÓDIGO MUITO COMPLICADO
*/

recursao(5)
recursao(7)
recursao(9)