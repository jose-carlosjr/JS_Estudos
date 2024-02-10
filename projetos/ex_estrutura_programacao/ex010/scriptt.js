let n = 30

function eratosthenes(n) {
    if (n == 2 || n == 3 || n == 5 || n == 7) { // GAMBIARRA :) FUNCIONA!
        return true
    }     
    else {
        return !(n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0)
        //       11/2 r: 1     11/3 r: 2     11/5 r: 1     11/7 r: 4
    }
}

if (eratosthenes(n) == true) {
    console.log('primo')
} else {
    console.log('não é primo')
}