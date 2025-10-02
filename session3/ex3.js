import prompt from 'prompt-sync';
const ler = prompt();

console.log("informe o peso em (kilos)");
let peso = Number(ler());

let conversao = peso * 1000;

console.log(conversao);