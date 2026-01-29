/*Escreva um algoritmo, que leia números inteiros via teclado, 
até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, 
que sejam positivos. Veja o exemplo abaixo:
*/

const leia = require('readline-sync')

let numeros = 0;
let soma = 0;

do {
    numeros = leia.questionInt('Digite um numero: ',
        {limitMessage: 'Por favor digite um numero inteiro. '});
   
        if (numeros > 0) {
            soma += numeros;
        }
} while (numeros !== 0);

console.log(`A soma dos numeros positivos é: ${soma}`);