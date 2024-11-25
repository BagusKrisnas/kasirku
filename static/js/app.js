const splash = document.querySelector('.spalash');

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 2000);
})



const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

function togglePassword() {
  const passwordField = document.getElementById('password');
  const toggleIcon = document.querySelector('.toggle-password');
  const fieldType = passwordField.getAttribute('type');

  if (fieldType === 'password') {
    passwordField.setAttribute('type', 'text');
    toggleIcon.src = 'eye-closed-icon.png'; // Image for hiding password
  } else {
    passwordField.setAttribute('type', 'password');
    toggleIcon.src = 'eye-icon.png'; // Image for showing password
  }
}
