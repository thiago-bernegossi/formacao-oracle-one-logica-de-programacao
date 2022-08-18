// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function extractData(patientForm) {
  let patient = {
    name: patientForm.name.value,
    weight: patientForm.weight.value,
    height: patientForm.height.value,
    percentage: patientForm.percentage.value,
    bmi: calculateBmi(patientForm.weight.value, patientForm.height.value)
  }

  return patient;
}

let addButton = document.querySelector('#add-button');

// Obs.: Função anônima!
addButton.addEventListener('click', function (event) {
  event.preventDefault();
  
  let patientForm = document.querySelector('#patient-form');

  let patient = extractData(patientForm);
  console.log(patient);

  let name = patient.name.value;
  let weight = patient.weight.value;
  let height = patient.height.value;
  let percentage = patient.percentage.value;
  let bmi = calculateBmi(patientForm.weight.value, patientForm.height.value);

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

  let userBmi = document.createElement('td');
  userBmi.textContent = calculateBmi(weight, height);
  newPatient.appendChild(userBmi);

  let completeData = document.querySelector('#patient-table');
  completeData.appendChild(newPatient);
});
