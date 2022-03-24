const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
//atribuiçao via desestruturação
//const { nome: n, sobrenome = '', idade, endereco } = pessoa;
//console.log(n, sobrenome, idade);
//const {endereco: {rua, numero} } = pessoa;

const {nome, ...resto } = pessoa;


console.log(nome, resto);
