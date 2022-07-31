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
let totalBmi = Math.round(calculateBmi(userHeight, userWeight));

if (totalBmi < 18.5) {
  displayText(`${userName}, o valor do seu Índice de Massa Corporal é ${totalBmi} e a categoria é subpeso.`);
}

if (totalBmi >= 18.5 && totalBmi <= 24.9) {
  displayText(`${userName}, o valor do seu Índice de Massa Corporal é ${totalBmi} e a categoria é peso normal.`);
}

if (totalBmi >= 25 && totalBmi <= 29.9) {
  displayText(`${userName}, o valor do seu Índice de Massa Corporal é ${totalBmi} e a categoria é sobrepeso.`);
}

if (totalBmi >= 30) {
  displayText(`${userName}, o valor do seu Índice de Massa Corporal é ${totalBmi} e a categoria é obesidade.`);
}
