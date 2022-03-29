//                -5      -4       -3        -2        -1
//                0        1        2         3         4
const nomes = ['Maria', 'João','Henrique','Vitoria', 'Julia'];

//nomes.splice(indice, delete, elem1, elem2, elem3);
//pop
//const removidos = nomes.splice(-1, 1);
//shift
//const removidos = nomes.splice(0, 1);
//push
nomes.splice(5, 0, 'Luiz','Gabriel','Arthur');
// Unshift
nomes.splice(0, 0, 'Rodolfo', 'João');






console.log(nomes);