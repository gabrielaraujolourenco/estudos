//Retorna a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numero = [10, 5, 20, 3, 12, 7, 8, 35, 11, 23, 423, 123];

const retornaPar = numero.filter(valor => valor % 2 === 0 )
const dobrar = retornaPar.map(valor => valor * 2);
const dobraNumero = numero.map(valor => valor * 2);
const somarNumero = numero.reduce((acumulador, valor) =>{
acumulador += valor;
return acumulador
}, 0); 
//versão tudo junto
const somaDobroPares = numero.filter(valor => valor % 2 === 0 ).map(valor => valor * 2).reduce((ac, valor) => ac + valor);

console.log(`A soma do dobro de todos os pares ${somaDobroPares}`);
console.log(retornaPar);
console.log(dobrar);
console.log(dobraNumero);
console.log(somarNumero);


