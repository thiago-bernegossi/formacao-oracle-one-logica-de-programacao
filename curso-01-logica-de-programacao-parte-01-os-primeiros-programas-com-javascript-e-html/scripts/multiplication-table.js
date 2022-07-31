// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function lineBreak() {
  document.write('<br><br>');
}

function displayText(parameter) {
  document.write(parameter);
  lineBreak();
} 

let firstFactor = parseInt(window.prompt(`Olá! Para iniciarmos, digite um número entre 0 a 10:`)); 

for (let secondFactor = 0; secondFactor <= 10; secondFactor++) {
  displayText(`${firstFactor} x ${secondFactor} = ${firstFactor * secondFactor}`);
}
