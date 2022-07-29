// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let currentYear = 2022;

let firstUser = 'Donatello';
let birthOfTheFirstUser = 1986;
let ageOfFirstUser = currentYear - birthOfTheFirstUser;

let secondUser = 'Leonardo';
let birthOfTheSecondUser = 1987;
let ageOfSecondUser = currentYear - birthOfTheSecondUser;

let thirdUser = 'Michelangelo';
let birthOfTheThirdUser = 1988;
let ageOfThirdUser = currentYear - birthOfTheThirdUser;

let fourthUser = 'Raphael';
let birthOfTheFourthUser = 1989;
let ageOfFourthUser = currentYear - birthOfTheFourthUser;

let averageAgeOfUsers = (ageOfFirstUser + ageOfSecondUser + ageOfThirdUser + ageOfFourthUser) / 4;

let lineBreak = '<br>';

document.write(`${firstUser} tem ${ageOfFirstUser} anos de idade. ${lineBreak}`);
document.write(`${secondUser} tem ${ageOfSecondUser} anos de idade. ${lineBreak}`);
document.write(`${thirdUser} tem ${ageOfThirdUser} anos de idade. ${lineBreak}`);
document.write(`${fourthUser} tem ${ageOfFourthUser} anos de idade. ${lineBreak + lineBreak}`);

document.write(`A média das idades é ${Math.round(averageAgeOfUsers)} anos.`);
