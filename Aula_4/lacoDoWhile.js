const leia = require('readline-sync');

let numero = leia.questionInt('Digite um numero: ',
    {limitMessage: 'Por favor, digite um numero valido.'});

//do while executa o bloco de codigo pelo menos uma vez 
// muito usado em menus interativos
//validação de dados

let contador = 0;

do {
    //let contador = 0;
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
} while (contador <= 10) //enquanto  contador menor que 10