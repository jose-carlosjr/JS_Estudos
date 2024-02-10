class Anime {
    constructor(nome) {
        this.nome = nome
    }
}

let naruto = new Anime('Naruto')

/*
    ESSE É O VALOR PADRÃO DA PROPRIEDADE 'nome'. ELE PODE SER ALTERADO NUM 
    OBJETO QUE UTILIZA COMO BASE A CLASS Anime, PORÉM SE MANTÉM COMO 'Default' NO PROTOTYPE DE Anime
*/
Anime.prototype.nome = 'Default'

console.log(naruto.nome) // Naruto
console.log(Anime.prototype.nome) // Default