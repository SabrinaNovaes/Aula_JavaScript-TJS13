const leia = require('readline-sync');

let numero = leia.questionInt('Digite um numero: ',
    {limitMessage: 'Por favor, digite um numero valido.'});

for (let contador = 0; contador <= 10; contador++) {
    let resultado = numero * contador;
    console.log(`${numero} x ${contador} = ${resultado}`);
}
