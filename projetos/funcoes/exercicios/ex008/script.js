function textLimit(texto) {
    if (texto.length > 10) {
        return console.log(`O texto contém ${texto.length} caracteres. Texto muito longo`)
    } else {
        return console.log(`O texto contém ${texto.length} caracteres. Texto dentro do limite`)
    }
    
    //console.log(texto.length)
}

textLimit('Hoje estou cansado')
textLimit('Bom dia!')