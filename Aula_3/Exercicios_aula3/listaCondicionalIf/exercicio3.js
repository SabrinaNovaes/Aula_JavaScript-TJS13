/*
Para doar sangue é necessário ter entre 18 e 69 anos. 
Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. 
Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador 
e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, 
mostre na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo:
*/

/*
Entrada:
Digite o Nome do doador: João da Silva
Digite a Idade do doador: 62
Primeira doação de sangue? true

Digite o Nome do doador: Maria dos Anjos
Digite a Idade do doador: 50
Primeira doação de sangue? true

Digite o Nome do doador: Fábio Camões
Digite a Idade do doador: 14
Primeira doação de sangue? false

Digite o Nome do doador: Pedro Souza
Digite a Idade do doador: 68
Primeira doação de sangue? false

Saída:
João da Silva não está apto para doar sangue

Maria dos Anjos está apta para doar sangue!

Fábio Camões não está apto para doar sangue!

Pedro Souza está apto para doar sangue!
*/

const leia = require('readline-sync');

console.log('-----------------------------------------');
console.log('--- Cadastro de Doador de Sangue ---');
console.log('-----------------------------------------');
console.log('Por favor, responda as perguntas abaixo:');
console.log('-----------------------------------------');

let nome = leia.question('Digite o Nome do doador: ');

let idade = leia.questionInt('Digite a Idade do doador: ',
    {limitMessage: 'Por favor, digite uma idade válida.'});

let sexo = leia.keyIn('Digite o Sexo do doador (M/F): ',
    {limitMessage: 'Por favor, digite uma opção válida.'}).toUpperCase();
    
let primeiraDoacao = leia.keyIn('Primeira doação de sangue? responda com (S) - Sim ou (N) - Não. ',
    {limitMessage: 'Por favor, responda com (S) - Sim ou (N) - Não.'}).toLowerCase();

sexo === 'M' ? sexo = 'apto' : sexo = 'apta';
primeiraDoacao === 's' ? primeiraDoacao = true : primeiraDoacao = false;

if (idade >= 19 && idade <= 59) {
    console.log(`${nome} está ${sexo} para doar sangue!`);
} else if (idade >= 60 && idade <= 69 && primeiraDoacao === false) {
    console.log(`${nome} está ${sexo} para doar sangue!`);
} else {
    console.log(`${nome} não está ${sexo} para doar sangue`);
}