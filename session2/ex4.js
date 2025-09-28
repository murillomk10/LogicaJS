import prompt from 'prompt-sync';
const ler = prompt();

console.log(`-- PROGRAMA DO subtração --`);

console.log('Informe um numero?');
let num1 = Number(ler());

console.log('Informe outro numero?');
let num2 = Number(ler());

let res = num1 - num2;

console.log(`O resultado da subtração é ${res}`);