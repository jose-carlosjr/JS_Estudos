let car = {
    portas: 4,
    portamalas: '200L',
    motor: 'V8',
    airBag: true,
    pneuStep: undefined
}

let add = {
    tetoSolar: true,
    arCond: true
}

console.log(car)

Object.assign(car, add)

console.log(car)