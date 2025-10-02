import prompt from 'prompt-sync';
const ler = prompt();

console.log("-- PROGRAMA DA FEBRE  --");

console.log("Qual a sua temperatura:");
let temp = Number(ler());

let febre = temp > 37.2;

console.log("voce está com febre " + febre);