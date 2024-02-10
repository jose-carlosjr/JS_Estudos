// SIMBÓLICAMENTE FALANDO, QUANDO DEIXAMOS A PRIMEIRO LETRA DA FUNCAO EM MAIÚSCULO, SIGNIFICA QUE A FUNÇÃO É UMA CLASSE
// ISSO É UMA CONVENÇÃO

function Cao(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
    this.uivar = function() {
        console.log('Auuuu')
    }
}

// new É UMA FORMA DE INSTANCIAR UMA CLASSE, OU SEJA, CRIAR UM NOVO OBJETO QUE DERIVA (Q É MOLDE) DE OUTRO OBJETO

let golden = new Cao('Golden Retriever', 4, 'Marrom')
console.log(golden)
golden.uivar()
