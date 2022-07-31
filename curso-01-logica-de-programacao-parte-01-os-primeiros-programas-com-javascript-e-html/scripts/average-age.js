// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function lineBreak() {
  document.write('<br><br>');
}

function displayText(parameter) {
  document.write(parameter);
  lineBreak();
}

let totalFamilyMembers = parseInt(window.prompt(`01-) Olá! Para iniciarmos, digite a quantidade de familiares:`)); 
let increment = 1;
let totalAges = 0;

while (increment <= totalFamilyMembers) {
  let age = parseInt(window.prompt(`02-) Agora, digite a idade do familiar:`));
  totalAges += age;
  increment++;  
}

let averageAge = totalAges / totalFamilyMembers;
displayText(`03-) A média das idades dos familiares é de ${Math.round(averageAge)} anos.`);
