// Function to fetch flight parameters from the database
function fetchFlightParameters() {
  const url = 'http://localhost:8080/seeAllFlightList';

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const flights = data;

      const departure_airport = flights.map(flight => flight.departure_airport);
      const arrival_airport = flights.map(flight => flight.arrival_airport);
      const date = flights.map(flight => flight.date);
      const time = flights.map(flight => flight.time);
      const price = flights.map(flight => flight.price);
      const flight_no = flights.map(flight => flight.flight_no);

      console.log('departure_airport:', departure_airport);
      console.log('arrival_airport:', arrival_airport);
      console.log('date:', date);
      console.log('time:', time);
      console.log('price:', price);
      console.log('flight_no:', flight_no);

      return {
        departure_airport,
        arrival_airport,
        date,
        time,
        price,
        flight_no,
      };
    })
    .catch(error => {
      console.error('Error fetching flight parameters:', error);
    });
}

  fetchFlightParameters();
