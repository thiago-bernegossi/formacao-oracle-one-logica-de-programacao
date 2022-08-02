// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

function generateNumber() {
  return Math.round(Math.random() * 10);
}

function generatesMultipleNumbers(quantity) {
  let listOfNumbers = [];
  let number = 1;

  while (number <= quantity) {
    let randomNumber = generateNumber();

    if (randomNumber !== 0) {
      let uniqueNumber = false;

      for (position = 0; position < listOfNumbers.length; position++) {
        if (listOfNumbers[position] == randomNumber) {
          uniqueNumber = true;
          break;
        }
      }

      if (uniqueNumber == false) {
        listOfNumbers.push(randomNumber);
        number++;
      }
    }
  }

  return listOfNumbers;
}

let numbers = generatesMultipleNumbers(3);
let userNumber = document.querySelector('input');

function process() {
  let foundTheNumbers = false;

  for (let position = 0; position < numbers.length; position++) {
    if(userNumber.value == numbers[position]) {
      window.alert(`03-) Parabéns, você acertou! O número sorteado foi o ${numbers[position]}.`);
      foundTheNumbers = true;
      break;
    } 
  }

  if(foundTheNumbers == false) {
    window.alert(`03-) Infelizmente, você errou! O número sorteado não foi o ${userNumber.value}.`);
  }

  userNumber.value = '';
  userNumber.focus();
}

let sendButton = document.querySelector('button');
sendButton.onclick = process;
