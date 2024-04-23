// Retrieve registered users from Local Storage or initialize an empty array
var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

// Function to save registered users to Local Storage
function saveRegisteredUsers() {
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
}
