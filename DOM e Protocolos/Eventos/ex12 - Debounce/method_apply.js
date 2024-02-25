/*
    Neste exemplo, apply() é usada para chamar a função saudacao() com o contexto (this) definido como o objeto pessoa. Dentro da função saudacao(), this.nome se refere à propriedade nome do objeto pessoa, resultando na saída "Olá João" no console.
*/

function saudacao() {
    console.log(`Olá ${this.nome}`)
}

const pessoa = {
    nome: 'José'
}

saudacao.apply(pessoa)

/*
    O método apply() é uma função de alto nível em JavaScript que permite chamar uma função com um determinado contexto (this) e um conjunto de argumentos fornecidos como um array (ou um objeto semelhante a um array).

    A sintaxe básica do método apply() é a seguinte:

    funcao.apply(contexto, [argumento1, argumento2, ...]);

    - funcao: A função que será chamada.
    - contexto: O valor a ser usado como o contexto (this) ao chamar a função funcao.
    - [argumento1, argumento2, ...]: Um array ou objeto semelhante a um array que contém os argumentos a serem passados para a função funcao.
    
    Quando você chama apply() em uma função, a função é executada imediatamente, com os parâmetros especificados, e o contexto (this) durante a execução da função é definido como o valor passado como o primeiro argumento.

    A principal diferença entre apply() e call() é a forma como os argumentos são passados. Enquanto apply() espera que os argumentos sejam passados como um array, call() espera que os argumentos sejam passados individualmente.
*/