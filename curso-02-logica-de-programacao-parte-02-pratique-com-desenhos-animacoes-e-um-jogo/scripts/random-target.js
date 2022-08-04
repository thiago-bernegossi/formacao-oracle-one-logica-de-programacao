// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let screen = document.querySelector('canvas');
let brush = screen.getContext('2d');

brush.fillStyle = '#fff';
brush.fillRect(0, 0, 600, 400);

let radius = 10;
let randomXAxis;
let randomYAxis;

function drawCircle(xAxis, yAxis, radius, color) {
  brush.fillStyle = color;
  brush.beginPath();
  brush.arc(xAxis, yAxis, radius, 0, 2 * Math.PI);
  brush.fill();
}

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

  randomXAxis = moveTarget(600);
  randomYAxis = moveTarget(400);
  drawTarget(randomXAxis, randomYAxis);
}

setInterval(refreshScreen, 1000);

function showMessage(event) {
  let xAxis = event.pageX - screen.offsetLeft;
  let yAxis = event.pageY - screen.offsetTop;

  if ((xAxis > randomXAxis - radius) &&
    (xAxis < randomXAxis + radius) &&
    (yAxis > randomYAxis - radius) &&
    (yAxis < randomYAxis + radius)) {
    window.alert(`Você acertou o alvo!`);
  }
}

screen.onclick = showMessage;
