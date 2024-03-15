const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const newCurrency = document.getElementById("cur");
const movieSelect = document.getElementById("movie");
const currencySelect = document.getElementById("currency");
let currencyOne = document.getElementById("currency").value;

const films = [
  { title: "Avengers Endgame", price: "10", currency: "USD" },
  { title: "Joker", price: "12", currency: "USD" },
  { title: "Toy Story 4", price: "8", currency: "USD" },
  { title: "Lion King", price: "9", currency: "USD" },
];

populateUI();

let ticketPrice = +movieSelect.value;

// Save Selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  newCurrency.innerText = currencyOne;
}

//  Get data from local storage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Calculate Currency
function calculateCurrency(event) {
  if (event) {
    const currencyTwo = event.target.value;
    fetch(
      `https://v6.exchangerate-api.com/v6/5759c061bafab526b0435aa0/latest/${currencyOne}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`There was an error ${res.status}`);
        }
        return res.json();
      })

      .then((data) => {
        const rate = data.conversion_rates[currencyTwo];

        // To change Option films price and currency
        for (let i = 0; i < films.length; i++) {
          films[i].price = (films[i].price * rate).toFixed(2);
          films[i].currency = currencyTwo;
          movieSelect.options[
            i
          ].textContent = `${films[i].title} (${films[i].price} ${currencyTwo})`;
          movieSelect.options[i].value = films[i].price;
        }
        currencyOne = currencyTwo;
        ticketPrice = +movieSelect.value;
        updateSelectedCount();
      });
  }
}

// Event listeners
// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
  setMovieData(e.target.selectedIndex, e.target.value);
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Currency select event
currencySelect.addEventListener("change", calculateCurrency);

// Initial count and total set
updateSelectedCount();
calculateCurrency();
