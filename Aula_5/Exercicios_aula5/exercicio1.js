/*Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
construa um algoritmo que consiga pesquisar dados no vetor, 
onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. 
Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. 
Veja os exemplos abaixo:*/

const leia = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numero;
let encontrado = false;

numero = leia.questionInt('Digite o numero que voce deseja encontrar: ');

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        console.log(`O numero ${numero} foi encontrado na posicao ${i}`);
        encontrado = true;
        break;
    }4
}

if (!encontrado) {
    console.log('Não foi encontrado!');
}
