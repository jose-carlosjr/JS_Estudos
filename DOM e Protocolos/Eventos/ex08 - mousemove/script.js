const container = document.querySelector('#container')
const meuCursor = document.querySelector('#meu-cursor')

/*
    Com este código, quando você mover o mouse dentro do elemento container, o cursor personalizado (meuCursor) irá seguir o movimento do mouse.
*/
container.addEventListener('mousemove', (e) => {
    meuCursor.style.left = e.clientX + 'px'
    meuCursor.style.top = e.clientY + 'px'
})

/*
    // CAPTURA O EIXO x E y DE ONDE O MOUSE PASSOU

    container.addEventListener('mousemove', (e) => {
        console.log(e.x)
        console.log(e.y)
    })
*/