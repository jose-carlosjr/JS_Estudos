let car = {
    marca: 'FIAT',
    comb: 0,
    motor: 1.8,
    cilindros: 40,
    airBag: true,

    get getComb() {
        return this.comb
    },

    set setComb(x) {
        this.comb = x
    }
}

console.log(car.getComb)

car.setComb = 160

console.log(car.getComb)