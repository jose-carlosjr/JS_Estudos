let pessoa = {
    nome: 'jose'
}

let pessoa2 = pessoa

let pessoa3 = {
    nome: 'jose'
}

console.log(pessoa.nome) //jose
console.log('\n')

console.log(pessoa == pessoa2) //TRUE
console.log(pessoa == pessoa3) //FALSE
console.log(pessoa2 == pessoa3) //FALSE
console.log('\n')

pessoa2.nome = 'Maria'
console.log(pessoa.nome) //Maria
/*
    NESSE CASO, O OBJETO pessoa É REFERÊNCIA DO OBJETO pessoa2, POR ISSO UMA MUDANÇA FEITA
    EM pessoa2 ALTERA O OBJETO pessoa TAMBÉM
*/