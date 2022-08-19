// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let patientsToRemove = document.querySelector('table');

patientsToRemove.addEventListener('dblclick', function(event) {
  let eventTarget = event.target;
  let eventTargetParent = eventTarget.parentNode;
  eventTargetParent.remove();
});
