function tipoDeDado(x) {
    if (typeof x === 'number') {
        console.log(`${x} é do tipo Number`)
    } else if (typeof x === 'string') {
        console.log(`${x} é do tipo String`)
    } else if (typeof x === 'boolean') {
        console.log(`${x} é do tipo Boolean`)
    }
}

tipoDeDado(5)
tipoDeDado('jose')
tipoDeDado(true)