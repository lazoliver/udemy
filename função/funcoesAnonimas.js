const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
// A ausência de valor para o paramêtro operação, faz o código assumir o valor padrão "soma", utilizando a function soma.
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)
// Uma arrow function sempre será uma função anônima. Já a função tradicional pode ser uma função anônima ou nomeada.


// Uma função anônima dentro de um objeto.
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
} 

pessoa.falar()