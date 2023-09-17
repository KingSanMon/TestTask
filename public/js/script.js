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

const plus1 = document.getElementById("plus1");
const minus1 = document.getElementById("minus1");
const number1 = document.getElementById("number1");

plus1.addEventListener("click", function(){

    num++;
    number1.textContent = num;

    total.textContent = resultNumber * num;
});

minus1.addEventListener("click", function(){
    num--;
    if (num < 1) {
        num = 1;
    }
    total.textContent = resultNumber * num;

    number1.textContent = num;
});