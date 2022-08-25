// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

// Obs.: Este código-fonte contém a diretiva de execução em modo estrito.
'use strict';

let filteredValue = document.querySelector('#filtered-value');

filteredValue.addEventListener('input', function () {
  let patients = document.querySelectorAll('.patient');

  if (this.value.length > 0) {
    for (let counter = 0; counter < patients.length; counter++) {
      let patient = patients[counter];
      let tableData = patient.querySelector('.info-name');
      let name = tableData.textContent;
      let expression = new RegExp(this.value, 'i');
      
      if (!expression.test(name)) {
        patient.classList.add('hideValues');
      } else {
        patient.classList.remove('hideValues');
      }
    }
  } else {
    for (let counter = 0; counter < patients.length; counter++) {
      let patient = patients[counter];
      patient.classList.remove('hideValues');
    }
  }
});
