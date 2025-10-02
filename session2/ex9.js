import prompt from 'prompt-sync';
const ler = prompt();

console.log("-- PROGRAMA DA COMPRA ONLINE--")

console.log("Informe o valor total da compra:")
let total = Number(ler());

console.log('Informe o valor de desconto:')
let cupom = Number(ler());

console.log("Informe a quantidade de parcelas:");
let parcelas = Number(ler());

let res = (total - cupom) / parcelas;

console.log(` O valor das parcelas ficaram ${res} de x${parcelas}`);