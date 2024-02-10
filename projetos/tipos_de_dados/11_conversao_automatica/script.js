console.log(5 + 5)
console.log(typeof (5 + 5))

console.log("5" + "5")
console.log(typeof ("5" + "5"))

console.log("5" + 5)
console.log(typeof ("5" + 5))

console.log("\n")

//TOMAR CUIDADO PQ O JS CONVERTE DE MANEIRA SILENCIOSA ALGUNS TIPOS DE DADOS
// "JOSE" * 3 É UM NaN PORÉM SE USAR O TYPEOF VERÁ QUE O JS CONVERTEU PARA Number
console.log("jose" * 3)
console.log(typeof ('jose' * 3))

console.log("30" - 10)
console.log(typeof ("30" - 10))

console.log(5 * null)
console.log(typeof (5 * null))