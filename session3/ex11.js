import prompt from 'prompt-sync';
const ler = prompt();

console.log("Informe os graus de febre");
let graus = Number(ler());

let febre = graus >= 37.5;

console.log(`Você está com febre?${febre}`)