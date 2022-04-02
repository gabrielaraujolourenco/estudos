//escreva uma função que recebe dois numeros e retorne o maior deles
function max(x, y) {
    if (x > y) return x;
    return y;
 
}
console.log(max(10, 30));

const max2 = (x, y) => {
    return x > y ? x : y;
};
console.log(max2(100,20));

const max3 = (x, y) => x > y ? x : y;
console.log(max3(10, 20));

/*
const n1 = parseInt(Math.random()*20);
const n2 = parseInt(Math.random()*20);

console.log(`O primeiro valor é ${n1}`);
console.log(`O segundo valor é ${n2}`);
if (n1 > n2){
    console.log(`O maior valor foi o primeiro numero ${n1}`);
}else{
    console.log(`O maior valor foi o segundo numero ${n2}`);
}
*/