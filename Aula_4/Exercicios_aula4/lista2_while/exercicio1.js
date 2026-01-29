/*
Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e 
o total de pessoas cuja idade, seja maior que 50 anos.
A leitura dos dados deve ser finalizada ao digitar uma idade negativa. 
Veja o exemplo abaixo:
*/

/*
Entrada:
Digite uma idade: 80
Digite uma idade: 15
Digite uma idade: 20
Digite uma idade: 13
Digite uma idade: 5
Digite uma idade: 52
Digite uma idade: 33
Digite uma idade: 26
Digite uma idade: 71
Digite uma idade: 18
Digite uma idade: -1

Saída:
Total de pessoas menores de 21 anos: 5
Total de pessoas maiores de 50 anos: 3
*/

const leia = require('readline-sync');

let idade = 1;
let menor = 0;
let maior = 0;

while (idade > 0) {
    idade = leia.questionInt('Digite uma idade: ');
    if (idade > 0 && idade < 21) {
        menor++
    }else if (idade > 50) {
        maior++
    }
}

console.log(`Total de pessoas menores de 21 anos: ${menor}`);
console.log(`Total de pessoas maiores de 50 anos: ${maior}`);