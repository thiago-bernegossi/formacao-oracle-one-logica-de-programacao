// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let screen = document.querySelector('canvas');
let brush = screen.getContext('2d');

brush.fillStyle = '#fff';
brush.fillRect(0, 0, 600, 400);

function drawCircle(xAxis, yAxis, radius, color) {
  brush.fillStyle = color;
  brush.beginPath();
  brush.arc(xAxis, yAxis, radius, 0, 2 * Math.PI);
  brush.fill();
}

let radius = 10;

function drawTarget(xAxis, yAxis) {
  drawCircle(xAxis, yAxis, radius + 20, '#dc143c');
  drawCircle(xAxis, yAxis, radius + 10, '#fff');
  drawCircle(xAxis, yAxis, radius, '#dc143c');
}

function moveTarget(maximumValue) {
  return Math.floor(Math.random() * maximumValue);
}

function cleanScreen() {
  brush.clearRect(0, 0, 600, 400);
}

function refreshScreen() {
  cleanScreen();

  let xAxis = moveTarget(600);
  let yAxis = moveTarget(400);  
  drawTarget(xAxis, yAxis);
}

setInterval(refreshScreen, 1000);
