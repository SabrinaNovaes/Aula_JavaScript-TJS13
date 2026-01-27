//ENTRADA
//Salário: 10000.00
//Abono: 1000.00
//SAÍDA
//Novo Salário: 11000.00

const leia = require("readline-sync")

let salario = leia.questionFloat("Digite o salário: ");
let abono = leia.questionFloat("Digite o abono: ");
let novoSalario = salario + abono;

console.log(`Novo Salário:`,
    new Intl.NumberFormat('pt-BR', { 
        style: 'currency',
        currency: 'BRL',
     }).format(novoSalario)
);


