const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let num = Number(number.textContent);

plus.addEventListener("click", function(){
    num++;
    number.textContent = num;
});

minus.addEventListener("click", function(){
    num--;
    if (num < 1) {
        num = 1;
    }
    number.textContent = num;
});

const plus3 = document.getElementById("plus3");
const minus1 = document.getElementById("minus1");
const number2 = document.getElementById("number2");

plus3.addEventListener("click", function(){
    num++;
    number2.textContent = num;
});

minus1.addEventListener("click", function(){
    num--;
    if (num < 1) {
        num = 1;
    }
    number2.textContent = num;
});