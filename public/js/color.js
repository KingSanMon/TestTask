const result = document.querySelector("#result");
const result_send = document.querySelector("#result_send");
const total = document.querySelector("#total");
const total_send = document.querySelector("#total_send");
const inputNominal = document.getElementById('nominal-input');

document.querySelector("#nominal-input").addEventListener('change', (event) => {
  if (event.target && event.target.value) {
    console.log("заполнено")
  } else {
    console.log("Не заполнено")
  }
})

document.querySelectorAll(".toggle-nominal").forEach((item) => {
  item.addEventListener("click", (event) => {
    const dataValue = item.getAttribute("data-nominal");
    dataValueContent = dataValue;

    if (document.querySelector(".toggle-nominal.active") != null) {
      document
        .querySelector(".toggle-nominal.active")
        .classList.remove("active");
    }

    item.classList.add("active");

    result.textContent = dataValue;
    result_send.textContent = dataValue;
  });
});
