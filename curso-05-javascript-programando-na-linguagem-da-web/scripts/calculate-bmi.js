// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function checkWeight(weight) {
  if (weight > 0 && weight < 1000) {
    return true;
  } else {
    return false;
  }
}

function checkHeight(height) {
  if (height > 0 && height < 3.00) {
    return true;
  } else {
    return false;
  }
}

function calculateBmi(weight, height) {
  let bmi = weight / (height * height);
  return bmi.toFixed(2);
}

let patients = document.querySelectorAll('.patient');

for (let counter = 0; counter < patients.length; counter++) {
  let patient = patients[counter]; 

  let infoWeight = patient.querySelector('.info-weight');
  let weight = infoWeight.textContent;
  
  let infoHeight = patient.querySelector('.info-height');
  let height = infoHeight.textContent;
  
  let infoBmi = patient.querySelector('.info-bmi');
  
  let weightIsValid = checkWeight(weight);
  let heightIsValid = checkHeight(height);
  
  if (!weightIsValid) {
    weightIsValid = false;
    infoBmi.textContent = 'O valor do peso (kg) é inválido!';
    patient.classList.add('reportError');
  }
  
  if (!heightIsValid) {
    heightIsValid = false;
    infoBmi.textContent = 'O valor da altura (m) é inválido!';
    patient.classList.add('reportError');
  }
  
  if (weightIsValid && heightIsValid) {
    let bmi = calculateBmi(weight, height)
    infoBmi.textContent = bmi;
  }
}
