const container = document.querySelector('#container')

/* 
    CASO O EIXO DA JANELA, DE CIMA PARA BAIXO, SEJA MAIOR
    DO QUE 1000 A COR DO container SE ALTERA PARA 'red', SENÃO
    RECEBE 'lightblue'
*/

window.addEventListener('scroll', (e) => {
    console.log(window.scrollY)

    if(window.scrollY > 1000) {
        container.style.backgroundColor = 'red'
    } else {
        container.style.backgroundColor = 'lightblue'
    }
})