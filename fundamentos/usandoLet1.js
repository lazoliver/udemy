var numero = 1 // escopo global e de função 
{
    let numero = 2 // escopo global, função e de bloco
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)