const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const themeBtn = document.getElementById('themeBtn');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
