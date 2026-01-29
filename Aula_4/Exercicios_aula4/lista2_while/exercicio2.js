/*
Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores 
da área de Desenvolvimento e precisam de um sistema para analisar os dados. 
Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:

Idade (Número inteiro)
Identidade de Gênero (Número Inteiro): 
1 – Mulher Cis
2 – Homem Cis
3 – Não Binário
4 – Mulher Trans
5 – Homem Trans
6 – Outros
Pessoa Desenvolvedora (Número Inteiro):
1 – Backend
2 – Frontend
3 – Mobile
4 – FullStack

Após digitar o Tipo de Pessoa Desenvolvedora, o sistema deverá perguntar ao usuário se ele deseja continuar 
a leitura dos dados de um novo colaborador ou não (S/N). Caso seja pressionada a tecla N, mostre na tela:

O número de pessoas desenvolvedoras Backend
O número de Mulheres Cis e Trans desenvolvedoras Frontend
O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
O número de Não Binários desenvolvedores FullStack menores de 30 anos
O número total de pessoas que responderam à pesquisa
A média de idade das pessoas que responderam à pesquisa

*/

const leia = require("readline-sync");

let idade = 0;
let genero = 0;
let cargo = 0;
let operacao = "S";

let pessoas = 0; //total pessoas
let backend = 0; //devs backend
let mulheresFront = 0; //
let homensMob = 0; //>40 anos
let nBinarios = 0; //<30 anos

let idadeSoma = 0;
let media = 9;

while (operacao === "S") {
  console.log("----------------------------------------------------");
  console.log("---------------- Qual a sua idade? -----------------");
  console.log("----------------------------------------------------");

  idade = leia.questionInt("Digite sua idade: ", {
    limitMessage: "Por favor digite uma idade valida.",
  });

  console.log("----------------------------------------------------");
  console.log("------------ Como você se identifica? --------------");
  console.log("----------------------------------------------------");
  console.log("1 - Mulher Cis   | 2 - Homem Cis   | 3 - Não Binário");
  console.log("4 - Mulher Trans | 5 - Homem Trans | 6 - Outro");
  console.log("----------------------------------------------------");

  genero = leia.questionInt("Escolha uma opcao de 1 a 6: ", {
    limitMessage: "Por favor digite uma opcao valida.",
  });

  console.log("----------------------------------------------------");
  console.log("---------------- Qual a sua Stack? -----------------");
  console.log("----------------------------------------------------");
  console.log("1 - Backend | 2 - Frontend | 3 - Mobile | 4 - Fullstack");

  cargo = leia.questionInt("Escolha uma opcao de 1 a 4: ", {
    limitMessage: "Por favor digite uma opcao valida.",
  });

  if (cargo === 1) {
    backend++;
  } else if ((genero === 1 || genero === 4) && (cargo === 2)) {
    mulheresFront++;
  } else if ((genero === 2 || genero === 5) && (cargo === 3) && (idade > 40)) {
    homensMob++;
  } else if ((genero === 3) && (cargo === 4) && (idade < 30)) {
    nBinarios++;
  }

  pessoas++;
  idadeSoma += idade;

  console.log("----------------------------------------------------");
  operacao = leia.keyIn("Deseja continuar: S - Sim N - Nao: ").toUpperCase();
}

media = idadeSoma / pessoas;

console.log("----------------------------------------------------");
console.log("--------------------- Resultado --------------------");
console.log("----------------------------------------------------");
console.log(`Total de pessoas desenvolvedoras Backend: ${backend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresFront}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile com mais de 40 anos: ${homensMob}`);
console.log(`Total de Não Binários desenvolvedores Fullstack menores de 30 anos: ${nBinarios}`)
console.log(`O número total de pessoas que responderam à pesquisa: ${pessoas}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${media}`);
