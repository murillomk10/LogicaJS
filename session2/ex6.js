import prompt from 'prompt-sync';
const ler = prompt();

console.log("-- PROGRAMA DA DIVISÃO --");

console.log("Informe o Primeiro numero");
let num1 =  Number(ler());

console.log("Informe o Segundo numero");
let num2 =  Number(ler());

let res = num1 / num2;

console.log(`O resultado é ${res}`);