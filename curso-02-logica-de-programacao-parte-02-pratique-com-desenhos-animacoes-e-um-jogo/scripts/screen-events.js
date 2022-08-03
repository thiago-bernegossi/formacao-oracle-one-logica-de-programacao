// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let screen = document.querySelector('canvas');
let brush = screen.getContext('2d');

brush.fillStyle = '#e6e6fa';
brush.fillRect(0, 0, 600, 400);

function displayAlert() {
  window.alert('Você clicou!');
}

screen.onclick = displayAlert;
