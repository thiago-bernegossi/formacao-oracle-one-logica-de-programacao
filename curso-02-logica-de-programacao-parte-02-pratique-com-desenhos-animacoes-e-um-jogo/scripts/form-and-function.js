// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function drawSquare() {
  let screen = document.querySelector('canvas');
  let brush = screen.getContext('2d');

  brush.fillStyle = '#cc0000';
  brush.fillRect(0, 0, 50, 50);
  brush.fillStroke = '#000';
  brush.strokeRect(0, 0, 50, 50);
}

drawSquare();
