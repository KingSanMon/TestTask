const choice = document.getElementById("btn-me");
const choiceGift = document.getElementById("btn");
const topBlock = document.getElementById("top");
const centerBlock = document.getElementById("center");
const send_pay = document.getElementById('send_pay');
const send_gift_btn = document.querySelector('.send-gift-btn');
let resultNumber;

const all_block = [topBlock, centerBlock];

function changeButton(element, text, className) {
  element.innerHTML = text;
  element.classList.add(className);
}

function deleteClass(element, text, className) {
  element.innerHTML = text;
  element.classList.remove(className);
}

send_gift_btn.addEventListener('click', () => {
  if (send_gift_btn.classList.contains('send-gift-btn')) {
    if (document.querySelector('.toggle-nominal.active') == null){

      alert("Выберите сначала сумму сертификата");
  
    } else {
      number2.textContent = num;

      total_send.textContent = dataValueContent * num;

      let resultNum_send = Number(result_send.textContent);

      resultNumber_send = resultNum_send;

      document.querySelector('.letter').style.display = 'flex';
      document.querySelector('.send_pay_tw').style.display = 'flex';
      document.querySelector('.btn-block').style.display = 'none';
      document.querySelector('.condition').style.display = 'none';
      document.querySelector('.work').style.display= 'none';
      document.querySelector('.certificate').style.display= 'none';
    }
  } else {
      
  }
})

document.getElementById('btn-back').addEventListener('click', () => {
  document.querySelector('.letter').style.display = 'none'
  document.querySelector('.send_pay_tw').style.display = 'none';
  document.querySelector('.btn-block').style.display = 'flex';
  document.querySelector('.condition').style.display = 'block';
  document.querySelector('.work').style.display= 'flex';
  document.querySelector('.certificate').style.display= 'flex';
  document.querySelector('.send_pay').style.width = '100%'
});

choice.addEventListener('click', () => {

  if (document.querySelector('.toggle-nominal.active') == null){

    alert("Выберите сначала сумму сертификата");

  } else {

    number1.textContent = num;

    total.textContent = dataValueContent * num;

    let resultNum = Number(result.textContent);

    resultNumber = resultNum;

    changeButton(choice, "Отправить и опратить", "send-btn");
    changeButton(choiceGift, "Вернуться назад", "back-btn");

    choiceGift.classList.remove('send-gift-btn');
  
    all_block.forEach((element) => {
    element.style.display = 'none';
  });
    send_pay.style.display = 'flex';

  }

});

choiceGift.addEventListener('click', (event) => {
  if (event.target.classList.contains("back-btn")) {

    number.textContent = num;

    deleteClass(choice, "Отправить себе", "send-btn");
    deleteClass(choiceGift, "Отправить в подарок", "back-btn");

    choiceGift.classList.add('send-gift-btn');

    all_block.forEach((element) => {
      element.style.display = 'flex';
    });
    send_pay.style.display = 'none';
  }
});