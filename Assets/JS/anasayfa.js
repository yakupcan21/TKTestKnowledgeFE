function fetchFlightParameters() {
  const url = 'http://localhost:8080/seeAllFlightList';

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const flights = data;
      console.log(flights)

      let elFlightListContainer = document.querySelector(".flight-list-container");

      let strFlights = "";
      flights.forEach(flight => {

        strFlights += `<div class="flight">
          <div class="departure">
            <div>${flight.departure_airport}</div>
          </div>
          <div class="flight-no">
            <div>${flight.flight_no}</div>
          </div>
          <div class="arrival">
            <div>${flight.arrival_airport}</div>
          </div>

          <div class="time">
            <div>${flight.date}</div>
          </div>
          <div class="price">
            <div>${flight.price}</div>
          </div>
        </div>`;
      });

      elFlightListContainer.innerHTML = strFlights;
    })
    .catch(error => {
      console.error('Error fetching flight parameters:', error);
    });
}
function selectFlight(element) {
  const flights = document.querySelectorAll(".flight");
  flights.forEach((flight) => {
    flight.classList.remove("active");
  });
  element.classList.add("active");
}

function redirectToOdemePage() {
  const selectedFlight = document.querySelector(".flight.active");
  if (selectedFlight) {
    const flightNo = selectedFlight.dataset.flightNo;
    const departureAirport = selectedFlight.dataset.departureAirport;
    const arrivalAirport = selectedFlight.dataset.arrivalAirport;
    const date = selectedFlight.dataset.date;
    const price = selectedFlight.dataset.price;

    // Pass flight information to odeme.html using query parameters
    window.location.href = `odeme.html?flightNo=${flightNo}&departureAirport=${departureAirport}&arrivalAirport=${arrivalAirport}&date=${date}&price=${price}`;
  } else {
    alert("Please select a flight before proceeding to Ödeme Yap.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const flightItems = document.querySelectorAll(".flight");
  const odemeButton = document.querySelector(".submit");

  flightItems.forEach((flight) => {
    flight.addEventListener("click", function () {
      selectFlight(this);
    });
  });

  odemeButton.addEventListener("click", function () {
    redirectToOdemePage();
  });

  // Fetch flight parameters after the page is loaded
  fetchFlightParameters();
});

