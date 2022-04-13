//Escreva uma função que recebe um número e
//retorne o seguinte:
//Número é divisivel por 3 = fizz
//Número é divisivel po 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número NÃO é dovosovel por 3 e 5 = retorna o própro número 
//checar se o número é realmente um número = retorna o próprio número 
//Use a função com números de 0 a 100
 
function FizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
return numero;
}

for (let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i))
}