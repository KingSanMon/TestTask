/** @format */

const add = document.getElementById('add');
const reduce = document.getElementById('reduce');
const number = document.getElementById('number');
const send_pay__add = document.getElementById('send_pay__add');
const send_pay__reduce = document.getElementById('send_pay__reduce');
const send_pay__number = document.getElementById('send_pay__number');
const counting__add = document.getElementById('counting__add');
const counting__reduce = document.getElementById('counting__reduce');
const counting__number = document.getElementById('counting__number');
let num = Number(number.textContent);

add.addEventListener('click', function () {
  num++;
  number.textContent = num;
});

reduce.addEventListener('click', function () {
  num <= 1 ? (num = 1) : num--;
  number.textContent = num;
});

send_pay__add.addEventListener('click', function () {
  num++;
  send_pay__number.textContent = num;
  total.textContent = resultNumber * num;
});

send_pay__reduce.addEventListener('click', function () {
  num <= 1 ? (num = 1) : num--;
  total.textContent = resultNumber * num;
  send_pay__number.textContent = num;
});

counting__add.addEventListener('click', function () {
  num++;
  counting__number.textContent = num;
  total_send.textContent = resultNumber_send * num;
});

counting__reduce.addEventListener('click', function () {
  num <= 1 ? (num = 1) : num--;
  total_send.textContent = resultNumber_send * num;
  counting__number.textContent = num;
});
