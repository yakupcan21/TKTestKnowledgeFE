/*function fetchFlightParameters() {
    const ticketUrl = "http://localhost:8080/seeAllTicket";
    const flightListUrl = "http://localhost:8080/seeAllFlightList";
  
    fetch(ticketUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((ticketData) => {
        const tickets = ticketData;
        console.log(tickets);
  
        let elaccepted = document.querySelector(".accepted");
  
        let strTickets = "";
        tickets.forEach((ticket) => {
          strTickets += `<div class="ticket">
            <div>Bilet Numarası</div>
            <div class="ticket-no">
              <div>${ticket.ticket_no}</div>
            </div>
          </div>
          <div class="seat">
            <div>Koltuk Numarası</div>
            <div class="seat-no">
              <div>${ticket.seat_no}</div>
            </div>
          </div>`;
        });
  
        elaccepted.innerHTML = strTickets;
  
        fetch(flightListUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((flightListData) => {
            const flights = flightListData;
            console.log(flights);
            let elFlightListContainer = document.querySelector(
              ".flight-list-container"
            );
            let strFlights = "";
            flights.forEach((flight) => {
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
                  </div>`;
            });
  
            elFlightListContainer.innerHTML = strFlights;
          })
          .catch((error) => {
            console.error("Error fetching flight list data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching ticket data:", error);
      });
  }
  
  fetchFlightParameters();
  */

x