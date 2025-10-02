import prompt from 'prompt-sync';
const ler = prompt();

console.log("Informe o salario base:");
let salariobase = Number(ler());

console.log("Informe o bônus mensal (porcentagem)");
let bonus = Number(ler());

console.log("Informe total de descontos em reais:");
let desconto = Number(ler());

let porcentagem = (salariobase * bonus) / 100;
let salariointermedio = salariobase + porcentagem;
let salariofinal = salariointermedio - desconto;

console.log(`Seu salario liquido é de R$ ${salariofinal}`);