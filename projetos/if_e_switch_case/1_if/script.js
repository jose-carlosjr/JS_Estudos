let nome = 'jose'

if (nome == 'jose') {
    console.log('seu nome é jose')
}

/////////////////////////////////////////////

let pais = 'EUA'

if (pais == 'brasil') {
    console.log('Brasileiro')
} else {
    console.log('Estrangeiro')
}

let vel = 40

if (vel > 60) {
    console.log(`Sua velocidade é ${vel}Km. Você está multado`)
} else {
    console.log(`Sua velocidade é ${vel}Km. Permaneça abaixo de 60Km`)
}

//////////////////////////////////////////////////////////

let media = 9

if (media < 5) {
    console.log(`Sua média é ${media}. Você está reprovado`)
} else if (media == 5) {
    console.log(`Sua média é ${media}. Você está de recuperação`)
} else {
    console.log(`Sua média é ${media}. Você está aprovado`)
}