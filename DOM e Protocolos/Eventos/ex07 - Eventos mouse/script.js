const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

// CAPTURA O CLICK DO MOUSE
btn1.addEventListener('mousedown', (e) => {
    console.log('Click do mouse')
})

// CAPTURA QUANDO SOLTAMOS O BOTÃO ESQUERDO DO MOUSE
btn1.addEventListener('mouseup', (e) => {
    console.log('Soltei o mouse')
})

// CAPTURA UM DUPLO CLIQUE DO MOUSE
btn2.addEventListener('dblclick', (e) => {
    console.log('Double click!')
})

// CAPTURA UM CLIQUE NO BOTÃO DIREITO DO MOUSE
btn2.addEventListener('contextmenu', (e) => {
    console.log('Right button')
})