import prompt from 'prompt-sync';
const ler = prompt();

console.log("Qual o nome do livro:");
let nome = ler();

console.log("Quanto tempo para ler uma pagina(segundos):");
let tempo = Number(ler());

console.log("Quantas pagina tem o seu livro:");
let pagina = Number(ler());

let conversao = tempo * pagina;

let horas = conversao / 3600;

console.log(`Você lera ${nome} em ${horas} horas`);