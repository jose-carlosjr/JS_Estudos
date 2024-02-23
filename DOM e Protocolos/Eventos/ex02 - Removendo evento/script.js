const container = document.querySelector('#container')

function msg() {
    console.log('Click!')
}

container.addEventListener('click', msg)

// REMOVE O EVENTO DA DIV container
setTimeout(() => {
    container.removeEventListener('click', msg)
    container.style.backgroundColor = 'red'
}, 3000);