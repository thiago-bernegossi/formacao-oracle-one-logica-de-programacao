// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function lineBreak() {
  document.write('<br>');
}

function displayText(parameter) {
  document.write(parameter);
  lineBreak();
} 

let currentYear = 2022;

let firstUser = 'Donatello';
let ageOfTheFirstUser = currentYear - 1986;

let secondUser = 'Leonardo';
let ageOfTheSecondUser = currentYear - 1987;

let thirdUser = 'Michelangelo';
let ageOfTheThirdUser = currentYear - 1988;

let fourthUser = 'Raphael';
let ageOfTheFourthUser = currentYear - 1989;

displayText(`${firstUser} tem ${ageOfTheFirstUser} anos de idade.`);
displayText(`${secondUser} tem ${ageOfTheSecondUser} anos de idade.`);
displayText(`${thirdUser} tem ${ageOfTheThirdUser} anos de idade.`);
displayText(`${fourthUser} tem ${ageOfTheFourthUser} anos de idade.`);
