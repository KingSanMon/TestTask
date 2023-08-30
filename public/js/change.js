$(document).on("click","#btn-me", function(){
    // Вызывает код при нажатии на кнопку отправить себе

    $("#top").css("display", "none");

    $("#nominal-input").replaceWith(function(){
        return $("<p id='onetown' />").text("1000");
    });

    $("#btn-me").text("Отправить и оплатить");
    $("#btn-me").attr("id", "btn-me-new");

    $("#btn").text("Вернуться назад");
    $("#btn").attr("id", "load-btn");

    $("#center").css("margin", "0");

    $("#btn-block").css("padding", "1.80rem 2.89rem 0rem");

    $("#center").after("<div class='new-center'><p>Итого: <span id='result'>1000</span></p><div class='email'><input type='email' placeholder='Введите ваш email'>");

    $(".bottom").css("margin-top", "1.44rem");

    var result = parseInt($("#result").text());
    var number = parseInt($("#number").text());

    function ymno(a, b){
        return(a*b);
    }

    $("#result").text(ymno(result, number));

    $("#plus").click(function(){
        var newNumber = ++number;

        $("#result").text(ymno(result, newNumber))
    });

    $("#load-btn").click(function(){
        // Кнопка вернутся 

        $("#btn-me-new").attr("id", "btn-me");
        $("#load-btn").attr("id", "btn");
        $("#top").css("display", "flex");
        $("#btn-block").css("padding", "0");
        $("#center").css("margin", "2.58rem 0 2.59rem 0");

        $("#onetown").replaceWith(function(){
            return $("<input type='text' placeholder='Введите номинал' id='nominal-input'>");
        });
        
        $("#btn-me").text("Отправить себе");
        $("#btn").text("Отправить в подарок");

        $(".new-center").remove()
    });
});