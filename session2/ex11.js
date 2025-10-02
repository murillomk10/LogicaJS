import prompt from 'prompt-sync';
const ler = prompt();

console.log("-- PROGRAMA DO LIVRO --");

console.log("Informe quantas paginas tem seu livro:");
let qtdPag = Number(ler());

console.log("Informe em quantos minutos você le uma pagina:");
let tempo = Number(ler());

let res = (qtdPag * tempo) / 60;

console.log(res)