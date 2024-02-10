let cao = {
    raca: 'Vira-Lata',
    uivar: function() {
        console.log('Auuuu')
    },

    rosnar: function() {
        console.log('Grrrrr')
    },

    setRaca: function(raca) {
        // O this É UTILIZADO PARA SE REFERIR A SI MESMO NA CHAMADA DE UM "OBJETO?"
        // TAMBÉM PODERIA SER ESCRITO cao.raca = raca
        this.raca = raca
    },

    getRaca: function() {
        return 'A raça é: ' + this.raca
    }
}

console.log(cao.raca)

cao.setRaca('Pastor Alemão')

console.log(cao.raca)

console.log(cao.getRaca())
