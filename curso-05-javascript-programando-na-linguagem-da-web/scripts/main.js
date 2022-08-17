// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let companyName = document.querySelector('.secondary-title');
companyName.textContent = 'Lista de Pacientes';

let patients = document.querySelectorAll('.patient');

for (let counter = 0; counter < patients.length; counter++) {
  let patient = patients[counter]; 

  let infoWeight = patient.querySelector('.info-weight');
  let weight = infoWeight.textContent;
  
  let infoHeight = patient.querySelector('.info-height');
  let height = infoHeight.textContent;
  
  let infoBmi = patient.querySelector('.info-bmi');
  
  let weightIsValid = true;
  let heightIsValid = true;
  
  if (weight <= 0 || weight >= 1000) {
    weightIsValid = false;
    infoBmi.textContent = `O valor do peso (kg) é inválido!`;
    patient.classList.add('reportError');
  }
  
  if (height <= 0 || height >= 3.00) {
    heightIsValid = false;
    infoBmi.textContent = `O valor da altura (m) é inválido!`;
    patient.classList.add('reportError');
  }
  
  if (weightIsValid === true && heightIsValid === true) {
    let bmi = weight / (height * height);
    infoBmi.textContent = bmi.toFixed(2);
  }
}

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
