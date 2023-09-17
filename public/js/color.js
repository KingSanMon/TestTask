const result = document.querySelector('#result');
const total = document.querySelector('#total');
let summ_payment;

document.querySelectorAll('.toggle-nominal').forEach((item) => {
  item.addEventListener('click', (event) => {

    const dataValue = item.getAttribute("data-nominal");
    const summ_payment = dataValue*num;
    console.log(summ_payment);
  
    if (document.querySelector('.toggle-nominal.active') != null) {
      document.querySelector('.toggle-nominal.active').classList.remove('active');
    }

    item.classList.add('active');

    result.textContent = dataValue;
    total.textContent = summ_payment;
  })
})