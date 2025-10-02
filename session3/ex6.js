import prompt from 'prompt-sync';
const ler = prompt();

console.log("Informe a capacidade do tanque em (litro)");
let capacidade = Number(ler());

console.log("Informe o consumo do veiculo em litros (km por litros)");
let consumo = Number(ler());

console.log("distancia da viagem (km)");
let distancia = Number(ler());


let autonomia = capacidade * consumo;

let paradas = ((distancia + autonomia - 1) / autonomia) - 1;

console.log(`Você precisa fazer ${paradas} para abastecer`);