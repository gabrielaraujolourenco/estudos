//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a


const pessoas = [
    {nome:  'Luiz',    idade: 63},
    {nome:  'Maria',   idade: 23},
    {nome:  'Eduardo', idade: 55},
    {nome:  'Leticia', idade: 19},
    {nome:  'Rosane',  idade: 32},
    {nome:  'Wallace', idade: 47},
    {nome:  'Arthur',  idade: 56},
];

const pessoas2 = pessoas
//console.log(pessoas2.length)
//console.log(pessoas2.length)
//console.log(pessoas2.filter(retornaLetras))

const nomeCincoLetras = pessoas.filter( obj => obj.nome.length >= 5 );
const retornaOsMaisVelhos = pessoas.filter(valor => valor.idade >= 50);
const nomesTerminaComA = pessoas.filter( obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nomesTerminaComA);
console.log(retornaOsMaisVelhos);
console.log(nomeCincoLetras);
