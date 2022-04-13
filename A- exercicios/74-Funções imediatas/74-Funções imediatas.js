// IIFE -> immediately invoked function expression
(function (idade, peso, altura) {

    const sobrenome = 'Araujo';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Gabriel'));

    }

    falaNome();
    console.log(idade, peso, altura);


})(18, 53, 1.74);

const nome = 'Qualquer coisa';

