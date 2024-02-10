let n1 = 20
let n2 = 10

let calculadora = {
   adicao: function(a, b) {
      return a + b
   },

   subtracao: function(a, b) {
      return a - b
   },

   multiplicacao: function(a, b) {
      return a * b
   },

   divisao: function(a, b) {
      return a / b
   }
}

console.log(calculadora.adicao(n1, n2))
console.log(calculadora.subtracao(n1, n2))
console.log(calculadora.multiplicacao(n1, n2))
console.log(calculadora.divisao(n1, n2))