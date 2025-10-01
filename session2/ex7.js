import prompt from 'prompt-sync';

console.log("-- PROGRAMA DA MÉDIA --");

console.log('informe a primeira nota:');
let nota1 = Number(ler());

console.log('informe a segunda nota:');
let nota2 = Number(ler());

console.log('informe a terceira nota:');
let nota3 = Number(ler());

let res = (nota1 + nota2 + nota3) / 3;

console.log(`a sua nota é ${res}`);