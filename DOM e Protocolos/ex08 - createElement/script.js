const container = document.getElementById('container')
const lista = document.createElement('ul')

for (let i = 1; i <= 5; i++) {
    const item = document.createElement('li')
    const texto = document.createTextNode('Item ' + i)
    item.appendChild(texto)
    lista.appendChild(item)
}

container.appendChild(lista)

// OU ENTÃO:

const listaOrdenada = document.createElement('ol')

for (let i = 1; i <= 5; i++) {
    const item = document.createElement('li')
    item.innerText = `Item ${i}`
    listaOrdenada.appendChild(item)
}

container.appendChild(listaOrdenada)
