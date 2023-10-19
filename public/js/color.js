/** @format */

const result = document.querySelector('#result');
const result_send = document.querySelector('#result_send');
const total = document.querySelector('#total');
const total_send = document.querySelector('#total_send');
const inputNominal = document.querySelector('.nominal-input');
const allToggleNominal = document.querySelectorAll('.toggle-nominal');

inputNominal.addEventListener('input', event => {
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
});

inputNominal.addEventListener('keyup', event => {
  if (event.target && event.target.value) {
    if (document.querySelector('.toggle-nominal.active') !== null) {
      document.querySelector('.toggle-nominal.active').classList.remove('active');
    }
    allToggleNominal.forEach(item => {
      item.classList.add('not-activ');
    });
    dataValueContent = event.target.value;
    result.textContent = dataValueContent;
    result_send.textContent = inputNominal.value;
  } else {
    allToggleNominal.forEach(item => {
      item.classList.remove('not-activ');
    });
  }
});

document.querySelectorAll('.toggle-nominal').forEach(item => {
  item.addEventListener('click', event => {
    if (inputNominal.value === '') {
      const dataValue = item.getAttribute('data-nominal');
      dataValueContent = dataValue;

      if (document.querySelector('.toggle-nominal.active') !== null) {
        document.querySelector('.toggle-nominal.active').classList.remove('active');
      }

      item.classList.add('active');

      result.textContent = dataValue;
      result_send.textContent = dataValue;
    }
  });
});
