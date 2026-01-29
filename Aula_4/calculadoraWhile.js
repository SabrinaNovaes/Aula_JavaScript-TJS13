const leia = require("readline-sync");

let continua = 's';

while (continua === 's') {
  console.log("================================");
  console.log("       Calculadora Simples      ");
  console.log("================================");
  console.log("| + | - | x | / |");
  console.log("================================");

  let num1 = leia.questionFloat("Digite o primeiro numero: ", {
    limitMessage: "Por favor, digite um numero valido.",
  });

  let num2 = leia.questionFloat("Digite o segundo numero: ", {
    limitMessage: "Por favor, digite um numero valido.",
  });

  let operacao = leia.keyIn("Escolha a operacao: +, -, x, / : ", {
    limitMessage: "Por favor, digite uma operacao valida.",
  });

  switch (operacao) {
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case "x":
      console.log(`${num1} x ${num2} = ${num1 * num2}`);
      break;
    case "/":
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
      break;
    default:
      console.log("Operação invalida. Por favor, escolha uma operacao valida.");
  }

  continua = leia.keyIn("Deseja continuar? (s/n): ").toLowerCase();
}
