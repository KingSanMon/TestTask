const choice = document.getElementById("btn-me");
const choiceGift = document.getElementById("btn");
const topBlock = document.getElementById("top");
const centerBlock = document.getElementById("center");
const send_pay = document.getElementById('send_pay');
let resultNumber;

const all_block = [topBlock, centerBlock];

function changeButton(element, text, className) {
  element.innerHTML = text;
  element.classList.add(className);
}

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
  
    all_block.forEach((element) => {
    element.style.display = 'none';
  });
    send_pay.style.display = 'flex';

  }

});

choiceGift.addEventListener('click', (event) => {
  if (event.target.classList.contains("back-btn")) {

    number.textContent = num;

    changeButton(choice, "Отправить себе");
    changeButton(choiceGift, "Отправить в подарок");

    all_block.forEach((element) => {
      element.style.display = 'flex';
    });
    send_pay.style.display = 'none';
  }
});
