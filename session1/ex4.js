import prompt from 'prompt-sync';
const ler = prompt();

console.log('-- PROGRAMA DA MEDIA --');

console.log('Informe a primeira nota?')
let nota1 = Number(ler());

console.log('Informe a segunda nota?');
let nota2 = Number(ler());

console.log('Informe a terceira nota?');
let nota3 = Number(ler());

let res = (nota1 + nota2 + nota3) / 3;

console.log(`A media final é: ${res}`)