/*
Com base na tabela abaixo, escreva um algoritmo que leia o código de um item 
(número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). 
A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

Código do Produto  |     Produto         |   Preço
1                  |  Cachorro Quente    |  R$ 10.00
2                  |  X-Salada           |  R$ 15.00
3                  |  X-Bacon            |  R$ 18.00
4                  |  Bauru              |  R$ 12.00
5                  |  Refrigerante       |  R$ 8.00
6                  |  Suco de laranja    |  R$ 13.00

Valor total = quantidade * preço 
*/

/*
Entrada: 
Código do Produto: 2
Quantidade: 5
Produto: X-Salada

Código do Produto: 4
Quantidade: 2
Produto: Bauru

Saída:
Produto: X-Salada
Valor total: R$ 75.00

Produto: Bauru
Valor total: R$ 24.00
*/

const leia = require('readline-sync');

console.log('=========================================================');
console.log('                      Lanchonete                         ');
console.log('=========================================================');
console.log('código do Produto  |     Produto         |   Preço');
console.log('1                  |  Cachorro Quente    |  R$ 10.00');
console.log('2                  |  X-Salada           |  R$ 15.00');    
console.log('3                  |  X-Bacon            |  R$ 18.00');
console.log('4                  |  Bauru              |  R$ 12.00');
console.log('5                  |  Refrigerante       |  R$ 8.00');
console.log('6                  |  Suco de laranja    |  R$ 13.00');
console.log('=========================================================');

let codigoProduto = leia.questionInt('Digite o código do produto (1 a 6): ',
    {limitMessage: 'Por favor, digite um código entre 1 e 6.'});

let quantidade = leia.questionInt('Digite a quantidade: ',
    {limitMessage: 'Por favor, digite um numero.'});   

let valorTotal = 0;

switch (codigoProduto) {    
    case 1:
        valorTotal = 10.00 * quantidade;
        console.log(`Produto: Cachorro Quente`);
        break;
    case 2:
        valorTotal = 15.00 * quantidade;
        console.log(`Produto: X-Salada`);
        break;
    case 3:
        valorTotal = 18.00 * quantidade;
        console.log(`Produto: X-Bacon`);
        break;
    case 4:
        valorTotal = 12.00 * quantidade;
        console.log(`Produto: Bauru`);
        break;
    case 5:
        valorTotal = 8.00 * quantidade;
        console.log(`Produto: Refrigerante`);
        break;
    case 6:
        valorTotal = 13.00 * quantidade;
        console.log(`Produto: Suco de laranja`);
        break;
    default:
        console.log("Código inválido.");
}

console.log(`Valor total: R$ `,
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' 
    }).format(valorTotal)
);