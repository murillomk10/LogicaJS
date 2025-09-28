import prompt from 'prompt-sync';
const ler = prompt();

console.log('-- PROGRAMA DO AÇAÍ --');

console.log('Informe a quantia de açaís pequenos:');
let qtdp = Number(ler());

console.log('Informe a quantia de açaís medios:');
let qtdm = Number(ler());

console.log('Informe a quantia de açaís grande:');
let qtdg = Number(ler());

let res = qtdp*13.00 + qtdm*15.00 + qtdg*17.50;

console.log(`A quantia a pagar é ${res}`);