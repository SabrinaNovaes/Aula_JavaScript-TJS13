/*Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado.
 Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3. 
 Veja o exemplo abaixo:*/

const leia = require('readline-sync');

let numeros = 0;
let soma = 0;
let contador = 0;
let media = 0;

do {
    numeros = leia.questionInt('Digite um numero: ');

    if (numeros !== 0 && numeros % 3 === 0) {
        soma += numeros;
        contador++;
    }

} while (numeros !== 0);

if (contador > 0) {
    media = soma / contador;
} else {
    media = 0;
}

console.log(`A média de todos os números múltiplos de 3 é: ${media}`);
