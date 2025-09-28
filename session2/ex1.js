import prompt from 'prompt-sync';
const ler = prompt();

console.log(`-- PROGRAMA DO DOBRO --`);

console.log('Informe um numero?');
let num1 = Number(ler());

let res = num1 * 2;

console.log(`O dobro de ${num1} é ${res}`);