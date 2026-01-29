const leia = require('readline-sync');
let numeros = [10, 25, 5, 45, 85];

let cores = Array(5); //cria um vetor com 5 posições

for (let i = 0; i < numeros.length; i++) {
    console.log(`numeros[${i}] = ${numeros[i]}`);
}

console.log(`o tamanho do vetor numeros é: ${numeros.length}`);

console.table(numeros); //cria uma tabela no console

console.table(numeros.sort((a, b) => a - b)); //ordena o vetor em ordem crescente e cria uma tabela no console

for (let i = 0; i < cores.length; i++) {
    cores[i] = leia.question(`Digite o nome de uma cor: `);
}

console.table(cores); //cria uma tabela no console

console.table(cores.sort()); //ordena o vetor em ordem alfabética e cria uma tabela no console

console.log("Qual é a prosição do elemento 5 no vetor numeros? ", numeros.indexOf());