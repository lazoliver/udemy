const fabricantes = [
    "Mercedes",
    "Audi",
    "Citroen",
    "Bmw"
]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach executa uma função para cada elemento de um array.
fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})
fabricantes.forEach( fabricante => console.log(fabricante) ) // Arrow function