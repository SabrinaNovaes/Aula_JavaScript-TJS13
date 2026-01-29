/*
Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela 
quantos números são pares e quantos número são ímpares. 
Veja o exemplo abaixo:
*/

/*
Entrada:
Digite o 1º número: 2
Digite o 2º número: 7
Digite o 3º número: 31
Digite o 4º número: 4
Digite o 5º número: 11
Digite o 6º número: 6
Digite o 7º número: 9
Digite o 8º número: 25
Digite o 9º número: 8
Digite o 10º número: 15

Saída:
Total de números pares: 4
Total de números ímpares: 6
*/

const leia = require('readline-sync');

let numero = 0;
let pares = 0;
let impares = 0;

for (let num = 1; num <= 10; num++) {
    numero = leia.questionInt(`Digite o ${num}° numero: `);
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Total de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);

