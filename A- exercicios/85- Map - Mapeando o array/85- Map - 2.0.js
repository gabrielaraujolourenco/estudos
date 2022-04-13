//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adiciona uma chave id em cada objeto

const pessoas = [
    {nome:  'Luiz',    idade: 63},
    {nome:  'Maria',   idade: 23},
    {nome:  'Eduardo', idade: 55},
    {nome:  'Leticia', idade: 19},
    {nome:  'Rosane',  idade: 32},
    {nome:  'Wallace', idade: 47},
    {nome:  'Arthur',  idade: 56},
];

const nomes = pessoas.map(valor => valor.nome);
const idades = pessoas.map(valor => ({ idade: valor.idade}));
const id = pessoas.map((valor, indice)  =>{
valor.id = indice 
return valor;
});



console.log(nomes);
console.log(idades);
console.log(id);
