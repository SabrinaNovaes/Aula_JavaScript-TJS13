/*
Elabore um algoritmo em JavaScript que leia 4 notas de um participante, 
exiba na tela a média final do participante. Veja o exemplo abaixo:

ENTRADA
Nota 1: 10.0
Nota 2: 8.0
Nota 3: 7.0
Nota 4: 7.5

SAÍDA
Média final: 8.1

CALCULAR MÉDIA = (NOTA1 + NOTA2 + NOTA3 + NOTA4) / 4 
*/

const leia = require("readline-sync")

let nota1 = leia.questionFloat("Digite a Nota 1: ");
let nota2 = leia.questionFloat("Digite a Nota 2: ");
let nota3 = leia.questionFloat("Digite a Nota 3: ");
let nota4 = leia.questionFloat("Digite a Nota 4: ");    

let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Média final: ${mediaFinal.toFixed(1)}`);