import prompt from 'prompt-sync';
const ler = prompt();

console.log("Informe um numero:");
let num = Number(ler());

let par = (num % 2 === 0);

console.log("Número é par?"+par);