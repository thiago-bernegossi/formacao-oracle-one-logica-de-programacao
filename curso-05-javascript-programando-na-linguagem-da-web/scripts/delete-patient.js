// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

// Obs.: Este código-fonte contém a diretiva de execução em modo estrito.
'use strict';

let patientsToRemove = document.querySelector('table');

patientsToRemove.addEventListener('dblclick', function (event) {
  event.target.parentNode.classList.add('fadeAction');

  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});
