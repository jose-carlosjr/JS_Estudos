// ATIVA QUANDO A PÁGINA É CARREGADA

/*
    window.addEventListener('load', (e) => {
        alert('Evento load')
    })
*/

const a = document.querySelector('a')

function antesDeDescarregar(e) {
    const msg = 'Tem certeza que deseja sair da página?'

    e.returnValue = msg

    return msg
}

function irParaGoogle() {
    window.location.href = 'https://www.google.com'
}

window.addEventListener('beforeunload', antesDeDescarregar)
a.addEventListener('click', irParaGoogle)