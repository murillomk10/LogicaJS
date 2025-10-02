import prompt from 'prompt-sync';
const ler = prompt();

console.log("Informe a cor do semaforo:");
let cor = ler();

let resp = cor == "Verde";

console.log(`Pode atravesar: ${resp}`);