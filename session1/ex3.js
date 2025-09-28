import prompt from  'prompt-sync';
const ler = prompt();

console.log('-- PROGRAMA DA METADE --');

console.log('Informe um numero?');
let num = Number(ler());

let res = num / 2;

console.log(`A metade de ${num} é ${res}`);