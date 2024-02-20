console.log(document) // RETORNA A PÁGINA
console.log(document.body) // RETORNA O CONTEÚDO DO body
console.log(document.body.childNodes) // RETORNA O PRIMEIRO NÓ DO body

// RETORNA O TEXTO DA tag <h1>, QUE É "Título"
console.log(document.body.childNodes[1].childNodes[1].innerText)