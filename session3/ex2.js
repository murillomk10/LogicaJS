import prompt from 'prompt-sync';
const ler = prompt();

console.log("Informe o valor da compra:");
let valor = Number(ler());

console.log("Informe o valor do desconto (porcentagem):");
let desconto = Number(ler());

let valorcomdesconto = (valor * desconto) / 100;
let valorfinal = valorcomdesconto - valor;

console.log(`Compra Finalizada! O total é de R$${valorfinal}`);