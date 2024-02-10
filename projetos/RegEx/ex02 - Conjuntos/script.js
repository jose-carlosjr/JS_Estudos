/*
    QUANDO INSERIDOS OS CARACTERES DENTRO DE COLCHETES É POSSÍVEL VERIFICAR 
    SE EXISTE ALGUM DELES ONDE ESTAMOS FAZENDO ALGUMA VERIFICAÇÃO
*/

const reg1 = /[12345]/

console.log(reg1.test('Contém o número 6?'))
console.log(reg1.test('Contém o número 0?'))
console.log(reg1.test('Contém o número 4?'))

/*
    PORÉM ESSA FORMA DE UTILIZAR O REGEX NÃO É BOA PQ O MESMO ENTENDE ESSES VALORES DE UMA FORMA DIFERENTE.

    TALVEZ O ENTENDIMENTO DA MÁQUINA SEJA O SEGUINTE: SE TESTARMOS COM A SEGUINTE STRING: '25' 
    ELE RETORNA TRUE, PQ O '25' ESTÁ ENTRE O NÚMERO 12345(DOZE MIL TREZENTOS E QUARENTA E CINCO)
    OU PQ TANTO 0 2 QUANTO O 5 ESTÃO PRESENTES NO REGEX. MAS SE TESTARMOS COM A STRING '60' 
    RETORNA FALSO MESMO Q O NÚMERO 60 ESTEJA ENTRE O NÚMERO 12345, JUSTAMENTE PQ TANTO O 6 
    QUANTO 0 NÃO ESTÃO PRESENTES NA ESCRITA DO NÚMERO 12345.
*/

console.log(reg1.test('Contém o número 25?'))
console.log(reg1.test('Contém o número 60?'))

// ENTÃO FAZEMOS O SEGUINTE:

const reg2 = /['0-9']/
const str1 = 'Aqui temos um d0s números'
const str2 = 'Aqui não temos'

console.log(reg2.test(str1))
console.log(reg2.test(str2))
