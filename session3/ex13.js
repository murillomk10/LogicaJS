import prompt from 'prompt-sync';
const ler = prompt();

console.log("informe a base do triangulo:");
let base = Number(ler());

console.log("informe a altura do triangulo:");
let altura = Number(ler());

let res1 = (base * altura) / 2;

console.log("informe a base do triangulo:");
let base2 = Number(ler());

console.log("informe a altura do triangulo:");
let altura2 = Number(ler());

let res2 = (base2 * altura2) / 2;

let igualdade = res1 == res2;

console.log("O primeiro triangulo possui a area de " + res1);    
console.log("O segundo triangulo possui a area de " + res2);    
console.log(`eles são iguais${igualdade}`);