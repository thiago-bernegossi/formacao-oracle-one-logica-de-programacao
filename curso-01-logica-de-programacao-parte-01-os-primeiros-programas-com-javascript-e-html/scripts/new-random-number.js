// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let numbers = [1, 5, 10];
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
