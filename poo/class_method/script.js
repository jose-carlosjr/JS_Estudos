// QUANDO SE USA CONSTRUCTOR, NÃO PODEMOS ADICIONAR PROPRIEDADES DIRETO NA CLASSE, TEM Q SER SEMPRE DENTNRO DELE

class Game {
    constructor(genre, company, gamemode) {
        this.genre = genre
        this.company = company
        this.gamemode = gamemode
    }
}

Game.prototype.age = 16

let gow = new Game('Adventure', 'Santa Monica', 'RPG')
console.log(gow)
console.log(gow.age)

let cod = new Game('War', 'Activision', 'FPS')
console.log(cod)