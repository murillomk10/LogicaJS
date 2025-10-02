import prompt from 'prompt-sync';
const ler = prompt();

console.log("informe a quantia de reais");
let reais = Number(ler());

let conversao = reais * 5.16;

console.log(conversao);