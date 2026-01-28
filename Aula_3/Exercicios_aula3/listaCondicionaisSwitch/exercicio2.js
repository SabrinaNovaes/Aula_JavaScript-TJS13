/*
Com base na tabela abaixo, escreva um algoritmo que leia 
o Nome do Colaborador (string), o Código do Cargo do Colaborador 
(número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, 
o Cargo e o novo Salário reajustado.
*/

/*
Código do Cargo  |     Cargo              |   Reajuste Salarial
1                |  Gerente               |   10%
2                |  Vendedor              |   7%
3                |  Supervisor            |   9%
4                |  Motorista             |   6%
5                |  Estoquista            |   5%
6                |  Técnico de TI         |   8%

Novo Salário = salário + (reajuste * salário)
*/

/*
Entrada:
Nome do colaborador: João da Silva
Cargo: 1
Salário: R$ 10000.00

Nome do colaborador: Maria dos Anjos
Cargo: 5
Salário: R$ 2000.00

Saída:
Nome do colaborador: João da Silva
Cargo: Gerente
Salário: R$ 110000.00

Nome do colaborador: Maria dos Anjos
Cargo: Estoquista
Salário: R$ 2100.00
*/

const leia = require('readline-sync');
console.log('=========================================================');
console.log('                  Reajuste Salarial                      ');
console.log('=========================================================');       

let nomeColaborador = leia.question('Digite o nome do colaborador: ');

let codigoCargo = leia.questionInt('Digite o codigo do cargo (1 a 6): ',
    {limitMessage: 'Por favor, digite um codigo entre 1 e 6.'});

let salario = leia.questionFloat('Digite o salario: R$ ',
    {limitMessage: 'Por favor, digite um número valido.'});

let novoSalario = 0;
let cargo = '';

switch (codigoCargo) {
    case 1:
        novoSalario = salario + (0.10 * salario);
        cargo = 'Gerente';
    break;                          
    case 2:
        novoSalario = salario + (0.07 * salario);
        cargo = 'Vendedor';
    break;
    case 3:
        novoSalario = salario + (0.09 * salario);
        cargo = 'Supervisor';
    break;
    case 4:
        novoSalario = salario + (0.06 * salario);
        cargo = 'Motorista';
    break;
    case 5:
        novoSalario = salario + (0.05 * salario);
        cargo = 'Estoquista';
    break;
    case 6:
        novoSalario = salario + (0.08 * salario);
        cargo = 'Técnico de TI';
    break;
    default:
        console.log("Código inválido.");
}

console.log(`Nome do colaborador: ${nomeColaborador}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário: `,
    new Intl.NumberFormat('pt-BR', { 
        style: 'currency',
        currency: 'BRL',
     }).format(novoSalario)
);

