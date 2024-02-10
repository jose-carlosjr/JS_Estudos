let nome = 'jose'

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3) {
        nome = 'joao'
    }

    if(i == 5 && nome == 'joao') {
        console.log(`O nome é ${nome}, pode parar!`)
        break
    }

    console.log(i)
}