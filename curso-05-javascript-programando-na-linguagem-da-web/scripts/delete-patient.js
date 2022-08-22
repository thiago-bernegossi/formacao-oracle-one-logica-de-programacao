// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let patientsToRemove = document.querySelector('table');

patientsToRemove.addEventListener('dblclick', function (event) {
  event.target.parentNode.classList.add('fadeAction');

  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});
