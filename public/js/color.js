const result = document.querySelector('#result');
const total = document.querySelector('#total');

let dataValueContent;

document.querySelectorAll('.toggle-nominal').forEach((item) => {
  item.addEventListener('click', (event) => {

    const dataValue = item.getAttribute("data-nominal");
    dataValueContent = dataValue;
    
    if (document.querySelector('.toggle-nominal.active') != null) {
      document.querySelector('.toggle-nominal.active').classList.remove('active');
    }

    item.classList.add('active');

    result.textContent = dataValue;
  })
})