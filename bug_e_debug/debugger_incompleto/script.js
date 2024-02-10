let a = 1
let b = 2
let c = 3

if (a < 2) {
    b = b + c
    debugger
}

for (let i = 5; i > 0; i--) {
    a++
    b = c * 2
    c = 2 * (b / a)
}
    debugger

if (b != a) {
    a++
} else {
    c = Number(b + a)
}
    debugger

console.log('teste')