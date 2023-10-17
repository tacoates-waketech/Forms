// JavaScript code for form validation
// Prevent form from submitting
const form = document.getElementById('myForm');
form.addEventListener('submit', validateForm);
function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting


// Retrieve the input field value
const inputField = document.getElementById('inputField');
const inputValue = inputField.value.trim();


// Regular expression pattern for alphanumeric input
const alphanumericPattern = /^[a-zA-Z0-9]+$/;

// Check if the input value matches the pattern
if (alphanumericPattern.test(inputValue)) {
// Valid input: display confirmation and submit the form
  alert('Form submitted successfully!');
  resetForm();
} else {
// Invalid input: display error message
  const errorMessage = document.createElement('p');
  errorMessage.id = 'errorMessage';
  errorMessage.innerText = 'Input must be alphanumeric';
  errorMessage.style.color = 'red';
  form.appendChild(errorMessage);
}
}

function resetForm() {
  form.reset();
}
