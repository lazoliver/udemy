let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // os () são utilizados para passar parametros
console.log(ola()) 
ola = _ => 'Olá' // possui um único parametro
console.log(ola())