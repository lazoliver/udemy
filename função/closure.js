// Closure é o escopo criado quando a função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local' // se não houvesse uma constante X dentro desse escopo, a função procuraria em escopo mais abrangente e executando o X global.
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())