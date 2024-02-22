const elemento = document.getElementById('container')
console.log(elemento.getBoundingClientRect())

/*
    Retorno do objeto DOMRect: O método retorna um objeto DOMRect, que possui as seguintes propriedades:

    x: A coordenada x do canto superior esquerdo do retângulo.
    y: A coordenada y do canto superior esquerdo do retângulo.
    width: A largura do retângulo.
    height: A altura do retângulo.
    top: A distância do canto superior do retângulo até o topo da viewport.
    right: A distância do canto direito do retângulo até o lado direito da viewport.
    bottom: A distância do canto inferior do retângulo até a parte inferior da viewport.
    left: A distância do canto esquerdo do retângulo até o lado esquerdo da viewport.

    OBS: 
        DOMRect é um objeto JavaScript que representa um retângulo associado a um elemento do DOM (Modelo de Objeto de Documento). Este objeto contém informações sobre as dimensões e a posição relativa de um elemento em relação à viewport (a área visível da janela do navegador).
*/