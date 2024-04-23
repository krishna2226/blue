// Include the registeredUsers array from users.js
// This assumes that users.js is included before signup.js in your HTML file
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;
    
    // Check if the username is already taken
    if (registeredUsers.some(user => user.username === newUsername)) {
      document.getElementById('signup-msg').innerText = 'Username already taken. Please choose a different one.';
    } else {
      // Add the new user to the array of registered users
      registeredUsers.push({ username: newUsername, password: newPassword });
      saveRegisteredUsers(); // Save registered users to Local Storage

      document.getElementById('signup-msg').innerText = 'Sign up successful! You can now login.';
    }
  });
  