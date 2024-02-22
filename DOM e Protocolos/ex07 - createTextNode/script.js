const pNoText = document.querySelector('.no-text') // RECEBE O ELEMENTO p
const pTexto = document.createTextNode('Texto inserido via Javascript (createTextNode)') // CRIA UM TEXTO

pNoText.appendChild(pTexto) // DETERMINA 'texto' COMO FILHO DE 'p'

/* OUTRA FORMA DE INSERIR TEXTOS: */

const emptySpan = document.querySelector('.empty-span')
emptySpan.innerText = 'Texto inserido via Javascript (innerText)'