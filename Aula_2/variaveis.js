"use strict";
//console.log(bonus); // Erro: bonus não está definido

var nome;
let profissao = "desenvolvedor";
let salarioBruto = 3500.90;
const bonus = 0.05;
let numero = 10;

console.log(bonus);
console.log(numero)

console.log("Tipo da variável nome:", typeof (nome));

if (salarioBruto > 1000) {
    let mensagem = "Salário maior que 1000";
    console.log(mensagem);
    //console.log(bonus);
}

console.log("Sálario Líquido: ", 
    new Intl.NumberFormat('pt-BR', { 
        style: 'currency',
        currency: 'BRL',
     }).format(salarioBruto + (bonus * salarioBruto))
)
