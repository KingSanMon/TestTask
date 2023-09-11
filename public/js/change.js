const choice = document.getElementById("btn-me");
const choiceGift = document.getElementById("btn");

function changeButton(element, text, className) {
  element.innerHTML = text;
  element.classList.add(className);
}

choice.addEventListener('click', () => {
  changeButton(choice, "Отправить и опратить", "send-btn");
  changeButton(choiceGift, "Вернуться назад", "back-btn");
});

choiceGift.addEventListener('click', (event) => {
  if (event.target.classList.contains("back-btn")) {
    changeButton(choice, "Отправить себе");
    changeButton(choiceGift, "Отправить в подарок");
  }
});
