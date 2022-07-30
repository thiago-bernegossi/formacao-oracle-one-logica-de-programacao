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

displayText(`Após o cálculo, o valor do Índice de Massa Corporal é ${Math.round(bmiValue = calculateBmi(1.70, 70))}.`);
