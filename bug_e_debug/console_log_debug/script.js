// DEBUG
// COM A AJUDA DO CONSOLE.LOG EM LOCAIS ESTRATÉGICOS E A TECLA F5, FOI POSSÍVEL ENTENDER O CÓDIGO PERFEITAMENTE

let a = 1
let b = 2
let c = 3

if (a < 2) {
    b = b + c
    console.log(a)
    console.log(b)
    console.log(c)
    console.log('\n')
}

for (let i = 5; i > 0; i--) {
    a++
    b = c * 2
    c = 2 * (b / a)
}
    console.log(a)
    console.log(b)
    console.log(c)
    console.log('\n')

if (b != a) {
    a++
} else {
    c = Number(b + a)
}
    console.log(a)
    console.log(b)
    console.log(c)
    console.log('\n')