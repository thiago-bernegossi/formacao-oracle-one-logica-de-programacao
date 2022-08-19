// Este código-fonte segue a definição completa dos padrões de codificação do Google para a linguagem de programação JavaScript.

let filteredValue = document.querySelector('#filtered-value');

filteredValue.addEventListener('input', function() {
  let patients = document.querySelectorAll('.patient');

  if (this.value.length > 0) {
    for (let counter = 0; counter < patients.length; counter++) {
      let patient = patients[counter];
      let tableData = patient.querySelector('.info-name');
      let name = tableData.textContent;

      if (name != this.value) {
        patient.classList.add('hideValues');
      } else {
        patient.classList.remove('hideValues');
      }
    }
  } else {
    for (let counter = 0; counter < patients.length; counter++) {
      let patient = patients[counter];
      patient.classList.remove('hideValues');
    }
  }
});
