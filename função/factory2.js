function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Iphone', 4000))
console.log(criarProduto('Ipad', 3000))