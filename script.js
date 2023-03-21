const submit_button = document.querySelector("#submit-button");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#number");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
const firstError = document.querySelector("#first-name-error");
const lastError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const phoneError = document.querySelector("#number-error");
const passwordError = document.querySelector("#password-error");
const confirmError = document.querySelector("#confirm-error");
submit_button.addEventListener("click", () => {
  if (firstName.value == "") {
    firstError.textContent = "Please provide first name";
  }
  else {
    firstError.textContent = "";
  }
  if (lastName.value == "") {
    lastError.textContent = "Please provide last name";
  }
  else {
    lastError.textContent = "";
  }
  if (email.value == "") {
    emailError.textContent = "Please provide email";
  }
  else {
    emailError.textContent = "";
  }
  if (phoneNumber.value == "") {
    phoneError.textContent = "Please provide phone number";
  }
  else {
    phoneError.textContent = "";
  }
  if (password.value == "") {
    passwordError.textContent = "Please provide password";
  }
  else {
    passwordError.textContent = "";
  }
  if (confirm_password.value == "") {
    confirmError.textContent = "Please provide password";
  }
  else {
    confirmError.textContent = "";
  }
  console.log(firstError.value)
  if (
    firstError.value == undefined &&
    lastError.value == undefined &&
    emailError.value == undefined &&
    phoneError.value == undefined &&
    passwordError.value == undefined &&
    confirmError.value == undefined
  ) {
    document.querySelector("#success").textContent =
      "Account successfully created!!!";
    clearValue();
  }
});
firstName.addEventListener("input", () => {
  if (firstName.value === "") {
    firstError.textContent = "Please provide first name";
  } else {
    firstError.textContent = "";
  }
});
lastName.addEventListener("input", () => {
  if (lastName.value === "") {
    lastError.textContent = "Please provide last name";
  } else {
    lastError.textContent = "";
  }
});
email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    emailError.textContent =
      "Please enter in a valid Email. ex(johnSmith@email.com)";
  } else {
    emailError.textContent = "";
  }
});

phoneNumber.addEventListener("input", () => {
  if (phoneNumber.validity.patternMismatch) {
    phoneError.textContent = "Please enter in a 10 digit phone number";
  } else {
    phoneError.textContent = "";
  }
});
password.addEventListener("input", () => {
  if (password.validity.patternMismatch) {
    passwordError.textContent = "Password not good";
  } else {
    passwordError.textContent = "";
  }
});
confirm_password.addEventListener("input", () => {
  if (confirm_password.value !== password.value) {
    confirmError.textContent = "Password not matches";
  } else {
    confirmError.textContent = "";
  }
});
 function clearValue(){
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phoneNumber.value = "";
    password.value = "";
    confirm_password.value = "";
 }