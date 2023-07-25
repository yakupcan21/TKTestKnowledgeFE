// Function to fetch flight parameters from the database
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

      elFlightListContainer.innerHTML = strFlights

      // const departure_airport = flights.map(flight => flight.departure_airport);
      // const arrival_airport = flights.map(flight => flight.arrival_airport);
      // const date = flights.map(flight => flight.date);
      // const time = flights.map(flight => flight.time);
      // const price = flights.map(flight => flight.price);
      // const flight_no = flights.map(flight => flight.flight_no);

      // console.log('departure_airport:', departure_airport);
      // console.log('arrival_airport:', arrival_airport);
      // console.log('date:', date);
      // console.log('time:', time);
      // console.log('price:', price);
      // console.log('flight_no:', flight_no);

     
    })
    .catch(error => {
      console.error('Error fetching flight parameters:', error);
    });
}

 fetchFlightParameters();
