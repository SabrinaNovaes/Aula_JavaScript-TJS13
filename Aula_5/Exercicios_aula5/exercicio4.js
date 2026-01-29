/*Elabore um algoritmo que leia as notas de uma turma com 10 participantes,
dos 4 bimestres de um ano. As 4 notas de cada participante serão armazenadas 
em uma linha de uma matriz de números reais, logo cada linha da matriz 
representará as notas de um participante. Em um vetor de números reais,
armazene as médias de cada participante e exiba as médias de cada um na tela.*/

const leia = require('readline-sync');

const participantes = 10;
const bimestres = 4;

let notas = [];     
let medias = [];  

for (let i = 0; i < participantes; i++) {
    let notasParticipante = [];
    console.log(`Digite as notas do participante ${i + 1}:`);
    
    for (let j = 0; j < bimestres; j++) {
        let nota = leia.questionFloat(`Nota do ${j + 1} bimestre: `);
        notasParticipante.push(nota);
    }
    
    notas.push(notasParticipante);

    let soma = notasParticipante.reduce((a, b) => a + b, 0);
    let media = soma / bimestres;
    medias.push(media);
}

console.log('Médias dos participantes:');
console.log(medias.map(media => media.toFixed(2)).join(' | '));


