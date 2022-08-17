// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let companyName = document.querySelector('.secondary-title');
companyName.textContent = 'Lista de Pacientes';

// Obs.: Função anônima!
companyName.addEventListener('click', function () {
  window.alert(`O elemento 'h2' fora clicado!`);
});

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
  window.alert(`O elemento 'botão' fora clicado!`);
});
