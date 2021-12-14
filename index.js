const menuBar = document.querySelector('.menu-bar');
const btnClose = document.querySelector('.btn-close');
const btnMenu = document.querySelector('.btn-menu');

btnClose.addEventListener('click', () => {
  if (menuBar.style.display === 'flex') {
    menuBar.style.display = 'none';
  }
});

btnClose.addEventListener('click', () => {
  menuBar.classList.remove('hidden');
});

btnMenu.addEventListener('click', () => {
  if (menuBar.style.display === 'none') {
    menuBar.style.display = 'flex';
  } else {
    menuBar.style.display = 'none';
  }
});
