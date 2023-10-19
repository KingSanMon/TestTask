/** @format */

const choice = document.querySelector('#btn-me');
const choiceGift = document.querySelector('#btn');

const sendPayButton = document.querySelector('.send_pay');
const sendGiftButton = document.querySelector('.send-gift-btn');

const appeal = document.querySelector('#appeal');
const appealUser = document.querySelector('#appeal_user');

const congratulation = document.querySelector('#congratulation');
const congratulationUser = document.querySelector('#congratulation_user');

const blockButtons = document.querySelectorAll('.about__buttons, .condition, .work, .certificate');
const certificateAndWork = document.querySelectorAll('.about__toggle-nominal, .about__quantity-input');
const blockDisplayChange = document.querySelectorAll('.letter, .send_pay_tw');

let resultNumber;

function changeButton(element, text, className) {
  element.innerHTML = text;
  element.classList.add(className);
}

function deleteClass(element, text, className) {
  element.innerHTML = text;
  element.classList.remove(className);
}

appeal.addEventListener('keyup', event => {
  appealUser.textContent = event.target.value;
});

congratulation.addEventListener('keyup', event => {
  congratulationUser.textContent = event.target.value;
});

// вместо стайл дисплей сделать по классам все

document.getElementById('btn-back').addEventListener('click', () => {
  blockDisplayChange.forEach(element => {
    element.classList.remove('display-flex');  
  });

  blockButtons.forEach(element => {
    element.classList.remove('display-none');
  });
});

choice.addEventListener('click', () => {
  if ((inputNominal.value === '') & (document.querySelector('.toggle-nominal.active') === null)) {
    alert('Нужно что нибудь ввести');
  } else {

    let resultNum = Number(result.textContent);

    changeButton(choice, 'Отправить и опратить', 'send-btn');
    changeButton(choiceGift, 'Вернуться назад', 'back-btn');

    sendPayNumber.textContent = num;
    total.textContent = dataValueContent * num;

    resultNumber = resultNum;
    choiceGift.classList.remove('send-gift-btn');

    certificateAndWork.forEach(element => {
      element.classList.add('display-none');
    });
    sendPayButton.classList.add('display-flex');
  }
});

sendGiftButton.addEventListener('click', () => {
  if ((inputNominal.value === '') & (document.querySelector('.toggle-nominal.active') === null)) {
    return;
  } else if (sendGiftButton.classList.contains('send-gift-btn')) {
    countingNumber.textContent = num;
    total_send.textContent = dataValueContent * num;

    let resultNum_send = Number(result_send.textContent);
    resultNumber_send = resultNum_send;

    blockDisplayChange.forEach(element => {
      element.classList.add('display-flex')
    });

    blockButtons.forEach(element => {
      element.classList.add('display-none');
    });
  }
});

choiceGift.addEventListener('click', event => {
  if ((inputNominal.value === '') & (document.querySelector('.toggle-nominal.active') === null)) {
    alert('Нужно заполнить хоть какое то поле');
  } else if (event.target.classList.contains('back-btn')) {
    number.textContent = num;

    deleteClass(choice, 'Отправить себе', 'send-btn');
    deleteClass(choiceGift, 'Отправить в подарок', 'back-btn');

    choiceGift.classList.add('send-gift-btn');

    certificateAndWork.forEach(element => {
      element.classList.remove('display-none');
    });
    sendPayButton.classList.remove('display-flex');
  }
});
