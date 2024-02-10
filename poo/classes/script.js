let cao = {
    patas: 4,
    raca: 'Sem raça',
    latir: function() {
        console.log('Au Au')
    }
}

let labrador = Object.create(cao) // CRIEI UM OBJETO E ESTABELECI SEU PROTOTYPE

labrador.latir() // ACESSEI UMA PROPRIEDADE QUE NÃO É MINHA, MAS SIM DO MEU PROTOTYPE

labrador.raca = 'labrador' // ALTEREI A RACA DO OBJETO LABRADOR PARA 'labrador'

console.log(labrador.raca)
console.log(cao.raca) 

/* 
    A RACA DO OBJETO CAO NÃO MUDA, SOMENTE A DO OBJETO LABRADOR.
    LABRADOR É UM MOLDE DO OBJETO CAO, E UM MOLDE DE UM OBJETO NADA MAIS É QUE UMA CLASSE
    É POSSÍVEL CRIAR VÁRIOS 'MOLDES' (CLASSES) DO OBJETO CAO. COMO POR EXEMPLO:
*/

let pitbull = Object.create(cao)
pitbull.raca = 'Pitbull'
console.log(pitbull.raca)
console.log(cao.raca)