/*
Escreva um algoritmo que leia um número inteiro via teclado 
e mostre na tela uma mensagem indicando se este número é par ou ímpar 
e se o número é positivo ou negativo. Veja os exemplos abaixo:
*/

/* 
Entrada: 
Digite um número: 2
Digite um número: -3
Digite um número: -2
Digite um número: 3

Saída:
O Número 2 é par e positivo!
O Número -3 é ímpar e negativo!
O Número -2 é par e negativo!
O Número 3 é ímpar e positivo!
*/

const leia = require('readline-sync');

console.log('-------------------------------------------------------------------');
console.log('--- Verificação de Número É Par ou Ímpar, Positivo ou Negativo ---');
console.log('-------------------------------------------------------------------');

let numero = leia.questionInt('Digite um numero: ',
    {limitMessage: 'Por favor, digite um numero valido.'});

if (numero % 2 === 0 && numero >= 0) {
    console.log(`O Número ${numero} é par e positivo!`);
} else if (numero % 2 !== 0 && numero < 0) {
    console.log(`O Número ${numero} é ímpar e negativo!`);
} else if (numero % 2 === 0 && numero < 0) {
    console.log(`O Número ${numero} é par e negativo!`);
} else {
    console.log(`O Número ${numero} é ímpar e positivo!`);
} 

/*
let parImpar = numero % 2 === 0 ? 'par' : 'ímpar';
let positivoNegativo = numero >= 0 ? 'positivo' : 'negativo';

if (numero === parImpar && numero >= positivoNegativo) {
    console.log(`O Número ${numero} é ${parImpar} e ${positivoNegativo}!`)
} else if (numero === parImpar && numero < positivoNegativo) {
    console.log(`O Número ${numero} é ${parImpar} e ${positivoNegativo}!`)
} else if (numero !== parImpar && numero >= positivoNegativo) {
    console.log(`O Número ${numero} é ${parImpar} e ${positivoNegativo}!`)
} else {
    console.log(`O Número ${numero} é ${parImpar} e ${positivoNegativo}!`)
}      
*/