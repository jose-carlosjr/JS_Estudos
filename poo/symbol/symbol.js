let obj = {
    [Symbol('nome')]: 'jose',
    [Symbol('age')]: 23,
    city: 'SP'
}

const symbols = Object.getOwnPropertySymbols(obj)

const data = symbols.map(sym => obj[sym])

console.log(data)