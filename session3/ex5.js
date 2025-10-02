import prompt from 'prompt-sync';
const ler = prompt();

console.log("informe o valor da compra");
let valor = Number(ler());

console.log("informe o valor de parcelas");
let parcelas = Number(ler());

let res = (valor / parcelas);

console.log(`Sua compra de R$ ${valor} em ${parcelas}x de R$ ${res} foi concluida`);