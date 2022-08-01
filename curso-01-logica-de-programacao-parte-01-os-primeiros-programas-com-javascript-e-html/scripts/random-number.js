// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function lineBreak() {
  document.write('<br>');
}

function displayText(parameter) {
  document.write(parameter);
  lineBreak();
} 

let randomNumber = Math.round(Math.random() * 10);
let increment = 1;

while (increment <= 3) {
  let userNumber = parseInt(window.prompt(`Olá! Para iniciarmos, digite um número entre 0 a 10:`)); 

  if (randomNumber == userNumber) {
    displayText(`Parabéns, você acertou! O número sorteado foi o ${randomNumber}.`);
    break;
  } else {
    displayText(`Infelizmente, você errou! O número sorteado não foi o ${userNumber}.`);
  }

  increment++;
}
