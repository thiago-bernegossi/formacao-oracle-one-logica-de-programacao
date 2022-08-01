// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function lineBreak() {
  document.write('<br>');
}

function displayText(parameter) {
  document.write(parameter);
  lineBreak();
} 

for (line = 1; line <= 10; line++) {  
  for (column = 1; column <= line; column++) {
    document.write(`*`);
  }
    
  lineBreak();
}
