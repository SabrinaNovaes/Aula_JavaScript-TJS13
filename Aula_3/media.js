const leia = require('readline-sync');

//let nota = [];
//let media = 0;

/*for (let i = 0; i < 5; i++) {
    nota[i] = leia.questionFloat(`Digite a nota ${i + 1}: `);
} */

//media = (nota[0] + nota[1] + nota[2] + nota[3] + nota[4]) / 5;

//console.log(`Média: ${media}`);

let media = leia.questionFloat('Digite a média do aluno: ',
    {limitMessage: 'Por favor, digite um número válido.'});

if (media >= 7) {
    console.log('Aprovado');
} else if (media >= 5 && media < 7) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}
