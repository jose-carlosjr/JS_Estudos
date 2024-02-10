let person = {
    nome: 'jose',
    idade: 23,
    profissao: 'Programador'
}

console.log(person.nome)
delete person.nome

console.log(person.nome)
console.log(person)

person.sobrenome = 'Oliveira'
console.log(person)

person.casado = false
console.log(person.casado)
console.log(person)

person.casado = true
console.log(person)