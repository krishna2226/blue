document.addEventListener('DOMContentLoaded', function() {
  var editBtn = document.getElementById('edit-btn');
  var saveBtn = document.getElementById('save-btn');
  var logoutBtn = document.getElementById('logout-btn');
  var formFields = document.querySelectorAll('#profile-form input, #profile-form textarea, #profile-form select');

  // Check if user is logged in
  var isLoggedIn = localStorage.getItem('isLoggedIn');
  var L_username = localStorage.getItem('L_username');
  
  if (!isLoggedIn) {
      // If not logged in, redirect to login page
      alert('You need to log in to set up profile');
      window.location.href = 'login.html';
  } else {
      // Populate profile fields if user is logged in
      document.getElementById('username').innerText = L_username;
      var savedProfile = JSON.parse(localStorage.getItem(L_username + '_profile'));
      if (savedProfile) {
          document.getElementById('email').value = savedProfile.email || '';
          document.getElementById('age').value = savedProfile.age || '';
          document.getElementById('gender').value = savedProfile.gender || '';
          document.getElementById('BMI').value = savedProfile.BMI || '';
      }
  }

  // Enable input fields for editing
  editBtn.addEventListener('click', function() {
      formFields.forEach(function(field) {
          field.removeAttribute('disabled');
      });
      saveBtn.style.display = 'block';
      editBtn.style.display = 'none';
      document.getElementById('gender').removeAttribute('disabled');
  });

  // Save changes
  document.getElementById('profile-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      formFields.forEach(function(field) {
          field.setAttribute('disabled', 'disabled');
      });
      saveBtn.style.display = 'none';
      editBtn.style.display = 'block';
      var email = document.getElementById('email').value;
      var age = document.getElementById('age').value;
      var gender = document.getElementById('gender').value;
      var BMI = document.getElementById('BMI').value;
      var profileData = {
          email: email,
          age: age,
          gender: gender,
          BMI:BMI
      };

      // Store profile data with username as key
      localStorage.setItem(L_username + '_profile', JSON.stringify(profileData));

      alert('Changes saved successfully!');
  });

  // Logout
  logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('L_username');

      window.location.href = 'login.html';
  });
});
