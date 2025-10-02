import prompt from 'prompt-sync';
const ler = prompt();

console.log("-- PROGRAMA DA LANCHONETE DO FREI --");

console.log("Informe a quantia de salgados:");
let salgados = Number(ler());

console.log("informe a quantidade de doces:")
let doces = Number(ler());

console.log('informe quantia de sucos:')
let sucos = Number(ler());

let res = salgados *8.00 + doces *6.00 + sucos*4.00;

console.log(`O valor total da compra é ${res}`);