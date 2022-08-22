// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', function () {
  let request = new XMLHttpRequest();      
  request.open('get', 'https://api-pacientes.herokuapp.com/pacientes');

  request.addEventListener('load', function () {
    let response = request.responseText;
    let elements = JSON.parse(response);

    elements.forEach(function (patient) {
      addPatient(patient);
    });
  });

  request.send();
});
