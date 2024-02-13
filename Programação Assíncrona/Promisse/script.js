/*
    UMA PROMISE NO JAVASCRIPT É UM OBJETO QUE REPRESENTA A EVENTUAL CONCLUSÃO OU FALHA DE UMA OPERAÇÃO ASSÍNCRONA. EM OUTRAS PALAVRAS, ELA É USADA PARA LIDAR COM COMPUTAÇÕES ASSÍNCRONAS DE FORMA MAIS LIMPA E INTUITIVA, EVITANDO O ANINHAMENTO EXCESSIVO DE CALLBACKS.

    UMA PROMISE PODE ESTAR EM UM DOS TRÊS ESTADOS:

    PENDING: ESTADO INICIAL, QUANDO A OPERAÇÃO AINDA NÃO FOI CONCLUÍDA NEM REJEITADA. FULFILLED (REALIZADA): A OPERAÇÃO FOI CONCLUÍDA COM SUCESSO.
    REJECTED (REJEITADA): A OPERAÇÃO FALHOU.

    UMA VEZ QUE UMA PROMISE ESTÁ RESOLVIDA (TANTO REALIZADA QUANTO REJEITADA), ELA PERMANECE NESSE ESTADO E NÃO PODE MUDAR.

    VOCÊ PODE CRIAR UMA PROMISE UTILIZANDO O CONSTRUTOR PROMISE, PASSANDO UMA FUNÇÃO QUE RECEBE DOIS ARGUMENTOS: RESOLVE E REJECT. DENTRO DESTA FUNÇÃO, VOCÊ REALIZA A OPERAÇÃO ASSÍNCRONA E CHAMA RESOLVE QUANDO A OPERAÇÃO FOR BEM-SUCEDIDA OU REJECT QUANDO HOUVER UM ERRO.
*/

const myPromise = new Promise((resolve, reject) => {
    //SIMULANDO UMA OPERAÇÃO ASSÍNCRONA
    setTimeout(() => {
        const sucesso = true
        if (sucesso) {
            resolve('Operação bem-sucedida')
        } else {
            reject('Erro na operação')
        }
    }, 2000);
})

myPromise.then((mensagem) => {
    console.log(mensagem) // SAÍDA: OPERAÇÃO BEM-SUCEDIDA
}).catch((erro) => {
    console.log(erro) // EM CASO DE ERRO NA OPERAÇÃO
})

/*
    O MÉTODO THEN() É USADO PARA MANIPULAR O RESULTADO BEM-SUCEDIDO DA PROMISE, ENQUANTO O MÉTODO CATCH() É USADO PARA LIDAR COM ERROS CASO A PROMISE SEJA REJEITADA.

    AS PROMISES FORNECEM UMA MANEIRA MAIS LIMPA E LEGÍVEL DE LIDAR COM CÓDIGO ASSÍNCRONO EM COMPARAÇÃO COM O USO DE CALLBACKS ANINHADOS, E SÃO AMPLAMENTE UTILIZADAS EM JAVASCRIPT MODERNO, ESPECIALMENTE EM OPERAÇÕES DE REDE, ACESSO A ARQUIVOS E OUTRAS TAREFAS ASSÍNCRONAS.
*/