function saveValues() {
  var national_id = document.getElementById('national_id').value; 
  var price = document.getElementById('price').value;
  var installment_amount = document.getElementById('installment_amount').value;
  var cardholder_name = document.getElementById('cardholder_name').value;
  var card_no = document.getElementById('card_no').value;
  var lastUseCard = document.getElementById('lastUseCard').value;
  var cvv = document.getElementById('cvv').value;

  if (
    national_id === '' ||
    price === '' ||
    installment_amount === '' ||
    cardholder_name === '' ||
    card_no === '' ||
    lastUseCard === '' ||
    cvv === ''
  ) {
    console.log("Lütfen bütün alanları doldurduğunuzdan emin olunuz.");
    return;
  }

  var data = {
    "national_id": national_id,
    "price": price, 
    "installment_amount": installment_amount,
    "cardholder_name": cardholder_name,
    "card_no": card_no,
    "lastUseCard": lastUseCard,
    "cvv": cvv
  };

  fetch("http://localhost:8080/createPassenger", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      console.log("Data saved successfully!");
      window.location.href = "bilet.html";
    } else {
      console.log("Error saving data:", response.status);
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
}
