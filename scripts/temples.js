// ===== FOOTER DATES =====
const yearSpan = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// ===== HAMBURGER MENU =====
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation ul');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
});

