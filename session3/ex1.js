import prompt from 'prompt-sync';
const ler = prompt();

console.log("Informe o valor da compra:");
let valor = Number(ler());

console.log("Informe o valor de desconto:");
let desconto = Number(ler());

let res = (valor - desconto);

console.log("Compra finalizada! O total é de R$ " + res);