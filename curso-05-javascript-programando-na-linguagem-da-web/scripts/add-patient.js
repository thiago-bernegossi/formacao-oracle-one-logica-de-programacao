// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let addButton = document.querySelector('#add-button');

// Obs.: Função anônima!
addButton.addEventListener('click', function (event) {
  event.preventDefault();
  
  let patientForm = document.querySelector('#patient-form');

  let name = patientForm.name.value;
  let weight = patientForm.weight.value;
  let height = patientForm.height.value;
  let percentage = patientForm.percentage.value;

  let newPatient = document.createElement('tr');

  let userName = document.createElement('td');
  userName.textContent = name;
  newPatient.appendChild(userName);

  let userWeight = document.createElement('td');
  userWeight.textContent = weight;
  newPatient.appendChild(userWeight);

  let userHeight = document.createElement('td');
  userHeight.textContent = height;
  newPatient.appendChild(userHeight);

  let userPercentage = document.createElement('td');
  userPercentage.textContent = percentage;
  newPatient.appendChild(userPercentage);

  let completeData = document.querySelector('#patient-table');
  completeData.appendChild(newPatient);
});
