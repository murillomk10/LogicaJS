import prompt from 'prompt-sync';
const ler = prompt();

console.log("-- PROGRAMA DO AÇAÍ --");


console.log("digite a quantidade de açaís pequenos:");
let qtdP = Number(ler());


console.log("digite a quantidade de açaís medios:");
let qtdM = Number(ler());


console.log("digite a quantidade de açaís grandes:");
let qtdG = Number(ler());

console.log("Informe o valor do cupom (porcentagem):");
let cupom = Number(ler());

let res = qtdP * 13.50 + qtdM * 15.00 + qtdG * 17.50;
let valorcomdesconto = (cupom * res) / 100;
let valorfinal = res - valorcomdesconto;

console.log(`O preço a pagar é R$ ${valorfinal}`);