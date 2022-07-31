// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function lineBreak() {
  document.write('<br>');
}

function displayText(parameter) {
  document.write(parameter);
  lineBreak();
} 

let randomNumber = Math.round(Math.random() * 10);
let userNumber = parseInt(window.prompt(`01-) Olá! Para iniciarmos, digite um número entre 0 a 10:`)); 

if (randomNumber == userNumber) {
  displayText(`02-) Parabéns, você acertou! O número sorteado foi o ${randomNumber}.`);
} else {
  displayText(`02-) Infelizmente, você errou! O número sorteado foi o ${randomNumber}.`);
}
