
// Função debounce: recebe uma função e um intervalo de tempo em milissegundos
function debounce(funcao, intervalo) {
    let timeoutId

    return function() {
        const contexto = this
        const args = arguments

        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
            funcao.apply(contexto, args)
        }, intervalo);
    }
}

// Função para ser executada com debounce
function minhaFuncao() {
    console.log('Função executada após um período de espera!')
}

// Cria uma versão da função com debounce (com um intervalo de 500ms)
const minhaFuncaoComDebounce = debounce(minhaFuncao, 500)

// Adiciona um listener de evento de input no input
document.getElementById('meu-input').addEventListener('input', minhaFuncaoComDebounce)

/*
    - Definimos uma função debounce que recebe outra função e um intervalo de tempo em milissegundos.
    - Dentro da função debounce, usamos setTimeout para garantir que a função passada só seja chamada após o intervalo de tempo especificado ter passado desde a última chamada.
    - Se a função for chamada novamente dentro desse intervalo de tempo, o temporizador é redefinido, cancelando a chamada anterior e iniciando um novo temporizador.
    - Criamos uma função minhaFuncao que será executada com debounce. Esta é a função que queremos controlar a frequência de execução.
    - Criamos uma versão de minhaFuncao com debounce usando a função debounce, com um intervalo de 500 milissegundos.
    - Adicionamos um listener de evento de input a um elemento de entrada (<input>), e associamos a versão da função com debounce a este evento.
    - Agora, sempre que o usuário digitar no campo de entrada, a função minhaFuncao será chamada com debounce, ou seja, ela só será executada após um intervalo de 500ms desde a última digitação. Isso ajuda a evitar que a função seja chamada muitas vezes em rápida sucessão, melhorando o desempenho e controlando a frequência de execução.
*/


/*
    O debounce é um conceito em programação que se refere a uma técnica utilizada para controlar a frequência com que uma determinada função é executada, especialmente em resposta a eventos de alta frequência, como redimensionamento da janela, rolagem ou digitação.

    Quando você associa uma função a eventos de alta frequência, pode haver casos em que a função é chamada repetidamente em rápida sucessão, o que pode levar a problemas de desempenho ou ações indesejadas. O debounce resolve esse problema limitando a frequência com que a função é chamada, garantindo que ela só seja executada depois que um determinado intervalo de tempo tenha passado desde a última vez que foi chamada.

    A ideia básica do debounce é criar uma versão da função que só será executada após um período de "espera" ter passado desde a última vez que foi chamada. Se a função for chamada novamente dentro desse período de espera, o temporizador é redefinido e a espera começa novamente. Isso garante que a função só será executada uma vez após o período de espera ter passado sem nenhuma chamada adicional.

    O debounce é comumente usado em situações onde você quer garantir que uma ação só seja realizada após um certo tempo de inatividade do usuário, como por exemplo, no caso de sugestões de pesquisa em tempo real, onde você não quer enviar uma solicitação de pesquisa a cada caractere digitado, mas sim depois que o usuário parar de digitar por um curto período de tempo.

    Em resumo, o debounce é uma técnica que ajuda a controlar a frequência de execução de uma função em resposta a eventos de alta frequência, garantindo um melhor desempenho e evitando ações indesejadas.
*/