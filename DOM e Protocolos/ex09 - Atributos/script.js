const a = document.querySelector('a') // RECEBE A TAG a
console.log(a.getAttribute('href')) // RECEBE O ATRIBUTO href DA TAG a

const link = 'https://www.instagram.com' // RECEBE UMA STRING
a.setAttribute('href', link) // INSERE UM NOVO VALOR PARA O ATRIBUTO 'href'