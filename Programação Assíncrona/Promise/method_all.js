/*
    O MÉTODO PROMISE.ALL() EM JAVASCRIPT É USADO PARA AGUARDAR VÁRIAS PROMISES SEREM RESOLVIDAS OU REJEITADAS, E SÓ ENTÃO EXECUTAR UMA DETERMINADA AÇÃO. ELE RETORNA UMA NOVA PROMISE QUE É RESOLVIDA QUANDO TODAS AS PROMISES PASSADAS COMO ARGUMENTO SÃO RESOLVIDAS, OU É REJEITADA QUANDO PELO MENOS UMA DAS PROMISES É REJEITADA.
*/

Promise.all([promise1, promise2, promise3]).then((resultados) => {
    // TODAS AS PROMISES FORAM RESOLVIDAS COM SUCESSO
    // 'resultados' É UM ARRAY COM OS VALORES DAS Promises NA MESMA ORDEM
}).catch((erro) => {
    // PELO MENOS UMA DAS Promises FOI REJEITADA
    // 'erro' CONTÉM O MOTIVO DA PRIMEIRA Promise REJEITADA
})

/*
    NESTE EXEMPLO:

    - promise1, promise2 E promise3 SÃO AS Promises QUE VOCÊ DESEJA ESPERAR.
    - resultados É UM ARRAY CONTENDO OS VALORES RESULTANTES DE CADA UMA DAS Promises, NA MESMA ORDEM EM QUE FORAM PASSADAS PARA Promise.all().
    - SE PELO MENOS UMA DAS Promises FOR REJEITADA, O MÉTODO catch() SERÁ CHAMADO COM O MOTIVO DA PRIMEIRA Promise REJEITADA.

    É IMPORTANTE OBSERVAR QUE, SE ALGUMA DAS PROMISES PASSADAS PARA Promise.all() FOR REJEITADA ANTES DE TODAS SEREM RESOLVIDAS, A Promise RETORNADA POR Promise.all() SERÁ IMEDIATAMENTE REJEITADA COM O MOTIVO DA PRIMEIRA Promise REJEITADA.

    O MÉTODO Promise.all() É MUITO ÚTIL QUANDO VOCÊ PRECISA EXECUTAR VÁRIAS OPERAÇÕES ASSÍNCRONAS INDEPENDENTES E DESEJA AGUARDAR TODAS ELAS SEREM CONCLUÍDAS ANTES DE CONTINUAR O CÓDIGO.
*/

/*
    SUPONHA QUE VOCÊ TENHA VÁRIAS OPERAÇÕES ASSÍNCRONAS QUE DESEJA EXECUTAR SIMULTANEAMENTE E, EM SEGUIDA, DESEJA REALIZAR UMA AÇÃO COM OS RESULTADOS QUANDO TODAS ESSAS OPERAÇÕES FOREM CONCLUÍDAS. VAMOS SIMULAR ISSO COM UMA LISTA DE PROMISES QUE REPRESENTAM SOLICITAÇÕES DE API:
*/

// FUNÇÃO PARA SIMULAR UMA SOLICITAÇÃO DE API QUE RETORNA UMA Promise

function fazerRequisicaoAPI(endpoint) {
    return new Promise((resolve, reject) => {
        // SIMULANDO UMA SOLICITAÇÃO DE API COM UM ATRASO ALEATÓRIO
        const tempoDeResposta = Math.random() * 3000 + 1000 // ENTRE 1 E 4 SEGUNDOS
        setTimeout(() => {
            const sucesso = Math.random() < 0.8 // 80% DE CHANCE DE SUCESSO
            if (sucesso) {
                resolve(`Dados da API para ${endpoint}`)
            } else {
                reject(`Erro ao fazer requisição para ${endpoint}`)
            }
        }, tempoDeResposta);
    })
}

// LISTA DE endpoints PARA SOLICITAÇÕES DE API
const endpoints = ['/users', '/products', '/requests']

// CRIANDO UM ARRAY DE Promises PARA FAZER SOLICITAÇÕES DE API PRA CADA endpoint
const promises = endpoints.map(endpoint => fazerRequisicaoAPI(endpoint))

// USANDO Promise.all() PARA AGUARDAR TODAS AS PROMISES SEREM RESOLVIDAS
Promise.all(promises).then(resultados => {
    // TODAS AS Promises FORAM RESOLVIDAS COM SUCESSO
    resultados.forEach(resultado => {
        console.log(resultado)
    })
    console.log('Todas as solicitações foram concluídas com sucesso!')
}).catch(erro => {
    // PELO MENOS UMA DAS Promises FOI REJEITADA
    console.error('Ocorreu um erro: ', erro)
})

/* 
    RESULTADO CASO TODAS AS Promises SEJAM RESOLVIDAS:

    Dados da API para /users
    Dados da API para /products
    Dados da API para /requests
    Todas as solicitações foram concluídas com sucesso!

    RESULTADO CASO ALGUMA DAS Promises SEJA REJEITADA:

    Error: 
    Ocorreu um erro:  Erro ao fazer requisição para: ...
*/

/*
    - A FUNÇÃO fazerRequisicaoAPI(endpoint) SIMULA UMA SOLICITAÇÃO DE API ASSÍNCRONA PARA UM DETERMINADO endpoint, RETORNANDO UMA Promise QUE É RESOLVIDA COM OS DADOS DA API OU REJEITADA COM UM ERRO.
    - CRIAMOS UMA LISTA DE ENDPOINTS PARA OS QUAIS FAREMOS SOLICITAÇÕES DE API.
    - EM SEGUIDA, MAPEAMOS ESSA LISTA PARA CRIAR UM ARRAY DE PROMISES USANDO A FUNÇÃO fazerRequisiaoAPI() PARA CADA endpoint.
    - USAMOS Promise.all() PARA ESPERAR QUE TODAS AS promises NO ARRAY PROMESSAS SEJAM RESOLVIDAS.
    - SE TODAS AS Promises FOREM RESOLVIDAS COM SUCESSO, O MÉTODO .then() É CHAMADO COM UM ARRAY CONTENDO OS RESULTADOS DE CADA SOLICITAÇÃO.
    - SE UMA OU MAIS Promises FOREM REJEITADAS, O MÉTODO .catch() É CHAMADO COM O MOTIVO DO PRIMEIRO ERRO ENCONTRADO.
*/