// function declaration * pode ser chamada a qualquer instante *
function soma(x, y) {
    return x + y
}

// function expression * função anônima, só pode ser chamada após a declaração *
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression * vantagem para debugar o código, só pode ser chamada após a declaração *
const mult = function mult (x, y) {
    return x * y
}
console.log(mult(3, 4))