const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates and update the DOM
function calculate(event) {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  const loader = document.querySelector(".loader");

  // Validate positive Number
  if (amountEl_one.value < 0 || amountEl_two.value < 0) {
    const selectedId = document.getElementById(`${event.target.id}`);
    const selectedControl = selectedId.closest(".currency");
    selectedControl.querySelector(".error").classList.remove("hidden");
    return;
  } else if (event) {
    const selectedId = document.getElementById(`${event.target.id}`);
    const selectedControl = selectedId.closest(".currency");
    selectedControl.querySelector(".error").classList.add("hidden");
  } else {
    document.querySelector(".error").classList.add("hidden");
  }

  fetch(
    `https://v6.exchangerate-api.com/v6/5759c061bafab526b0435aa0/latest/${currency_one}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`There was an error ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const rate = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      loader.classList.add("loader-hidden");
    })
    .catch((err) => alert(`Something went wrong. ${err.message}`));
}

// Event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
