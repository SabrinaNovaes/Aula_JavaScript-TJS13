let matriz = [
    [1, 7, 9],
    [2, 6, 4],
    [3, 5, 8]
];

//console.table(matriz); //exibe a matriz em formato de tabela no console

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz.length; coluna++) {
        console.log(`Matriz[${linha}] [${coluna}] = ${matriz[linha][coluna]}`);
    }
}

console.log(matriz[1][2]); //acessa o elemento da segunda linha e terceira coluna da matriz