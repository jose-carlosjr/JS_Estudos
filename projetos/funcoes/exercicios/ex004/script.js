function aleatorio(x) {
    // GERADOR DE NÚMERO ALEATÓRIO
    return console.log(`Número aleatório de 0 a ${x}: ${Math.floor(Math.random() * x) + 1}`)
}

aleatorio(5)
aleatorio(5)
aleatorio(5)
aleatorio(5)
aleatorio(5)

// O "+ 1" É PRA CONTAR O NÚMERO QUE FOI DIGITADO TAMBÉM. POR EXEMPLO
// SE EU DIGITAR O NÚMERO 10 SEM O + 1 NA FÓRMULA, VAI CONTAR DE 0 ATÉ 9. NÃO VAI INCLUIR O 10

//OU UTILIZAR O Math.ceil, QUE ARREDONDA PRA CIMA