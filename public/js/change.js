let choice = document.getElementById("btn-me")
let choiceGift = document.getElementById("btn")


// Кнопка отправить себе
function changeButtonMe(text, className){
   choice.innerHTML = text;
   choice.classList.add(className)

}

function changeButtonGift(text, className){
    choiceGift.innerHTML = text;
    choiceGift.classList.add(className);
}

// при клике на отправить себе
choice.addEventListener('click', (event) => {

    // вызов функций на изменение кнопки
    changeButtonMe("Отправить и опратить", "send-btn");
    changeButtonGift("Вернуться назад", "back-btn");
});

choiceGift.addEventListener('click', (event) => {

    if (event.target.classList.contains("back-btn")) {
        changeButtonMe("Отправить себе");
        changeButtonGift("Отправить в подарок");
    }
});