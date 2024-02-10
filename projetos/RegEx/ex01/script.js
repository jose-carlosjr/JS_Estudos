const reg1 = new RegExp('hello')
const str1 = 'hello world'
const str2 = 'Olá Mundo'

console.log(reg1.test(str1))
console.log(reg1.test(str2))

// OUTRA FORMA DE FAZER

const reg2 = /Olá/
const str3 = 'hello'
const str4 = 'Olá'

console.log(reg2.test(str3))
console.log(reg2.test(str4))

// OU INSERIR DIRETO NO MÉTODO test()

console.log(/email/.test('example123@email.com'))