// Get the form, email, message, and submit button elements
const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit-btn');

// Function to check if both email and message fields are filled
function checkFormValidity() {
  if (emailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', true);
  }
}

// Listen for input events on email and message fields
emailInput.addEventListener('input', checkFormValidity);
messageInput.addEventListener('input', checkFormValidity);
// Function to handle form submission
function submitForm(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Replace 'nextpage.html' with the URL of the page you want to redirect to
  const nextPageURL = 'thankyou.html';
  window.location.href = nextPageURL; // Redirect to the next page
}
