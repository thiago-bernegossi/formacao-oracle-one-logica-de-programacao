// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function lineBreak() {
  document.write('<br>');
}

function displayText(parameter) {
  document.write(parameter);
  lineBreak();
} 

let userName = window.prompt(`01-) Olá! Para iniciarmos, digite o seu nome:`); 
let totalWins = parseInt(window.prompt(`02-) ${userName}, agora digite o total de vitórias do time:`)); 
let totalDraws = parseInt(window.prompt(`03-) ${userName}, agora digite o total de empates do time:`));
let totalPoints = (totalWins * 3) + totalDraws;

if (totalPoints > 33) {
  displayText(`${userName}, o total de pontos do time neste ano é ${totalPoints}, sendo, portanto, maior que o total de pontos do ano passado.`);
}

if (totalPoints == 33) {
  displayText(`${userName}, o total de pontos do time neste ano é ${totalPoints}, sendo, portanto, igual ao total de pontos do ano passado.`);
}

if (totalPoints < 33) {
  displayText(`${userName}, o total de pontos do time neste ano é ${totalPoints}, sendo, portanto, menor que o total de pontos do ano passado.`);
}
