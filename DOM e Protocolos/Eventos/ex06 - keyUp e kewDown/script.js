const container = document.querySelector('.container')
const meuInput = document.querySelector('.meu-input')

window.addEventListener('keydown', (e) => {
    if(e.key == 'a') {
        console.log('Tecla clicada: a')
    }
})

window.addEventListener('keyup', (e) => {
    if(e.key == 'b') {
        console.log('Soltei a tecla: b')
    }
})

// CAPTURA A TECLA DIGITADA JUNTO DO SEU CÓDIGO
meuInput.addEventListener('keypress', (e) => {
    const caractereDigitado = e.key
    const codigoTecla = e.keyCode

    console.log('Caractere Digitado: ', caractereDigitado)
    console.log('Código da Tecla: ', codigoTecla)
})

/*
    As teclas do teclado têm códigos porque, no nível mais fundamental, os computadores tratam a entrada do teclado como uma série de códigos numéricos que representam as teclas pressionadas. Esses códigos são conhecidos como códigos de tecla ou códigos de caractere.

    Cada tecla no teclado tem um código associado que é enviado para o sistema operacional quando a tecla é pressionada. Esse código é então interpretado pelo sistema operacional e convertido em um caractere ou ação correspondente, como a exibição de um caractere na tela ou a execução de uma função específica do sistema.
*/