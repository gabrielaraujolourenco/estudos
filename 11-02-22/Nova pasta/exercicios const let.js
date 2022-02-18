//nomes precisa ter parenteses por ser uma string
const nome = 'Gabriel Araujo';
const sobrenome = 'Lourenço';
//logo numero nao precisa caso ponha parenteses nao sera considerado um numero e sim uma string
const idade = 18;
const peso = 54;
const altura = 1.74;
//calculado o imc e a data de nascimento
let imc = parseInt(peso / (altura * altura))
let anoNascimento = 2022 - idade
//console.log(imc,anoNascimento)

//escrendo o codigo .log
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`)
