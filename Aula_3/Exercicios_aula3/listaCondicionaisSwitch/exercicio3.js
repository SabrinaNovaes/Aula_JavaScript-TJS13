/*
Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. 
O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática 
(número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. 
Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

Código   |     Operação
1        |     Soma
2        |     Subtração
3        |     Multiplicação
4        |     Divisão
*/

const leia = require('readline-sync');

console.log('================================');
console.log('       Calculadora Simples      ');
console.log('================================');        
console.log('| + | - | x | / |');
console.log('================================');

let num1 = leia.questionFloat('Digite o primeiro número: ',
    {limitMessage: 'Por favor, digite um número válido.'});

let num2 = leia.questionFloat('Digite o segundo número: ',
    {limitMessage: 'Por favor, digite um número válido.'});

let operacao = leia.keyIn('Escolha a operação: +, -, x, / : ',
    {limitMessage: 'Por favor, digite uma operação válida.'});

switch (operacao) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
    break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
    break;
    case 'x':
        console.log(`${num1} x ${num2} = ${num1 * num2}`)
    break;
    case '/':
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
    break;
    default:
        console.log('Operação inválida. Por favor, escolha uma operação válida.');
}


