import prompt from 'prompt-sync';
const ler = prompt();

console.log("Qual a sua altura?");
let alutura = Number(ler());

console.log("Qual o seu peso?");
let peso = Number(ler());

let res =  peso / (alutura * alutura);

let resp = res > 24.9;

console.log("Seu IMC é" + res);
console.log(`Esta acima do peso ideal? ${resp}`)