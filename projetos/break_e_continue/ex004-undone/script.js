const nome = ["jose", "joao", "virginia", "jessica", "julia", "mario"]
const nomeString = nome.toString()

for(let position = nomeString.indexOf("jose"); position != ""; position = nome.indexOf(0) + 1) {
    if(position == "julio") {
        console.log('CENSURADO')
        continue
    }

    console.log(position)
}