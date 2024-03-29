/*
    JSON (NÃO ACEITA COMENTÁRIOS):

    - UTILIZADO PARA COMUNICAÇÃO ENTRE SERVIÇOS, EX: BACKEND <> FRONTEND
    - DIGAMOS QUE É UMA PADRONIZAÇÃO DE TIPO DE DADO PARA A REALIZAÇÃO DA COMUNICAÇÃO ENTRE ELES
    - NECESSÁRIO UTILIZAR SEMPRE ASPAS DUPLAS
    - BASICAMENTE UM CONJUNTO DE PROPRIEDADE E VALOR QUE NÃO TEM MÉTODOS, SOMENTE NOME DE DADO E VALOR
*/

let person = {
    "nome": "jose",
    "age": 23,
    "profissao": "Programador",
    "hobbies": ["soccer", "tennis", 'games']
}

let personTexto = JSON.stringify(person) // OS OBJETOS FORAM CONVERTIDOS EM TEXTO (STRING)
console.log(personTexto)

let personJson = JSON.parse(personTexto)
console.log(personJson)

console.log(person.nome)
console.log(personTexto.nome) // O RESULTADO É 'undefined' POR NÃO SE TRATAR MAIS DE UM OBJECT, E SIM DE UM TEXTO

// APARENTA SER UM OBJETO JAVASCRIPT POR SER EXTREMAMENTE PARECIDO, PORÉM É JSON
// É UM TIPO DE DADO QUE SERVE PARA COMUNICAÇÃO ENTRE SERVIDOR <> FRONTEND

//JSON É UTILIZADO EM CASOS ONDE O SERVIDOR É SEPARADO DO FRONTEND, QUANDO TEMOS UM SERVIDOR SOMENTE PRO FRONT QUE CONSOME UMA API