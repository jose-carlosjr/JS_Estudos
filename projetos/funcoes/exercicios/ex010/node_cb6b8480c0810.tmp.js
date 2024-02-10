function decrementaPar(x) {
    console.log(x)
    for (let i = x; i > 0; x--) {
        if (x % 2 == 0) {
            console.log(`${x} é par`)
        }
    }
}

decrementaPar(9)