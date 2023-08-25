var block = $("<div>").addClass("new-center").text("Итого:");

$(".btn-me").click(function(){
    // Вызывает код при нажатии на кнопку отправить себе

    $("#top").css("display", "none");

    $("#nominal-input").replaceWith(function(){
        return $("<p />").text("1000");
    });

    $("#btn-me").text("Отправить и оплатить");

    $("#btn").text("Вернуться назад");

    $(".center").addClass("center-upd");

    $("#center").css("margin", "0");

    $("#btn-block").css("padding", "2.31rem 0rem 0rem 0rem");

    $(".center-upd").after(block);
});