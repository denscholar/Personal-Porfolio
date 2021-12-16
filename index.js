const menuBar = document.querySelector('.menu-bar'); // mobile menu container
const btnClose = document.querySelector('.btn-close'); // button for mobile menu
const btnMenu = document.querySelector('.btn-menu'); // button for the desktop menu
const navLink = document.querySelectorAll('#mobile-menu-bar li .nav-link');
const tog = document.getElementsByClassName('toggle');
const togg = Array.from(tog); // convert the nodelist to an array
const popupMenu = document.createElement('div'); // create an empty element

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

const projects = [
  {
    projectImage: './images/calculator-project.jpg',
    projectName: 'Web Calculator Project',
    technologies: ['javaScript', 'CSS', 'HTML', 'Ruby'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with',
    links: [
      'https://www.google.com/',
      'https://www.google.com/',
    ],
  },
  {
    projectImage: './images/bank-app.jpg',
    projectName: 'Mobile Banking Application',
    technologies: ['javaScript', 'HTML', 'Ruby on rails', 'CSS'],
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with.',
    links: [
      'https://www.google.com/',
      'https://www.google.com/',
    ],
  },
  {
    projectImage: './images/Blood-Bank-Management-System-Android-Project.webp',
    projectName: 'Blood Bank Mgt app',
    technologies: ['javaScript', 'HTML', 'Ruby on rails', 'CSS'],
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with.',
    links: [
      'https://www.google.com//',
      'https://www.google.com/',
    ],
  },
  {
    projectImage: './images/calculator-project.jpg',
    projectName: 'Web Calculator Project',
    technologies: ['javaScript', 'Css', 'Html', 'Ruby'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with.',
    links: [
      'https://www.google.com/',
      'https://www.google.com/',
    ],
  },
  {
    projectImage: './images/bank-app.jpg',
    projectName: 'Mobile Banking Application',
    technologies: ['javaScript', 'HTML', 'Ruby on rails', 'CSS'],
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with.',
    links: [
      'https://www.google.com/',
      'https://www.google.com/',
    ],
  },
  {
    projectImage: './images/Blood-Bank-Management-System-Android-Project.webp',
    projectName: 'Blood Bank Mgt app',
    technologies: ['javaScript', 'HTML', 'Ruby on rails', 'CSS'],
    description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with.',
    links: [
      'https://www.google.com//',
      'https://www.google.com/',
    ],
  },
];

function callPop(index) {
  const popUp = `<div class="popup toggle" id="popup-1">
  <div class="overlay"></div>
  <div class="content">
  <button type="button" class="btn-close-details">
  <img src="./images/Icon-Cancel.svg" alt="cancel icon">
</button>
    <img src="${projects[index].projectImage}" />
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
      <div class="card-button-mobile pop-item btn-popup">
                <a href=${projects[index].links[0]} class="btn-card-details-mobile" >See Live <i class="fas fa-external-link-alt"></i></a>
              <a href=${projects[index].links[1]} class="btn-card-details-mobile">See Source<i class="fab fa-github"></i></a>
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
    toggle.classList.toggle('active');
    const cancelIcon = document.querySelector('.btn-close-details');
    cancelIcon.addEventListener('click', () => {
      toggle.classList.toggle('active');
    });
  });
}
