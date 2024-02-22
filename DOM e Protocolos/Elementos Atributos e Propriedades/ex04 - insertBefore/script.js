const novoElemento = document.createElement('h1') // CRIA UM ELEMENTO h1
let texto = document.createTextNode('Título') // CRIA UM TEXTO PARA ALGUM ELEMENTO DA PÁGINA
novoElemento.appendChild(texto) // INSERE O TEXTO NO ELEMENTO h1

const elementoAlvo = document.querySelector('#container p') // RECEBE O ELEMENTO p, FILHO DE #container
const elementoPai = document.querySelector('#container') // RECEBE O ELEMENTO DE id='container'

// h1 É INTRODUZIDO ANTES DO ELEMENTO p, DENTRO DO ELEMENTO PAI (#container)
elementoPai.insertBefore(novoElemento, elementoAlvo)