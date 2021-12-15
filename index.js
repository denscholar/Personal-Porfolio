const menuBar = document.querySelector('.menu-bar'); // mobile menu container
const btnClose = document.querySelector('.btn-close'); // button for mobile menu
const btnMenu = document.querySelector('.btn-menu'); // button for the desktop menu
const navLink = document.querySelectorAll('#mobile-menu-bar li .nav-link');
const tog = document.getElementsByClassName('toggle');
const togg = Array.from(tog); // convert the nodelist to an array
let popupMenu = document.createElement('div');

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

// togg.forEach((item, index) => {
//   console.log(index);
//   item.addEventListener('click', () => {
//     toggle.classList.toggle('active');
//   });
// });

// storing my data to local storage
// name
// description
// featured image
// technologies
// link to live version
// link to source

const projects = [
  {
    projectImage: 'images/work-screenshots/Bankist.PNG',
    projectName: 'Bankist App press',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'A beautiful website with a lot of different components and visual effects that require some pretty advanced DOM manipulation techniques',
    links: [
      'https://bondok6.github.io/Bankist/',
      'https://github.com/Bondok6/Bankist',
    ],
  },
  {
    projectImage: 'images/work-screenshots/Bankist.PNG',
    projectName: 'Bankist App',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'A beautiful website with a lot of different components and visual effects that require some pretty advanced DOM manipulation techniques',
    links: [
      'https://bondok6.github.io/Bankist/',
      'https://github.com/Bondok6/Bankist',
    ],
  },
  {
    projectImage: 'images/work-screenshots/Bankist.PNG',
    projectName: 'Bankist App',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'A beautiful website with a lot of different components and visual effects that require some pretty advanced DOM manipulation techniques',
    links: [
      'https://bondok6.github.io/Bankist/',
      'https://github.com/Bondok6/Bankist',
    ],
  },
  {
    projectImage: 'images/work-screenshots/Bankist.PNG',
    projectName: 'Bankist App',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'A beautiful website with a lot of different components and visual effects that require some pretty advanced DOM manipulation techniques',
    links: [
      'https://bondok6.github.io/Bankist/',
      'https://github.com/Bondok6/Bankist',
    ],
  },
  {
    projectImage: 'images/work-screenshots/Bankist.PNG',
    projectName: 'Bankist App',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'A beautiful website with a lot of different components and visual effects that require some pretty advanced DOM manipulation techniques',
    links: [
      'https://bondok6.github.io/Bankist/',
      'https://github.com/Bondok6/Bankist',
    ],
  },
  {
    projectImage: 'images/work-screenshots/Bankist.PNG',
    projectName: 'Bankist App',
    technologies: ['javaScript', 'Css', 'Html'],
    description:
      'A beautiful website with a lot of different components and visual effects that require some pretty advanced DOM manipulation techniques',
    links: [
      'https://bondok6.github.io/Bankist/',
      'https://github.com/Bondok6/Bankist',
    ],
  },
];

function callPop(index) {
  const popUp = `<div class="popup toggle" id="popup-1">
  <div class="overlay"></div>
  <div class="content">
    <div class="close-btn">&times;</div>
    <img src="./images/bg.svg" alt="close-btn" />
    <div class="pop-container">
      <div class="pop-item">
        <h2>${projects[index].projectName}</h2>
        <ul>
          <li>${projects[index].technologies[0]}</li>
          <li>${projects[index].technologies[1]}</li>
          <li>${projects[index].technologies[2]}</li>
        </ul>
        <p>
        ${projects[index].description}
        </p>
      </div>
      <div class="pop-item btn-popup">
        <a href=${projects[index].links[0]} type="button"
          >See Live<img src="./images/see-live.svg" alt="see-live-icon"
        /></a>
        <a href=${projects[index].links[1]} type="button"
          >See Demo<img src="./images/git-img.svg" alt="git icon"
        /></a>
      </div>
    </div>
  </div>
</div>`;
  return popUp;
}

// popup logic
// eslint-disable-next-line no-plusplus
for (let i = 0; i < togg.length; i++) {
  togg[i].addEventListener('click', () => {
    popupMenu.innerHTML = callPop(i);
    document.body.appendChild(popupMenu);
    const toggle = document.getElementById('popup-1');
    console.log(toggle);
    toggle.classList.toggle('active');
  });
}
