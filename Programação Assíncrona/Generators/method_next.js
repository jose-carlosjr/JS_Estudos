/*
    O MÉTODO NEXT() É UMA PARTE FUNDAMENTAL DE COMO OS GERADORES FUNCIONAM EM JAVASCRIPT. ELE É USADO PARA CONTROLAR A EXECUÇÃO DE UM GERADOR, PERMITINDO QUE VOCÊ AVANCE PASSO A PASSO ATRAVÉS DAS ETAPAS DA FUNÇÃO GERADORA. 

    QUANDO VOCÊ CHAMA NEXT() EM UM OBJETO GERADOR, ELE AVANÇA A EXECUÇÃO DO GERADOR PARA O PRÓXIMO YIELD OU RETURN NA FUNÇÃO GERADORA. AQUI ESTÁ COMO FUNCIONA: 

    - QUANDO VOCÊ CHAMA NEXT(), A EXECUÇÃO DA FUNÇÃO GERADORA COMEÇA OU RETOMA A PARTIR DO PONTO ONDE FOI PAUSADA ANTERIORMENTE. 

    - O CÓDIGO DENTRO DA FUNÇÃO GERADORA É EXECUTADO ATÉ QUE SEJA ALCANÇADO UM YIELD, ONDE A EXECUÇÃO É TEMPORARIAMENTE PAUSADA. 

    - QUANDO UM YIELD É ENCONTRADO, O VALOR PASSADO PARA O YIELD É RETORNADO NO OBJETO RESULTANTE DE NEXT(). O OBJETO RETORNADO POR NEXT() TEM DUAS PROPRIEDADES PRINCIPAIS: 

        VALUE: O VALOR RETORNADO PELO YIELD (OU UNDEFINED SE NÃO HOUVER VALOR). 

        DONE: UM BOOLEANO QUE INDICA SE A FUNÇÃO GERADORA TERMINOU DE EXECUTAR. ELE SERÁ TRUE QUANDO A FUNÇÃO GERADORA ATINGIR UM RETURN OU FALSE QUANDO AINDA HOUVER MAIS YIELDS PARA SEREM PROCESSADOS. 

    - SE A FUNÇÃO GERADORA ATINGIR UM RETURN, O VALOR RETORNADO SERÁ O VALOR ESPECIFICADO NO RETURN E DONE SERÁ TRUE. DEPOIS DISSO, QUALQUER CHAMADA SUBSEQUENTE A NEXT() CONTINUARÁ RETORNANDO O MESMO OBJETO { VALUE: UNDEFINED, DONE: TRUE }.
*/

function* contador() {
    yield 1
    yield 2
    yield 3
}

const gen = contador()

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

/*
    NESTE EXEMPLO, O GERADOR CONTADOR() PRODUZ OS NÚMEROS 1, 2 E 3, RESPECTIVAMENTE, A CADA CHAMADA DE NEXT(), ATÉ QUE NÃO HAJA MAIS YIELDS E DONE SEJA TRUE.
*/