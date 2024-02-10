function autoEscola(idade) {
    if (idade >= 18)
       return console.log(`Você tem ${idade} anos, entrada permitida`)
    else {
       return console.log(`Você tem ${idade} anos, acesso negado`)

    }
}

autoEscola(17)