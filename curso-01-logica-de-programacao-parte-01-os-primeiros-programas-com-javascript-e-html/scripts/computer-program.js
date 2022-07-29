// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function lineBreak() {
  document.write('<br>');
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

document.write(`${firstUser} tem ${ageOfTheFirstUser} anos de idade.`);
lineBreak();

document.write(`${secondUser} tem ${ageOfTheSecondUser} anos de idade.`);
lineBreak();

document.write(`${thirdUser} tem ${ageOfTheThirdUser} anos de idade.`);
lineBreak();

document.write(`${fourthUser} tem ${ageOfTheFourthUser} anos de idade.`);
