let emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

console.log(emailRegex.test("user@example.com")) // Output: true
console.log(emailRegex.test("user.name@example.com")) // Output: true
console.log(emailRegex.test("user@subdomain.example.com")) // Output: false (mais de um ponto (.) após o @)
console.log(emailRegex.test("user123@example")) // Output: false (domínio incompleto)
console.log(emailRegex.test("@example.com")) // Output: false (nome de usuário ausente)
console.log(emailRegex.test("user@.com")) // Output: false (domínio ausente)