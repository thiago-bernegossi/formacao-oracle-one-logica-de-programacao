// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let companyName = (document.querySelector('.secondary-title'));
companyName.textContent = 'Lista de Pacientes';

let patient = document.querySelector('#first-patient');

let infoWeight = patient.querySelector('.info-weight');
let weight = infoWeight.textContent;

let infoHeight = patient.querySelector('.info-height');
let height = infoHeight.textContent;

let infoBmi = patient.querySelector('.info-bmi');

let weightIsValid = true;
let heightIsValid = true;

if (weight <= 0 || weight >= 1000) {
  weightIsValid = false;
  infoBmi.textContent = `O valor do peso é inválido!`;
}

if (height <= 0 || height >= 3.00) {
  heightIsValid = false;
  infoBmi.textContent = `O valor da altura é inválido!`;
}

if (weightIsValid === true && heightIsValid === true) {
  let bmi = weight / (height * height);
  infoBmi.textContent = Math.round(bmi);
}
