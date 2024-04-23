// Include the registeredUsers array from users.js
// This assumes that users.js is included before login.js in your HTML file


document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Check if the entered username and password match any registered user
  var authenticatedUser = registeredUsers.find(function(user) {
    return user.username === username && user.password === password;
  });
  
  // If a matching user is found, login successful
  if (authenticatedUser) {
    // Redirect to a new page or display a success message
    alert('Login successful!');
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('L_username', username);
    // Redirect to the profile page
    window.location.href = 'profile.html';
  } else {
    // Display error message
    document.getElementById('error-msg').innerText = 'Invalid username or password';
    
  }
});
