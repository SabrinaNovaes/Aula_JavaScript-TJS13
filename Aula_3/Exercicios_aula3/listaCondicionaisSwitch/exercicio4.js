/*
Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária. 
O programa deverá ler o tipo da operação a ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) 
e o valor a ser depositado ou sacado (somente nas opções 2 e 3). Considere que um saque só pode ser realizado
 caso haja saldo suficiente. Ao final de cada operação, exiba o novo Saldo na tela. A variável saldo (número real), 
 será inicializada com o valor de R$ 1000.00. 
Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

Código   |     Operação
1        |     Saldo
2        |     Saque
3        |     Depósito
*/

/*
Entrada:
Operação: 1
Operação - Saldo
Saldo: R$ 1000.00

Operação: 2
Valor: R$ 10000.00
Operação - Saque
Saldo Insuficiente!

Operação: 2
Valor: R$ 500.00
Operação - Saque
Novo Saldo: R$ 500.00

Operação: 3
Valor: R$ 2000.00
Operação - Depósito
Novo Saldo: R$ 3000.00

Operação: 4
Valor: R$ 2000.00
Operação Inválida!
*/

const leia = require('readline-sync');

console.log('========================================');
console.log('          Conta Bancária Simples        ');
console.log('========================================');        
console.log('| 1 | Saldo | 2 | Saque | 3 | Depósito |');
console.log('========================================');

let operacao = leia.questionInt('Digite o codigo da operacao (1 a 3): ',
    {limitMessage: 'Por favor, digite um codigo entre 1 e 3.'});

let saldo = 1000;

switch (operacao) {
    case 1:        
        console.log(`Operação - Saldo\nSaldo: `,
            new Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
            }).format(saldo));
    break;
    case 2:
        let valorSaque = leia.questionFloat('Digite o valor do saque: R$ ',
            {limitMessage: 'Por favor, digite um número valido.'});
        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            console.log(`Operação - Saque\nNovo Saldo: `,
                new Intl.NumberFormat('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL' 
                }).format(saldo));
        } else {
            console.log(`Operação - Saque\nSaldo Insuficiente!`);
        }
    break;
    case 3:
        let valorDeposito = leia.questionFloat('Digite o valor do deposito: R$ ',
            {limitMessage: 'Por favor, digite um numero válido.'});
        saldo += valorDeposito;
        console.log(`Operação - Depósito\nNovo Saldo: `,
            new Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
            }).format(saldo));
    break;
    default:
        console.log("Operação Inválida!");
}