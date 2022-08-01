// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let randomNumber = Math.round(Math.random() * 10);
let userNumber = document.querySelector('input');

function process() {
  if(userNumber.value == randomNumber) {
    window.alert(`03-) Parabéns, você acertou! O número sorteado foi o ${randomNumber}.`);
  } else {
    window.alert(`03-) Infelizmente, você errou! O número sorteado não foi o ${userNumber.value}.`);
  }

  userNumber.value = '';
  userNumber.focus();
}

let sendButton = document.querySelector('button');
sendButton.onclick = process;
