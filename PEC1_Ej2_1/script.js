const form = document.getElementById("form");
const username = document.getElementById("username");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not valid`);
  }
}

// Check age is valid
function checkAge(input) {
  if (input.value < 0 || input.value > 1000) {
    showError(input, "Age must be between 0 and 1000 years");
  }
}

// TODO: Validaciones en tiempo real
// TODO: Posicionamiento de la frase del password
// Check password is valid
function checkPassword(input) {
  const capitalLetter = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const numbers = /\d/;
  const signs = /[`~!@#$%^&*()_+\-=\{\}\|\[\]\\:";'<>?,./]/;

  if (
    capitalLetter.test(input.value) &&
    lowerCase.test(input.value) &&
    numbers.test(input.value) &&
    signs.test(input.value)
  ) {
    console.log(input.value.test(capitalLetter));
    showSuccess(input);
  } else {
    showError(
      input,
      'The password must have at least one uppercase, one lowercase, one number, and one special character (` ~ ! @ # $ % ^ & * ( ) _ + - = { } | [ ]  : " ; ' +
        "< > ? , . /)"
    );
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, age, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 8, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  checkAge(age);
  checkPassword(password);
});
