document.addEventListener('DOMContentLoaded', function() {
    var editBtn = document.getElementById('edit-btn');
    var saveBtn = document.getElementById('save-btn');
    var logoutBtn = document.getElementById('logout-btn');
    var formFields = document.querySelectorAll('#profile-form input, #profile-form textarea');
  
    // Check if user is logged in
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    var L_username=localStorage.getItem('L_username');
  
    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      alert('you need to log in to set up profile');
      window.location.href = 'login.html';
    } 
        
    document.getElementById('username').innerText=L_username;
    
  
    // Enable input fields for editing
    editBtn.addEventListener('click', function() {
      formFields.forEach(function(field) {
        field.removeAttribute('disabled');
      });
      saveBtn.style.display = 'block';
      editBtn.style.display = 'none';
    });
  
    // Save changes
    document.getElementById('profile-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      formFields.forEach(function(field) {
        field.setAttribute('disabled', 'disabled');
      });
      saveBtn.style.display = 'none';
      editBtn.style.display = 'block';
      alert('Changes saved successfully!');
    });
  
    // Logout
    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('L_username');

      window.location.href = 'login.html';
    });
  });
  