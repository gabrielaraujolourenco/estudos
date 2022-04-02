//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
//    this.nomeCompleto = () =>  this.nome + ' ' + this.sobrenome;
}
//

pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Gabriel', 'O.');
const data = new Date(); // Date = função construtora

console.log(pessoa1);
console.log(data);