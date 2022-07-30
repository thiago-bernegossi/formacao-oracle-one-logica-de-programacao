// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function lineBreak() {
  document.write('<br>');
}

function displayText(parameter) {
  document.write(parameter);
  lineBreak();
} 

function calculateBmi(userHeight, userWeight) {
  return userWeight / (userHeight * userHeight);
}

let userName = window.prompt(`01-) Olá! Para iniciarmos, digite o seu nome:`); 
let userHeight = window.prompt(`02-) ${userName}, agora digite a sua altura:`); 
let userWeight = window.prompt(`03-) ${userName}, agora digite o seu peso:`);

displayText(`${userName}, o valor do seu Índice de Massa Corporal é ${Math.round(calculateBmi(userHeight, userWeight))}.`);
