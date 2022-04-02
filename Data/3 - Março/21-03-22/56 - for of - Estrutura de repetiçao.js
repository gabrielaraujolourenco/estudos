const nome = ['Luiz', 'Otavio', 'Henrique'];

//for clássico - Geralmente com iteráveis (array ou strings);
//for in - Retorna o índice ou chave (string, array ou objetos)
//for of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('---------------------------');

for (let i in nome) {
    console.log(nome[i]);
}

console.log('---------------------------');

for (let valor of nome) {
    console.log(valor);
}
console.log('---------------------------');

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});
