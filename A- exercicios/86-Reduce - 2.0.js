//Retorne a pessoa mais velha
const pessoas = [
    {nome:  'Luiz',    idade: 63},
    {nome:  'Maria',   idade: 23},
    {nome:  'Eduardo', idade: 55},
    {nome:  'Leticia', idade: 19},
    {nome:  'Rosane',  idade: 32},
    {nome:  'Wallace', idade: 47},
    {nome:  'Arthur',  idade: 83},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);