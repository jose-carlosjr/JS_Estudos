// CRIANDO ERROS PROPOSITALMENTE NO CÓDIGO CASO ALGUMA CONDIÇÃO NÃO SEJA ATENDIDA
// ESSA FORMA DE CRIAR ERROS NÃO É UTILIZADA COM USUÁRIOS, E SIM PARA ALERTAR UM PROGRAMADOR Q ESTEJA USANDO O PROGRAMA

function saudacao(nome) {
    if (typeof nome != 'string') { // CONDIÇÃO PARA RECEBER APENAS STRING
        throw new Error('Somente strings')
    } else {
        console.log(`Seja bem vindo ${nome}!`)
    }
}

saudacao('josé')
saudacao(23)

console.log('teste')