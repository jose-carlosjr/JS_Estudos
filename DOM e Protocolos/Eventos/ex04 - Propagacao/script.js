const container = document.querySelector('.container')
const btn1 = document.querySelector('.btn1')

container.addEventListener('click', () => {
    console.log('Click do container')
})

btn1.addEventListener('click', (e) => {
    console.log('Click do botão')
    e.stopPropagation() // IMPEDE Q ESSE EVENTO SE PROPAGUE PARA A TAG PAI
})

/*
    O método stopPropagation() em JavaScript é usado para interromper a propagação de um evento através da hierarquia de elementos do DOM. Quando um evento ocorre em um elemento HTML, ele normalmente se propaga através da árvore DOM, do elemento de destino até o elemento raiz do documento. Isso é conhecido como "propagação de eventos".

    No entanto, às vezes você pode querer interromper essa propagação, para que o evento não seja processado por outros elementos na hierarquia DOM. É aí que o método stopPropagation() é útil.
*/