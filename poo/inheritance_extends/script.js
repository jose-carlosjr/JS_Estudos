class Pc {
    constructor(hd, ram) {
        this.hd = hd
        this.ram = ram
    }
}

let vivobook = new Pc('1 TB', '8 GB')
console.log(vivobook.ram)

// extends FAZ COM QUE UMA CLASSE HERDE PROPRIEDADES DE UMA OUTRA CLASSE
class company extends Pc {
    constructor(hd, ram, name) {
        super(hd, ram) // super É COMO SE FOSSE O this, PORÉM SERVE PRA SE REFERIR À PROPRIEDADE DA CLASSE PAI
        this.name = name
    }
}

let asus = new company('1 TB', '6GB', 'ASUS')
console.log(asus)