const numero = [10, 5, 20, 3, 12, 7, 8, 35, 11, 23, 423, 123];
const total = numero.reduce((acumulador, valor, indice, array) => {
acumulador += valor;
return acumulador;
}, 0);
console.log(total);
