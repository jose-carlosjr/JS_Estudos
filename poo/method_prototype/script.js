function Cao(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
}

Cao.prototype.uivar = function() {
    console.log('Auu')
}

let poodle = new Cao('Poodle', 4, 'Verde')
poodle.uivar()