// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function drawSquare(xAxis, yAxis, squareColor, lineColor) {
  let screen = document.querySelector('canvas');
  let brush = screen.getContext('2d');

  brush.fillStyle = squareColor;
  brush.fillRect(xAxis, yAxis, 50, 50);
  brush.fillStroke = lineColor;
  brush.strokeRect(xAxis, yAxis, 50, 50);
}

/**
 * let x = 0;
 * 
 * while (x < 600) {
 *  drawSquare(x, 0, '#cc0000', '000');
 *  drawSquare(x, 50, '#ffd700', '000');
 *  drawSquare(x, 100, '#008000', '000'); 
 *  x += 50;
 * }
 */

for (let x = 0; x < 600; x += 50) {
  drawSquare(x, 0, '#cc0000', '000');
  drawSquare(x, 50, '#ffd700', '000');
  drawSquare(x, 100, '#008000', '000');
}
