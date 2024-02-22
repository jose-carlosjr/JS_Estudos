const elemento = document.getElementById('container')

// CAPTURA LARGURA E ALTURA DO ELEMENTO (CONSIDERANDO AS BORDAS)
console.log(elemento.offsetWidth)
console.log(elemento.offsetHeight)

// CAPTURA LARGURA E ALTURA DO ELEMENTO (DESCONSIDERANDO AS BORDAS)
console.log(elemento.clientWidth)
console.log(elemento.clientHeight)