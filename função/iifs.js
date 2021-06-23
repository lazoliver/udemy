// IIFS => Inmediately Invoked Function Expression
// Padrão utilizado para fugir do escopo global, tudo que for definito aqui, será disponível apenas dentro da função.
(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()