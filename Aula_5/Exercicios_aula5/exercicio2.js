/*Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:
Todos os elementos dos índices ímpares do vetor 
Todos os elementos do vetor que são números pares
A Soma de todos os elementos do vetor
A Média de todos os elementos do vetor, armazenada em uma variável do tipo real*/

const leia = require('readline-sync');

let vetor = [];
let indicesImpares = [];
let numerosPares = [];
let soma = 0;
let media = 0;

for (let i = 0; i < 10; i++) {
    vetor.push(leia.questionInt(`Digite o ${i + 1}º numero: `));
    soma += vetor[i];
}

for (let i = 0; i < vetor.length; i++) {
    if (i % 2 !== 0) {
        indicesImpares.push(vetor[i]);
    }
}

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        numerosPares.push(vetor[i]);
    }
}

media = soma / vetor.length;

console.log(`Elementos nos índices ímpares: ${indicesImpares.join(' ')}`);
console.log(`Elementos pares: ${numerosPares.join(' ')}`);
console.log(`Soma: ${soma}`);
console.log(`Média: ${media}`);
