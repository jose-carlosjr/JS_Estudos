const myPromise = new Promise((resolve, reject) => {
    // SIMULANDO UMA OPERAÇÃO ASSÍNCRONA QUE FALHA
    setTimeout(() => {
        const erro = new Error('Falha na Operação!')
        reject(erro)
    }, 2000);
})

myPromise.then((resultado) => {
    console.log(resultado) // ESSA LINHA NÃO SERÁ EXECUTADA, POIS A Promise FOI REJEITADA
}).catch((erro) => {
    console.log(erro.message)
})

/*
    NESTE EXEMPLO, A PROMISE É CRIADA COM UMA FUNÇÃO EXECUTORA QUE SIMULA UMA OPERAÇÃO ASSÍNCRONA QUE FALHA APÓS 2 SEGUNDOS. QUANDO A OPERAÇÃO FALHA, A FUNÇÃO DE REJEIÇÃO REJECT É CHAMADA COM UM OBJETO DE ERRO. EM SEGUIDA, USAMOS O MÉTODO CATCH() PARA LIDAR COM A REJEIÇÃO E EXIBIR A MENSAGEM DE ERRO NO CONSOLE.
*/



