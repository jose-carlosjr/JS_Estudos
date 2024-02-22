const novoElemento = document.createElement('h2') // CRIA UM ELEMENTO h2
let texto = document.createTextNode('Subtítulo') // CRIA UM TEXTO PARA ALGUM ELEMENTO DA PÁGINA
novoElemento.appendChild(texto) // INSERE O TEXTO NO ELEMENTO h2

const heading = document.querySelector('#titulo-principal') // RECEBE h1
const headingPai = heading.parentNode // RECEBE O PAI DE h1

headingPai.replaceChild(novoElemento, heading) // TROCA h1 POR h2