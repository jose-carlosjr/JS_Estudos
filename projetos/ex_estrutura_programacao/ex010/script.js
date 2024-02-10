let n = 11
let div = 0

//CONTADOR DE NÚMERO DE DIVISÕES EXATAS DE UM NÚMERO EM RELAÇÃO A TODOS OS SEUS ANTERIORES NATURAIS
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        div++
    }
}

if (div == 2) {
    console.log(`O número ${n} é primo`)
} else {
    console.log(`O número ${n} não é primo`)
}
