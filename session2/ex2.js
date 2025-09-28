import prompt from 'prompt-sync';
const ler = prompt();

console.log(`-- PROGRAMA DO TRIPLO --`);

console.log('Informe um numero?');
let num1 = Number(ler());

let res = num1 * 3;

console.log(`O triplo de ${num1} é ${res}`);