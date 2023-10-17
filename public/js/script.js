/** @format */

const add = document.getElementById('add');
const reduce = document.getElementById('reduce');
const number = document.getElementById('number');
const sendPayAdd = document.getElementById('send_pay__add');
const sendPayReduce = document.getElementById('send_pay__reduce');
const sendPayNumber = document.getElementById('send_pay__number');
const countingAdd = document.getElementById('counting__add');
const countingReduce = document.getElementById('counting__reduce');
const countingNumber = document.getElementById('counting__number');
let num = Number(number.textContent);

add.addEventListener('click', function () {
  num++;
  number.textContent = num;
});

reduce.addEventListener('click', function () {
  num <= 1 ? (num = 1) : num--;
  number.textContent = num;
});

sendPayAdd.addEventListener('click', function () {
  num++;
  sendPayNumber.textContent = num;
  total.textContent = resultNumber * num;
});

sendPayReduce.addEventListener('click', function () {
  num <= 1 ? (num = 1) : num--;
  total.textContent = resultNumber * num;
  sendPayNumber.textContent = num;
});

countingAdd.addEventListener('click', function () {
  num++;
  countingNumber.textContent = num;
  total_send.textContent = resultNumber_send * num;
});

countingReduce.addEventListener('click', function () {
  num <= 1 ? (num = 1) : num--;
  total_send.textContent = resultNumber_send * num;
  countingNumber.textContent = num;
});
