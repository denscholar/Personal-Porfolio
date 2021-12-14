const menuBar = document.querySelector('.menu-bar'); // mobile menu container
const btnClose = document.querySelector('.btn-close'); // button for mobile menu
const btnMenu = document.querySelector('.btn-menu'); // button for the desktop menu
const navLink = document.querySelectorAll('#mobile-menu-bar li .nav-link');

btnClose.addEventListener('click', () => {
  if (menuBar.style.display === 'flex') {
    menuBar.style.display = 'none';
  }
});

btnMenu.addEventListener('click', () => {
  if (menuBar.style.display === 'none') {
    menuBar.style.display = 'flex';
  } else {
    menuBar.style.display = 'none';
  }
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    if (menuBar.style.display === 'flex') {
      menuBar.style.display = 'none';
    }
  });
});