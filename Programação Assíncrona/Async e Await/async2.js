/*
    UM EXEMPLO PRÁTICO DE USO DA PALAVRA-CHAVE ASYNC NO JAVASCRIPT PODE SER UMA FUNÇÃO QUE FAZ UMA REQUISIÇÃO HTTP ASSÍNCRONA PARA UMA API E PROCESSA OS DADOS RETORNADOS. AQUI ESTÁ UM EXEMPLO USANDO A API FETCH PARA BUSCAR DADOS DE UM SERVIDOR REMOTO:
*/

async function buscarDadosDaAPI() {
    try {
        // FAZ UMA REQUISIÇÃO ASSÍNCRONA PARA UMA API USANDO Fetch
        const resposta = await fetch('https://api.example.com/dados')

        // VERIFICA SE A REQUISIÇÃO FOI BEM-SUCEDIDA
        if (!resposta.ok) {
            throw new Error('Erro ao buscar dados da API')
        }

        // CONVERTE A RESPOSTA PARA JSON
        const dados = await resposta.json()

        // PROCESSA OS DADOS (NESTE EXEMPLO, APENAS EXIBE NO CONSOLE)
        console.log('Dados da API:', dados)

        // RETORNA OS DADOS PARA USO POSTERIOR, SE NECESSÁRIO
        return dados
    } catch (erro) {
        console.error('Erro ao buscar dados da API:', erro)
        // SE OCORRER UM ERRO, VOCÊ PODE LIDAR COM ISSO AQUI, POR EXEMPLO, LANÇANDO NOVAMENTE PARA Q A FUNÇÃO CHAMADORA POSSA LIDAR COM ELE
        throw erro
    }
}

// CHAMANDO A FUNÇÃO ASSÍNCRONA E LIDANDO COM OS DADOS RETORNADOS
buscarDadosDaAPI().then(dados => {
    console.log('Dados recebidos:', dados)
}).catch(erro => {
    console.log('Erro ao buscar dados da API:', erro)
})

/*
    NESTE EXEMPLO: 

    - A FUNÇÃO FAZERREQUISICAOAPI(ENDPOINT) SIMULA UMA SOLICITAÇÃO DE API ASSÍNCRONA PARA UM DETERMINADO ENDPOINT, RETORNANDO UMA PROMISE QUE É RESOLVIDA COM OS DADOS DA API OU REJEITADA COM UM ERRO. 
    - CRIAMOS UMA LISTA DE ENDPOINTS PARA OS QUAIS FAREMOS SOLICITAÇÕES DE API. 
    - EM SEGUIDA, MAPEAMOS ESSA LISTA PARA CRIAR UM ARRAY DE PROMISES USANDO A FUNÇÃO FAZERREQUISICAOAPI() PARA CADA ENDPOINT. 
    - USAMOS PROMISE.ALL() PARA ESPERAR QUE TODAS AS PROMISES NO ARRAY PROMESSAS SEJAM RESOLVIDAS. 
    - SE TODAS AS PROMISES FOREM RESOLVIDAS COM SUCESSO, O MÉTODO .THEN() É CHAMADO COM UM ARRAY CONTENDO OS RESULTADOS DE CADA SOLICITAÇÃO. 
    - SE UMA OU MAIS PROMISES FOREM REJEITADAS, O MÉTODO .CATCH() É CHAMADO COM O MOTIVO DO PRIMEIRO ERRO ENCONTRADO. 
*/

//////////////////////////////////////////////////////////////////////////

/*
    AQUI ESTÁ UM EXEMPLO MAIS COMPLEXO QUE DEMONSTRA O USO DA PALAVRA-CHAVE AWAIT EM UMA SITUAÇÃO EM QUE VÁRIAS OPERAÇÕES ASSÍNCRONAS SÃO REALIZADAS EM SEQUÊNCIA. NESTE EXEMPLO, FAREMOS UMA SÉRIE DE REQUISIÇÕES ASSÍNCRONAS PARA DIFERENTES ENDPOINTS DE UMA API E, EM SEGUIDA, FAREMOS ALGUM PROCESSAMENTO DOS DADOS RETORNADOS: 
*/

async function realizarOperacoesAssincronas() {
    try {
        // FEZ UMA SÉRIE DE REQUISIÇÕES ASSÍNCRONAS PARA DIFERENTES endpoints
        const resposta1 = await fetch('https://api.example.com/dados1')
        const resposta2 = await fetch('https://api.example.com/dados2')
        const resposta3 = await fetch('https://api.example.com/dados3')

        // VERIFICA SE TODAS AS REQUISIÇÕES FORAM BEM-SUCEDIDAS
        if (!resposta1.ok || !resposta2.ok || !resposta3.ok) {
            throw new Error('Erro ao buscar dados da API')
        }

        // CONVERTE AS RESPOSTAS PARA JSON
        const dados1 = await resposta1.json()
        const dados2 = await resposta2.json()
        const dados3 = await resposta3.json()

        // PROCESSA OS DADOS (NESTE EXEMPLO, APENAS EXIBE NO CONSOLE)
        console.log('Dados 1:', dados1)
        console.log('Dados 2:', dados2)
        console.log('Dados 3:', dados3)

        // RETORNA OS DADOS PARA USO POSTERIOR, SE NECESSÁRIO
        return {dados1, dados2, dados3}
    } catch (erro) {
        console.error('Erro ao relizar operações assíncronas:', erro)
        // SE OCORRER UM ERRO, VOCÊ PODE LIDAR COM ISSO AQUI, POR EXEMPLO, LANÇANDO NOVAMENTE PARA QUE A FUNÇÃO CHAMADORA POSSA LIDAR COM ELE
        throw erro
    }
}

// CHAMANDO A FUNÇÃO ASSÍNCRONA E LIDANDO COM OS DADOS RETORNADOS
realizarOperacoesAssincronas().then(({dados1, dados2, dados3}) => {
    // AQUI VOCÊ PODE USAR OS DADOS RETORNADOS PELAS OPERAÇÕES ASSÍNCRONAS
    console.log('Dados 1:', dados1)
    console.log('Dados 2:', dados2)
    console.log('Dados 3:', dados3)
}).catch(erro => {
    console.error('Erro ao realiza operações assíncronas:', erro)
})

/*
    NESTE EXEMPLO: 

    - REALIZAROPERACOESASSINCRONAS() É UMA FUNÇÃO ASSÍNCRONA QUE FAZ UMA SÉRIE DE REQUISIÇÕES ASSÍNCRONAS PARA DIFERENTES ENDPOINTS DA API.
    - CADA REQUISIÇÃO É FEITA SEQUENCIALMENTE USANDO A PALAVRA-CHAVE AWAIT, O QUE SIGNIFICA QUE A PRÓXIMA REQUISIÇÃO SÓ É FEITA APÓS A CONCLUSÃO DA ANTERIOR. 
    - OS DADOS DE CADA RESPOSTA SÃO CONVERTIDOS PARA JSON E PROCESSADOS. 
    - OS DADOS PROCESSADOS SÃO EXIBIDOS NO CONSOLE E, EM SEGUIDA, RETORNADOS PARA USO POSTERIOR. 
    - A FUNÇÃO É CHAMADA USANDO .THEN() PARA LIDAR COM OS DADOS RETORNADOS OU .CATCH() PARA LIDAR COM ERROS. 
*/