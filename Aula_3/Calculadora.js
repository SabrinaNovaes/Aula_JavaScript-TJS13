//crtl+f2 - seleciona todas as palavas iguais
//shift + alt + seta pra baixo duplica a linha toda
//alt+clicar onde quiser alterar - edita em vários lugares ao mesmo tempo
//Ctrl + a seleciona todas as linhas, shift  + end é só a linha atual
//alt + seta pra cima ou pra baixo move a linha atual pra cima ou pra baixo

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

/*let operacao = leia.question('Escolha a operação: ',
    {limitMessage: 'Por favor, digite uma operação válida.'}).toLocaleLowerCase().slice(0);

if (operacao != '+' && operacao != '-' && operacao != 'x' && operacao != '/') {
    console.log('Operação inválida. Por favor, escolha uma operação entre +, -, x ou /.');
} */

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