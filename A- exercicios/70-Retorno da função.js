//return
//Retorna um valor
// Termina a função
function soma(a, b){
    return a + b;
}
console.log(soma(2,5));
console.log('Ola mundo ');
//segunda parte
function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};

}
const p1 = criaPessoa('luiz', 'Otavio');
//em vez de
const p2  = {
    nome: 'João',
    sobrenome: 'Oliveira'
};
console.log(p1, p2)
//terceira parte
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + '' + resto;
    }
    return falaResto
}

const olaMundo = falaFrase('Olá!');
console.log(olaMundo);

//Quarta parte
function duplica(n) {
    return n *2;

}
function triplica(n) {
    return n * 3;

}
function quadriplica(n) {
    return n*4
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(4));

function criaMultiplicador(multiplicador) {
    //multiplicador
  return function(n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
