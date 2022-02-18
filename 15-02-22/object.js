function criaPessoa (nome, sobrenome, idade){
return{
    nome, sobrenome, idade,
    }
}
const pessoa1 = criaPessoa('Luiz','Otavio',43);
const pessoa2 = criaPessoa('Roberta','Otavio',12);
const pessoa3 = criaPessoa('Fernanda','Otavio',32);
const pessoa4 = criaPessoa('Augusta','Otavio',35);
const pessoa5 = criaPessoa('Luiza','Otavio',15);
const pessoa6 = criaPessoa('Rafaela','Otavio',23);

console.log(pessoa1.nome,pessoa2.nome);
