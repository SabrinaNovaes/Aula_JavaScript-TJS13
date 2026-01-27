let numero1 = "1";
let numero2 = 1;
let numero3 = 3;

console.log(`Comparação igual: ${numero1 == numero2}`); //true, compara apenas o valor

console.log(`Comparação estritamente igual: ${numero1 === numero2}`); //false, compara valor e tipo

if (numero2 < numero3) {
    console.log("O valor da variável número 2 é menor que o da variável número 3");
}