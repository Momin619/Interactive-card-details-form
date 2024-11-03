let name_form = document.getElementById("name");
let cardNumber = document.querySelector(".cardnumber");
let cardNumber_form = document.getElementById("number");
// console.log(name_form.);
let cardHolder_name = document.querySelector(".cardholder_name");
let btn = document.querySelector(".button");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let month_from = document.getElementById("form_month");
let year_form = document.getElementById("form_year");
let cvc = document.querySelector(".cvc-number");
let cvc_form = document.getElementById("cvc_form");

// Run validation when the window loads
window.addEventListener("load", () => {
  function validateInputFields() {
    let input_fields = document.querySelectorAll(".input-fields");
    input_fields.forEach((item) => {
      if (item.value.trim() === "") {
        item.style.border = "2px solid red"; // Apply red border if empty
      } else {
        item.style.border = "2px solid gray"; // Set to gray border if not empty
      }
    });
  }
  validateInputFields();

  // Attach event listeners to each input field
  let input_fields = document.querySelectorAll(".input-fields");
  input_fields.forEach((field) => {
    field.addEventListener("input", validateInputFields);
  });
});

btn.addEventListener("click", () => {
  if (name_form.value !== "") {
    // Check if name_form.value is NOT an empty string
    cardHolder_name.innerHTML = name_form.value; // Assign the value to cardHolder_name
  }
  if (cardNumber_form.value !== "") {
    // Check if name_form.value is NOT an empty string
    cardNumber.innerHTML = cardNumber_form.value; // Assign the value to cardHolder_name
  }
  if (month_from.value !== "") {
    // Check if name_form.value is NOT an empty string
    month.innerHTML = month_from.value; // Assign the value to cardHolder_name
  }
  if (year_form.value !== "") {
    // Check if name_form.value is NOT an empty string
    year.innerHTML = year_form.value; // Assign the value to cardHolder_name
  }
  if (cvc_form.value !== "") {
    // Check if name_form.value is NOT an empty string
    cvc.innerHTML = cvc_form.value; // Assign the value to cardHolder_name
  }
});

// console.log(cardHolder_name.innerHTML);
// js for input fields validation
