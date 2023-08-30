$(document).on("click","#btn", function(){

    if ($(this).attr("id") === "btn"){
         // сносим две секции
        $("#work").css("display", "none");
        $("#certificate").css("display", "none");

        // изменяем кнопки
        $("#btn-me").text("Отправить и оплатить");
        $("#btn").text("Вернуться назад");

        // добавляем новый блок
        $("#letter").css("display", "block");
    }
});