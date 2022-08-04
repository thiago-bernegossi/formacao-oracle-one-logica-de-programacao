// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let screen = document.querySelector('canvas');
let brush = screen.getContext('2d');

brush.fillStyle = '#665f68';
brush.fillRect(0, 0, 600, 400);

function drawCircle(event) {
  let xAxis = event.pageX - screen.offsetLeft;
  let yAxis = event.pageY - screen.offsetTop;

  brush.fillStyle = '#fff';
  brush.beginPath();
  brush.arc(xAxis, yAxis, 20, 0, 2 * 3.14);
  brush.fill();
  
  console.log(`x = ${xAxis}, y = ${yAxis}.`);
}

screen.onclick = drawCircle;
