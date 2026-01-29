/*Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
Todos os elementos da Diagonal Principal
Todos os elementos da Diagonal Secundária
A Soma de todos os elementos da Diagonal Principal
A Soma de todos os elementos da Diagonal Secundária */

const leia = require('readline-sync');

let matriz = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 },
        () => leia.questionInt('Digite um numero: '))
);

let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

        if (i === j) {
            diagonalPrincipal.push(matriz[i][j]);
            somaPrincipal += matriz[i][j];
        }

        if (i + j === 2) {
            diagonalSecundaria.push(matriz[i][j]);
            somaSecundaria += matriz[i][j];
        }
    }
}

console.log(`Diagonal principal: ${diagonalPrincipal.join(' ')}`);
console.log(`Diagonal secundária: ${diagonalSecundaria.join(' ')}`);
console.log(`Soma diagonal principal: ${somaPrincipal}`);
console.log(`Soma diagonal secundária: ${somaSecundaria}`);



