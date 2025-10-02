import prompt from 'prompt-sync';
const ler = prompt();

console.log("Informe a primeira nota");
let nota1 = Number(ler());


console.log("Informe a segunda nota");
let nota2 = Number(ler());

console.log("Informe a terceira nota");
let nota3 = Number(ler());

let medioa = (nota1 + nota2 + nota3) / 3;

let passou = medioa > 6;

console.log(`A media do aluno é ${medioa}`);

console.log(`O aluno passou?${passou}`);
