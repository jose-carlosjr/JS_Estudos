const container = document.querySelector('#container')
const input = document.querySelector('.input')

input.addEventListener('focus', (e) => {
    console.log('Acessei o input')
})

input.addEventListener('blur', (e) => {
    console.log('Saí do input')
})
