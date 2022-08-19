// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let patientsToRemove = document.querySelectorAll('.patient');
console.log(patientsToRemove);

patientsToRemove.forEach(function(patient) {
  patient.addEventListener('dblclick', function() {
    this.remove();
  });
});
