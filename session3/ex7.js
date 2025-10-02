import prompt from 'prompt-sync';
const ler = prompt();
console.log("Informe a quantidade de açaís:");
let qtd = Number(ler());

let res = qtd * 13.50;

console.log(`O total à pagar é de R$ ${res}`)