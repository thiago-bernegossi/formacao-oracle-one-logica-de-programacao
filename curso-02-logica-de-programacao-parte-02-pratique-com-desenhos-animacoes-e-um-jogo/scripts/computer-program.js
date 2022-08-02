// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let screen = document.querySelector('canvas');
let brush = screen.getContext('2d');

brush.fillStyle = '#d3d3d3';
brush.fillRect(0, 0, 600, 400);

brush.fillStyle = '#000080';
brush.fillRect(0, 0, 200, 400);

brush.fillStyle = '#cc0000';
brush.fillRect(400, 0, 400, 400);
