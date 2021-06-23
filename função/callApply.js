function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 - imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4000,
    desc: 0.12,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // chamando diretamente
console.log(produto.getPreco()) // chamando a partir de um objeto

const carro = { preco: 49990, desc: 0.2 } 
console.log(getPreco.call(carro)) // a partir de um call
console.log(getPreco.apply(carro)) // a partir de um apply

console.log(getPreco.call(carro, 0.17, '$')) // o call permite a passagem de parametros diretamente
console.log(getPreco.apply(carro, [0.17, '$'])) // a passagem de paramentros dentro de um array
