/*
Escreva um algoritmo, que leia 2 números inteiros via teclado, 
onde o primeiro número deve ser menor do que o segundo número. 
Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.
Veja os exemplos abaixo:
*/

/*
Entrada1:
Digite o primeiro número do intervalo: 10
Digite o último número do intervalo: 100
No Intervalo entre 10 e 100:

Saída1:
15 é múltiplo de 3 e 5
30 é múltiplo de 3 e 5
45 é múltiplo de 3 e 5
60 é múltiplo de 3 e 5
75 é múltiplo de 3 e 5
90 é múltiplo de 3 e 5

Entrada2:
Digite o primeiro número do intervalo: 100
Digite o último número do intervalo: 10

Saída2:
Intervalo inválido!

Entrada3:
Digite o primeiro número do intervalo: -10
Digite o último número do intervalo: -100

Saída3:
Intervalo inválido!

Entrada4:
Digite o primeiro número do intervalo: -100
Digite o último número do intervalo: -10
No Intervalo entre -100 e -10:

Saída4:
-90 é múltiplo de 3 e 5
-75 é múltiplo de 3 e 5
-60 é múltiplo de 3 e 5
-45 é múltiplo de 3 e 5
-30 é múltiplo de 3 e 5
-15 é múltiplo de 3 e 5
*/

const leia = require('readline-sync');

let primeiroNumero = leia.questionInt('Digite o primeiro numero do intervalo: ',
    {limiteMessage: 'Por favor, digite um numero valido.'});

let segundoNumero = leia.questionInt('Digite o ultimo numero do intervalo: ',
    {limiteMessage: 'Por favor, digite um numero valido.'});

if (primeiroNumero > segundoNumero) {
    console.log('Intervalo invalido!');
}

for (let i = primeiroNumero; i <= segundoNumero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é multiplo de 3 e 5`);
    }
}