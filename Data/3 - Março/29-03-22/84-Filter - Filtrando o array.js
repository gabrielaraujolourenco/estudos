// Filter, map, reduce
// A que eu criei pesquisando no google
function maiorQue10 (value) {
    return value  >= 10; 
}

const numero = [10, 5, 20, 3, 12, 7, 8, 35];

console.log(numero.filter(maiorQue10));

// usada no video

function callBackFilter(valor) {
 return valor > 10;

}



const numero2 = numero.filter(callBackFilter);

console.log(numero2);

//compactado
const numeroFiltrado = numero.filter( valor => valor >=10 );

console.log(`Esse sao os numeros filtrados ${numeroFiltrado}`);


