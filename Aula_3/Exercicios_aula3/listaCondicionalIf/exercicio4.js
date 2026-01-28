/* 
Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de animal, 
segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.

Em seguida, mostre na tela qual dos animais foi escolhido, baseado nas três palavras digitadas pelo usuário: 
*/

/*
Entrada:
vertebrado
mamífero
onívoro

invertebrado
inseto
herbívoro

Saída:
Homem

Lagarta
*/

const leia = require('readline-sync');

console.log('----------------------------------------');
console.log('-------- Descubra qual o Animal --------');
console.log('----------------------------------------');
console.log('Por favor, responda as perguntas abaixo:');

let palavra1 = leia.keyIn('E um animal vertebrado? (S/N): ',
    {limitMessage: 'Por favor, responda com (S) - Sim ou (N) - Não.'}).toLowerCase();

palavra1 === 's' ? palavra1 = 'vertebrado' : palavra1 = 'invertebrado';

if (palavra1 === 'vertebrado') {
    let palavra2 = leia.keyIn('E um animal Mamifero ? (S/N): ',
        {limitMessage: 'Por favor, responda com (S) - Sim ou (N) - Não.'}).toLowerCase();
    let palavra3 = leia.keyIn('E um animal Onivero? (S/N): ',
        {limitMessage: 'Por favor, responda com (S) - Sim ou (N) - Não.'}).toLowerCase();

    if (palavra2 === 's' && palavra3 === 's') {
        console.log('Homem');
    } else if (palavra2 === 's' && palavra3 === 'n') {
        console.log('Vaca');
    } else if (palavra2 === 'n' && palavra3 === 's') {
        console.log('Pomba');
    } else {
        console.log('Águia');
    }
} else {
    let palavra2 = leia.keyIn('E um animal Inseto ? (S/N): ',
        {limitMessage: 'Por favor, responda com (S) - Sim ou (N) - Não.'}).toLowerCase();
        let palavra3=leia.keyIn('E um animal Hematofago? (S/N): ',
        {limitMessage: 'Por favor, responda com (S) - Sim ou (N) - Não.'}).toLowerCase();

        if (palavra2 === 's' && palavra3 === 's') {
            console.log('Pulga');
        } else if (palavra2 === 's' && palavra3 === 'n') {
            console.log('Lagarta');
        } else if (palavra2 === 'n' && palavra3 === 's') {
            console.log('Sanguessuga');
        } else {
            console.log('Minhoca');
    }
}