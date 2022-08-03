// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function drawSquare(xAxis, yAxis, squareColor, lineColor) {
  let screen = document.querySelector('canvas');
  let brush = screen.getContext('2d');

  brush.fillStyle = squareColor;
  brush.fillRect(xAxis, yAxis, 50, 50);
  brush.fillStroke = lineColor;
  brush.strokeRect(xAxis, yAxis, 50, 50);
}

drawSquare(0, 0, '#cc0000', '000');
drawSquare(0, 50, '#ffd700', '000');
drawSquare(0, 100, '#008000', '000');
