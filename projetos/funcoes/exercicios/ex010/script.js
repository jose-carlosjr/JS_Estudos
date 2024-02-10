function decrementaPar(num) {
    console.log(num)
    for (let i = num; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log(`${i} é par`)
        }
    }
}

decrementaPar(9)