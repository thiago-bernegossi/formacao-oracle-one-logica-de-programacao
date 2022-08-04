// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let screen = document.querySelector('canvas');
let brush = screen.getContext('2d');

brush.fillStyle = '#665f68';
brush.fillRect(0, 0, 600, 400);

function drawCircle(xAxis, yAxis, radius) {
  brush.fillStyle = '#1c42ba';
  brush.beginPath();
  brush.arc(xAxis, yAxis, radius, 0, 2 * Math.PI);
  brush.fill();
}

function cleanScreen() {
  brush.clearRect(0, 0, 600, 400);
}
