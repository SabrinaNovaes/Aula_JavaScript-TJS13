//Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

/* Entrada:
Digite o número A: 2
Digite o número B: 4
Digite o número C: 5

Digite o número A: 2
Digite o número B: 2
Digite o número C: 5

Digite o número A: 2
Digite o número B: 2
Digite o número C: 4

Saída:
4 + 2 = 6 > 5
A Soma de A + B é Maior do que C.

2 + 2 = 4 < 5
A Soma de A + B é Menor do que C

2 + 2 = 4 = 4
A Soma de A + B é Igual a C
*/

/*
Na construção do Algoritmo, utilize os seguintes conteúdos:
-Entrada e Saída de dados
-Operadores
-Laço Condicional IF
*/

const leia = require('readline-sync');

let a = leia.questionFloat('Digite o valor de A: ',
    {limitMessage: 'Por favor, digite um numero valido.'});

let b = leia.questionFloat('Digite o valor de B: ',
    {limitMessage: 'Por favor, digite um numero valido.'});
    
let c = leia.questionFloat('Digite o valor de C: ',
    {limitMessage: 'Por favor, digite um numero valido.'});

let soma = a + b;

if (soma > c) {
    console.log(`A Soma de ${a} + ${b} é Maior do que C`);
} else if (soma < c) {
    console.log(`A Soma de ${a} + ${b} é Menor do que C`);
} else {
    console.log(`A Soma de ${a} + ${b} é Igual a ${c}`);
}