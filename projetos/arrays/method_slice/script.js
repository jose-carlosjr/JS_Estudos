/*
    O MÉTODO slice RETORNA OS ITENS DE UM DETERMINADO ÍNDICE A OUTRO, POR EXEMPLO
    nums.slice(2, 7)
    VAI RETORNAR OS ITENS LOCALIZADOS APARTIR DO ÍNDICE 2 ATÉ O ÍNDICE 6.
*/

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(nums.slice(2, 7))

console.log(nums.slice(-2)) // RETORNA OS ITENS DOS DOIS ÚLTIMOS ÍNDICES DO ARRAY

console.log(nums.slice(3, -2)) // RETORNA O ÍNDICE 3 ATÉ O FINAL, COM EXCESSÃO DOS ÚLTIMOS DOIS

//////////////////////////////////////////////

let nomes = ['jose', 'maria', 'joao', 'marcio', 'lisandro']
console.log(nomes.slice(2,4))