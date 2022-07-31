// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function lineBreak() {
  document.write('<br><br>');
}

function displayText(parameter) {
  document.write(parameter);
  lineBreak();
} 

let userYear = parseInt(window.prompt(`Olá! Para iniciarmos, digite um ano a partir de 1930:`)); 
let cupYear = 1930;

while (cupYear <= userYear) {
  displayText(`Em ${cupYear}, foi disputada a Copa do Mundo de Futebol.`);
  cupYear += 4;
}
