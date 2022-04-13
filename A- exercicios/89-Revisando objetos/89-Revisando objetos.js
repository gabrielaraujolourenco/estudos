const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 19;
pessoa1.falarNome = function (){
    return (`${this.nome} está falando seu nome.`);
}
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}
console.log(pessoa1.getDataNascimento());
console.log(pessoa1.falarNome());


// factory function / constructor functions
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa ('Gabriel', 'Araújo');
console.log(p1.nomeCompleto());
// constructor
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const pessoa1 = new Pessoa('Gabriel', 'Araújo');
console.log(pessoa1)























