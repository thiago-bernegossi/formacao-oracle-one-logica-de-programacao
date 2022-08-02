// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let screen = document.querySelector('canvas');
let brush = screen.getContext('2d');

brush.fillStyle = '#e6e6fa';
brush.fillRect(0, 0, 600, 400);

brush.fillStyle = '#0a75ad';
brush.fillRect(0, 0, 200, 400);

brush.fillStyle = '#2acaea';
brush.fillRect(400, 0, 400, 400);

brush.fillStyle = '#ccff00';
brush.beginPath();
brush.moveTo(200, 0);
brush.lineTo(300, 200);
brush.lineTo(400, 0);
brush.fill();

brush.fillStyle = '#ccff00';
brush.beginPath();
brush.moveTo(300, 200);
brush.lineTo(200, 400);
brush.lineTo(400, 400);
brush.fill();

brush.fillStyle = '#ff4040';
brush.beginPath();
brush.arc(300, 200, 50, 0, 2 * 3.14);
brush.fill();
