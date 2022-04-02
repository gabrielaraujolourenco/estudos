//factory function(função de fabrica)
// constructor function (função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },


        //fala: function (assunto) {...}
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        // getter
        get imc(){

            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);

        }
    };
}

const p1 = criaPessoa('Gabriel', 'Araújo', 1.74, 53);
console.log(p1.imc);
const p2 = criaPessoa('Paloma', 'Luiza', 1.6, 50)
console.log(p2.imc);
console.log(p1.fala('falando sobre JS'));


const pessoa1 = criaPessoa('Arthur', 'Henrique', 1.8, 74);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.imc);

p1.nomeCompleto = 'Maria Oliveria Silva';
console.log(p1.nomeCompleto);


