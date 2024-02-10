function lembrarSoma(x) {
    return function(y) {
        return x + y
    }
}

// A FUNÇÃO lembrarSoma SE LEMBRA DE SEU ESCOPO ORIGINAL (ESCOPO LÉXICO)
let soma1 = lembrarSoma(2)
console.log(soma1(5))

let soma2 = lembrarSoma(10)
console.log(soma2(20))
console.log('\n')

////////////////////////////////////////////////////////

// EXEMPLO DE CLOSURE (APENAS PARA EXEMPLIFICAR!)
// UMA FUNÇÃO > QUE POSSUI UMA VARIÁVEL > QUE RECEBE OUTRA FUNÇÃO > QUE CRIA UM CONTADOR
function contador(i) {
    let cont = i
    let somarContador = function() {
        console.log(cont)
        cont = cont + 1
    }
    return somarContador
}

// VARIÁVEL PARA RECEBER A FUNÇÃO CONTADOR
let meuContador = contador(5)

// ISSO MOSTRA QUE A CLOSURE SE LEMBRA DO ESCOPO LÉXICO DA FUNÇÃO

meuContador()
meuContador()
meuContador()
console.log('\n')

let meuContador2 = contador(10)

meuContador2()
meuContador2()