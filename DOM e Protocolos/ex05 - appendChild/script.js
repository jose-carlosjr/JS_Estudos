const novoElemento = document.createElement('h1') // CRIA UM ELEMENTO h1
let texto = document.createTextNode('Título') // CRIA UM TEXTO PARA ALGUM ELEMENTO DA PÁGINA
novoElemento.appendChild(texto) // INSERE O TEXTO NO ELEMENTO h1

let p = document.querySelector('#paragrafo-principal') // RECEBEO O ELEMENTO 'paragrafo-principal'
let pai = p.parentNode // RECEBE O PAI DO ELEMENTO 'paragrafo-principal'

pai.appendChild(novoElemento) // TORNANDO h1 FILHO DO ELEMENTO DA VARIÁVEL pai

console.log(pai)

/*
    No DOM (Modelo de Objeto de Documento) do JavaScript, "nós" são os objetos fundamentais que constituem a estrutura hierárquica de uma página web. Cada parte da estrutura de uma página HTML, como elementos HTML, texto, atributos e até mesmo o próprio documento, é representada como um nó no DOM.

    Esses nós formam uma estrutura de árvore, onde cada nó pode ter um pai, zero ou mais filhos e zero ou mais irmãos. Por exemplo, considerando o seguinte HTML:

    <div id="container">
        <p>Este é um parágrafo</p>
        <a href="#">Este é um link</a>
    </div>

    Neste exemplo, o nó div é o pai dos nós p e a, enquanto p e a são irmãos entre si. Cada um desses elementos é representado como um nó no DOM do JavaScript, com métodos e propriedades que podem ser utilizados para acessar e manipular o conteúdo da página web dinamicamente.
*/