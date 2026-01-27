/*
Elabore um algoritmo em JavaScript , que leia o Salário Bruto,
o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, 
exiba na tela o Salário Líquido. Veja o exemplo abaixo:

ENTRADA
Salário Bruto: 2000.00
Adicional Noturno: 500.00
Horas Extras: 100.00
Descontos: 200.00

SAÍDA
Salário Líquido: 2800.00

SALÁRIO LÍQUIDO = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS 
*/

const leia = require("readline-sync")

let salarioBruto = leia.questionFloat("Digite o Salário Bruto: ");
let adicionalNoturno = leia.questionFloat("Digite o Adicional Noturno: ");
let horasExtras = leia.questionFloat("Digite o valor das Horas Extras: ");
let descontos = leia.questionFloat("Digite o valor dos Descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + horasExtras * 5 - descontos;

console.log(`Salário Líquido:`,
    new Intl.NumberFormat('pt-BR', { 
        style: 'currency',
        currency: 'BRL',
     }).format(salarioLiquido)
);

