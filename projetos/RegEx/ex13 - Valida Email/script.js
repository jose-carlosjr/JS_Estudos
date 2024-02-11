const validaEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/

console.log(validaEmail.test('example_123@gmail.com'))
console.log(validaEmail.test('example-123@gmail.gov'))
console.log(validaEmail.test('example123@h0tmail.com'))
console.log(validaEmail.test('example123.gmail.com'))