import prompt from 'prompt-sync';
const ler = prompt();

console.log("Qual personagem de Friends trabalha com TI?");
let resp = ler();

let respcorreta = resp == "Joey";

console.log(`Resposta correta: ${respcorreta}`);