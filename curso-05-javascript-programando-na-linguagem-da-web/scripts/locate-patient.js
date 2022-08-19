// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let filteredValue = document.querySelector('#filtered-value');

filteredValue.addEventListener('input', function() {
  let patients = document.querySelectorAll('.patient');

  for (let counter = 0; counter < patients.length; counter++) {
    let patient = patients[counter];
    let value = patient.querySelector('.info-name');
    let name = value.textContent;
    console.log(name);
  }
});
