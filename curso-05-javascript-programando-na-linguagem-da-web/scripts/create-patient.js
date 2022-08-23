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

function checkData(patient) {
  let messages = [];

  if (patient.name.length === 0) messages.push('O valor do nome não está preenchido!');
  if (patient.weight.length === 0) messages.push('O valor do peso (kg) não está preenchido!');
  if (patient.height.length === 0) messages.push('O valor da altura (m) não está preenchido!');
  if (patient.percentage.length === 0) messages.push('O valor da gordura corporal (%) não está preenchido!');

  if (!checkWeight(patient.weight)) messages.push('O valor do peso (kg) é inválido!');
  if (!checkHeight(patient.height)) messages.push('O valor da altura (m) é inválido!');

  return messages;
}

function displaysTheErrorMessages(errorMessages) {
  let unorderedList = document.querySelector('#error-messages');
  unorderedList.innerHTML = '';
  
  errorMessages.forEach(function (error) {
    let listItem = document.createElement('li');
    listItem.textContent = error;
    unorderedList.appendChild(listItem);
  });
}

function addClass(value, className) {
  let element = document.createElement('td');  
  element.textContent = value;
  element.classList.add(className);  
  
  return element;
}

function insertData(patient) {
  let newPatient = document.createElement('tr');
  newPatient.classList.add('patient');

  newPatient.appendChild(addClass(patient.name, 'info-name'));
  newPatient.appendChild(addClass(patient.weight, 'info-weight'));
  newPatient.appendChild(addClass(patient.height, 'info-height'));
  newPatient.appendChild(addClass(patient.percentage, 'info-percentage'));
  newPatient.appendChild(addClass(patient.bmi, 'info-bmi'));
  
  return newPatient;
}

function addPatient(patient) {
  let bridgeToData = insertData(patient);

  let completeData = document.querySelector('#patient-table');
  completeData.appendChild(bridgeToData);
}

let addButton = document.querySelector('#add-button');
addButton.addEventListener('click', function (event) {
  event.preventDefault();
  
  let patientForm = document.querySelector('#patient-form');
  let patient = extractData(patientForm);

  let errors = checkData(patient);
  if (errors.length > 0) {
    displaysTheErrorMessages(errors);
    return;
  }

  addPatient(patient);
  
  patientForm.reset();

  let clearErrorMessages = document.querySelector('#error-messages');
  clearErrorMessages.innerHTML = '';
});
