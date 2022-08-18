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
  if (checkWeight(patient.weight)) {
    return true;
  } else {
    return false;
  }
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

let addButton = document.querySelector('#add-button');
addButton.addEventListener('click', function (event) {
  event.preventDefault();
  
  let patientForm = document.querySelector('#patient-form');
  let patient = extractData(patientForm);
  let bridgeToData = insertData(patient);

  if (!checkData(patient)) {
    return;
  }

  let completeData = document.querySelector('#patient-table');
  completeData.appendChild(bridgeToData);

  patientForm.reset();
});
