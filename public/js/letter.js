$("#btn").click(function(){
    // сносим две секции
    $("#work").css("display", "none");
    $("#certificate").css("display", "none");

    // изменяем кнопки
    $("#btn-me").text("Отправить и оплатить");
    $("#btn").text("Вернуться назад");

    // добавляем новый блок
    $("#letter").css("display", "block");
});