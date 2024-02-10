// É POSSÍVEL ATRIBUIR UM VALOR PARA O PARÂMETRO exp, CASO O USUÁRIO NÃO O FAÇA
// ISSO SIGNIFICA QUE O PROGRAMA SE ENCARREGARÁ DE PREENCHER O CAMPO
// NO CASO, O EXPOENTE SEMPRE TERÁ COMO VALOR "default" = 2, A NÃO SER QUE O USUÁRIO DIGITE OUTRO VALOR

function potencia(base, exp = 2) {
    return Math.pow(base, exp)
}

console.log(potencia(3))
console.log(potencia(3,2))
console.log(potencia(3,3))