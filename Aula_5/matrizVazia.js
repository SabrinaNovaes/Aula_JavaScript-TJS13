const leia = require('readline-sync');

//Definindo a matriz (linhas)
//let matriz = new Array(2); //cria uma matriz com 2 linhas

//Adicionando as linhas (colunas) 
//for (let i = 0; i < matriz.length; i++) {//
    matriz[i] = Array(3); //cria 3 colunas para cada linha
//}

//Entrada de dados na matriz pelo console
//for (let linha = 0; linha < matriz.length; linha++) {
//    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
//        matriz[linha][coluna] = leia.questionInt(`Matriz[${linha}][${coluna}] = `);
//    }
//}


//Metodo de criar o matriz com array usando arrow function 
let matrizInteiros = Array.from({ length: 2 }, () =>    
    Array.from({ length: 3 }, 
        () => leia.questionInt("Digite um numero: ")) );

console.table(matrizInteiros); //exibe a matriz em formato de tabela no console

 