// Declaração de função (function hoisting)
falaOi();
function falaOi(){
    console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// function expression
const souUmDado = function () {
    console.log('Sou um dado.')
};
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:')
    funcao();
}
executaFuncao(souUmDado);


const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();
const obj = {
    falar() {
        console.log('Estou falando.....');

    }
};
obj.falar();
