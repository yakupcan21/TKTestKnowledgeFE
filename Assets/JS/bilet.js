function fetchTicketData() {
  const url = 'http://localhost:8080/seeAllTicket'; /*düzelt*/

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const tickets = data;
      console.log(tickets)

      const elFlightDetails = document.querySelector(".flight");
      const elTicketNo = document.querySelector(".ticket-no");
      const elSeatNo = document.querySelector(".seat-no");

      if (tickets.length > 0) {
        const ticket = tickets[0];
        elFlightDetails.innerHTML = `
          <div class="departure">
            <div>${ticket.departure_airport}</div>
          </div>
          <div class="flight-no">
            <div>${ticket.flightList.flight_no}</div>
          </div>
          <div class="arrival">
            <div>${ticket.arrival_airport}</div>
          </div>
          <div class="time">
            <div>${ticket.date} ${ticket.time}</div>
          </div>
        `;
        elTicketNo.innerHTML = `<div>${ticket.ticket_no}</div>`;
        elSeatNo.innerHTML = `<div>${ticket.seat_no}</div>`;
      }
    })
    .catch(error => {
      console.error('Error fetching ticket data:', error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchTicketData();
});
