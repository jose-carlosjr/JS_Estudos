// Destructutring object: FAZ COM QUE O VALOR DAS VARIÁVEIS ESTEJA ESPELHADO COM AS PROPRIEDADES DO OBJETO

let obj = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor: 'V8'
}

const {rodas: vRodas, portas: vPortas, tetoSolar: vTetoSolar, motor: vMotor} = obj

console.log(vTetoSolar)
console.log(vRodas)