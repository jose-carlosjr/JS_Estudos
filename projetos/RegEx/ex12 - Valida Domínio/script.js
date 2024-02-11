const validaDominio = /(www\.)?\w+\.com|(\.com.br)/

console.log(validaDominio.test('www.google.com')) // true
console.log(validaDominio.test('www.google.com.br')) // true
console.log(validaDominio.test('www.googlecom')) // false
console.log(validaDominio.test('github.com')) // false