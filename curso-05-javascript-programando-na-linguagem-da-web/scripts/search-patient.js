// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

// Obs.: Este código-fonte contém a diretiva de execução em modo estrito.
'use strict';

let searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', function () {
  let request = new XMLHttpRequest();      
  request.open('get', 'https://api-pacientes.herokuapp.com/pacientes');

  request.addEventListener('load', function () {
    let requestError = document.querySelector('#request-error');

    if (request.status === 200) {
      requestError.classList.add('show-message');

      let response = request.responseText;
      let patients = JSON.parse(response);

      let newPatients = patients.map(function (patient) {
        patient.name = patient.nome;
        patient.weight = patient.peso;
        patient.height = patient.altura;
        patient.percentage = patient.gordura;
        patient.bmi = patient.imc;
        
        return patient;
      });

      newPatients.forEach(function (patient) {
        addPatient(patient);
      });
    } else {
      requestError.classList.remove('show-message');
    }
  });

  request.send();
});
