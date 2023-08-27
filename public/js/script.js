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