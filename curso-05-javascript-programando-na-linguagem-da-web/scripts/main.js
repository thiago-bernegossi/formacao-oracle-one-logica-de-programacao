// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let companyName = (document.querySelector('.secondary-title'));
companyName.textContent = 'Lista de Pacientes';

let patient = document.querySelector('#first-patient');

let infoWeight = patient.querySelector('.info-weight');
let weight = infoWeight.textContent;

let infoHeight = patient.querySelector('.info-height');
let height = infoHeight.textContent;
