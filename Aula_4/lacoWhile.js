const leia = require('readline-sync');

let numero = leia.questionInt('Digite um numero: ',
    {limitMessage: 'Por favor, digite um numero valido.'});

let contador = 0;

while (contador <= 10) { //enquanto  contador menor que 10 
    //let contador = 0;
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
}