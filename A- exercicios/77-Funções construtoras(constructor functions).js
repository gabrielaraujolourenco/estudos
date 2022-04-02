//função construtora -> objetos
//função fabrica -> Objetos
//construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    //atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = () => {
    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ':Sou um método')
    };
}

const p1 = new Pessoa('Gabriel', 'Araújo');
const p2 = new Pessoa('Paula', 'Fernandes');

p2.metodo();

