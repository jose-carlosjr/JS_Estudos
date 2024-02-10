// ESSA É UMA FORMA DE TRATAR ERROS ENVIADOS POR USUÁRIOS
// VISTO QUE NÃO TEMOS CONTROLE DOS DADOS QUE SÃO ENVIADOS PELOS MESMOS

function checarNumero(x) {
    let res = Number(x) // CONVERTE O DADO PARA TIPO Number | POR EXEMPLO, SE O DADO FOR UMA STRING: '5', É CONVERTIDO PRA 5
    if (Number.isNaN(res)) { // CONDIÇÃO PARA SABER SE O "NÚMERO" res é um NaN
        return 'Por favor, digite apenas números'
    } else {
        return `${Number(res)}`
    }
}

console.log(checarNumero(10))
console.log(checarNumero('test'))
console.log(checarNumero(10.85))

let num = prompt('Digite um número: ')
window.alert(checarNumero(num))
