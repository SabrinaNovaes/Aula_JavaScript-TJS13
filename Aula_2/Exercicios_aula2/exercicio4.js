/* 
Leia quatro valores (n1, n2, n3, n4). 
A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4. 
Veja os exemplos abaixo:

ENTRADA 
numero1: 5.0
numero2: 6.0
numero3: 7.0
numero4: 8.0

SAÍDA
Diferença: -26.0

ENTRADA
numero1: 5.0
numero2: 6.0
numero3: -7.0
numero4: 8.0

SAÍDA
Diferença: 86.0

CALCULO = (n1 * n2) - (n3 * n4) 
*/

const leia = require("readline-sync")

let n1 = leia.questionFloat("Digite o número 1: ");
let n2 = leia.questionFloat("Digite o número 2: ");
let n3 = leia.questionFloat("Digite o número 3: ");
let n4 = leia.questionFloat("Digite o número 4: ");

let diferenca = (n1 * n2) - (n3 * n4);

console.log(`Diferença: ${diferenca}`);

